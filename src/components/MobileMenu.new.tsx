'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

// Social Links and navigationMenus arrays remain the same...

// Mobile Menu Component
export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('MobileMenu mounted');
    setMounted(true);
    return () => {
      console.log('MobileMenu unmounted');
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    console.log('MobileMenu open state changed:', isOpen);
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        console.log('Clicked outside, closing menu');
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className={cn(
            'fixed top-0 left-0 w-3/4 h-full bg-background p-6 z-50 shadow-lg',
            'flex flex-col gap-6 overflow-y-auto'
          )}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <FaTimes size={24} />
          </Button>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 mt-12">
            {navigationMenus.map((menu, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-foreground">{menu.title}</h2>
                {menu.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
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
              <Link 
                key={idx} 
                href={social.href} 
                target="_blank" 
                aria-label={social.label}
                onClick={() => setIsOpen(false)}
              >
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
  );

  return (
    <div className="md:hidden relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        className="text-foreground"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </Button>

      {mounted && createPortal(menuContent, document.body)}
    </div>
  );
};
