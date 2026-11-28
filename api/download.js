const { waitUntil } = require("@vercel/functions");

const FASTSAVER_BASE = "https://api.fastsaver.io/v1";
const MAX_URL_LENGTH = 2048;

const ALLOWED_HOSTS = [
  "instagram.com", "facebook.com", "fb.com", "fb.watch",
  "tiktok.com", "vm.tiktok.com", "vt.tiktok.com",
  "pinterest.com", "pin.it", "x.com", "twitter.com",
  "youtube.com", "youtu.be", "rutube.ru", "rutube.com",
  "likee.video", "likee.com"
];

function isAllowedUrl(value) {
  try {
    const u = new URL(value);
    if (u.protocol !== "https:" || u.username || u.password) return false;
    const host = u.hostname.toLowerCase();
    return ALLOWED_HOSTS.some((d) => host === d || host.endsWith("." + d));
  } catch (_) {
    return false;
  }
}

function platformIsYouTube(value) {
  const h = new URL(value).hostname.toLowerCase();
  return h === "youtube.com" || h.endsWith(".youtube.com") || h === "youtu.be";
}

async function fastSaverFetch(url, format) {
  const key = process.env.FASTSAVER_API_KEY;
  if (!key) throw new Error("SERVICE_NOT_CONFIGURED");

  let response;
  if (platformIsYouTube(url)) {
    response = await fetch(FASTSAVER_BASE + "/youtube/download", {
      method: "POST",
      headers: {
        "X-Api-Key": key,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url, format: format || "720p" }),
      signal: AbortSignal.timeout(45000)
    });
  } else {
    response = await fetch(FASTSAVER_BASE + "/fetch?url=" + encodeURIComponent(url), {
      method: "GET",
      headers: { "X-Api-Key": key },
      signal: AbortSignal.timeout(20000)
    });
  }

  let data;
  try {
    data = await response.json();
  } catch (_) {
    throw new Error("PROVIDER_BAD_RESPONSE");
  }

  if (!response.ok || data.ok !== true) {
    const detail = String(data.detail || data.error || "");
    if (/credit|quota|insufficient/i.test(detail)) throw new Error("NO_CREDITS");
    if (response.status === 429) throw new Error("RATE_LIMIT");
    if (response.status === 401 || response.status === 403) throw new Error("PROVIDER_AUTH");
    throw new Error("LINK_UNAVAILABLE");
  }

  return data;
}

async function telegramCall(method, payload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) throw new Error("BOT_TOKEN_NOT_CONFIGURED");
  const response = await fetch("https://api.telegram.org/bot" + token + "/" + method, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(45000)
  });
  const data = await response.json().catch(() => null);
  if (!response.ok || !data || data.ok !== true) {
    throw new Error("TELEGRAM_SEND_FAILED");
  }
  return data;
}

async function sendSingle(chatId, item, caption) {
  const url = item.download_url;
  if (!url || typeof url !== "string" || !/^https:\/\//i.test(url)) {
    throw new Error("NO_MEDIA_URL");
  }
  const type = item.type === "image" ? "photo" : "video";
  const payload = { chat_id: chatId, [type]: url };
  if (caption) payload.caption = caption.slice(0, 900);
  if (type === "video") payload.supports_streaming = true;
  await telegramCall(type === "photo" ? "sendPhoto" : "sendVideo", payload);
}

async function sendAlbum(chatId, items, caption) {
  if (!Array.isArray(items) || items.length === 0) throw new Error("EMPTY_ALBUM");
  for (let i = 0; i < items.length; i += 10) {
    const batch = items.slice(i, i + 10);
    if (batch.length === 1) {
      await sendSingle(chatId, batch[0], i === 0 ? caption : "");
      continue;
    }
    const media = batch.map((item, index) => {
      if (!item.download_url || !/^https:\/\//i.test(item.download_url)) {
        throw new Error("NO_MEDIA_URL");
      }
      const type = item.type === "image" ? "photo" : "video";
      const entry = { type, media: item.download_url };
      if (i === 0 && index === 0 && caption) entry.caption = caption.slice(0, 900);
      return entry;
    });
    await telegramCall("sendMediaGroup", { chat_id: chatId, media });
  }
}

