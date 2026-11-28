/*CMD
  command: /start
  help: Open KAP Video Downloader
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var firstName = user && user.first_name ? user.first_name : "there";
Bot.sendInlineKeyboard([
  { title: "🌐 Supported Sources", command: "/supported" },
  { title: "📖 Help", command: "/help" },
  { title: "📊 Status", command: "/status" },
  { title: "ℹ️ About", command: "/about" }
], "👋 *Welcome to KAP Video Downloader, " + firstName + "!*\n\n" +
   "📎 *Send a video link directly in this chat.* No /download command is needed.\n\n" +
   "🟢 Direct public HTTPS MP4 links can be sent through Telegram.\n" +
   "🟡 Facebook and Instagram links are detected, but post/Reel video extraction is not connected in this Bots.Business-only build.\n" +
   "🔴 YouTube links are not supported.\n\n" +
   "⚠️ Only save videos you own or have permission to download. Private, login-protected and DRM-protected content is not supported.");
