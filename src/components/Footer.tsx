/**
 * Footer Component
 * 
 * Site footer with copyright and social links
 */

import { Linkedin, Github, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.social.linkedin,
    },
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.social.github,
    },
    {
      name: 'Email',
      icon: Mail,
      url: personalInfo.social.email,
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-smooth"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} {personalInfo.name}. Built with 
              <Heart className="h-4 w-4 text-red-500 fill-red-500 inline-block" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
