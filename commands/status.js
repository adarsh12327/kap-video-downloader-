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
  "🟢 Bots.Business link detection: configured.\n" +
  "🟢 Secure Vercel backend source: added to GitHub.\n" +
  "🟡 FastSaver and Telegram credentials: awaiting secure environment setup.\n" +
  "🟡 Live download test: pending.\n\n" +
  "The service is fully ready only after Vercel environment variables and Bots.Business properties are configured and a test download succeeds.");
