
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, languages, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('government_services'), path: '/government-services', icon: '🏛️' },
    { name: t('healthcare'), path: '/healthcare', icon: '🏥' },
    { name: t('community'), path: '/community', icon: '🤝' },
    { name: t('employment'), path: '/employment', icon: '💼' },
    { name: t('digital'), path: '/digital', icon: '📱' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-kitacare-blue rounded-md flex items-center justify-center">
            <span className="text-white font-bold">KC</span>
          </div>
          <span className="font-bold text-xl">KitaCare</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="hover:text-kitacare-purple transition-colors flex items-center gap-1"
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Change Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.values(languages).map((lang) => (
                <DropdownMenuItem 
                  key={lang.code} 
                  onClick={() => changeLanguage(lang.code)}
                  className={currentLanguage === lang.code ? "bg-accent" : ""}
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden rounded-full"
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
          <div className="container px-4 py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="block py-3 hover:text-kitacare-purple transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
