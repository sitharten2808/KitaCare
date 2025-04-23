
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-kitacare-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold">KC</span>
              </div>
              <span className="font-bold text-xl">KitaCare</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t('footer')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">{t('quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/government-services" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('government_services')}
                </Link>
              </li>
              <li>
                <Link to="/healthcare" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('healthcare')}
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('community')}
                </Link>
              </li>
              <li>
                <Link to="/employment" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('employment')}
                </Link>
              </li>
              <li>
                <Link to="/digital" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('digital')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">{t('contact')}</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>KitaCare Malaysia</p>
              <p>Email: info@kitacare.my</p>
              <p>Phone: +60 12-345-6789</p>
            </address>
          </div>
        </div>
        
        {/* Copyright Information */}
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} KitaCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
