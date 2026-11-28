/*CMD
  command: *
  help: Automatically detect video links
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var rawText = String(message || params || "").trim();
if (!rawText) { return; }

// Detect a URL anywhere in the message, including after a command name.
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
  Bot.sendMessage("❌ Links containing embedded usernames or passwords are not allowed.");
  return;
}

var hostname = host;
if (hostname.charAt(0) === "[") {
  var closingBracket = hostname.indexOf("]");
  hostname = closingBracket > 0 ? hostname.substring(1, closingBracket) : hostname;
} else {
  hostname = hostname.replace(/:[0-9]+$/, "");
}
var lowerHost = hostname.toLowerCase();

function isDomain(domain) {
  return lowerHost === domain || lowerHost.slice(-(domain.length + 1)) === "." + domain;
}

if (isDomain("facebook.com") || isDomain("fb.watch")) {
  Bot.sendMessage("🔵 *Facebook link detected*\n\nFacebook post/Reel extraction is not connected in this Bots.Business-only build yet.\n\nFor now, send a direct public HTTPS MP4 file link. Only save content you own or have permission to download.");
  return;
}

if (isDomain("instagram.com")) {
  Bot.sendMessage("🟣 *Instagram link detected*\n\nInstagram post/Reel extraction is not connected in this Bots.Business-only build yet.\n\nFor now, send a direct public HTTPS MP4 file link. Only save content you own or have permission to download.");
  return;
}

if (isDomain("youtube.com") || isDomain("youtu.be")) {
  Bot.sendMessage("▶️ YouTube links are not supported in this version. Please send a direct public HTTPS MP4 file link.");
  return;
}

// This build only sends direct MP4 files; webpage URLs are not treated as media.
var pathOnly = videoUrl.split("?")[0].split("#")[0].toLowerCase();
if (pathOnly.slice(-4) !== ".mp4") {
  Bot.sendMessage("❌ This link is not a direct MP4 file URL.\n\nSend a public HTTPS link that ends in .mp4 and opens the actual video file.");
  return;
}

// Reject obvious local/private destinations.
if (lowerHost === "localhost" || lowerHost.indexOf("localhost:") === 0 ||
    lowerHost === "::1" || lowerHost.indexOf("127.") === 0 ||
    lowerHost.indexOf("10.") === 0 || lowerHost.indexOf("192.168.") === 0 ||
    lowerHost.indexOf("169.254.") === 0 || lowerHost === "0.0.0.0" ||
    lowerHost === "0" || lowerHost.indexOf(".local") !== -1 ||
    lowerHost.indexOf(".internal") !== -1 ||
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(lowerHost) ||
    /^f[cd][0-9a-f]{2}:/i.test(lowerHost) ||
    /^fe[89ab][0-9a-f]:/i.test(lowerHost)) {
  Bot.sendMessage("❌ This video URL host is not allowed.");
  return;
}

if (!chat || !user) { return; }

Bot.sendMessage("⏳ *Video link detected.*\n\nTelegram is being asked to fetch the MP4 file…");

Api.sendVideo({
  chat_id: chat.chatid,
  video: videoUrl,
  caption: "🎬 KAP Video Downloader\n\nOnly save content you own or are authorized to use.",
  supports_streaming: true,
  on_result: "/direct-video-sent",
  on_error: "/direct-video-failed"
});
