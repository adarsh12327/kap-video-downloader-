/*CMD
  command: /backend-request-failed
  help: Backend request transport error
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/

// A Bots.Business HTTP timeout may happen after the backend accepted the job.
// Do not report a definite failure; the backend may still deliver the media.
Bot.sendMessage("⚠️ Connection response timed out. Your download may still be processing. Please wait a little before retrying.");
