# ThinqScribe

A modern academic writing platform connecting students with expert writers and AI tools across multiple disciplines.

**Domain:** https://theskribe.com

## Overview

ThinqScribe is a full-stack web application that helps students find qualified academic writers specialized in various fields of study. The platform features a clean, elegant interface with comprehensive writer profiles and direct communication channels.

## ✨ Features

- **Expert Writer Profiles**: Browse 8+ specialized academic fields including Literature, Science, Mathematics, Social Sciences, Arts, Technology, Business, and Music
- **Comprehensive Specialties**: Each field includes 12+ detailed specialty areas to ensure precise matching
- **Direct Communication**: Integrated WhatsApp contact for instant writer engagement
- **User Authentication**: Secure signup/login system with JWT authentication
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **AI Tools Integration**: Quick access to AI-powered academic assistance tools
- **Modern UI/UX**: Clean, professional design with smooth animations and micro-interactions

## 📚 Tech Stack

### Frontend
- **React 18.2** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.18** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.0** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
thinqscribe/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React context providers (Auth)
│   │   ├── config/        # API configuration
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main app component
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   ├── .env.example       # Environment variables template
│   └── package.json
│
├── server/                # Backend Express application
│   ├── models/           # MongoDB models (User, etc.)
│   ├── routes/           # API routes (auth, users, etc.)
│   ├── middleware/       # Custom middleware (JWT auth)
│   ├── index.js          # Server entry point
│   ├── .env.example      # Environment variables template
│   ├── DEPLOYMENT.md     # Deployment guide
│   └── package.json
│
├── vercel.json            # Vercel deployment config (frontend)
├── render.yaml            # Render deployment config (backend)
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn**
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Git**

### Local Setup (Development)

#### 1. Clone the Repository

```bash
git clone https://github.com/ShofarEl/thinqscribe.git
cd thinqscribe
```

#### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/thinqscribe
JWT_SECRET=your-secret-key-here
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

Start the backend:

```bash
npm run dev
```

Backend will run on `http://localhost:5000`

#### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_DOMAIN=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

### Access the Application

Open your browser and navigate to:
- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000`

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/auth/signup` | Register new user | ❌ |
| `POST` | `/api/auth/login` | User login | ❌ |
| `GET` | `/api/auth/me` | Get current user | ✅ |
| `POST` | `/api/auth/forgot-password` | Request password reset | ❌ |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Check API and database status |

## 🌐 Environment Variables

### Server Environment (server/.env)

```env
# Server Configuration
PORT=5000
NODE_ENV=production

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/thinqscribe

# JWT Secret (generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
JWT_SECRET=your-long-random-secret-key

# CORS - Allowed Origins (comma-separated)
ALLOWED_ORIGINS=https://theskribe.com,https://www.theskribe.com,https://api.theskribe.com,http://localhost:3000
```

### Client Environment (client/.env)

**Development:**
```env
VITE_API_URL=http://localhost:5000
```

**Production:**
```env
VITE_API_URL=https://api.theskribe.com
VITE_APP_DOMAIN=https://theskribe.com
```

## 🚢 Deployment

### Frontend Deployment (Vercel)

1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   ```
   VITE_API_URL=https://api.theskribe.com
   ```
3. Deploy on push to main branch
4. Configure custom domain: `theskribe.com`

### Backend Deployment (Render.com / Railway)

1. Create new web service connected to GitHub
2. Set environment variables:
   ```
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   NODE_ENV=production
   ALLOWED_ORIGINS=https://theskribe.com,https://www.theskribe.com
   ```
3. Configure custom domain: `api.theskribe.com`

### Database Setup (MongoDB Atlas)

1. Create MongoDB Atlas cluster
2. Create database user with read/write permissions
3. Whitelist IP addresses (or use 0.0.0.0/0 for development)
4. Copy connection string to `MONGODB_URI`

**See [server/DEPLOYMENT.md](./server/DEPLOYMENT.md) for detailed deployment guide.**

## 📋 CORS Configuration

The application is configured to accept requests from:

**Production:**
- `https://theskribe.com`
- `https://www.theskribe.com`
- `https://api.theskribe.com`

**Development:**
- `http://localhost:3000`
- `http://localhost:5173`

Update `ALLOWED_ORIGINS` in server `.env` to add more domains.

## 🔐 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcryptjs (12 salt rounds)
- ✅ CORS policy enforcement
- ✅ Input validation with express-validator
- ✅ Secure token storage in localStorage
- ✅ Protected routes on frontend and backend
- ✅ Credentials included in CORS requests

## 🧪 Testing & Verification

### Test API Connection

```bash
# Check if API is running
curl https://api.theskribe.com

# Check health status
curl https://api.theskribe.com/api/health
```

### Test CORS

```bash
curl -i -X OPTIONS https://api.theskribe.com/api/auth/login \
  -H "Origin: https://theskribe.com" \
  -H "Access-Control-Request-Method: POST"
```

## 📦 Build for Production

### Frontend Build

```bash
cd client
npm run build
```

Output: `client/dist/`

### Backend Production Start

```bash
cd server
npm start
```

## 🐛 Troubleshooting

### CORS Errors

**Error:** "Access to XMLHttpRequest blocked by CORS policy"

**Solution:**
1. Check your domain is in `ALLOWED_ORIGINS`
2. Verify `credentials: true` in server CORS config
3. Clear browser cache and try again

### Database Connection Failed

**Error:** "MongoDB connection error"

**Solutions:**
1. Verify `MONGODB_URI` is correct
2. Check IP is whitelisted in MongoDB Atlas
3. Ensure credentials are correct
4. Test with MongoDB Compass

### API Returns 403 Forbidden

**Cause:** Origin not in CORS whitelist

**Fix:** Add your domain to `ALLOWED_ORIGINS` environment variable

### Token Expired

**Error:** "Token expired" on API requests

**Solution:** User needs to login again - old token is invalid

## 📚 Documentation

- [Deployment Guide](./server/DEPLOYMENT.md) - Complete production setup
- [Server README](./server/README.md) - Backend details
- [Client README](./client/README.md) - Frontend details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact & Links

- **Website:** [https://theskribe.com](https://theskribe.com)
- **API Base URL:** [https://api.theskribe.com](https://api.theskribe.com)
- **GitHub:** [github.com/ShofarEl/thinqscribe](https://github.com/ShofarEl/thinqscribe)
- **AI Tools:** [ai.theskribe.com](https://ai.theskribe.com)

## 🙏 Acknowledgments

- Design inspiration from modern academic platforms
- Icons by [Lucide React](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)
- Database: [MongoDB](https://www.mongodb.com)
- Deployment: [Vercel](https://vercel.com) & [Render](https://render.com)
