# Jeeventhiran V - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Java Full Stack Developer. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Smooth Animations**: Framer Motion powered transitions and effects
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Modular Architecture**: Clean code structure with easy-to-edit data files
- **Interactive UI**: Smooth scrolling, active section highlighting, and typing effects
- **Contact Form**: Validated contact form with toast notifications
- **Performance Optimized**: Fast loading with optimized assets

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar with theme toggle
│   ├── Hero.tsx         # Hero section with typing animation
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Technical skills with progress bars
│   ├── Experience.tsx   # Work experience timeline
│   ├── Projects.tsx     # Featured projects showcase
│   ├── Awards.tsx       # Awards and recognition
│   ├── Education.tsx    # Academic qualifications
│   ├── Contact.tsx      # Contact form and social links
│   ├── Footer.tsx       # Site footer
│   └── ScrollToTop.tsx  # Scroll to top button
├── context/
│   └── ThemeContext.tsx # Dark/light theme management
├── data/
│   └── portfolio.ts     # Portfolio data (EDIT THIS FILE)
├── pages/
│   ├── Index.tsx        # Main homepage
│   └── NotFound.tsx     # 404 page
└── hooks/               # Custom React hooks
```

## 🎨 Design System

The design system uses semantic tokens defined in `src/index.css` and `tailwind.config.ts`:

- **Primary Colors**: Professional indigo-blue (#3B82F6 family)
- **Secondary Colors**: Complementary teal/cyan accents
- **Typography**: Clean, modern font hierarchy
- **Animations**: Smooth transitions and micro-interactions
- **Shadows**: Elegant depth with subtle shadows
- **Gradients**: Beautiful gradient overlays

## 📝 How to Edit Content

### Personal Information

Edit `src/data/portfolio.ts` to update:

- Personal details (name, email, location)
- Social media links
- About section content
- Technical skills and proficiency levels
- Work experience details
- Project information
- Awards and achievements
- Education history

### Example: Adding a New Skill

```typescript
// In src/data/portfolio.ts
backend: {
  title: "Backend Development",
  skills: [
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 90 }, // Add new skill
    // ... existing skills
  ]
}
```

### Example: Adding a New Project

```typescript
// In src/data/portfolio.ts
export const projects = [
  {
    id: 2, // Increment ID
    title: "Your New Project",
    category: "Web Application",
    description: "Project description...",
    // ... other fields
  }
];
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser at `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📦 Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
```

3. Push the `dist` folder to `gh-pages` branch or use GitHub Actions

### Other Platforms

The built files in `dist/` can be deployed to:
- Vercel
- Netlify
- AWS S3
- Firebase Hosting
- Any static hosting service

## 📄 Resume

Place your resume PDF file at `public/assets/resume.pdf` to enable the download functionality.

## 🎯 SEO Optimization

The site includes:
- Dynamic meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card tags
- Semantic HTML structure
- Clean URL structure
- Mobile-friendly viewport settings

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Helmet Async** - SEO meta tags management
- **React Router** - Client-side routing
- **Shadcn UI** - Accessible component library
- **React Icons** - Icon library
- **Sonner** - Toast notifications

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Colors

Edit colors in `src/index.css`:
```css
:root {
  --primary: 221 83% 53%;        /* Change primary color */
  --accent: 187 85% 43%;         /* Change accent color */
  --gradient-primary: linear-gradient(...); /* Change gradient */
}
```

### Fonts

Add custom fonts in `index.html` and update Tailwind config.

### Animations

Customize animations in `tailwind.config.ts` keyframes section.

## 📧 Contact Form Setup

The contact form currently shows a success message. To connect it to a backend:

1. Set up a backend API endpoint (Node.js/Express with Nodemailer)
2. Update the `handleSubmit` function in `src/components/Contact.tsx`
3. Replace the TODO comment with your API call

### Example Backend Setup (Node.js + Nodemailer)

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  await transporter.sendMail({
    from: email,
    to: 'vjeeventhiran01@gmail.com',
    subject: `Portfolio Contact: ${name}`,
    text: message
  });

  res.json({ success: true });
});
```

## 📜 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Jeeventhiran V**
- Email: vjeeventhiran01@gmail.com
- LinkedIn: [Connect on LinkedIn](https://www.linkedin.com/in/jeeventhiran-v)
- GitHub: [@jeeventhiran](https://github.com/jeeventhiran)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
