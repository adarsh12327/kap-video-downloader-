# KAP Video Downloader

A Telegram bot project focused on identifying public Facebook and Instagram video links and, after a permitted processing integration is connected, helping users save content they own or are authorized to download.

## Architecture

- **GitHub** is the source of truth for command files and documentation.
- **Bots.Business** hosts the Telegram bot and executes BJS command scripts.
- **Downloader service** is a separate integration and is not connected yet.

## Current bot features

- `/start` and `/menu` professional inline menu
- `/download` link submission instructions
- `/supported` source availability
- `/status` honest service status
- `/help`, `/about`, and `/privacy`
- Basic HTTP/HTTPS link recognition and Facebook/Instagram/YouTube domain classification
- Clear messaging that link recognition is not the same as downloading

## Current source status

| Source | Recognition | Download processing |
|---|---|---|
| Facebook public links | Basic domain detection | Not connected |
| Instagram public links | Basic domain detection | Not connected |
| Direct video URLs | HTTP/HTTPS detection only | Not connected |
| YouTube | Recognized as YouTube | Not enabled |

Do not advertise a source as downloadable until the full permitted processing flow has been integrated and tested.

## Next engineering phase

1. Choose a permitted downloader API/backend that supports the intended public sources.
2. Add a secure HTTPS integration endpoint.
3. Store API credentials only in the hosting platform's secret settings.
4. Add URL validation, timeouts, file-size limits, abuse protection and clear failure messages.
5. Test with content the operator owns or has permission to save.
6. Only then update `/supported` and `/status` to show active download support.

## Safety and privacy

- Only process content users own or are authorized to save.
- Do not bypass private-account restrictions, login protections, DRM, paywalls or other access controls.
- Never ask users for passwords, OTPs, cookies or session tokens.
- Never commit Telegram tokens, API keys, cookies or credentials to GitHub.

## Bots.Business Git import

The repository contains BJS command files under `commands/` and a `bot.json` manifest. Importing from Git replaces the destination bot's existing commands and installed libraries. Back up the bot or test in a disposable bot before importing.
