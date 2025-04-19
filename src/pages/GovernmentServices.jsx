
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const GovernmentServices = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: 'MyGovernment Portal',
      description: 'Single gateway to Malaysian government services online.',
      icon: '🏛️',
      comingSoon: false
    },
    {
      title: 'JPN Online Services',
      description: 'National Registration Department services including ID applications.',
      icon: '📝',
      comingSoon: false
    },
    {
      title: 'E-Tanah Land Services',
      description: 'Land office transactions and information.',
      icon: '🏞️',
      comingSoon: true
    },
    {
      title: 'LHDN Tax Filing',
      description: 'File taxes and manage tax-related matters.',
      icon: '💰',
      comingSoon: false
    },
    {
      title: 'MySejahtera',
      description: 'Health application for COVID-19 and other health services.',
      icon: '🏥',
      comingSoon: false
    },
    {
      title: 'Senior Citizen Assistance',
      description: 'Special programs and financial aid for seniors.',
      icon: '👵',
      comingSoon: true
    }
  ];

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
          <span className="text-3xl">🏛️</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('government_services')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access government resources, applications, and official documents through these essential services.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border-blue-200 hover:border-kitacare-blue transition-colors overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20">
              <div className="absolute transform rotate-45 bg-kitacare-blue text-xs text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                {service.comingSoon ? 'Coming Soon' : 'Available Now'}
              </div>
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
                <h4 className="font-semibold mb-2">Services Offered:</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Online Applications</li>
                  <li>Status Checking</li>
                  <li>Document Downloads</li>
                  <li>Information Portal</li>
                </ul>
              </div>
              <button 
                disabled={service.comingSoon}
                className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium
                  ${service.comingSoon 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-kitacare-blue hover:bg-blue-700 transition-colors'}`}
              >
                {service.comingSoon ? 'Coming Soon' : 'Access Service'}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GovernmentServices;
