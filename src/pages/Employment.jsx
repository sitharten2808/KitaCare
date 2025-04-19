
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';

const Employment = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: 'Job Matching for Seniors',
      description: 'Connect with age-friendly employers and find suitable part-time jobs.',
      icon: '👨‍💼',
      steps: ['Register profile', 'Complete skills assessment', 'Browse opportunities', 'Apply with assistance']
    },
    {
      title: 'Skills Training Programs',
      description: 'Free and subsidized courses to learn new skills and enhance employability.',
      icon: '🎓',
      steps: ['Check eligibility', 'Browse available courses', 'Apply for funding', 'Complete training']
    },
    {
      title: 'Financial Aid Applications',
      description: 'Apply for government financial assistance programs for low-income families.',
      icon: '💰',
      steps: ['Check eligibility', 'Gather documents', 'Complete application', 'Track status']
    },
    {
      title: 'Retirement Planning',
      description: 'Resources and consultations to plan for a financially secure retirement.',
      icon: '📅',
      steps: ['Schedule assessment', 'Review current finances', 'Explore options', 'Create plan']
    },
    {
      title: 'Small Business Support',
      description: 'Help for seniors wanting to start small businesses or home-based work.',
      icon: '🏪',
      steps: ['Validate idea', 'Create business plan', 'Apply for startup grant', 'Launch with mentoring']
    },
    {
      title: 'Pension & Benefits Guidance',
      description: 'Assistance with navigating pension systems and claiming rightful benefits.',
      icon: '📑',
      steps: ['Document review', 'Eligibility check', 'Application assistance', 'Follow-up support']
    }
  ];

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-orange-100 dark:bg-orange-900 rounded-full mb-4">
          <span className="text-3xl">💼</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('employment')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover job opportunities, training programs, and financial assistance for seniors and low-income families.
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
                <h4 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">How It Works</h4>
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
                <button className="w-full bg-kitacare-orange text-white py-2 rounded-md group-hover:bg-orange-600 transition-colors">
                  Access Service
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
            <h2 className="text-2xl font-bold mb-2">Need Personalized Help?</h2>
            <p className="text-muted-foreground mb-4">
              Schedule a one-on-one consultation with our employment advisors who can provide customized guidance.
            </p>
            <button className="bg-kitacare-orange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
