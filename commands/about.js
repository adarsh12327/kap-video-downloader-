/*CMD
  command: /about
  help: About KAP Video Downloader
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/
Bot.sendInlineKeyboard([
  {title:"🌐 Supported Sources",command:"/supported"},
  {title:"🔐 Privacy",command:"/privacy"},
  {title:"🏠 Main Menu",command:"/menu"}
],"ℹ️ *About KAP Video Downloader*\n\nKAP Video Downloader is designed to identify supported public video links and, after integration, process content users are authorized to save.\n\n🎯 Initial focus: Facebook and Instagram public video links.\n🛠️ Platform: Bots.Business.\n📦 Source code: GitHub.\n\nThe downloader engine is still under integration. A platform will be marked fully supported only after real tests.");
