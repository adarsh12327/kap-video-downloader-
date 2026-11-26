/*CMD
  command: /status
  help: View bot service status
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /health
CMD*/
Bot.sendInlineKeyboard([
  {title:"🌐 Supported Sources",command:"/supported"},
  {title:"📥 Download",command:"/download"},
  {title:"🏠 Main Menu",command:"/menu"}
],"📊 *KAP Service Status*\n\n🟢 Telegram connection: working\n🟢 Bots.Business commands: responding\n🟢 GitHub source repository: configured\n🟡 Link recognition: basic detection only\n🔴 Video processing engine: not connected\n\nWe will update this page after the downloader is integrated and successfully tested.");
