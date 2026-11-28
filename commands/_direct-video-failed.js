/*CMD
  command: /direct-video-failed
  help: Handle direct video send failure
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!options || !options.error) { return; }
Bot.sendMessage("❌ Telegram could not fetch or send this video.\n\nCheck that the URL is a public direct HTTPS .mp4 file, the file is within Telegram's limits, and the host allows Telegram to access it. Try another direct MP4 link.");
