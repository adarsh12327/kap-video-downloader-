/*CMD
  command: /start
  help: Open KAP Video Downloader
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases:
CMD*/

var firstName = user.first_name || "there";
var buttons = [
  { title: "📥 Download", command: "/download" },
  { title: "🌐 Supported Sources", command: "/supported" },
  { title: "📖 Help", command: "/help" },
  { title: "ℹ️ About", command: "/about" }
];

Bot.sendInlineKeyboard(
  buttons,
  "👋 *Welcome to KAP Video Downloader, " + firstName + "!*\n\n" +
  "Your simple hub for checking supported public video links.\n\n" +
  "📎 Send a public video link or tap *Download* to get started.\n\n" +
  "⚙️ Use the menu below to explore the bot.\n\n" +
  "⚠️ Download only content you own or have permission to save. Private, login-protected, restricted and DRM-protected content is not supported."
);
