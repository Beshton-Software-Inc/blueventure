# Deployment Checklist

Use this checklist to deploy your Blue Venture Hacks website to Vercel.

---

## ✅ Pre-Deployment (Do These First)

### Local Testing
- [ ] Run `npm run build` successfully
- [ ] Run `npm start` and test the production build
- [ ] Test all pages load correctly
- [ ] Test forms (if Google Sheets is set up)
- [ ] Test on mobile view (Chrome DevTools)
- [ ] All links work correctly
- [ ] No console errors in browser

### Code Repository
- [ ] Create GitHub account (if you don't have one)
- [ ] Create new repository on GitHub
- [ ] Initialize git: `git init`
- [ ] Add files: `git add .`
- [ ] First commit: `git commit -m "Initial commit"`
- [ ] Add remote: `git remote add origin YOUR_REPO_URL`
- [ ] Push code: `git push -u origin main`
- [ ] Verify `.env.local` is NOT in GitHub (check .gitignore)

### Google Sheets Setup (Optional but Recommended)
- [ ] Google Sheet created with two tabs
- [ ] Column headers added to both sheets
- [ ] Google Apps Script created and saved
- [ ] Script deployed as web app
- [ ] Script URL copied
- [ ] Tested script URL in browser (returns JSON)

---

## 🚀 Vercel Deployment

### Account Setup
- [ ] Sign up at [vercel.com](https://vercel.com)
- [ ] Choose "Continue with GitHub"
- [ ] Authorize Vercel to access GitHub

### Project Import
- [ ] Click "Add New..." → "Project"
- [ ] Find your repository in the list
- [ ] Click "Import" on your repository

### Configuration
- [ ] Framework detected as "Next.js" ✅
- [ ] Build command: `next build` ✅
- [ ] Output directory: `.next` ✅
- [ ] Leave settings as default (don't change)

### Environment Variables
- [ ] Click "Environment Variables" section
- [ ] Add variable name: `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
- [ ] Paste your Google Apps Script URL
- [ ] Select all environments (Production, Preview, Development)
- [ ] Click "Add"

### Deploy
- [ ] Click "Deploy" button
- [ ] Wait 2-3 minutes for build to complete
- [ ] No errors in build logs

---

## ✅ Post-Deployment Testing

### Basic Tests
- [ ] Visit your Vercel URL: `your-project.vercel.app`
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Mobile menu works (test on phone or DevTools)

### Page Tests
- [ ] **Home** (`/`) - All sections display correctly
- [ ] **About** (`/about`) - Content loads properly
- [ ] **Programs** (`/programs`) - All programs visible
- [ ] **Hackathons** (`/hackathons`) - Page renders correctly
- [ ] **OPC** (`/opc`) - Content displays properly
- [ ] **Get Involved** (`/get-involved`) - All pathways visible
- [ ] **Contact** (`/contact`) - Form displays correctly

### Form Tests
- [ ] Submit contact form with test data
- [ ] Check Google Sheet for new row in "Contact Forms"
- [ ] Submit newsletter form
- [ ] Check Google Sheet for new row in "Newsletter"
- [ ] Verify timestamps are recorded
- [ ] Test form validation (empty fields, invalid email)

### Cross-Device Tests
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Test on tablet (if available)
- [ ] All layouts are responsive
- [ ] Text is readable on all devices

---

## 🌐 Custom Domain (Optional)

If you have a custom domain like `blueventurehacks.org`:

- [ ] Domain purchased from registrar
- [ ] Go to Vercel: Settings → Domains
- [ ] Click "Add" and enter your domain
- [ ] Configure DNS records (Vercel shows instructions)
- [ ] Wait for DNS propagation (5 min - 48 hours)
- [ ] Verify SSL certificate issued (automatic)
- [ ] Test custom domain in browser
- [ ] Both `domain.com` and `www.domain.com` work

---

## 📊 Monitoring Setup

### Analytics
- [ ] Enable Vercel Analytics (free)
- [ ] Verify analytics tracking works

### Notifications
- [ ] Enable deployment notifications
- [ ] Test email notifications work
- [ ] Set up Slack notifications (optional)

### Google Integration
- [ ] Submit site to Google Search Console
- [ ] Create Google Analytics property (optional)
- [ ] Add GA tracking code (optional)

---

## 🔒 Security & Performance

### Security
- [ ] HTTPS enabled (automatic with Vercel) ✅
- [ ] Environment variables not exposed in code ✅
- [ ] `.env.local` in `.gitignore` ✅
- [ ] No API keys in client-side code ✅

### Performance
- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best practices score > 90
- [ ] SEO score > 90

### SEO
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Open Graph images set (optional)
- [ ] Sitemap generated (optional)
- [ ] Robots.txt configured (optional)

---

## 📝 Content Updates

Before announcing your site:

- [ ] Update "hello@blueventurehacks.org" email
- [ ] Add real social media links (if available)
- [ ] Replace placeholder content with real info
- [ ] Add real statistics (if different from placeholders)
- [ ] Review all CTAs point to correct pages
- [ ] Proofread all content for typos
- [ ] Verify all claims are accurate
- [ ] Update copyright year in footer
- [ ] Add favicon (optional)
- [ ] Add site logo (optional)

---

## 🚀 Launch!

### Pre-Launch
- [ ] All checklist items above completed
- [ ] Stakeholders reviewed the site
- [ ] Final content review done
- [ ] Backup of Google Sheet made
- [ ] Contact form tested one more time

### Launch Day
- [ ] Announce on social media
- [ ] Send email to mailing list
- [ ] Update old website (if any)
- [ ] Post in relevant communities
- [ ] Share with partners and supporters

### Post-Launch
- [ ] Monitor form submissions
- [ ] Check for errors in Vercel logs
- [ ] Respond to inquiries promptly
- [ ] Track analytics
- [ ] Gather feedback

---

## 🔄 Ongoing Maintenance

### Weekly
- [ ] Check Google Sheet for new submissions
- [ ] Respond to inquiries
- [ ] Monitor Vercel deployment status

### Monthly
- [ ] Review analytics
- [ ] Update content as needed
- [ ] Check for broken links
- [ ] Update program information

### As Needed
- [ ] Add new blog posts (if you add a blog)
- [ ] Update event information
- [ ] Add testimonials
- [ ] Update statistics
- [ ] Fix reported issues

---

## 📞 Support Resources

If you need help:

1. **Deployment Issues**
   - See `VERCEL_DEPLOYMENT.md`
   - Check Vercel deployment logs
   - Vercel docs: [vercel.com/docs](https://vercel.com/docs)

2. **Form Issues**
   - See `GOOGLE_SHEETS_SETUP.md`
   - See `FORMS_INTEGRATION_SUMMARY.md`
   - Check Google Apps Script logs

3. **Code Issues**
   - See `README.md`
   - Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
   - Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

4. **General Questions**
   - See `QUICK_START.md`
   - See `PROJECT_SUMMARY.md`

---

## ✨ Success!

When all items are checked, your website is:
- ✅ Live and accessible
- ✅ Forms working and saving data
- ✅ Mobile-friendly
- ✅ Secure with HTTPS
- ✅ Fast and optimized
- ✅ Ready to empower students!

**Congratulations on launching Blue Venture Hacks!** 🎉

---

**Time Estimate:**
- First-time deployment: 1-2 hours
- With experience: 15-30 minutes
- Custom domain: +30 minutes

**Reminder:** You can always come back to this checklist and complete items later. The most important items are marked in the "Pre-Deployment" and "Vercel Deployment" sections.
