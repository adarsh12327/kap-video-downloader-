/*CMD
  command: /menu
  help: Open the main menu
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /home
  group: 
CMD*/

Bot.sendInlineKeyboard([
  { title: "🌐 Supported Sources", command: "/supported" },
  { title: "📊 Status", command: "/status" },
  { title: "📖 Help", command: "/help" },
  { title: "ℹ️ About", command: "/about" },
  { title: "🔐 Privacy", command: "/privacy" }
], "🎬 *KAP VIDEO DOWNLOADER*\n\n📎 Send a public video link directly in this chat. No download command is required.\n\nThe current build can request Telegram to fetch direct public HTTPS MP4 files.");
