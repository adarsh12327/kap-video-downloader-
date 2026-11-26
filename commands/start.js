/*CMD
  command: /start
  help: Start KAP Video Downloader
  need_reply: false
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(
  "👋 Welcome to *KAP Video Downloader*!\n\n" +
  "Send a supported public video link, and I will check whether it can be processed.\n\n" +
  "Use /supported to see supported sources or /help for instructions.\n\n" +
  "⚠️ Only download content you own or have permission to save. Private, login-protected, DRM-protected, or restricted content is not supported."
);
