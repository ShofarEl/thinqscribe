# ThinqScribe

A modern academic writing platform connecting students with expert writers and AI tools across multiple disciplines.

## Overview

ThinqScribe is a full-stack web application that helps students find qualified academic writers specialized in various fields of study. The platform features a clean, elegant interface with comprehensive writer profiles, specialty tags, and direct WhatsApp integration for seamless communication.

## Features

- **Expert Writer Profiles**: Browse 8+ specialized academic fields including Literature, Science, Mathematics, Social Sciences, Arts, Technology, Business, and Music
- **Comprehensive Specialties**: Each field includes 12+ detailed specialty areas to ensure precise matching
- **Direct Communication**: Integrated WhatsApp contact for instant writer engagement
- **User Authentication**: Secure signup/login system with JWT authentication
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **AI Tools Integration**: Quick access to AI-powered academic assistance tools
- **Modern UI/UX**: Clean, professional design with smooth animations and micro-interactions

## Tech Stack

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

## Project Structure

```
thinqscribe/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React context providers
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main app component
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   └── package.json
│
├── server/                # Backend Express application
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── index.js          # Server entry point
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/thinqscribe.git
cd thinqscribe
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client
npm install
```

4. Configure environment variables

Create `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Create `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

1. Start the backend server
```bash
cd server
npm run dev
```

2. Start the frontend development server
```bash
cd client
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
```

### Backend (Heroku/Railway)
```bash
cd server
npm start
```

## Environment Variables

### Server
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)

### Client
- `VITE_API_URL` - Backend API URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

ThinqScribe - [Website](https://thinqscribe.com)

AI Tools - [ai.thinqscribe.com](https://ai.thinqscribe.com)

## Acknowledgments

- Design inspiration from modern academic platforms
- Icons by Lucide React
- Images from Unsplash
