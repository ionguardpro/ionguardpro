# IonGuard Pro — Website

Premium multi-page marketing website for the **IonGuard Pro** Smart Charging Cabinet brand.

Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4** using the "Kinetic Monolith" design philosophy.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📦 Build & Deploy (Cloudflare Pages)

```bash
npm run build
```

Static output → `out/` directory.

### Cloudflare Pages setup:
1. Push repo to GitHub
2. Connect in [Cloudflare Pages dashboard](https://dash.cloudflare.com/)
3. Build config:
   - **Build command**: `npm run build`
   - **Output directory**: `out`
   - **Node.js version**: `18`

---

## 🎬 Changing the Hero Video

Replace the file at `public/video/Lithium_batteries_Fire.mp4`, or update the `src` in:
- `src/app/page.tsx` → `HeroVideo` component
- `src/app/layout.tsx` → preload `<link>` and preload `<script>`

---

## 🛍️ Updating Products

Edit `src/app/products/page.tsx` → `products` array. Each product has `name`, `series`, `image`, `specs`, and `features`. Place product images in `public/images/`.

---

## 🤖 Chatbot (n8n)

`src/components/ChatbotWidget.tsx` is visual-only. Add your n8n webhook URL as `NEXT_PUBLIC_N8N_WEBHOOK_URL` env var and wire the send handler.

---

## 📬 Contact Form (n8n)

`src/app/contact/page.tsx` form is visual-only. Add `NEXT_PUBLIC_N8N_CONTACT_WEBHOOK` env var and update `handleSubmit`.

---

## 🎨 Design System

All tokens in `src/app/globals.css` via Tailwind v4 `@theme`:
- **Safety Yellow**: `#FEDD00` → `primary-container`
- **Deep Charcoal**: `#121416` → `surface`
- **Fonts**: Inter, Space Grotesk, Roboto Mono
