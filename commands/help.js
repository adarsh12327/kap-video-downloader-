/*CMD
  command: /help
  help: Usage instructions
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /how
CMD*/

var buttons = [
  { title: "📥 Start Download", command: "/download" },
  { title: "🌐 Supported Sources", command: "/supported" },
  { title: "🏠 Main Menu", command: "/menu" }
];

Bot.sendInlineKeyboard(
  buttons,
  "📖 *KAP Video Downloader — Help*\n\n" +
  "*How to use*\n" +
  "1. Open a public video or Reel.\n" +
  "2. Copy its share link.\n" +
  "3. Send the link in this chat.\n" +
  "4. The bot will identify the source and show its current availability.\n\n" +
  "*Commands*\n" +
  "/start — Open the bot\n" +
  "/menu — Main menu\n" +
  "/download — Submit a video link\n" +
  "/supported — Source availability\n" +
  "/status — Service status\n" +
  "/about — About this bot\n" +
  "/privacy — Privacy and safety\n" +
  "/help — Show this guide\n\n" +
  "ℹ️ Link recognition does not mean downloading is active. The downloader service will be announced after integration and testing."
);
