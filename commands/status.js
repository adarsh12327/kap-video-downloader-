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
  { title: "📖 Help", command: "/help" },
  { title: "🏠 Main Menu", command: "/menu" }
], "📊 *KAP Service Status*\n\n" +
  "🟢 Bots.Business command scripts: configured.\n" +
  "🟢 Automatic URL detection: configured through the * command.\n" +
  "🟡 Direct HTTPS MP4 delivery: Telegram sendVideo flow configured; live success test pending.\n" +
  "🟡 Facebook/Instagram extraction: not connected.\n" +
  "🔴 YouTube: not supported.\n\n" +
  "A download is confirmed only when Telegram successfully sends the video.");
