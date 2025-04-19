
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Digital = () => {
  const { t } = useLanguage();
  
  const resources = [
    {
      title: 'Computer Basics',
      description: 'Learn how to use computers, laptops, and basic software.',
      icon: '💻',
      level: 'Beginner',
      format: 'Video Tutorials'
    },
    {
      title: 'Smartphone Usage',
      description: 'How to use smartphones, important apps, and settings.',
      icon: '📱',
      level: 'Beginner',
      format: 'Interactive Guide'
    },
    {
      title: 'Internet Safety',
      description: 'Stay safe online and protect yourself from scams.',
      icon: '🔒',
      level: 'Intermediate',
      format: 'Online Course'
    },
    {
      title: 'Government E-Services',
      description: 'How to access and use online government services.',
      icon: '🏛️',
      level: 'Intermediate',
      format: 'Step-by-step Guide'
    },
    {
      title: 'Digital Communication',
      description: 'Learn to use email, messaging apps, and video calls.',
      icon: '📧',
      level: 'Beginner',
      format: 'Hands-on Workshop'
    },
    {
      title: 'Online Banking',
      description: 'Safely manage your finances through online banking.',
      icon: '🏦',
      level: 'Intermediate',
      format: 'Video Tutorials'
    },
    {
      title: 'Social Media Basics',
      description: 'Connect with family and friends through social media platforms.',
      icon: '👥',
      level: 'Beginner',
      format: 'Interactive Guide'
    },
    {
      title: 'Accessibility Tools',
      description: 'Features and tools to make digital devices easier to use.',
      icon: '♿',
      level: 'All Levels',
      format: 'Resource Library'
    }
  ];
  
  const levelColors = {
    'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    'Advanced': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    'All Levels': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
  };
  
  const formatColors = {
    'Video Tutorials': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
    'Interactive Guide': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    'Online Course': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
    'Step-by-step Guide': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100',
    'Hands-on Workshop': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100',
    'Resource Library': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100'
  };

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-red-100 dark:bg-red-900 rounded-full mb-4">
          <span className="text-3xl">📱</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('digital')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn essential digital skills and access technology resources designed for seniors and beginners.
        </p>
      </div>
      
      {/* Search/Filter Bar */}
      <div className="bg-muted rounded-lg p-4 mb-8 max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Search digital resources..." 
              className="w-full px-4 py-2 pr-10 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-kitacare-red"
            />
            <span className="absolute right-3 top-2.5">🔍</span>
          </div>
          <select className="px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-kitacare-red">
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <select className="px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-kitacare-red">
            <option value="">All Formats</option>
            <option value="video">Video Tutorials</option>
            <option value="guide">Interactive Guides</option>
            <option value="course">Online Courses</option>
            <option value="workshop">Workshops</option>
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
                <button className="text-kitacare-red hover:underline text-sm font-medium">
                  Start Learning
                </button>
              </div>
            </div>
            
            {/* Hover Reveal Progress Bar */}
            <div className="h-1 bg-gray-200 dark:bg-gray-700 w-full">
              <div className="h-full bg-kitacare-red origin-left transform scale-x-0 group-hover:scale-x-50 transition-transform duration-300"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Featured Learning Program */}
      <div className="mt-16 bg-gradient-to-r from-kitacare-red to-kitacare-orange rounded-xl p-6 md:p-8 text-white max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <span className="bg-white text-kitacare-red px-3 py-1 rounded-full text-xs font-medium">Featured Program</span>
            <h2 className="text-2xl md:text-3xl font-bold">Digital Skills for Seniors</h2>
            <p>Join our free 4-week training program to learn essential digital skills in a supportive environment. Classes available in multiple languages.</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-kitacare-red px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors font-medium">
                Register Now
              </button>
              <button className="border-2 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="text-8xl">👨‍💻</div>
        </div>
      </div>
      
      {/* Support Section */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold mb-4">Need In-Person Assistance?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Visit our Digital Access Centers for personalized help with your digital devices and questions.
        </p>
        <button className="bg-secondary hover:bg-secondary/80 py-2 px-6 rounded-md transition-colors">
          Find Nearby Center
        </button>
      </div>
    </div>
  );
};

export default Digital;
