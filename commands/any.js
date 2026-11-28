/*CMD
  command: *
  help: Automatically detect supported video links
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/

var rawText = String(message || params || "").trim();
if (!rawText) { return; }

var match = rawText.match(/https?:\/\/[^\s]+/i);
if (!match) { return; }

var videoUrl = match[0].replace(/[),.!?]+$/, "");
var hostMatch = videoUrl.match(/^https:\/\/([^\/?#]+)/i);
if (!hostMatch) {
  Bot.sendMessage("❌ Please send a valid public HTTPS video link.");
  return;
}

var host = hostMatch[1].toLowerCase();
if (host.indexOf("@") !== -1) {
  Bot.sendMessage("❌ Links containing usernames or passwords are not allowed.");
  return;
}

var hostname = host.replace(/:[0-9]+$/, "");
function isDomain(domain) {
  return hostname === domain || hostname.slice(-(domain.length + 1)) === "." + domain;
}

var supported = [
  "facebook.com", "fb.com", "fb.watch", "instagram.com",
  "youtube.com", "youtu.be", "tiktok.com", "vm.tiktok.com",
  "vt.tiktok.com", "pinterest.com", "pin.it", "x.com",
  "twitter.com", "rutube.ru", "rutube.com", "likee.video", "likee.com"
];
var allowed = false;
for (var i = 0; i < supported.length; i++) {
  if (isDomain(supported[i])) { allowed = true; break; }
}
if (!allowed) {
  Bot.sendMessage("❌ This platform is not supported yet. Use /supported to see supported sources.");
  return;
}

if (!chat || !user) { return; }

var backendUrl = String(Bot.getProperty("BACKEND_URL") || "").trim();
var sharedSecret = String(Bot.getProperty("BACKEND_SHARED_SECRET") || "").trim();
if (!backendUrl || !sharedSecret) {
  Bot.sendMessage("⚙️ Downloader setup is incomplete. Please contact the bot admin.");
  return;
}
backendUrl = backendUrl.replace(/\/+$/, "");

HTTP.post({
  url: backendUrl + "/api/download",
  headers: {
    "Content-Type": "application/json",
    "X-Bot-Secret": sharedSecret
  },
  body: {
    url: videoUrl,
    chat_id: String(chat.chatid),
    user_id: String(user.telegramid || user.id || ""),
    format: "720p"
  },
  success: "/backend-accepted",
  error: "/backend-request-failed"
});

Bot.sendMessage("⏳ *Link received!*\n\nYour video is being processed. Please wait…");
