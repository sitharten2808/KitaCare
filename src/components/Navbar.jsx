import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { currentLanguage, languages, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('government_services'), path: '/government-services', icon: '🏛️' },
    { name: t('healthcare'), path: '/healthcare', icon: '🏥' },
    { name: t('community'), path: '/community', icon: '🤝' },
    { name: t('employment'), path: '/employment', icon: '💼' },
    { name: t('digital'), path: '/digital', icon: '📱' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border transition-colors duration-200">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-kitacare-blue rounded-md flex items-center justify-center">
            <span className="text-white font-bold">KC</span>
          </div>
          <span className="font-bold text-xl text-foreground">KitaCare</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`relative text-foreground hover:text-kitacare-blue transition-colors flex items-center gap-2 text-sm font-medium ${
                isActive(link.path) ? 'text-kitacare-blue' : ''
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
              {isActive(link.path) && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-kitacare-blue rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={`rounded-full text-foreground hover:bg-accent ${
                  currentLanguage ? 'bg-accent/50' : ''
                }`}
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">Change Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border-border">
              {Object.values(languages).map((lang) => (
                <DropdownMenuItem 
                  key={lang.code} 
                  onClick={() => changeLanguage(lang.code)}
                  className={`${
                    currentLanguage === lang.code 
                      ? "bg-accent text-foreground" 
                      : "text-foreground hover:bg-accent/50"
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden rounded-full text-foreground hover:bg-accent"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-6 py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`block py-3 text-foreground hover:text-kitacare-blue transition-colors flex items-center gap-2 ${
                  isActive(link.path) ? 'text-kitacare-blue' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
                {isActive(link.path) && (
                  <div className="ml-2 w-2 h-2 bg-kitacare-blue rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
