/*CMD
  command: /download
  help: Start automatic link handling
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /dl
CMD*/

Bot.sendInlineKeyboard([
  { title: "🌐 Supported Sources", command: "/supported" },
  { title: "📊 Service Status", command: "/status" },
  { title: "🏠 Main Menu", command: "/menu" }
], "📥 *Send your video link directly*\n\n" +
  "No extra command is needed. Just paste a link in this chat.\n\n" +
  "🟢 Direct HTTPS MP4 file links can be sent through Telegram.\n" +
  "🟡 Facebook/Instagram post links are detected, but their video extraction is not available in this Bots.Business-only version.\n\n" +
  "⚠️ Only send public links for content you own or have permission to save."
