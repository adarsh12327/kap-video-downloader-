/*CMD
  command: /supported
  help: Check supported platforms
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /sources
CMD*/

Bot.sendInlineKeyboard([
  { title: "📥 Send a Link", command: "/download" },
  { title: "📊 Service Status", command: "/status" },
  { title: "🏠 Main Menu", command: "/menu" }
], "🌐 *KAP Supported Sources*\n\n" +
  "🟢 *Direct HTTPS MP4*\nTelegram fetch-and-send: enabled (subject to Telegram file/URL limits).\n\n" +
  "🟡 *Facebook public video/Reels*\nLink detection: enabled. Post-to-video extraction: not available in this Bots.Business-only build.\n\n" +
  "🟡 *Instagram public Reels/posts*\nLink detection: enabled. Post-to-video extraction: not available in this Bots.Business-only build.\n\n" +
  "🔴 *YouTube*\nNot enabled.\n\n" +
  "⚠️ Private, login-protected, DRM-protected and restricted content is not supported. Only save content you own or have permission to download."
