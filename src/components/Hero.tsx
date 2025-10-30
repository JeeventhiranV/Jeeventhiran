/**
 * Hero Section Component
 * 
 * Landing section with animated typing effect and call-to-actions
 * Features gradient background and floating animations
 */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { personalInfo } from '@/data/portfolio';
import profilePhoto from '@/assets/profile-photo.jpg';

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentTitle = personalInfo.rotatingTitles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        } else {
          // Move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.rotatingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  // Scroll to contact section
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Download resume
  const handleDownloadResume = () => {
    // Note: Place resume.pdf in public/assets/ folder
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Jeeventhiran_V_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-soft -z-10" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Avatar */}
              <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-background shadow-elegant ring-4 ring-primary/20 relative z-10">
                <AvatarImage src={profilePhoto} alt={personalInfo.name} className="object-cover" />
                <AvatarFallback className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-lg font-medium text-muted-foreground">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Rotating title with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 h-12 flex items-center justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              {displayedText}
              <span className="animate-pulse-glow">|</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-md text-muted-foreground mb-12"
          >
            📍 {personalInfo.location}
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-primary text-white hover:opacity-90 transition-smooth shadow-elegant group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
              Get In Touch
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-20"
          >
            <ChevronDown className="h-8 w-8 mx-auto text-muted-foreground animate-bounce" />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
