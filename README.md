# Blue Venture Hacks Website

A modern, professional website for Blue Venture Hacks - a nonprofit organization focused on helping students and young professionals succeed in the age of AI.

## Features

- **Modern Design**: Built with a distinctive "Tech Optimism" aesthetic featuring bold typography, dynamic layouts, and engaging animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper metadata, semantic HTML, and Open Graph tags
- **Accessible**: WCAG-compliant with proper ARIA labels, keyboard navigation, and contrast ratios
- **Performance**: Fast page loads with Next.js optimizations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Plus Jakarta Sans (body), Sora (display) from Google Fonts

## Pages

1. **Home** (`/`) - Hero section, mission, programs overview, statistics
2. **About** (`/about`) - Mission, vision, values, who we serve
3. **Programs** (`/programs`) - Seminars, workshops, bootcamps, incubation
4. **Hackathons** (`/hackathons`) - Hackathon details and OPC Challenge
5. **OPC** (`/opc`) - One-Person Company concept and support
6. **Get Involved** (`/get-involved`) - Pathways for students, mentors, sponsors, etc.
7. **Contact** (`/contact`) - Contact form with validation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blueventuresite
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google Sheets integration (optional but recommended):
   - Follow the detailed instructions in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
   - Copy `.env.local.example` to `.env.local`
   - Add your Google Apps Script URL to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── programs/          # Programs page
│   ├── hackathons/        # Hackathons page
│   ├── opc/               # One Person Company page
│   ├── get-involved/      # Get Involved page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── Section.tsx       # Section wrapper
│   ├── CTABanner.tsx     # Call-to-action banner
│   ├── ContactForm.tsx   # Contact form with validation
│   └── NewsletterForm.tsx # Newsletter signup form
├── lib/                  # Utility functions
│   └── submitToSheets.ts # Google Sheets integration
├── public/               # Static assets
└── README.md            # This file
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. The primary colors are:

- **Primary Blue**: #0056e0 (primary-600)
- **Electric Blue**: #00b8e6 (electric-500)
- **Teal**: #05c4ad (teal-500)

### Content

Page content is currently embedded in the page components. To make content more manageable:

1. Create JSON/TS config files in a `data/` directory
2. Extract static content into these files
3. Import and map over the data in components

### Forms

The website includes two functional forms that submit to Google Sheets:

1. **Contact Form** (`/contact`) - Captures name, email, interest, and message
2. **Newsletter Form** (`/get-involved`) - Captures email for updates

To set up form submissions:

1. Follow the complete guide in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
2. Create a Google Sheet with "Contact Forms" and "Newsletter" tabs
3. Deploy a Google Apps Script as a web app
4. Add the script URL to your `.env.local` file

Forms include:
- Client-side validation
- Error handling
- Success states
- Loading indicators
- Accessible markup

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Add environment variable:
   - Name: `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
   - Value: Your Google Apps Script web app URL
5. Deploy!

### Other Platforms

Build the project and deploy the `.next` directory along with `public`, `package.json`, and other necessary files.

## Future Enhancements

- Add a CMS (Sanity, Contentful, etc.) for easier content management
- Implement blog/news section
- Add event calendar
- Integrate newsletter signup with email service (Mailchimp, ConvertKit)
- Connect forms to backend API
- Add testimonials carousel
- Implement dark mode
- Add more interactive animations

## Contributing

This is a nonprofit project. If you'd like to contribute improvements, please reach out to blue9ventures@gmail.com.

## License

© 2026 Blue Venture Hacks. All rights reserved.

## Contact

- Email: blue9ventures@gmail.com
- Website: [Blue Venture Hacks](http://localhost:3000)

---

Built with ❤️ for the next generation of AI-empowered innovators.
