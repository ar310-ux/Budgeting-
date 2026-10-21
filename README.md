# Pocket — student budgeting

A responsive budgeting web app built with plain HTML, CSS, and JavaScript. No build step or third-party JavaScript dependencies.

## Open in GitHub Codespaces

If your Codespace was open before this code was merged, run `git pull origin main` first. Then, from the repository root:

```bash
python3 -m http.server 8000
```

Open the **Ports** panel, find port **8000**, and select **Open in Browser**. Keep the port private when entering personal data. If no port appears, use **Forward a Port** and enter `8000`. Alternatively run `npm start` if Node is available. Open the site through the server, not by double-clicking index.html (the app uses JavaScript modules).

If reviewing the pull request before merging:

```bash
git fetch origin
git switch --track origin/feat/budgeting-app
python3 -m http.server 8000
```

## Features

- Monthly dashboard: income, expenses, cash remaining, and budget remaining.
- Add, edit, and delete dated income and expense transactions.
- Set category budgets independently for each month; see overspending and category charts.
- Create savings goals, update saved balances, and delete completed goals.
- Optional fictional sample data, with confirmation before replacing existing data.
- Browser storage and JSON backup export.
- Mobile layout, labeled inputs, keyboard focus indicators, and live save messages.

**Cash remaining** = the selected month's income minus expenses; it is not your bank balance. **Budget remaining** = total category limits minus that month's expenses. Unbudgeted expenses count against the total. Savings goals are manual trackers and do not affect either figure. Money is calculated in integer cents.

## Storage and privacy

This prototype has no accounts, server database, analytics, bank integration, or cross-device sync. Financial records remain in localStorage for the current browser and site address. They are not encrypted by the app. Clearing browser data removes them; other users of the same browser profile can access them. Changing the preview address can make a different storage area appear. Export backups before changing environments. JSON export is a backup file only; this version does not include an import interface. The font stylesheet requests Google Fonts; system fonts are used if unavailable. No financial data is sent to Google Fonts.

For real multi-user use, add an authenticated backend with per-user authorization, a database, account recovery, and appropriate operational controls before collecting anyone else's financial records. Never put passwords, bank credentials, or API secrets in this repository.

## Checks

```bash
npm test
node --check app.js
```

Tests cover month filtering, income/expense separation, overspending, empty months, and cent conversion. Browser checks: add/edit/delete a transaction; change month; adjust a budget; add/update/delete a goal; reload to confirm persistence; export JSON; and check the mobile layout.

## Files

- `index.html`: structure and forms
- `styles.css`: responsive design
- `app.js`: interaction, rendering, and browser storage
- `logic.js`: budget calculations
- `logic.test.js`: calculation tests

This repository contains application code only. A running Codespace preview is not a permanent public deployment.
