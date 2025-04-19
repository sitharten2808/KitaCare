
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';

const Healthcare = () => {
  const { t } = useLanguage();
  
  const resources = [
    {
      title: 'Public Hospitals & Clinics',
      description: 'Find the nearest government healthcare facilities.',
      icon: '🏥',
      category: 'facilities'
    },
    {
      title: 'Medication Subsidies',
      description: 'Information on subsidized medication programs.',
      icon: '💊',
      category: 'financial'
    },
    {
      title: 'Specialist Appointment System',
      description: 'Book appointments with medical specialists.',
      icon: '👨‍⚕️',
      category: 'services'
    },
    {
      title: 'Health Screening Programs',
      description: 'Free and subsidized health screening services.',
      icon: '🔬',
      category: 'preventive'
    },
    {
      title: 'Emergency Services',
      description: 'Emergency medical contacts and services.',
      icon: '🚑',
      category: 'emergency'
    },
    {
      title: 'Mental Health Support',
      description: 'Resources for mental wellbeing and counseling.',
      icon: '🧠',
      category: 'mental'
    }
  ];
  
  // Group resources by category
  const categorizedResources = resources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {});
  
  const categories = {
    facilities: { name: 'Healthcare Facilities', color: 'bg-kitacare-green' },
    financial: { name: 'Financial Assistance', color: 'bg-kitacare-purple' },
    services: { name: 'Medical Services', color: 'bg-kitacare-blue' },
    preventive: { name: 'Preventive Care', color: 'bg-kitacare-orange' },
    emergency: { name: 'Emergency Services', color: 'bg-kitacare-red' },
    mental: { name: 'Mental Health', color: 'bg-green-600' }
  };

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-4">
          <span className="text-3xl">🏥</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('healthcare')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access affordable healthcare options, medical resources, and wellness programs.
        </p>
      </div>
      
      {Object.entries(categorizedResources).map(([category, categoryResources]) => (
        <div key={category} className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className={`h-4 w-4 rounded-full ${categories[category].color}`}></div>
            <h2 className="text-2xl font-bold">{categories[category].name}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryResources.map((resource, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow
                  border-l-4 ${categories[resource.category].color}`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full ${categories[resource.category].color} bg-opacity-20`}>
                      <span className="text-2xl">{resource.icon}</span>
                    </div>
                    <h3 className="font-bold text-xl">{resource.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{resource.description}</p>
                  <div className="mt-6 flex items-center gap-2">
                    <button className="bg-kitacare-green text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex-1">
                      Learn More
                    </button>
                    <button className="border border-kitacare-green text-kitacare-green py-2 px-4 rounded-md hover:bg-green-50 transition-colors">
                      Save
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Healthcare;
