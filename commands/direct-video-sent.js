/*CMD
  command: /direct-video-sent
  help: Handle successful direct video send
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/

// Telegram has confirmed the video send. Keep this callback silent.
if (!options || !options.result) { return; }
