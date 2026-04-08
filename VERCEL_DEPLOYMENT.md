# Vercel Deployment Guide

Complete guide to deploy your Blue Venture Hacks website to Vercel.

## Why Vercel?

- ✅ **Free tier** for personal/nonprofit projects
- ✅ **Automatic HTTPS** with SSL certificate
- ✅ **Global CDN** for fast loading worldwide
- ✅ **Auto-deploy** on git push
- ✅ **Zero configuration** for Next.js
- ✅ **Built-in analytics** and monitoring
- ✅ **Custom domains** supported

---

## Prerequisites

- [ ] Git repository (GitHub, GitLab, or Bitbucket)
- [ ] Vercel account (free - sign up at vercel.com)
- [ ] Google Sheets URL (optional, but recommended for forms)

---

## Method 1: Deploy from GitHub (Recommended)

### Step 1: Push Your Code to GitHub

If you haven't already:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Blue Venture Hacks website"

# Create a new repository on GitHub
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Important:** Make sure `.env.local` is in your `.gitignore` (it already is). Never commit environment variables to GitHub!

### Step 2: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest)
4. Authorize Vercel to access your GitHub account

### Step 3: Import Your Project

1. From Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"blueventuresite"** (or your repo name)
4. Click **"Import"**

### Step 4: Configure Project Settings

Vercel will auto-detect Next.js. You should see:

- **Framework Preset:** Next.js ✅
- **Build Command:** `next build` ✅
- **Output Directory:** `.next` ✅
- **Install Command:** `npm install` ✅

**Do not change these unless necessary.**

### Step 5: Add Environment Variables

This is the most important step for forms to work!

1. Click on **"Environment Variables"** section
2. Add your variable:
   - **Name:** `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
   - **Value:** Your Google Apps Script URL
     ```
     https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
     ```
   - **Environments:** Check all (Production, Preview, Development)

3. Click **"Add"**

**If you haven't set up Google Sheets yet:**
- You can skip this for now and add it later
- Forms will display but won't save submissions
- See `GOOGLE_SHEETS_SETUP.md` to set up later

### Step 6: Deploy!

1. Click **"Deploy"**
2. Wait 2-3 minutes while Vercel builds your site
3. You'll see a progress screen with logs
4. When done, you'll see: **"Congratulations! Your project is live!"** 🎉

### Step 7: View Your Live Site

1. Click the **screenshot** or **"Visit"** button
2. Your site is now live at: `your-project-name.vercel.app`
3. Test all pages and forms!

---

## Method 2: Deploy with Vercel CLI

For advanced users who prefer command line:

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

Follow the email verification link.

### Step 3: Deploy

```bash
# From your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Your account)
# - Link to existing project? No
# - Project name? (press enter for default)
# - Directory? ./ (press enter)
```

### Step 4: Add Environment Variables

```bash
vercel env add NEXT_PUBLIC_GOOGLE_SHEETS_URL
```

Paste your Google Sheets URL when prompted.

### Step 5: Redeploy with Environment Variable

```bash
vercel --prod
```

---

## After Deployment

### ✅ Checklist

- [ ] Visit your live site URL
- [ ] Test navigation on all pages
- [ ] Test contact form submission
- [ ] Test newsletter form
- [ ] Check Google Sheet for new submissions
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Verify images/assets load correctly

### 📊 View Your Deployment

From your Vercel dashboard:
- **Domains:** See your live URL(s)
- **Deployments:** View all deployment history
- **Analytics:** Track page views (if enabled)
- **Logs:** View runtime logs
- **Settings:** Manage environment variables

---

## Custom Domain Setup (Optional)

### Add Your Own Domain

1. **Buy a domain** (from Namecheap, GoDaddy, Google Domains, etc.)

2. **In Vercel:**
   - Go to your project
   - Click **"Settings"** → **"Domains"**
   - Click **"Add"**
   - Enter your domain: `blueventurehacks.org`
   - Click **"Add"**

3. **Configure DNS:**

   Vercel will show you what DNS records to add:

   **Option A - Nameservers (Easiest):**
   - Point your domain's nameservers to Vercel
   - Vercel manages everything

   **Option B - A Record:**
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

4. **Wait for DNS propagation** (5 minutes to 48 hours)

5. **Verify:** Visit your custom domain!

### SSL Certificate

Vercel automatically provisions SSL certificates for your domain. No action needed! 🔒

---

## Auto-Deploy on Git Push

Once deployed, Vercel automatically deploys when you push to GitHub:

```bash
# Make changes to your site
git add .
git commit -m "Update homepage content"
git push origin main

# Vercel automatically detects the push and deploys!
```

**You'll get:**
- Preview URL for every branch
- Production URL for main branch
- Email notifications when deployment completes

---

## Environment Variables Management

### View/Edit Variables

1. Go to your project on Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Edit or add new variables
4. **Important:** Redeploy after changing variables

### Add a New Variable

```bash
# Via CLI
vercel env add VARIABLE_NAME

