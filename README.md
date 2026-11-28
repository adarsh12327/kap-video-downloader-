# KAP Video Downloader

Telegram bot source for Bots.Business with a secure Vercel server-side bridge to FastSaver.

## Architecture

- Bots.Business receives Telegram messages and detects supported links automatically.
- Vercel Node.js Function validates the request, calls FastSaver, and sends the resulting media to Telegram.
- FastSaver and Telegram credentials are stored only as Vercel environment variables.
- GitHub contains source code only; never commit API keys, bot tokens, or shared secrets.

## Supported links through FastSaver

The documented FastSaver `GET /v1/fetch` endpoint supports Instagram, TikTok, Pinterest, Facebook, X/Twitter, RuTube and Likee. YouTube uses `POST /v1/youtube/download`. Platform coverage and provider availability can change; private, deleted, login-protected, DRM-protected or restricted content is not bypassed.

The default YouTube format is 720p. The backend supports audio and 144p–2160p if a format is supplied in the API request.

## Required Vercel environment variables

Set these in Vercel Project Settings → Environment Variables for Production and Preview:

- `FASTSAVER_API_KEY` — FastSaver API key.
- `TELEGRAM_BOT_TOKEN` — BotFather token for the same Telegram bot.
- `BOT_SHARED_SECRET` — long random secret shared with Bots.Business.
- `ADMIN_CHAT_ID` — optional admin Telegram chat ID for failure alerts.

Do not send these secrets in chat or commit them to GitHub.

## Required Bots.Business bot properties

Set these bot properties in Bots.Business:

- `BACKEND_URL` — the Vercel project URL (no trailing slash).
- `BACKEND_SHARED_SECRET` — exactly the same value as Vercel `BOT_SHARED_SECRET`.

The catch-all `*` command automatically forwards supported public links to the backend. The backend sends the final media to Telegram, so the Bots.Business five-second HTTP callback does not have to wait for media extraction to finish.

## API

- `GET /api/health` — public health check.
- `POST /api/download` — requires `X-Bot-Secret`; JSON body: `{ "url": "...", "chat_id": "..." }`.

The download endpoint responds with HTTP 202 after scheduling background work. Vercel Function max duration is configured to 300 seconds. The function uses FastSaver's documented request patterns and Telegram Bot API sendPhoto/sendVideo/sendMediaGroup methods.

## Setup checklist

1. Link this GitHub repository to a Vercel project.
2. Add the four Vercel environment variables above.
3. Redeploy after adding environment variables.
4. Set `BACKEND_URL` and `BACKEND_SHARED_SECRET` as Bots.Business bot properties.
5. Sync the updated GitHub commands into Bots.Business.
6. Test `/api/health`, then a public video link that you own or have permission to save.

## Important limitations

- FastSaver free tier currently documents 10 requests/minute and 1,000 starting credits; actual balances and limits are controlled by FastSaver.
- A FastSaver download URL is temporary. The backend sends it to Telegram immediately.
- Telegram may reject files that exceed its current Bot API limits or whose CDN does not permit remote fetching.
- Vercel Hobby functions have plan-specific duration and usage limits. Heavy production traffic may require a paid plan.
- This is a single-provider integration, not yet an 8–10-provider failover system.
- No private-account, login, cookie, DRM, paywall or access-control bypass is implemented.
