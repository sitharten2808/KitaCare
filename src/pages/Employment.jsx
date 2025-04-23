import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Employment = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const services = [
    {
      title: t('search_jobs'),
      description: t('employment_desc'),
      icon: '👨‍💼',
      steps: [t('get_started'), t('learn_more'), t('find_support'), t('contact')],
      onClick: () => navigate('/careers')
    },
    {
      title: t('training'),
      description: t('employment_desc'),
      icon: '🎓',
      steps: [t('get_started'), t('learn_more'), t('find_support'), t('contact')]
    },
    
    {
      title: t('career_resources'),
      description: t('employment_desc'),
      icon: '📅',
      steps: [t('get_started'), t('learn_more'), t('find_support'), t('contact')]
    },
    {
      title: t('employment'),
      description: t('employment_desc'),
      icon: '🏪',
      steps: [t('get_started'), t('learn_more'), t('find_support'), t('contact')]
    },
   
  ];

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-orange-100 dark:bg-orange-900 rounded-full mb-4">
          <span className="text-3xl">💼</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('employment_title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('employment_intro')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
            {/* Top Banner */}
            <div className="bg-kitacare-orange h-2 w-full"></div>
            
            <div className="p-6">
              {/* Service Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-bold text-xl">{service.title}</h3>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              {/* Steps */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">{t('how_it_helps')}</h4>
                <div className="flex flex-col gap-2">
                  {service.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-kitacare-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {i + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Button */}
              <div className="mt-auto">
                <button className="w-full bg-kitacare-orange text-white py-2 rounded-md group-hover:bg-orange-600 transition-colors"
                onClick={service.onClick}
                >
                  {t('learn_more')}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="mt-16 bg-muted p-8 rounded-xl max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="bg-kitacare-orange rounded-full p-4">
              <span className="text-5xl">✨</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{t('find_support')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('employment_intro')}
            </p>
            <button className="bg-kitacare-orange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
              {t('appointment')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
