/*CMD
  command: /help
  help: Usage instructions
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /how
CMD*/

Bot.sendInlineKeyboard([
  { title: "📥 Send a Link", command: "/download" },
  { title: "🌐 Supported Sources", command: "/supported" },
  { title: "🏠 Main Menu", command: "/menu" }
], "📖 *KAP Video Downloader — Help*\n\n" +
  "*How to use*\n" +
  "1. Copy a public direct HTTPS MP4 video URL.\n" +
  "2. Paste it directly into this chat.\n" +
  "3. The bot asks Telegram to fetch and send the MP4.\n" +
  "4. If Telegram cannot access the file or it exceeds limits, the bot shows an error.\n\n" +
  "*Facebook / Instagram*\n" +
  "Their post/Reel links are detected, but extracting media from those page links is not available in this Bots.Business-only build yet.\n\n" +
  "*Commands*\n" +
  "/start — Open the bot\n" +
  "/menu — Main menu\n" +
  "/download — Link instructions\n" +
  "/supported — Source availability\n" +
  "/status — Service status\n" +
  "/about — About this bot\n" +
  "/privacy — Privacy and safety\n" +
  "/help — Show this guide\n\n" +
  "⚠️ Only save content you own or are authorized to download. Private, login-protected and DRM-protected content is not supported."
