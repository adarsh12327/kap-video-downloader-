/*CMD
  command: /menu
  help: Open the main menu
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /home
CMD*/
Bot.sendInlineKeyboard([
  {title:"📥 Download",command:"/download"},
  {title:"🌐 Supported Sources",command:"/supported"},
  {title:"📊 Status",command:"/status"},
  {title:"📖 Help",command:"/help"},
  {title:"ℹ️ About",command:"/about"},
  {title:"🔐 Privacy",command:"/privacy"}
],"🎬 *KAP VIDEO DOWNLOADER*\n\nChoose an option below. You can also send a public video link directly in this chat.");
