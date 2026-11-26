# KAP Video Downloader

Telegram bot hosted on **Bots.Business**, with command source maintained in GitHub.

## Architecture

- **Bots.Business** hosts the Telegram bot and executes BJS command scripts.
- **GitHub** stores the command source and documentation.
- No Railway or separately hosted backend is used by this build.

## Features

- /start and /menu inline navigation
- /help, /supported, /status, /about, and /privacy
- Catch-all * command for automatic text-link detection (verify the special-command trigger in the live Bots.Business bot)
- Facebook and Instagram post URL detection with clear unsupported status
- Direct HTTPS .mp4 URL handling through Telegram sendVideo
- Telegram success/error callbacks for the direct video send
- URL checks for HTTPS, MP4 extension, and obvious local/private hostnames

## Source availability

| Source | Detection | Download/send |
|---|---|---|
| Direct HTTPS MP4 URL | Yes | Configured via Telegram sendVideo; live test required |
| Facebook public video/Reels page | Yes | Not available in this Bots.Business-only build |
| Instagram public Reels/posts page | Yes | Not available in this Bots.Business-only build |
| YouTube | Yes | Disabled |

A Facebook or Instagram post URL is a webpage, not a direct media file. Bots.Business' built-in Telegram API can send an accessible media URL, but it does not extract the media URL from those social post pages. Do not mark these sources as downloadable until an authorized media extraction service is connected and tested.

## Important technical notes

- Telegram must be able to fetch the direct MP4 URL. A webpage URL that does not serve an MP4 file will fail.
- Telegram file-size, media-format, and remote-host restrictions apply.
- Bots.Business HTTP requests use callback commands and have a short fixed timeout; this project does not make a long-running download request from BJS.
- The * special command should be verified in the live bot to ensure it receives ordinary user text without intercepting named commands.
- Importing from Git replaces commands and installed libraries in the destination bot. Back up the bot or test in a disposable bot first.

## Safety and privacy

- Only process content users own or are authorized to save.
- Do not bypass private-account restrictions, login protections, DRM, paywalls or other access controls.
- Never ask users for passwords, OTPs, cookies or session tokens.
- Never commit Telegram tokens, API keys, cookies or credentials to GitHub.
