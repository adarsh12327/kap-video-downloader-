/*CMD
  command: /status
  help: View bot service status
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /health
CMD*/

Bot.sendInlineKeyboard([
  { title: "🌐 Supported Sources", command: "/supported" },
  { title: "📥 Send a Link", command: "/download" },
  { title: "🏠 Main Menu", command: "/menu" }
], "📊 *KAP Service Status*\n\n" +
  "🟢 Telegram bot connection: working\n" +
  "🟢 Bots.Business command runtime: responding\n" +
  "🟢 Automatic link detection: configured\n" +
  "🟢 Direct HTTPS MP4 send: configured; live test required\n" +
  "🟡 Facebook/Instagram post extraction: not available in Bots.Business-only mode\n" +
  "🔴 YouTube: disabled\n\n" +
  "A successful download is confirmed only when Telegram sends the video successfully."