async function notifyAdmin(message) {
  const admin = process.env.ADMIN_CHAT_ID;
  if (!admin || !process.env.TELEGRAM_BOT_TOKEN) return;
  try {
    await telegramCall("sendMessage", {
      chat_id: admin,
      text: "⚠️ KAP Downloader backend\n" + message
    });
  } catch (_) {}
}

async function processDownload({ chatId, url, format }) {
  try {
    const result = await fastSaverFetch(url, format);
    const caption = "🎬 KAP Video Downloader\nSource: " + String(result.source || "supported platform") +
      "\nOnly save content you own or are authorized to use.";

    if (result.type === "album") {
      await sendAlbum(chatId, result.items, caption);
    } else if (result.type === "video" || result.type === "image") {
      await sendSingle(chatId, result, caption);
    } else {
      throw new Error("UNSUPPORTED_MEDIA_TYPE");
    }
  } catch (error) {
    const code = error && error.message ? error.message : "UNKNOWN";
    const userMessages = {
      SERVICE_NOT_CONFIGURED: "⚙️ Downloader service is not configured yet. Please contact the bot admin.",
      NO_CREDITS: "⚠️ FastSaver credits are exhausted. Please try again later.",
      RATE_LIMIT: "⏳ Too many requests. Please wait a minute and try again.",
      PROVIDER_AUTH: "⚠️ Downloader API authentication failed. The admin has been notified.",
      LINK_UNAVAILABLE: "❌ This link is unavailable, unsupported, private, or could not be processed.",
      PROVIDER_BAD_RESPONSE: "❌ The downloader service returned an invalid response.",
      TELEGRAM_SEND_FAILED: "❌ Telegram could not send this media. The file may be too large or unavailable.",
      NO_MEDIA_URL: "❌ The service did not return a usable media link.",
      EMPTY_ALBUM: "❌ No downloadable items were returned.",
      UNSUPPORTED_MEDIA_TYPE: "❌ This media type is not supported by the bot."
    };
    const msg = userMessages[code] || "❌ Download failed. Please try another public link.";
    try {
      await telegramCall("sendMessage", { chat_id: chatId, text: msg });
    } catch (_) {}
    await notifyAdmin("Download failed: " + code);
  }
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "METHOD_NOT_ALLOWED" });
  }

  const expected = process.env.BOT_SHARED_SECRET;
  const supplied = req.headers["x-bot-secret"];
  if (!expected || !supplied || supplied !== expected) {
    return res.status(401).json({ ok: false, error: "UNAUTHORIZED" });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const url = typeof body.url === "string" ? body.url.trim() : "";
  const chatId = body.chat_id;
  const format = typeof body.format === "string" ? body.format : "720p";

  if (!url || url.length > MAX_URL_LENGTH || !isAllowedUrl(url)) {
    return res.status(400).json({ ok: false, error: "INVALID_OR_UNSUPPORTED_URL" });
  }
  if (chatId === undefined || chatId === null || !/^-?\d+$/.test(String(chatId))) {
    return res.status(400).json({ ok: false, error: "INVALID_CHAT_ID" });
  }
  if (!/^(audio|144p|240p|360p|480p|720p|1080p|1440p|2160p)$/.test(format)) {
    return res.status(400).json({ ok: false, error: "INVALID_FORMAT" });
  }

  if (!process.env.FASTSAVER_API_KEY || !process.env.TELEGRAM_BOT_TOKEN) {
    return res.status(503).json({ ok: false, error: "SERVICE_NOT_CONFIGURED" });
  }

  waitUntil(processDownload({ chatId: String(chatId), url, format }));
  return res.status(202).json({ ok: true, accepted: true, message: "Download queued" });
};
