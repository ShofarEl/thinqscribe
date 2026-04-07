# Deploying ThinqScribe Frontend to Vercel

## Prerequisites
- GitHub account with your code pushed
- Vercel account (free tier available)
- Backend deployed on Render: https://thinqscribe-1.onrender.com

## Step-by-Step Deployment Guide

### 1. Prepare Your Repository

Ensure your code is pushed to GitHub:
```bash
git add .
git commit -m "Configure for Vercel deployment"
git push origin main
```

### 2. Create a Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub (recommended for easy integration)

### 3. Import Your Project

1. Click "Add New..." → "Project"
2. Import your GitHub repository
3. Select the `thinqscribe` repository

### 4. Configure Project Settings

**Framework Preset:** Vite

**Root Directory:** `client`

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 5. Set Environment Variables

Click "Environment Variables" and add:

```
VITE_API_URL=https://thinqscribe-1.onrender.com/api
```

**Important:** Make sure to add `/api` at the end of your Render URL!

### 6. Deploy

1. Click "Deploy"
2. Vercel will automatically:
   - Install dependencies
   - Build your React app
   - Deploy to their CDN
3. Wait for deployment (usually 1-3 minutes)

### 7. Get Your Live URL

Once deployed, you'll get a URL like:
```
https://thinqscribe.vercel.app
```

Or with your custom domain if configured.

### 8. Test Your Deployment

Visit your Vercel URL and test:
- ✅ Homepage loads
- ✅ Navigation works
- ✅ Writers page displays
- ✅ Login/Signup functionality
- ✅ API calls to Render backend work

## Custom Domain (Optional)

### Add Custom Domain

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `thinqscribe.com`)
4. Follow DNS configuration instructions

### DNS Configuration

Add these records to your domain provider:

**For root domain (thinqscribe.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Automatic Deployments

Vercel automatically redeploys when you push to your connected branch:

```bash
git add .
git commit -m "Update frontend"
git push origin main
```

**Branch Deployments:**
- `main` branch → Production deployment
- Other branches → Preview deployments

## Environment Variables Management

### Update Environment Variables

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Update `VITE_API_URL` if backend URL changes
5. Redeploy for changes to take effect

### Multiple Environments

You can set different variables for:
- Production
- Preview
- Development

## Troubleshooting

### Build Fails

**Check build logs:**
1. Go to Vercel Dashboard
2. Click on failed deployment
3. View build logs

**Common issues:**
- Missing dependencies: Run `npm install` locally first
- Environment variables not set
- Build errors in code

### API Calls Not Working

**Check:**
1. `VITE_API_URL` is set correctly with `/api` suffix
2. Backend is running on Render
3. CORS is enabled on backend
4. Network tab in browser DevTools for errors

### 404 on Page Refresh

This should be handled by `vercel.json` rewrites. If not:
1. Ensure `client/vercel.json` exists
2. Check rewrites configuration
3. Redeploy

### Blank Page

**Check:**
1. Browser console for errors
2. Ensure all environment variables are set
3. Verify build completed successfully
4. Check if assets are loading (Network tab)

## Performance Optimization

### Enable Analytics

1. Go to project settings
2. Enable "Analytics"
3. Monitor page load times and user metrics

### Enable Speed Insights

1. Install Vercel Speed Insights:
```bash
cd client
npm install @vercel/speed-insights
```

2. Add to your app:
```javascript
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <YourApp />
      <SpeedInsights />
    </>
  );
}
```

## Monitoring

### View Deployments
- Dashboard shows all deployments
- Click any deployment to view logs
- Preview deployments for each branch

### Real-time Logs
- Go to deployment
- Click "Functions" or "Build Logs"
- View real-time execution logs

## Vercel CLI (Optional)

Install Vercel CLI for local testing:

```bash
npm install -g vercel
```

**Commands:**
```bash
# Login
vercel login

# Deploy from local
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs
```

## Free Tier Limits

Vercel Free Tier includes:
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Global CDN
- Preview deployments

## Support Resources

- Vercel Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Status: https://www.vercel-status.com

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] API calls working
- [ ] Authentication working
- [ ] Mobile responsive
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled
- [ ] Environment variables set
- [ ] HTTPS working
- [ ] SEO meta tags present

## Next Steps

1. Set up custom domain
2. Enable analytics
3. Configure preview deployments
4. Set up GitHub integration for automatic deployments
5. Monitor performance and errors
