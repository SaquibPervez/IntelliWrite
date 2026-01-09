<p align="center">
	<img src="public/hero.svg" alt="IntelliWrite – AI Cover Letter Generator" width="840" />
</p>

# IntelliWrite — AI Cover Letter Generator

IntelliWrite helps you craft polished, ready‑to‑send cover letters in seconds. Enter your details, generate with AI, then preview, copy, print, or download as PDF — all in a clean, responsive UI.

## Features
- **AI generation:** Professional, concise letters tailored to role and company.
- **Live preview:** See the formatted letter update instantly.
- **PDF export:** One‑click download using `jsPDF`.
- **Copy & print:** Quick clipboard copy and print-friendly view.
- **Modern UI:** Next.js App Router, React 19, Tailwind CSS v4.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **AI:** OpenRouter via `openai` SDK (server action)
- **UX:** `react-hot-toast`, `react-spinners`
- **Export:** `jspdf`

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- An OpenRouter API key: https://openrouter.ai/

### 1) Clone and install

```bash
git clone https://github.com/SaquibPervez/IntelliWrite.git
cd IntelliWrite
npm install
```

### 2) Configure environment

Create a `.env.local` in the project root and add:

```bash
NEXT_PUBLIC_OPENROUTER_API_KEY=your_openrouter_key
```

Notes:
- The server action in [app/actions.js](app/actions.js) uses OpenRouter via the `openai` SDK with a custom `baseURL`. It also sets `HTTP-Referer` and `X-Title` headers — update those values if desired.
- The key is read server-side by the action; keep it safe.

### 3) Run the app

```bash
npm run dev
```

Then open http://localhost:3000.

## Usage
- Fill in your name, job title, company, contact info, and key skills.
- Click “Generate Cover Letter” to produce a professional draft.
- Use the preview panel to review the result.
- Download as PDF, copy to clipboard, or print directly.

## Project Structure

```
app/
	actions.js            # Server action calling OpenRouter
	layout.jsx            # App shell
	page.jsx              # Main UI and form / preview
	components/
		CoverLetterTemplate.jsx  # Preview + PDF/Copy/Print
		Header.jsx
		Footer.jsx
public/
	hero.png             # README banner image
```

## Deployment
- Vercel works great for Next.js deployments.
- Ensure `NEXT_PUBLIC_OPENROUTER_API_KEY` is set in your hosting environment.

## Acknowledgements
- Next.js team and community
- OpenRouter and the model providers powering generation
- Libraries: `openai`, `jspdf`, `react-hot-toast`, `react-spinners`

