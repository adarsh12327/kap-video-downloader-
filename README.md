# KAP Video Downloader

A Telegram bot project for downloading media from supported public links where downloading is permitted by the source platform and the content owner.

## Architecture

- **GitHub** is the source of truth for project documentation and source code.
- **Bots.Business** hosts the Telegram bot commands and handles Telegram updates.
- **Downloader adapter** will connect to a permitted media-processing API/backend. Bots.Business command scripts cannot be assumed to execute directly from this repository; deployment/import compatibility must be verified before wiring them together.

## Initial supported sources

- Direct media URLs (when publicly accessible and permitted).
- Facebook and Instagram links only where the content is public and downloading is authorized.

YouTube and other platforms are not enabled by default. Respect platform terms, copyright, privacy, and access controls. Do not attempt to bypass DRM, private-account restrictions, paywalls, or login protections.

## Secrets

Never commit Telegram bot tokens, API keys, cookies, or credentials. Store secrets only in the hosting platform's secure configuration.

## Project status

Repository initialized. Bot commands, downloader integration, and deployment configuration are not yet implemented.
