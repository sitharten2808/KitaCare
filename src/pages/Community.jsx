
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Community = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: 'Senior Activity Centers',
      description: 'Community spaces for seniors to socialize and engage in activities.',
      icon: '👵',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Food Assistance Programs',
      description: 'Information about food banks and meal delivery services.',
      icon: '🍲',
      image: 'https://images.unsplash.com/photo-1537543585341-e94ce5c6042e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Housing Assistance',
      description: 'Resources for affordable housing and home modifications for seniors.',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Volunteer Opportunities',
      description: 'Ways to contribute to your community through volunteering.',
      icon: '🤲',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Transportation Services',
      description: 'Information on transportation options for seniors and disabled individuals.',
      icon: '🚌',
      image: 'https://images.unsplash.com/photo-1556122071-e404cb766200?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Caregiver Support',
      description: 'Resources and support groups for caregivers of elderly family members.',
      icon: '💞',
      image: 'https://images.unsplash.com/photo-1576765608622-067973a79f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
          <span className="text-3xl">🤝</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('community')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with community support groups and access social services designed for seniors and families.
        </p>
      </div>
      
      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .perspective {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      
      {/* Card Grid Layout */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-[300px] group perspective">
            <div className="relative h-80 transform-style-3d group-hover:rotate-y-180 w-full duration-700">
              {/* Card Front */}
              <div className="absolute backface-hidden rounded-xl w-full h-full bg-kitacare-purple bg-opacity-10 p-8 flex flex-col justify-center items-center text-center shadow-lg border border-kitacare-purple border-opacity-25">
                <span className="text-5xl mb-4">{service.icon}</span>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              
              {/* Card Back */}
              <div className="absolute backface-hidden rotate-y-180 rounded-xl w-full h-full overflow-hidden shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="flex gap-2">
                    <button className="bg-white text-kitacare-purple px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm">
                      Learn More
                    </button>
                    <button className="bg-kitacare-purple text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-kitacare-purple to-kitacare-blue text-white max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
        <p className="mb-6">Our community support team is available to help connect you with the right resources.</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-kitacare-purple px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium">
            Call Helpline
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors font-medium">
            Find Local Office
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
