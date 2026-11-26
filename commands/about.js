/*CMD
  command: /about
  help: About KAP Video Downloader
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/

Bot.sendInlineKeyboard([
  { title: "🌐 Supported Sources", command: "/supported" },
  { title: "🔐 Privacy", command: "/privacy" },
  { title: "🏠 Main Menu", command: "/menu" }
], "ℹ️ *About KAP Video Downloader*\n\n" +
  "KAP Video Downloader is a Telegram bot hosted on Bots.Business.\n\n" +
  "It detects links sent directly in chat and can ask Telegram to fetch an accessible direct HTTPS MP4 file.\n\n" +
  "Facebook/Instagram post extraction is not connected in this build. YouTube is not supported.\n\n" +
  "The bot does not bypass private-account restrictions, login protections, DRM or paywalls. Use it only for content you own or are authorized to save.");
