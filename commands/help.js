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
  { title: "🌐 Supported Sources", command: "/supported" },
  { title: "📊 Status", command: "/status" },
  { title: "🏠 Main Menu", command: "/menu" }
], "📖 *KAP Video Downloader — Help*\n\n" +
  "*How to use*\n" +
  "1. Copy a supported public video link.\n" +
  "2. Paste it directly into this chat. No /download command is needed.\n" +
  "3. The bot sends the link to its secure backend.\n" +
  "4. The backend processes it and sends the resulting media to this chat.\n\n" +
  "*Supported platforms*\n" +
  "Facebook, Instagram, TikTok, YouTube, Pinterest, X/Twitter, RuTube and Likee.\n\n" +
  "*Commands*\n" +
  "/start — Welcome\n" +
  "/menu — Main menu\n" +
  "/supported — Supported sources\n" +
  "/status — Service status\n" +
  "/about — About this bot\n" +
  "/privacy — Privacy and safe use\n" +
  "/help — This guide\n\n" +
  "⚠️ Only save content you own or are authorized to use. Private, login-protected and DRM-protected content is not supported.");
