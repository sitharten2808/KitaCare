import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '../config/services';

const Index = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: '🔍',
      title: t('easy_access'),
      description: t('easy_access_desc'),
    },
    {
      icon: '🌐',
      title: t('multilingual'),
      description: t('multilingual_desc'),
    },
    {
      icon: '📱',
      title: t('mobile_friendly'),
      description: t('mobile_friendly_desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 text-center px-4 space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading animate-fade-in">
            {t('welcome')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body animate-fade-in opacity-90">
            {t('hero_subtitle')}
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              {t('get_started')}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              {t('learn_more')}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <h2 className="text-center font-heading mb-16 text-foreground">{t('about_title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-card">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground font-body">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service categories with their icons and colors */}
            <Card className="col-span-1 md:col-span-1 row-span-1 md:row-span-1 md:col-start-2 md:row-start-2 flex items-center justify-center p-6 shadow-md hover:shadow-xl transition-all border-2 border-kitacare-blue bg-card">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 bg-kitacare-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">KC</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">KitaCare Hub</h2>
              </div>
            </Card>
            
            {/* Service Cards */}
            {services.map((service, index) => {
              const position = getGridPosition(index);
              
              return (
                <Link to={service.path} key={service.title}>
                  <Card className={`
                    col-span-1 row-span-1
                    md:col-start-${position.col} 
                    md:row-start-${position.row}
                    flex flex-col justify-between p-6 
                    hover:transform hover:scale-105 transition-all duration-300
                    animate-scale-in
                    border-t-4 ${service.color}
                    shadow-md hover:shadow-xl
                    bg-card
                  `}>
                    <div className="flex justify-between items-start">
                      <span className="text-3xl">{service.icon}</span>
                      <span className={`inline-block ${service.color} text-white text-xs px-2 py-1 rounded-full`}>
                        {index + 1}/5
                      </span>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground mt-2 text-sm">{service.description}</p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mt-16 text-center animate-fade-in delay-300 bg-background">
        <h2 className="text-2xl font-bold mb-4 text-foreground">How KitaCare Helps You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-4">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Easy Access</h3>
            <p className="text-muted-foreground mt-2">Simple interface designed for users with varying digital literacy.</p>
          </div>
          <div className="p-4">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Multilingual Support</h3>
            <p className="text-muted-foreground mt-2">Content available in Bahasa Malaysia, English, Chinese, and Tamil.</p>
          </div>
          <div className="p-4">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Mobile Friendly</h3>
            <p className="text-muted-foreground mt-2">Access services from any device, anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to position items in the bento grid
const getGridPosition = (index) => {
  // Positions for each service card on desktop
  const positions = [
    { col: 1, row: 1 }, // Government Services
    { col: 3, row: 1 }, // Healthcare Resources
    { col: 1, row: 3 }, // Community Support
    { col: 3, row: 3 }, // Employment Support
    { col: 2, row: 3 }, // Digital Literacy
  ];
  
  return positions[index] || { col: 1, row: 1 };
};

export default Index;
