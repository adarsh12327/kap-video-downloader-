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
  "1. Copy a public direct HTTPS MP4 video-file URL.\n" +
  "2. Paste it directly into this chat. You may also include the URL after a command.\n" +
  "3. The bot asks Telegram to fetch and send the video.\n" +
  "4. If Telegram cannot access the file or the file exceeds Telegram limits, an error message is shown.\n\n" +
  "*Supported right now*\n" +
  "🟢 Direct HTTPS MP4 file links — send flow configured.\n" +
  "🟡 Facebook/Instagram post or Reel links — detected, but extraction is not connected.\n" +
  "🔴 YouTube — not supported.\n\n" +
  "*Commands*\n" +
  "/start — Welcome\n" +
  "/menu — Main menu\n" +
  "/supported — Supported sources\n" +
  "/status — Service status\n" +
  "/about — About this bot\n" +
  "/privacy — Privacy and safe use\n" +
  "/help — This guide\n\n" +
  "⚠️ Only download content you own or are authorized to save. Private, login-protected and DRM-protected content is not supported.");
