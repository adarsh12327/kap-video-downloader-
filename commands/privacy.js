/*CMD
  command: /privacy
  help: Privacy and safe-use information
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/

Bot.sendInlineKeyboard([
  { title: "📖 Help", command: "/help" },
  { title: "🏠 Main Menu", command: "/menu" }
], "🔐 *Privacy & Safe Use*\n\n" +
  "• Never send passwords, OTPs, cookies or account credentials.\n" +
  "• Do not submit private-account or login-protected links.\n" +
  "• Only use content you own or are authorized to save.\n" +
  "• DRM, paywall and access-control bypass is not supported.\n" +
  "• Direct HTTPS MP4 URLs are passed to Telegram for fetching. Use only trusted public file URLs.\n" +
  "• Facebook/Instagram post extraction is not connected in this build.\n\n" +
  "Avoid sharing personal or sensitive information in the bot chat.");
