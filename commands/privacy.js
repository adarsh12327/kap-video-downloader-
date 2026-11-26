/*CMD
  command: /privacy
  help: Privacy and safe-use information
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/
Bot.sendInlineKeyboard([
  {title:"📖 Help",command:"/help"},
  {title:"🏠 Main Menu",command:"/menu"}
],"🔐 *Privacy & Safe Use*\n\n• Never send passwords, OTPs, cookies or account credentials.\n• Do not submit private-account or login-protected links.\n• Only use content you own or are authorized to save.\n• DRM, paywall and access-control bypass is not supported.\n• Avoid sharing personal or sensitive information in chat.\n\nThis bot is being developed for public links. The processing service is not connected yet.");
