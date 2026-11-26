/*CMD
  command: *
  help: Automatically detect video links
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/

var rawText = String(message || "").trim();
if (!rawText) { return; }

// The master (*) command can also receive slash commands.
// Do not send the generic link prompt after /start or other commands.
if (rawText.charAt(0) === "/") {
  var commandText = rawText.split(/\s+/)[0].toLowerCase();
  if (commandText === "/download" || commandText === "/dl") {
    Bot.sendInlineKeyboard([
      { title: "🌐 Supported Sources", command: "/supported" },
      { title: "📊 Service Status", command: "/status" },
      { title: "🏠 Main Menu", command: "/menu" }
    ], "📥 *Send your video link directly*\n\nNo extra command is needed after this. Paste a public direct HTTPS .mp4 file link into this chat.\n\nFacebook/Instagram post links can be detected, but their media extraction is not available in this Bots.Business-only build yet.\n\n⚠️ Only save content you own or have permission to download.");
  }
  return;
}

// Ignore ordinary chat text without a URL; only react when a link is present.
var match = rawText.match(/https?:\/\/[^\s]+/i);
if (!match) { return; }

var videoUrl = match[0].replace(/[),.!?]+$/, "");
var lower = videoUrl.toLowerCase();

if (lower.indexOf("facebook.com") !== -1 || lower.indexOf("fb.watch") !== -1) {
  Bot.sendInlineKeyboard([
    { title: "🌐 Supported Sources", command: "/supported" },
    { title: "📊 Service Status", command: "/status" }
  ], "🔵 *Facebook link detected*\n\nThis Bots.Business-only version cannot extract a video from a Facebook post URL yet. Send a direct public .mp4 file link instead.\n\nOnly download content you own or have permission to save.");
  return;
}

if (lower.indexOf("instagram.com") !== -1) {
  Bot.sendInlineKeyboard([
    { title: "🌐 Supported Sources", command: "/supported" },
    { title: "📊 Service Status", command: "/status" }
  ], "🟣 *Instagram link detected*\n\nThis Bots.Business-only version cannot extract a video from an Instagram post/Reel URL yet. Send a direct public .mp4 file link instead.\n\nOnly download content you own or have permission to save.");
  return;
}

if (lower.indexOf("youtube.com") !== -1 || lower.indexOf("youtu.be") !== -1) {
  Bot.sendMessage("▶️ YouTube links are not supported in this version. Please send a direct public HTTPS .mp4 video URL.");
  return;
}

// Telegram can fetch an accessible direct MP4 URL. Do not pass arbitrary page URLs to sendVideo.
var hostMatch = videoUrl.match(/^https:\/\/([^\/?#]+)/i);
var pathOnly = videoUrl.split("?")[0].split("#")[0].toLowerCase();
if (!hostMatch || pathOnly.slice(-4) !== ".mp4") {
  Bot.sendMessage("❌ This is not a direct HTTPS MP4 link.\n\nSend a direct HTTPS URL ending in .mp4 that opens the actual video file, not a webpage.");
  return;
}

var host = hostMatch[1].toLowerCase();
if (host.indexOf("@") !== -1 || host === "localhost" || host.indexOf("localhost:") === 0 ||
    host.indexOf("127.") === 0 || host.indexOf("10.") === 0 ||
    host.indexOf("192.168.") === 0 || host.indexOf("169.254.") === 0 ||
    host.indexOf(".local") !== -1 || host.indexOf(".internal") !== -1 ||
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(host)) {
  Bot.sendMessage("❌ This video URL host is not allowed.");
  return;
}

if (!chat || !user) { return; }

Bot.sendMessage("⏳ Direct MP4 link detected. Asking Telegram to fetch the video now…");

Api.sendVideo({
  video: videoUrl,
  caption: "🎬 KAP Video Downloader\n\nDirect MP4 link send requested. Only save content you own or are authorized to use.",
  supports_streaming: true,
  on_result: "/direct-video-sent",
  on_error: "/direct-video-failed"
});
