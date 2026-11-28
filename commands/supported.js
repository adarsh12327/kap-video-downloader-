/*CMD
  command: /supported
  help: Check supported platforms
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
  aliases: /sources
CMD*/

Bot.sendInlineKeyboard([
  { title: "📖 Help", command: "/help" },
  { title: "📊 Service Status", command: "/status" },
  { title: "🏠 Main Menu", command: "/menu" }
], "🌐 *KAP Supported Sources*\n\n" +
  "🟡 *Facebook* — public videos and Reels\n" +
  "🟡 *Instagram* — public Reels, posts and carousels\n" +
  "🟡 *TikTok* — public videos and supported photo posts\n" +
  "🟡 *YouTube* — public videos and Shorts (default 720p)\n" +
  "🟡 *Pinterest* — supported pins and idea pins\n" +
  "🟡 *X / Twitter* — supported public posts\n" +
  "🟡 *RuTube and Likee* — supported public links\n\n" +
  "🟡 These integrations are configured in source; live operation depends on completing Vercel and Bots.Business secrets and provider testing.\n\n" +
  "Private, deleted, login-protected, DRM-protected or restricted content is not supported.");
