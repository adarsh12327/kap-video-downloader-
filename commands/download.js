/*CMD
  command: /download
  help: Submit a public video link
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /dl
CMD*/
Bot.sendInlineKeyboard([
  {title:"🌐 Supported Sources",command:"/supported"},
  {title:"📊 Service Status",command:"/status"},
  {title:"🏠 Main Menu",command:"/menu"}
],"📥 *Send your video link*\n\nPaste a public Facebook video/Reel, Instagram Reel/post, or direct video URL into this chat.\n\nI will identify the source and show its current integration status.\n\n⚠️ Actual downloading is not available until the processing service is connected and tested.");
