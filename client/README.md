# Thinqscribe Frontend

Modern React frontend for the Thinqscribe academic writing platform.

## Features

- Modern, responsive UI with Tailwind CSS
- Smooth animations with Framer Motion
- JWT authentication with protected routes
- Form validation with React Hook Form
- Toast notifications
- Mobile-first design

## Setup

1. Install dependencies:
```bash
cd client
npm install
```

2. Add your hero image:
- Place your hero image at `public/image.png`
- Place your logo at `public/logo1.png`

3. Start development server:
```bash
npm run dev
```

The app will run on http://localhost:3000

## Build for Production

```bash
npm run build
```

## Environment Variables

For production, update `.env.production`:
```
VITE_API_URL=https://your-backend-url.com
```

## Pages

- `/` - Landing page with hero section
- `/about` - About page
- `/login` - Login page
- `/signup` - Signup page with password strength indicator
- `/forgot-password` - Password reset
- `/writers` - Writers dashboard (protected)
- `/profile` - User profile (protected)

## Tech Stack

- React 18.2.0
- Vite 4.5.0
- React Router DOM 6.20.1
- Tailwind CSS 3.3.6
- Framer Motion 10.16.16
- Axios 1.6.2
- React Hook Form 7.48.2
- React Hot Toast 2.4.1
- Lucide React 0.294.0
