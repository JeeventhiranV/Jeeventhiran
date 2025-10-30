/**
 * Main Index Page
 * 
 * Portfolio homepage that assembles all sections
 */

import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Awards } from '@/components/Awards';
import { Education } from '@/components/Education';
import Feed from '@/components/Feed';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { seoData } from '@/data/portfolio';

const Index = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        {/* SEO Meta Tags */}
        <Helmet>
          <title>{seoData.title}</title>
          <meta name="description" content={seoData.description} />
          <meta name="keywords" content={seoData.keywords} />
          <meta name="author" content={seoData.author} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
        </Helmet>

        {/* Main Portfolio Content */}
        <div className="min-h-screen bg-background">
          <Navigation />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
      <Projects />
      <Awards />
      <Education />
      <Feed />
      <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Index;
