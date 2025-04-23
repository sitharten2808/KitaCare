import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Healthcare = React.memo(() => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const resources = [
    {
      title: t('find_facility'),
      description: t('healthcare_desc'),
      icon: '🏥',
      onClick: () => navigate('/nearby-facilities'),
    },
    {
      title: t('financial_aid'),
      description: t('healthcare_desc'),
      icon: '💊',
      onClick: () => alert('Navigate to Financial Aid Page'),
    },
    {
      title: t('appointment'),
      description: t('healthcare_desc'),
      icon: '👨‍⚕️',
      onClick: () => alert('Navigate to Appointment Page'),
    },
    {
      title: t('medical_records'),
      description: t('healthcare_desc'),
      icon: '🔬',
      onClick: () => alert('Navigate to Medical Records Page'),
    },
    {
      title: t('emergency'),
      description: t('healthcare_desc'),
      icon: '🚑',
      onClick: () => alert('Navigate to Emergency Page'),
    },
    {
      title: t('find_support'),
      description: t('healthcare_desc'),
      icon: '🧠',
      onClick: () => alert('Navigate to Mental Health Support Page'),
    },
  ];

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-green-100 dark:bg-green-900 rounded-full mb-6">
          <span className="text-4xl">🏥</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          {t('healthcare_title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('healthcare_intro')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border-2 border-blue-500 bg-background dark:bg-[#0b0b0c] p-6 transition-transform hover:scale-[1.02] hover:border-blue-600"
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-30 group-hover:opacity-60 blur-sm pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-full bg-blue-500/10">
                  <span className="text-3xl">{resource.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {resource.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
              <div className="mt-6">
                <button
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                  onClick={resource.onClick}
                >
                  {t('learn_more')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Healthcare;



