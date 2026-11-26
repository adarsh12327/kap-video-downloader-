/*CMD
  command: /supported
  help: Check supported platforms
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /sources
CMD*/

var buttons = [
  { title: "📥 Submit a Link", command: "/download" },
  { title: "📊 Service Status", command: "/status" },
  { title: "🏠 Main Menu", command: "/menu" }
];

Bot.sendInlineKeyboard(
  buttons,
  "🌐 *Supported Sources & Availability*\n\n" +
  "🔵 *Facebook*\nPublic video/Reel link recognition: available\nDownloader integration: pending testing\n\n" +
  "🟣 *Instagram*\nPublic Reel/post link recognition: available\nDownloader integration: pending testing\n\n" +
  "🔗 *Direct video URL*\nURL recognition: available\nMedia processing: not connected yet\n\n" +
  "▶️ *YouTube and other platforms*\nNot enabled.\n\n" +
  "⚠️ The bot will only claim a source is downloadable after the complete process has been integrated and tested. Never send private or restricted links."
);
