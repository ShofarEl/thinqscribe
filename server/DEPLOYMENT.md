# ThinqScribe Deployment Guide

This guide covers deploying ThinqScribe with proper CORS configuration for **theskribe.com** domain across both frontend and backend.

## 📋 Prerequisites

- MongoDB Atlas account (or local MongoDB instance)
- Node.js v16+
- npm or yarn
- Vercel account (for frontend)
- Render.com or Railway account (for backend)

---

## 🗄️ Step 1: Database Setup (MongoDB Atlas)

### Create MongoDB Atlas Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster:
   - **Region**: Choose closest to your users (e.g., us-east-1)
   - **Cluster Tier**: M0 (free tier) for development, M2+ for production
3. Create a database user:
   - **Username**: `thinqscribe_user` (or your choice)
   - **Password**: Use a strong, random password
   - **Database Role**: `readWriteAnyDatabase`
4. Whitelist IP addresses:
   - Add `0.0.0.0/0` for development (or specific IPs for production)
5. Copy the connection string (URI)

### Connection String Format

```
mongodb+srv://username:password@cluster-name.mongodb.net/thinqscribe?retryWrites=true&w=majority
```

Replace:
- `username`: Your database user
- `password`: Your database password
- `cluster-name`: Your cluster name

---

## 🔑 Step 2: Environment Variables

### Server Environment Variables (server/.env)

```env
# Server
PORT=5000
NODE_ENV=production

# Database
MONGODB_URI=mongodb+srv://thinqscribe_user:YOUR_PASSWORD@cluster-name.mongodb.net/thinqscribe?retryWrites=true&w=majority

# JWT
JWT_SECRET=generate_a_long_random_string_here_minimum_32_characters

# CORS - Allow theskribe.com domain and all subdomains
ALLOWED_ORIGINS=https://theskribe.com,https://www.theskribe.com,https://api.theskribe.com,https://thinqscribe.com,https://www.thinqscribe.com,https://thinqscribe-4mly.vercel.app,http://localhost:3000,http://localhost:5173
```

**Generate JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Client Environment Variables (client/.env.production)

```env
VITE_API_URL=https://api.theskribe.com
VITE_APP_DOMAIN=https://theskribe.com
```

---

## 🚀 Step 3: Backend Deployment (Render.com Example)

### Option A: Deploy to Render.com

1. **Push code to GitHub** (already done)

2. **Create Render service:**
   - Go to [Render.com](https://render.com)
   - Connect GitHub repository
   - Create new Web Service:
     - **Name**: `thinqscribe-api`
     - **Environment**: Node
     - **Build Command**: `cd server && npm install`
     - **Start Command**: `cd server && npm start`
     - **Plan**: Free or Starter

3. **Add Environment Variables** in Render dashboard:
   ```
   MONGODB_URI=mongodb+srv://thinqscribe_user:PASSWORD@cluster.mongodb.net/thinqscribe
   JWT_SECRET=your_generated_jwt_secret
   NODE_ENV=production
   ALLOWED_ORIGINS=https://theskribe.com,https://www.theskribe.com,https://api.theskribe.com,https://thinqscribe.com,https://www.thinqscribe.com,https://thinqscribe-4mly.vercel.app
   PORT=5000
   ```

4. **Configure Custom Domain:**
   - In Render settings, add custom domain: `api.theskribe.com`
   - Update DNS records at your domain registrar

### Option B: Deploy to Railway.app

1. Connect GitHub repository
2. Create service with environment variables
3. Railway will auto-assign a URL or use custom domain

---

## 🎨 Step 4: Frontend Deployment (Vercel)

### Deploy to Vercel

1. **Go to [Vercel.com](https://vercel.com)**
2. **Import project:**
   - Connect GitHub
   - Select `ShofarEl/thinqscribe`
   - Configure:
     - **Framework**: Vite
     - **Build Command**: `cd client && npm run build`
     - **Output Directory**: `client/dist`

3. **Add Environment Variables:**
   ```
   VITE_API_URL=https://api.theskribe.com
   VITE_APP_DOMAIN=https://theskribe.com
   ```

4. **Configure Custom Domains:**
   - Primary: `theskribe.com`
   - Alias: `www.theskribe.com`

---

## 🌐 Step 5: DNS Configuration

Point these records to your deployed services:

### For theskribe.com (at your registrar)

```
Record Type    | Name              | Value
---------------|-------------------|----------------------------------
A/CNAME        | @                 | vercel.com (or Vercel IP)
A/CNAME        | www               | vercel.com
A/CNAME        | api               | render.com (or Railway URL)
```

### Verify DNS Propagation

```bash
nslookup theskribe.com
nslookup api.theskribe.com
```

---

## 🔒 Step 6: SSL/TLS Certificates

**Vercel** and **Render** provide automatic SSL certificates for custom domains via Let's Encrypt.

- Vercel: Auto-generates for all domains
- Render: Generate via dashboard

---

## ✅ Step 7: Testing & Verification

### Test API Connection

```bash
# Check if API is running
curl https://api.theskribe.com/

# Check health status
curl https://api.theskribe.com/api/health
```

### Test Frontend

1. Visit `https://theskribe.com` in browser
2. Open DevTools → Console for any errors
3. Try signup/login flow
4. Verify tokens are sent correctly

### Test CORS

```bash
curl -i -X OPTIONS https://api.theskribe.com/api/auth/login \
  -H "Origin: https://theskribe.com" \
  -H "Access-Control-Request-Method: POST"
```

Expected response headers:
```
Access-Control-Allow-Origin: https://theskribe.com
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
```

---

## 🔄 Step 8: Continuous Deployment

Both Vercel and Render support automatic deployments:

1. **Push code to main branch**
2. **Vercel & Render automatically:**
   - Build the application
   - Run tests (if configured)
   - Deploy to production

Monitor deployments in dashboard.

---

## 📊 Monitoring & Debugging

### Backend Logs

**Render:**
```
Dashboard → Service → Logs
```

**Railway:**
```
Dashboard → Deployments → Logs
```

### Database Monitoring

**MongoDB Atlas:**
```
Dashboard → Clusters → Monitoring → Charts
```

Monitor:
- Connection count
- Query performance
- Storage usage

---

## 🚨 Troubleshooting

### CORS Errors

**Error:** "Access to XMLHttpRequest has been blocked by CORS policy"

**Solution:**
1. Check `ALLOWED_ORIGINS` includes frontend domain
2. Verify `credentials: true` in server CORS config
3. Clear browser cache and retry

### Database Connection Failed

**Error:** "MongoDB connection error"

**Solutions:**
1. Verify `MONGODB_URI` is correct
2. Check IP whitelist in MongoDB Atlas
3. Ensure username/password are correct
4. Test connection with MongoDB Compass

### API Returns 403 Forbidden

**Cause:** Origin not in CORS whitelist

**Fix:** Add domain to `ALLOWED_ORIGINS` in server environment

---

## 📚 Additional Resources

- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Render Deployment Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Express CORS Docs](https://expressjs.com/en/resources/middleware/cors.html)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)

---

## 🎯 Production Checklist

- [ ] MongoDB cluster created and configured
- [ ] Environment variables set in both services
- [ ] CORS whitelist includes all production domains
- [ ] SSL certificates configured
- [ ] DNS records pointing to correct services
- [ ] Backend health check responds (`/api/health`)
- [ ] Frontend loads without CORS errors
- [ ] Authentication flows work (signup/login)
- [ ] Tokens persist across page reloads
- [ ] Error handling displays user-friendly messages
- [ ] Database backups configured
- [ ] Monitoring/logging enabled

---

**Questions?** Check the logs or contact support.
