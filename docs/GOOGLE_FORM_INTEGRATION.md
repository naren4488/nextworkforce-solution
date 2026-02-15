# Google Form Integration

The contact form uses a **Vercel serverless API** (`/api/contact`) to proxy submissions to Google Forms.

## Setup

### 1. Create a Google Form

Create a form with these fields (in order):

- **Name** (short answer)
- **Phone** (short answer)
- **Email** (short answer)
- **Your Message** (paragraph)

### 2. Get Form URL and Entry IDs

1. Open the form in edit mode and click **Preview**
2. Open browser DevTools (F12) → **Network** tab
3. Submit the form once
4. Find the request to `formResponse` and copy the URL, e.g.:  
   `https://docs.google.com/forms/d/e/1FAIpQLS.../formResponse`
5. In the form HTML (right‑click → Inspect), find each input’s `name` attribute, e.g. `entry.123456789`

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Then set:

- `GOOGLE_FORM_ACTION_URL` – the full `formResponse` URL
- `GOOGLE_FORM_ENTRY_NAME` – entry ID for Name
- `GOOGLE_FORM_ENTRY_PHONE` – entry ID for Phone  
- `GOOGLE_FORM_ENTRY_EMAIL` – entry ID for Email
- `GOOGLE_FORM_ENTRY_MESSAGE` – entry ID for Message

### 4. Deploy to Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables in Project → Settings → Environment Variables
4. Deploy

## Local Development

Use Vercel’s dev server so the API runs locally:

```bash
npx vercel dev
```

Or add to `package.json`:

```json
"scripts": {
  "dev:full": "vercel dev"
}
```

Plain `npm run dev` (Vite only) will not run the API; form submissions will 404 until deployed.

## How It Works

1. User submits the form → frontend POSTs to `/api/contact` with `{ name, phone, email, message }`
2. API route validates the payload and maps fields to Google Form entry IDs
3. API route POSTs to Google’s `formResponse` URL with the mapped data
4. Google stores the response in the form (and linked Sheets, if configured)

## Optional: Link to Google Sheets

In Google Forms: **Responses** → **Link to Sheets** → **Create a new spreadsheet**  
Responses will appear in the spreadsheet automatically.
