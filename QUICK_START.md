# Quick Start Guide

Get your Blue Venture Hacks website up and running in minutes!

## 🚀 Local Development (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: View Your Site
Open http://localhost:3000 in your browser

**That's it!** Your website is running locally. 🎉

---

## 📝 Enable Form Submissions (15 minutes)

Forms will work without this, but submissions won't be saved. Follow these steps to connect to Google Sheets:

### Quick Checklist

- [ ] **Create Google Sheet**
  - Go to [Google Sheets](https://sheets.google.com)
  - Create new sheet: "Blue Venture Hacks - Form Submissions"
  - Add two tabs: "Contact Forms" and "Newsletter"
  
- [ ] **Add Headers**
  - Contact Forms: `Timestamp | Name | Email | Interest | Message`
  - Newsletter: `Timestamp | Email`

- [ ] **Create Apps Script**
  - Extensions > Apps Script
  - Copy code from [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
  - Save project

- [ ] **Deploy Script**
  - Deploy > New deployment
  - Type: Web app
  - Access: Anyone
  - Copy the URL

- [ ] **Configure Environment**
  ```bash
  cp .env.local.example .env.local
  # Edit .env.local and paste your script URL
  ```

- [ ] **Restart Server**
  ```bash
  npm run dev
  ```

- [ ] **Test Forms**
  - Visit http://localhost:3000/contact
  - Submit a test form
  - Check your Google Sheet!

**📚 Detailed Instructions:** See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)

---

## 🌐 Deploy to Production (10 minutes)

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variable:
     - Name: `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
     - Value: Your Google Apps Script URL
   - Click Deploy

3. **Done!** Your site is live! 🚀

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repo
   - Add environment variable in Site Settings

### Option 3: Other Platforms

Works on any platform that supports Next.js:
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render
- Cloudflare Pages

---

## 📋 Pre-Launch Checklist

Before going live, customize these:

- [ ] Update email address in Footer.tsx (`blue9ventures@gmail.com`)
- [ ] Add real social media links (currently placeholders)
- [ ] Review all page content for accuracy
- [ ] Test all forms work correctly
- [ ] Test on mobile devices
- [ ] Check all navigation links
- [ ] Add favicon (replace in `public/` folder)
- [ ] Update metadata in each page's `metadata` export
- [ ] Set up Google Analytics (optional)
- [ ] Set up error monitoring like Sentry (optional)

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Change these hex values
    500: '#0056e0',
    600: '#0043ad',
  },
}
```

### Update Content

All content is in the page files:
- `app/page.tsx` - Home
- `app/about/page.tsx` - About
- `app/programs/page.tsx` - Programs
- And so on...

### Add Pages

Create a new folder in `app/`:
```bash
mkdir app/blog
touch app/blog/page.tsx
```

---

## 🆘 Need Help?

### Common Issues

**Forms not submitting?**
- Check `.env.local` exists and has correct URL
- Restart dev server after adding `.env.local`
- Check browser console for errors

**Build errors?**
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Run `npm run build`

**Styling looks wrong?**
- Clear browser cache
- Check Tailwind classes are correct
- Restart dev server

### Documentation

- [Full Setup Guide](./GOOGLE_SHEETS_SETUP.md)
- [Forms Integration](./FORMS_INTEGRATION_SUMMARY.md)
- [Project Summary](./PROJECT_SUMMARY.md)
- [README](./README.md)

### Support

For issues specific to this codebase, check the documentation files.

For Next.js questions: [nextjs.org/docs](https://nextjs.org/docs)
For Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## 🎉 You're All Set!

Your Blue Venture Hacks website is ready to empower the next generation! 

**Quick Commands:**
```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Run production build locally
npm run lint     # Check for code issues
```

**Default URL:** http://localhost:3000

**Next Steps:**
1. Customize content for your organization
2. Connect forms to Google Sheets
3. Deploy to production
4. Share with the world! 🌍

---

Made with ❤️ for Blue Venture Hacks
