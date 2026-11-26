/*CMD
  command: /supported
  help: Show supported video sources
  need_reply: false
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(
  "🌐 *Supported sources*\n\n" +
  "• Direct public video links — planned first.\n" +
  "• Facebook public links — pending integration and testing.\n" +
  "• Instagram public links — pending integration and testing.\n\n" +
  "YouTube and other sources are not enabled. Support will be announced only after a working, permitted integration is tested."
);
