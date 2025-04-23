import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Digital = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [aiProgress, setAiProgress] = useState(0);

  // Load AI learning progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('aiLearningProgress');
    if (savedProgress) {
      setAiProgress(parseInt(savedProgress));
    }
  }, []);

  const resources = [
    {
      title: t('AI'),
      description: t('AI_desc'),
      icon: '🤖',
      level: t('basic_skills'),
      format: t('digital_tools'),
      onClick: () => navigate('/ai-learning'),
      progress: aiProgress
    },
    {
      title: t('Smartphone_usage'),
      description: t('smartphone_desc'),
      icon: '📱',
      level: t('basic_skills'),
      format: t('practice_exercises')
    },
    {
      title: t('online_safety'),
      description: t('safety_desc'),
      icon: '🔒',
      level: t('basic_skills'),
      format: t('safety')
    },
    {
      title: t('online_services'),
      description: t('online_desc'),
      icon: '🔎',
      level: t('basic_skills'),
      format: t('practice_exercises')
    },
    {
      title: t('online_payment'),
      description: t('payment_desc'),
      icon: '💳',
      level: t('basic_skills'),
      format: t('digital_tools')
    },
    {
      title: t('maps'),
      description: t('maps_desc'),
      icon: '🗺️',
      level: t('basic_skills'),
      format: t('practice_exercises')
    },
    {
      title: t('scam'),
      description: t('scam_desc'),
      icon: '📵',
      level: t('basic_skills'),
      format: t('safety')
    },
    {
      title: t('oku'),
      description: t('oku_desc'),
      icon: '♿',
      level: t('basic_skills'),
      format: t('accessibility')
    }
  ];

  const levelColors = {
    [t('basic_skills')]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    [t('online_safety')]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    [t('digital_tools')]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    [t('practice_exercises')]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
  };

  const formatColors = {
    [t('digital_tools')]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
    [t('practice_exercises')]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    [t('online_safety')]: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
    [t('basic_skills')]: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100',
    [t('safety')]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    [t('accessibility')]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
  };

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-red-100 dark:bg-red-900 rounded-full mb-4">
          <span className="text-3xl">📱</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('digital_title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('digital_intro')}
        </p>
      </div>
      
      {/* Search/Filter Bar */}
      <div className="bg-muted rounded-lg p-4 mb-8 max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder={t('search_jobs')}
              className="w-full px-4 py-2 pr-10 rounded-md dark:bg-gray-900 border border-border focus:outline-none focus:ring-2 focus:ring-kitacare-red"
            />
            <span className="absolute right-3 top-2.5">🔍</span>
          </div>
          <select className="px-4 py-2 rounded-md border border-border focus:outline-none dark:bg-gray-900 focus:ring-2 focus:ring-kitacare-red">
            <option value="">{t('Any')}</option>
            <option value="video">{t('digital_tools')}</option>
            <option value="guide">{t('practice_exercises')}</option>
            <option value="course">{t('online_safety')}</option>
            <option value="workshop">{t('accessibility')}</option>
          </select>
        </div>
      </div>
      
      {/* Resource Grid - Glassmorphic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <div 
            key={index}
            className="rounded-xl overflow-hidden backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 shadow-xl hover:shadow-2xl transition-all border border-white/20 dark:border-gray-700/20 group"
          >
            <div className="p-6">
              {/* Icon & Title */}
              <div className="flex justify-between items-start mb-4">
                <div className="bg-kitacare-red bg-opacity-10 p-3 rounded-full">
                  <span className="text-2xl">{resource.icon}</span>
                </div>
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded-md ${levelColors[resource.level]}`}>
                    {resource.level}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
              
              <div className="flex justify-between items-center">
                <span className={`text-xs px-2 py-1 rounded-md ${formatColors[resource.format]}`}>
                  {resource.format}
                </span>
                <button 
                  onClick={resource.onClick}
                  className="text-kitacare-red hover:underline text-sm font-medium bg-red-100 dark:bg-red-900 dark:text-white px-4 py-2 rounded-md"
                >
                  {t('get_started')}
                </button>
              </div>
            </div>
            
            {/* Hover Reveal Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 w-full">
              <div 
                className="h-full bg-kitacare-red origin-left transition-transform duration-300"
                style={{ 
                  transform: `scaleX(${resource.progress ? resource.progress / 100 : 0})`,
                  transition: 'transform 0.3s ease-in-out'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Featured Learning Program */}
      <div className="mt-16 bg-gradient-to-r from-kitacare-red to-kitacare-orange rounded-xl p-6 md:p-8 text-white max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <span className="bg-white text-kitacare-red px-3 py-1 rounded-full text-xs font-medium">{t('digital_title')}</span>
            <h2 className="text-2xl md:text-3xl font-bold">{t('digital_title')}</h2>
            <p>{t('digital_intro')}</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-kitacare-red px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors font-medium">
                {t('get_started')}
              </button>
              <button className="border-2 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors font-medium">
                {t('learn_more')}
              </button>
            </div>
          </div>
          <div className="text-8xl">👨‍💻</div>
        </div>
      </div>
      
      {/* Support Section */}
      
    </div>
  );
};

export default Digital;