# Or in Vercel dashboard
Settings → Environment Variables → Add
```

### Update Existing Variable

1. Delete the old variable
2. Add the new one
3. Redeploy: Click **"Deployments"** → **"Redeploy"** on latest deployment

---

## Troubleshooting

### Build Fails

**Check build logs:**
1. Go to **"Deployments"**
2. Click the failed deployment
3. Read the error message

**Common issues:**
- Missing dependencies: Run `npm install` locally first
- TypeScript errors: Fix type errors locally with `npm run build`
- Environment variables: Make sure they're added in Vercel

**Fix:**
```bash
# Locally test the production build
npm run build

# If it works locally, push again
git add .
git commit -m "Fix build issues"
git push origin main
```

### Forms Don't Submit

**Check:**
1. Environment variable is added in Vercel
2. Variable name is exactly: `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
3. Google Apps Script is deployed with "Anyone" access
4. Test the Google Sheets URL in your browser (should return JSON)

**Fix:**
1. Go to Settings → Environment Variables
2. Verify the URL is correct
3. Redeploy the site

### Site Shows Old Content

**Clear cache:**
- Vercel CDN may cache old content
- In Vercel: **Deployments** → **"..."** menu → **"Redeploy"**
- Or push a new commit to trigger fresh deployment

### Custom Domain Not Working

**Check DNS:**
```bash
# Check if DNS has propagated
dig blueventurehacks.org

# Or use online tool
# https://dnschecker.org
```

**Wait:** DNS can take up to 48 hours (usually 5-30 minutes)

### 404 Errors

If you see 404 on pages:
- Check file structure in `app/` directory
- Verify routes match (e.g., `app/about/page.tsx` → `/about`)
- Redeploy

---

## Performance Optimization

### Enable Analytics (Free)

1. Go to **"Analytics"** tab in your project
2. Click **"Enable"**
3. See page views, visitor data, and performance metrics

### Edge Functions

Vercel automatically deploys your site to the Edge (fast global CDN).

**Your site is served from the closest location to each visitor!** 🚀

### Monitoring

Set up monitoring:
1. **Settings** → **"Notifications"**
2. Enable email alerts for:
   - Failed deployments
   - Domain configuration issues

---

## Deployment Workflow

### Development → Production

```bash
# 1. Work on features locally
npm run dev

# 2. Test locally
npm run build
npm start

# 3. Commit and push
git add .
git commit -m "Add new feature"
git push origin main

# 4. Vercel auto-deploys
# 5. Check email for deployment status
# 6. Visit live site to verify
```

### Preview Deployments

Create a branch for testing:

```bash
# Create feature branch
git checkout -b feature/new-page

# Make changes and push
git add .
git commit -m "Add new page"
git push origin feature/new-page
```

Vercel creates a **preview URL** for this branch!
- Test changes before merging to main
- Share preview link with team
- Merge when ready → auto-deploys to production

---

## Vercel CLI Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List deployments
vercel list

# View logs
vercel logs

# Remove project
vercel remove
```

---

## Cost & Limits (Free Tier)

Vercel Free Tier includes:

✅ Unlimited deployments
✅ Unlimited websites
✅ 100 GB bandwidth/month
✅ Automatic HTTPS
✅ Custom domains
✅ Preview deployments
✅ Analytics (basic)

**For a nonprofit like Blue Venture Hacks, the free tier is plenty!**

If you exceed limits (unlikely):
- Pro plan: $20/month per team member
- See [vercel.com/pricing](https://vercel.com/pricing)

---

## Security Best Practices

### ✅ Do's

- ✅ Use environment variables for sensitive data
- ✅ Keep `.env.local` in `.gitignore`
- ✅ Enable automatic security updates
- ✅ Use HTTPS (automatic with Vercel)
- ✅ Review deployment logs regularly

### ❌ Don'ts

- ❌ Never commit `.env.local` to git
- ❌ Don't share Google Sheets script URL publicly
- ❌ Don't disable HTTPS
- ❌ Don't use production API keys in preview deployments

---

## Getting Help

### Vercel Support

- **Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Support:** Available in dashboard (Pro/Enterprise)

### Common Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Custom Domains Guide](https://vercel.com/docs/custom-domains)

---

## Quick Reference

### URLs After Deployment

- **Production:** `your-project.vercel.app`
- **Custom domain:** `blueventurehacks.org` (if configured)
- **Vercel Dashboard:** `vercel.com/your-username/your-project`

### Important Settings

- **Environment Variables:** Settings → Environment Variables
- **Domain Management:** Settings → Domains
- **Build Settings:** Settings → General
- **Deployment History:** Deployments tab

---

## 🎉 You're Done!

Your Blue Venture Hacks website is now live on Vercel!

**Share your site:**
- Post on social media
- Email to supporters
- Add to Google Search Console
- Submit to nonprofit directories

**Next steps:**
1. Set up custom domain (optional)
2. Enable analytics
3. Monitor form submissions in Google Sheets
4. Keep updating and improving!

---

## Need Help?

If you get stuck:

1. Check the **Vercel deployment logs** (most issues are shown there)
2. Review the **troubleshooting section** above
3. Test your build locally: `npm run build`
4. Check environment variables are correct
5. Verify Google Sheets integration is working

**Your site should be live in about 5 minutes!** 🚀

---

Made with ❤️ for Blue Venture Hacks
