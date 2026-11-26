# KAP Video Downloader

Telegram bot hosted on **Bots.Business**. GitHub stores the command source; Bots.Business runs the bot.

## Current architecture

- **Bots.Business** executes all Telegram bot commands.
- **GitHub** stores the source and is used for Git Sync.
- No Railway project or user-managed backend is required for the direct-MP4 feature.

## User experience

- A user can paste a supported link directly into the chat.
- The catch-all `*` command detects URLs in ordinary messages and in messages containing a command, such as `/help https://example.com/video.mp4`.
- No `/download` command is required. The legacy `/download` and `/dl` commands are intentionally silent.
- The menu provides Help, Supported Sources, Status, About and Privacy.

## Supported source status

| Source | Detection | Processing |
|---|---|---|
| Public direct HTTPS MP4 file URL | Yes | Configured through Telegram `sendVideo`; a successful live test is still required |
| Facebook public video/Reel page | Yes | Not available in this Bots.Business-only build |
| Instagram public Reel/post page | Yes | Not available in this Bots.Business-only build |
| YouTube | Yes | Not supported |

A Facebook or Instagram post URL is a webpage, not a direct media file. Bots.Business can call Telegram's media methods and external HTTP services, but the current build does not include a configured and verified media-extraction provider. Do not claim Facebook/Instagram downloading works until an authorized provider is connected and tested. No private-account, login, DRM or access-control bypass is supported.

## Direct MP4 flow

1. The `*` command reads the incoming message text.
2. It finds an HTTPS URL, including when the URL follows a slash command.
3. It checks supported social domains and rejects unsupported page URLs.
4. It only passes a direct URL ending in `.mp4` to Telegram.
5. Telegram `sendVideo` is called with `on_result` and `on_error` callbacks.
6. On success, Telegram's video message is the result. On failure, the bot sends a concise troubleshooting message.

Telegram must be able to access the URL. Telegram's file size, media format, and remote-host restrictions apply. An `.mp4` suffix alone does not guarantee that a remote server actually serves a valid video file.

## Commands

- `/start` — Welcome and menu
- `/menu` — Main menu
- `/help` — Instructions
- `/supported` — Source availability
- `/status` — Configured feature status
- `/about` — About
- `/privacy` — Privacy and safe-use information
- `/download`, `/dl` — Legacy silent aliases; users do not need them

## Required live tests

After importing the latest Git version into Bots.Business, test:

1. `/start` — one welcome/menu response.
2. `/download` — no separate prompt.
3. A public direct HTTPS MP4 URL — Telegram should send the video or invoke the failure callback.
4. `/help https://example.com/video.mp4` — verify the catch-all handler receives URLs attached to commands.
5. A public Facebook/Instagram post URL — the bot should explain that extraction is not connected.

The status command deliberately says the direct-MP4 flow is configured but not live-confirmed until a real Telegram send succeeds.

## Safety and privacy

- Only process content the user owns or is authorized to save.
- Do not bypass private-account restrictions, login protections, DRM, paywalls, or other access controls.
- Never ask users for passwords, OTPs, cookies, or session tokens.
- Do not commit Telegram tokens, API keys, cookies, or credentials to GitHub.

## Bots.Business import warning

Importing from Git can replace commands and installed libraries in the destination bot. Back up the current bot or test the import in a disposable bot first.
