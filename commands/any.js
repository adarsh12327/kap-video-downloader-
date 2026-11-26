/*CMD
  command: *
  help: Recognize submitted links
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/
var textValue = String(message || "").trim();
if (!textValue) {
  Bot.sendMessage("Please send a public video link or use /help.");
  return;
}
if (!/^https?:\/\//i.test(textValue)) {
  Bot.sendInlineKeyboard([
    {title:"📥 Download",command:"/download"},
    {title:"📖 Help",command:"/help"}
  ],"I couldn't find a valid HTTP/HTTPS link. Please paste the complete public video URL.");
  return;
}
var lower = textValue.toLowerCase();
var source = "Direct/other URL";
if (lower.indexOf("facebook.com") !== -1 || lower.indexOf("fb.watch") !== -1) {
  source = "Facebook";
} else if (lower.indexOf("instagram.com") !== -1) {
  source = "Instagram";
} else if (lower.indexOf("youtube.com") !== -1 || lower.indexOf("youtu.be") !== -1) {
  source = "YouTube";
}
var reply = "🔎 *Link detected*\n\nSource: *" + source + "*\nLink format: HTTP/HTTPS\n\n⚠️ The video-processing engine is not connected yet, so this bot cannot download the file at this stage. Check /status for updates.";
if (source === "YouTube") {
  reply += "\n\n▶️ YouTube downloading is not enabled.";
}
Bot.sendInlineKeyboard([
  {title:"🌐 Supported Sources",command:"/supported"},
  {title:"📊 Service Status",command:"/status"},
  {title:"🏠 Main Menu",command:"/menu"}
],reply);
