/*CMD
  command: /backend-accepted
  help: Backend accepted a download request
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/

if (!http_status || Number(http_status) < 200 || Number(http_status) >= 300) {
  Bot.sendMessage("❌ Downloader backend is temporarily unavailable. Please try again later.");
}
