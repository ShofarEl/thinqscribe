# Deploying ThinqScribe Server to Render

## Prerequisites
- GitHub account with your code pushed
- MongoDB Atlas database (or other MongoDB instance)
- Render account (free tier available)

## Step-by-Step Deployment Guide

### 1. Prepare Your Repository
Ensure your code is pushed to GitHub:
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Create a Render Account
- Go to https://render.com
- Sign up with GitHub (recommended for easy integration)

### 3. Create a New Web Service

1. Click "New +" button → "Web Service"
2. Connect your GitHub repository
3. Select the `thinqscribe` repository
4. Configure the service:

**Basic Settings:**
- Name: `thinqscribe-api` (or your preferred name)
- Region: Choose closest to your users
- Branch: `main` (or your default branch)
- Root Directory: `server`
- Environment: `Node`
- Build Command: `npm install`
- Start Command: `npm start`

**Instance Type:**
- Free tier (or paid if needed)

### 4. Set Environment Variables

In the Render dashboard, add these environment variables:

```
NODE_ENV=production
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_random_string
PORT=10000
```

**Important Notes:**
- `MONGODB_URI`: Get this from MongoDB Atlas
  - Format: `mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority`
  - Make sure to whitelist Render's IP (or use 0.0.0.0/0 for all IPs)
- `JWT_SECRET`: Generate a secure random string (at least 32 characters)
- `PORT`: Render automatically assigns this, but 10000 is default

### 5. Deploy

1. Click "Create Web Service"
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Start your server
3. Wait for deployment to complete (usually 2-5 minutes)

### 6. Verify Deployment

Once deployed, you'll get a URL like:
```
https://thinqscribe-api.onrender.com
```

Test it by visiting:
```
https://your-app-name.onrender.com/
```

You should see: `{"message": "Thinqscribe API is running!"}`

### 7. Update Frontend Configuration

Update your client `.env` file with the Render URL:
```env
VITE_API_URL=https://your-app-name.onrender.com/api
```

## MongoDB Atlas Setup

If you haven't set up MongoDB Atlas:

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user
4. Whitelist IP addresses:
   - Click "Network Access"
   - Add IP Address: `0.0.0.0/0` (allows all IPs - for Render)
5. Get connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

## Troubleshooting

### Deployment Fails
- Check build logs in Render dashboard
- Verify all environment variables are set correctly
- Ensure `package.json` has correct start script

### MongoDB Connection Issues
- Verify MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Check connection string format
- Ensure database user has correct permissions

### Server Not Responding
- Check Render logs for errors
- Verify PORT is set to 10000 or use Render's assigned port
- Ensure server is listening on `0.0.0.0` not `localhost`

## Free Tier Limitations

Render's free tier:
- Spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- 750 hours/month free (enough for one service)

To keep it active:
- Upgrade to paid tier ($7/month)
- Use a service like UptimeRobot to ping your API every 10 minutes

## Automatic Deployments

Render automatically redeploys when you push to your connected branch:
```bash
git add .
git commit -m "Update server"
git push origin main
```

## Custom Domain (Optional)

1. In Render dashboard, go to your service
2. Click "Settings" → "Custom Domain"
3. Add your domain
4. Update DNS records as instructed

## Monitoring

- View logs: Render Dashboard → Your Service → Logs
- Check metrics: Dashboard shows CPU, memory, and request stats
- Set up alerts for downtime (paid feature)

## Support

- Render Docs: https://render.com/docs
- Community Forum: https://community.render.com
- MongoDB Atlas Support: https://www.mongodb.com/docs/atlas/
