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
  "🟢 Direct HTTPS MP4 links: Telegram fetch-and-send flow configured.\n" +
  "🟡 Facebook/Instagram post links: detection available; media extraction not connected.\n" +
  "🔴 YouTube: disabled.\n\n" +
  "The bot does not bypass private-account restrictions, login protections, DRM or paywalls. Use it only for content you own or are authorized to save."
