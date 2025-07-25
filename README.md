# Christopher Vinciguerra - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features smooth animations, professional design, and excellent performance.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive**: Fully responsive design that works perfectly on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
├── public/
│   └── assets/
│       └── Chris Vinciguerra Resume 7-25-25.pdf
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header with animations
│   │   ├── Hero.tsx        # Hero section with animated background
│   │   ├── About.tsx       # About section with education & skills
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Projects.tsx    # Projects & leadership experience
│   │   ├── Contact.tsx     # Contact information & social links
│   │   └── Footer.tsx      # Simple footer
│   ├── data/
│   │   └── portfolio.ts    # All portfolio data and content
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles & Tailwind imports
├── dist/                   # Production build (generated)
├── CNAME                   # Custom domain for GitHub Pages
├── deploy.sh              # Deployment script
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ChrisVinciguerra/ChrisVinciguerra.github.io.git
cd ChrisVinciguerra.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with the production-ready files.

## 📝 Content

The website includes:

- **Hero Section**: Animated introduction with gradient text and floating background elements
- **About**: Education details and comprehensive technical skills with color-coded proficiency levels
- **Experience**: Detailed work history at xAI, Regeneron, and Syracuse University
- **Projects**: Featured projects including OnePolicy and MUSIX with technology tags
- **Leadership**: University club leadership experience
- **Contact**: Contact information and social links with hover effects

## 🎨 Design Features

- **Typography**: Clean, readable Inter font with proper hierarchy
- **Color Scheme**: Professional blues, purples, and grays with strategic accent colors
- **Layout**: Responsive grid system with proper spacing and shadows
- **Animations**: Smooth scroll animations, hover effects, and entrance animations
- **Navigation**: Fixed header with smooth scroll to sections and mobile menu

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Add navigation link in `Header.tsx`

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added to:
- `src/index.css` for global styles
- Component files for component-specific styles

### Content Updates

Update the content directly in `src/data/portfolio.ts`:
- `personalInfo` for basic information
- `education` for education details
- `skills` for technical skills
- `experience` for work history
- `projects` for project details
- `leadership` for leadership experience

## 🚀 Deployment

This project is configured for GitHub Pages deployment. The built files in the `dist` folder can be deployed to any static hosting service.

### Quick Deploy

```bash
./deploy.sh
```

This script builds the project and prepares the files for deployment.

### GitHub Pages Setup

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Set source to "Deploy from a branch"
4. Select `main` branch and `/docs` or `/` folder
5. Your site will be available at `https://yourusername.github.io`

### Custom Domain

The `CNAME` file is included for custom domain setup. Update it with your domain name.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Christopher Vinciguerra**
- Email: christophervin1@gmail.com
- LinkedIn: [linkedin.com/in/chris-vinciguerra/](https://linkedin.com/in/chris-vinciguerra/)
- Website: [chrisv.us](https://chrisv.us)
- GitHub: [github.com/ChrisVinciguerra](https://github.com/ChrisVinciguerra)

---

**Status**: ✅ Ready for deployment
**Last Updated**: January 2025
**Build Status**: Passing
