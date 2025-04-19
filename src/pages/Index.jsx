
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';

const Index = () => {
  const { t } = useLanguage();
  
  // Service categories with their icons and colors
  const services = [
    {
      title: t('government_services'),
      icon: '🏛️',
      path: '/government-services',
      color: 'bg-kitacare-blue',
      description: 'Access government resources, applications, and official documents easily.'
    },
    {
      title: t('healthcare'),
      icon: '🏥',
      path: '/healthcare',
      color: 'bg-kitacare-green',
      description: 'Find affordable healthcare options, medical resources, and wellness programs.'
    },
    {
      title: t('community'),
      icon: '🤝',
      path: '/community',
      color: 'bg-kitacare-purple',
      description: 'Connect with community support groups and social services.'
    },
    {
      title: t('employment'),
      icon: '💼',
      path: '/employment',
      color: 'bg-kitacare-orange',
      description: 'Discover job opportunities, training programs, and financial assistance.'
    },
    {
      title: t('digital'),
      icon: '📱',
      path: '/digital',
      color: 'bg-kitacare-red',
      description: 'Learn essential digital skills and access technology resources.'
    }
  ];

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">KitaCare</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Empowering Malaysian seniors and low-income families with easy access to vital services.
        </p>
      </div>
      
      <div className="bento-grid">
        {/* Center Logo - Larger on desktop */}
        <Card className="col-span-1 md:col-span-1 row-span-1 md:row-span-1 md:col-start-2 md:row-start-2 flex items-center justify-center p-6 shadow-md hover:shadow-xl transition-all border-2 border-kitacare-blue">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-kitacare-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-3xl">KC</span>
            </div>
            <h2 className="text-2xl font-bold">KitaCare Hub</h2>
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
              `}>
                <div className="flex justify-between items-start">
                  <span className="text-3xl">{service.icon}</span>
                  <span className={`inline-block ${service.color} text-white text-xs px-2 py-1 rounded-full`}>
                    {index + 1}/5
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{service.description}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
      
      <div className="mt-16 text-center animate-fade-in delay-300">
        <h2 className="text-2xl font-bold mb-4">How KitaCare Helps You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-4">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold">Easy Access</h3>
            <p className="text-muted-foreground mt-2">Simple interface designed for users with varying digital literacy.</p>
          </div>
          <div className="p-4">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold">Multilingual Support</h3>
            <p className="text-muted-foreground mt-2">Content available in Bahasa Malaysia, English, Chinese, and Tamil.</p>
          </div>
          <div className="p-4">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold">Mobile Friendly</h3>
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
