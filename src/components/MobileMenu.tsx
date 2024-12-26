'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Social Links
const socialLinks = [
  { href: 'https://x.com/interviewmaster', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://linkedin.com/company/interviewmaster', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://facebook.com/interviewmaster', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://instagram.com/interviewmaster', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://github.com/interviewmaster', icon: FaGithub, label: 'GitHub' },
];

// Navigation Menus
const navigationMenus = [
  {
    title: 'Products',
    links: [
      { href: '/products/resume-builder', label: 'Resume Builder' },
      { href: '/products/mock-interviews', label: 'Mock Interviews' },
      { href: '/products/ai-feedback', label: 'AI Feedback' },
      { href: '/products/skills-analyzer', label: 'Skills Analyzer' },
      { href: '/products/interview-questions', label: 'Interview-Questions' },
      { href: '/products/Practice-Tests', label: 'Practice-Tests' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services/consultation', label: 'Career Consultation' },
      { href: '/services/cv-revision', label: 'CV Revision' },
      { href: '/services/mock-tests', label: 'Mock Tests' },
      { href: '/services/interview-coaching', label: 'Interview Coaching' },
      { href: '/services/personal-branding', label: 'Personal Branding' },
      { href: '/services/salary-negotiation', label: 'Salary Negotiation' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources/blog', label: 'Blog' },
      { href: '/resources/faq', label: 'FAQ' },
      { href: '/resources/ebooks', label: 'Ebooks & Guides' },
      { href: '/resources/tutorials', label: 'Tutorials' },
      { href: '/resources/webinars', label: 'Webinars' },
      { href: '/resources/newsletters', label: 'Newsletters' },
    ],
  },
  {
    title: 'Community',
    links: [
      { href: '/community/forums', label: 'Forums' },
      { href: '/community/events', label: 'Events' },
      { href: '/community/mentorship', label: 'Mentorship' },
      { href: '/community/success-stories', label: 'Success Stories' },
      { href: '/community/meetups', label: 'Meetups' },
      { href: '/community/hackathons', label: 'Hackathons' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/company/about', label: 'About Us' },
      { href: '/company/careers', label: 'Careers' },
      { href: '/company/partners', label: 'Partners' },
      { href: '/company/contact', label: 'Contact Us' },
      { href: '/company/press', label: 'Press' },
      { href: '/company/investors', label: 'Investors' },
    ],
  },
];

// Mobile Menu Component
export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="md:hidden relative">
      {/* Mobile Menu Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        className="text-foreground"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </Button>

      {/* Mobile Menu Panel */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              if (!isOpen) {
                document.body.style.overflow = 'auto';
              }
            }}
            className={cn(
              'fixed top-0 left-0 w-3/4 h-full bg-background p-6 z-40 shadow-lg',
              'flex flex-col gap-6 overflow-y-scroll'
            )}
            aria-hidden={!isOpen}
          >
            {/* Navigation Links */}
            <div className="flex flex-col gap-6">
              {navigationMenus.map((menu, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h2 className="text-lg font-semibold text-foreground">{menu.title}</h2>
                  {menu.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex justify-between gap-4 mt-auto">
              {socialLinks.map((social, idx) => (
                <Link key={idx} href={social.href} target="_blank" aria-label={social.label}>
                  <social.icon
                    className="text-foreground hover:text-primary transition-colors"
                    size={20}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
