/*CMD
  command: /download
  help: Legacy alias; send a video URL with any message or command
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /dl
  group: 
CMD*/

// Intentionally silent.
// The master (*) handler processes URLs wherever they appear,
// including messages such as /download https://example.com/video.mp4.
// No separate /download prompt is required.
