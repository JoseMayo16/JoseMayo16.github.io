# Juan José | Full stack web developer

Source of my portfolio site: **https://josemayo16.github.io**

Plain HTML, CSS and JavaScript with no build step, in English and Spanish, with a dark
security-console / game-HUD look. All the content (projects, services, contact) lives in
[`content.js`](content.js).

The **Intel** section loads live data from [Jobs Pulse](https://github.com/JoseMayo16/jobs-pulse)
(`summary.json`, served with CORS by GitHub Pages) and hides itself if the request fails.

## Projects

- [InvoiceDesk](https://github.com/JoseMayo16/invoice-desk): invoicing app with PDF invoices,
  email delivery and Stripe card payments. Laravel 13 API and Vue 3 + TypeScript app.
- [Jobs Pulse](https://github.com/JoseMayo16/jobs-pulse): a daily pipeline that tracks which
  technologies remote developer jobs ask for, with a live dashboard.
- [Data Cleaner](https://github.com/JoseMayo16/data-cleaner): cleans messy CSV and Excel files
  in the browser, with a log of every change.

## Run locally

```bash
python -m http.server 8000
```
