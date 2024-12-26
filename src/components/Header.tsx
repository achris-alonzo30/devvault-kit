/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa6';

import { Logo } from './Logo';
import { NavLink } from './NavLink'; // Ensure NavLink is updated
import { MobileMenu } from './MobileMenu';
import { MaxWidthWrapper } from './MaxWidthWrapper';
import { UserButton } from '../features/auth/components/UserButton';
import { UserButtonLoading } from '../features/auth/components/UserButtonLoading';

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

const dropdownClasses = cn(
  'absolute hidden group-hover:flex flex-col mt-2 w-72 py-4 px-6 rounded-lg shadow-lg',
  'backdrop-blur-md bg-white/10 border border-white/20',
  'transition-transform transform scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 z-50'
);

export const Header = () => {
  const router = useRouter();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  // Scroll listener for changing header style when scrolled
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 100);
  });

  // Clear active menu after a timeout
  useEffect(() => {
    if (activeMenu !== null) {
      const timeout = setTimeout(() => setActiveMenu(null), 2000);
      return () => clearTimeout(timeout);
    }
  }, [activeMenu]);

  // Handle menu navigation
  const handleMenuClick = (href: string) => {
    // Push the clicked route to the router
    router.push(href);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ duration: 1.25, ease: 'easeInOut' }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 py-4 md:py-6',
        scrolled
          ? 'bg-background/95 backdrop-blur-lg border-b border-background/50'
          : 'bg-background'
      )}
    >
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between">
          <Logo className="flex-shrink-0" />

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navigationMenus.map((menu, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setActiveMenu(idx)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className="text-white text-lg hover:text-[#fcba28] font-semibold"
                  aria-expanded={activeMenu === idx}
                  aria-label={menu.title}
                >
                  {menu.title}
                </button>
                <div className={cn(dropdownClasses, activeMenu === idx && 'block')}>
                  {menu.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      onClick={() => handleMenuClick(link.href)}
                      className="block py-2 px-4 text-base text-white hover:bg-white/20 rounded-md"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </ul>

          {/* Social Links & User Actions */}
          <ul className="hidden md:flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <Link
                key={idx}
                target="_blank"
                href={social.href}
                aria-label={social.label}
              >
                <social.icon className="text-2xl text-muted-foreground hover:text-[#fcba28] transition duration-200 ease-in-out" />
              </Link>
            ))}
            <AuthLoading>
              <UserButtonLoading />
            </AuthLoading>
            <Unauthenticated>
              <button
                onClick={() => router.push('/auth')}
                className="px-6 py-2 rounded-full font-semibold bg-transparent border-2 border-[#fcba28] hover:bg-[#fcba28] text-[#fcba28] hover:text-background transition duration-200 ease-in-out"
              >
                Login
              </button>
            </Unauthenticated>
            <Authenticated>
              <UserButton />
            </Authenticated>
          </ul>

          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </MaxWidthWrapper>
    </motion.header>
  );
};
