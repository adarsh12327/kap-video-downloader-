/*CMD
  command: /supported
  help: Check supported platforms
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /sources
  group: 
CMD*/

Bot.sendInlineKeyboard([
  { title: "📖 Help", command: "/help" },
  { title: "📊 Service Status", command: "/status" },
  { title: "🏠 Main Menu", command: "/menu" }
], "🌐 *KAP Supported Sources*\n\n" +
  "🟢 *Direct HTTPS MP4 file links*\nDetection: enabled. Telegram fetch-and-send: configured; a live successful test is still required.\n\n" +
  "🟡 *Facebook public videos/Reels*\nDetection: enabled. Extracting the actual media from a post URL: not connected in this Bots.Business-only build.\n\n" +
  "🟡 *Instagram public Reels/posts*\nDetection: enabled. Extracting the actual media from a post URL: not connected in this Bots.Business-only build.\n\n" +
  "🔴 *YouTube*\nNot supported.\n\n" +
  "Telegram must be able to access the direct MP4 URL. File size, format and remote-host restrictions apply. Private, login-protected and DRM-protected content is not supported.");
