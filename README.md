# QurbaniHat – Livestock Booking Platform

A modern livestock marketplace where users can explore animals for Qurbani (cows and goats), view details, and place a booking after authentication.

## 🔗 Live URL

[https://qurbanihat.vercel.app](https://qurbanihat.vercel.app)

## ✨ Key Features

- Browse all available Qurbani animals (cows & goats) with sort by price
- Full animal details page with weight, breed, age, location, and description
- Secure booking form (login required) with toast confirmation
- Email/password and Google authentication via Firebase
- User profile page showing name, email, and profile photo
- Update profile (name & photo URL) feature
- Fully responsive on mobile, tablet, and desktop
- Smooth animations using Animate.css
- Protected routes — details and profile require login
- 404 Not Found page

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `react-router-dom` | Client-side routing |
| `firebase` | Authentication (Email/Password + Google) |
| `react-hot-toast` | Toast notifications |
| `animate.css` | CSS animations |
| `tailwindcss` | Utility-first CSS styling |
| `@tailwindcss/vite` | Tailwind v4 Vite plugin |

## 🚀 Run Locally

```bash
git clone https://github.com/your-username/qurbanihat.git
cd qurbanihat
npm install
```

Create a `.env.local` file with your Firebase config:

```
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

```bash
npm run dev
```
