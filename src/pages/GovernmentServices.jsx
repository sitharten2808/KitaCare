import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const GovernmentServices = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const services = [
    {
      title: 'MyGovernment Portal',
      description: t('gov_services_desc'),
      icon: '🏛️',
      comingSoon: false,
      link: 'https://www.malaysia.gov.my/portal/index'
    },
    {
      title: 'JPN Online Services',
      description: t('online_applications'),
      icon: '📝',
      comingSoon: false
    },
    {
      title: 'E-Tanah Land Services',
      description: t('info_portal'),
      icon: '🏞️',
      comingSoon: true
    },
    {
      title: 'LHDN Tax Filing',
      description: t('document_downloads'),
      icon: '💰',
      comingSoon: false
    },
    {
      title: 'MySejahtera',
      description: t('healthcare_desc'),
      icon: '🏥',
      comingSoon: false
    },
    {
      title: 'Senior Citizen Assistance',
      description: t('community_desc'),
      icon: '👵',
      comingSoon: true
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
          <span className="text-3xl">🏛️</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('government_services')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('gov_services_intro')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border-blue-200 hover:border-kitacare-blue transition-colors overflow-hidden relative">
            <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden">
              
            </div>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{service.icon}</span>
                <CardTitle>{service.title}</CardTitle>
              </div>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t('services_offered')}</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>{t('online_applications')}</li>
                  <li>{t('status_checking')}</li>
                  <li>{t('document_downloads')}</li>
                  <li>{t('info_portal')}</li>
                </ul>
              </div>
              <button 
                disabled={service.comingSoon}
                className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium
                  ${service.comingSoon 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-kitacare-blue hover:bg-blue-700 transition-colors'}`}
                  onClick={() => window.open(`${service.link}`, '_blank')}

              >
                {service.comingSoon ? t('coming_soon') : t('access_service')}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GovernmentServices;
