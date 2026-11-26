/*CMD
  command: /help
  help: How to use KAP Video Downloader
  need_reply: false
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(
  "📥 *How to use*\n\n" +
  "1. Copy a supported public video link.\n" +
  "2. Send the link here.\n" +
  "3. The bot will check whether the source is supported.\n\n" +
  "Commands:\n/supported — supported sources\n/start — main menu\n/help — this help\n\n" +
  "Downloading is limited to content you own or are authorized to save."
);
