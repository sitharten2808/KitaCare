import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">😕</div>
        <h1 className="text-4xl font-bold mb-4">{t('not_found')}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('not_found_message')}
        </p>
        <div className="space-x-4">
          <Button 
            onClick={() => navigate("/")}
            size="lg"
            className="bg-kitacare-blue hover:bg-blue-700"
          >
            {t('back_home')}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            size="lg"
          >
            {t('back_home')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
