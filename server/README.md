# Thinqscribe Backend API

Complete Node.js/Express backend for the Thinqscribe academic writing platform.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Configure environment variables in `.env`:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
PORT=5000
```

3. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication Routes

#### POST /api/auth/signup
Register a new user.
```bash
curl -X POST http://localhost:5000/api/auth/signup \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

#### POST /api/auth/login
Login existing user.
```bash
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"john@example.com","password":"password123"}'
```

#### GET /api/auth/me
Get current user (protected route).
```bash
curl http://localhost:5000/api/auth/me \
-H "Authorization: Bearer YOUR_JWT_TOKEN"
```

#### POST /api/auth/forgot-password
Request password reset.
```bash
curl -X POST http://localhost:5000/api/auth/forgot-password \
-H "Content-Type: application/json" \
-d '{"email":"john@example.com"}'
```

## Tech Stack

- Node.js with ES Modules
- Express.js 4.18.2
- MongoDB with Mongoose 8.0.3
- JWT authentication
- bcryptjs for password hashing
- express-validator for input validation
