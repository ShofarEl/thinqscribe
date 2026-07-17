
import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '1.1.1.1']);
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware - CORS Configuration with environment variable support
const getAllowedOrigins = () => {
  const envOrigins = process.env.ALLOWED_ORIGINS;
  
  if (envOrigins) {
    return envOrigins.split(',').map(origin => origin.trim());
  }
  
  // Fallback to hardcoded origins if env var not set
  return [
    'https://theskribe.com',
    'https://www.theskribe.com',
    'https://api.theskribe.com',
    'https://thinqscribe.com',
    'https://www.thinqscribe.com',
    'https://thinqscribe-4mly.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173'
  ];
};

const allowedOrigins = getAllowedOrigins();

console.log('Allowed CORS Origins:', allowedOrigins);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS Error: Origin ${origin} is not allowed`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection with optimized settings
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
      maxIdleTimeMS: 10000,
      retryWrites: true,
      w: 'majority'
    });
    
    console.log('✓ MongoDB connected successfully');
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Database: ${mongoUri.replace(/:[^:]*@/, ':****@')}`); // Hide credentials in logs
  } catch (error) {
    console.error('✗ MongoDB connection error:', error.message);
    console.error('\nTroubleshooting steps:');
    console.error('1. Check your MONGODB_URI in .env file');
    console.error('2. Ensure your IP address is whitelisted in MongoDB Atlas');
    console.error('3. Verify your database username and password are correct');
    console.error('4. Check your internet connection');
    console.error('5. Verify the connection string format: mongodb+srv://username:password@cluster.mongodb.net/database');
    process.exit(1);
  }
};

// Connection event listeners
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected. Attempting to reconnect...');
});

mongoose.connection.on('open', () => {
  console.log('✓ MongoDB connection established and ready');
});

// Connect to database
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Root route with health check
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Thinqscribe API is running!',
    status: 'active',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  const mongooseState = mongoose.connection.readyState;
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };
  
  res.status(200).json({
    status: 'ok',
    database: states[mongooseState] || 'unknown',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  
  // CORS error handling
  if (err.message.includes('CORS Error')) {
    return res.status(403).json({ 
      message: 'CORS Error: Your origin is not allowed to access this API',
      origin: req.get('origin')
    });
  }
  
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Server is running on http://0.0.0.0:${PORT}`);
  console.log(`📍 Domain: https://theskribe.com`);
  console.log(`🔐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📦 Node version: ${process.version}\n`);
});
