# Skiarena Tracker

An Android app for holders of the **Südtirol Skiarena** year-round pass. Log your mountain days and see when your pass has paid for itself. Your liability insurance certificate is always at hand, even offline.

> **Unofficial app.** It is not provided by Südtirol Skiarena and is not affiliated with any lift operator. All information is provided without guarantee.

---

## Features

- **Log mountain days.** Pick the resort, activity (skiing, ski touring, tobogganing, hiking, biking), lift use and date. "Today like last time" adds a day with one tap.
- **Pass payback.** Each day is valued at what it would have cost without the pass. Prices come from a configurable price table, with optional per-resort prices and per-entry overrides. You see how much is left until the pass has paid off, or how much you have saved.
- **Pass years.** Each pass year has its own period and price. Statistics are calculated per year, with a year-to-year comparison.
- **Extra costs.** Track extras such as bike transport or a dog. They appear as a separate total and are not counted towards the payback.
- **Statistics.** Value by sport, winter/summer split, and an explorer list of all 18 resorts with your visits.
- **Resorts.** All 18 resorts of the alliance in South Tyrol, Nauders (AT) and Minschuns (CH), with key figures, webcam links and your own visit history.
- **Document safe and slope check.**
  - Store your ski liability insurance (RCT, mandatory in Italy under D.Lgs. 40/2021) as a PDF or photo.
  - Show it during a check in Italian, offline and at full screen brightness.
- **Backup.**
  - Automatic backup to a folder of your choice, e.g. Google Drive.
  - Manual export and import, so you can move to a new phone.
- **Three languages.** German, Italian and English. The app follows your system language by default, or you can pick one manually.
- **In-app updates.** The app checks this repository's releases and installs new versions on request.
- **Diagnostic report.** Share technical details and an error log to help fix problems. It contains no personal data.

## Installation

1. Download the latest `.apk` from [Releases](../../releases/latest).
2. Open it on your phone. If Android asks, allow installing apps from this source.
3. Done. Future updates are offered directly in the app: menu ⋮ → *Check for updates*.

**Requirements:** Android 5.0 (API 21) or newer.

> **Switching phones or reinstalling?** Restore your backup first. On first start, the app offers to restore from a backup file or from your backup folder.

## Privacy

- All data (days, settings, documents) is stored **only on your device**. There is no account, no cloud server and no tracking.
- The app uses the internet **only** to check this repository for new releases (GitHub API) and to download updates.
- Backups are written only to the folder you choose.
- The diagnostic report is created only when you request it, and you decide where to send it. It contains no days, resorts or documents.

### Permissions

| Permission | Why |
|---|---|
| Internet | Checking for and downloading updates |
| Install apps | Installing downloaded updates (Android asks once) |

## Building from source

The app is written in [B4A](https://www.b4x.com/b4a.html) (Basic4Android).

- Libraries: Core, DateUtils, IME, JavaObject, JSON, OkHttp, OkHttpUtils2, Phone, SQL, StringUtils, XUI, XUI Views
- Translations: `Files/lang_it.json` and `Files/lang_en.json`. German is the source language. Keys are the German texts used in `Tr("…")` / `TrF("… {0} …", …)`.

**Releasing a new version:**
1. Increase `#VersionCode` and `#VersionName` and update the changelog in `ShowChangelog`.
2. Build in release mode with the **same signing key** as before.
3. Create a GitHub release with the tag `v` + version name (e.g. `v1.8.1`), add release notes and attach the `.apk`. Do not mark it as a pre-release.

The app compares the release tag with its installed version and shows the release notes in the update dialog.

## Feedback

Found a bug? Send a diagnostic report from the app (menu ⋮ → *Send diagnostic report*) or open an [issue](../../issues).
