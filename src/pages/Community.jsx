import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';


const Community = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  

  
  const services = [
    {
      title: t('community_title'),
      description: t('community_desc'),
      icon: '🏠',
      image : 'https://media.istockphoto.com/id/1329539996/photo/diverse-team-of-adults-are-standing-in-circle-with-hands-in-a-huddle.jpg?s=612x612&w=0&k=20&c=7QUHA02kNQMfPsvphAf4GZmByIG-r8l63ACXP-s20UM=',
      onClick: () => navigate('/community-support'),
    },
    {
      title: t('find_support'),
      description: t('support_desc'),
      icon: '💞',
      image: 'https://images.parkrun.com/blogs.dir/1074/files/2022/08/292079963_1706352543033331_435691918883703782_n-900x416.jpg'
    },
    {
      title: t('help'),
      description: t('help_desc'),
      icon: '💬',
      image: 'https://as1.ftcdn.net/jpg/03/06/39/32/1000_F_306393203_f3g431geSIOknXXBse1jcEhRmdtWqdmM.jpg'    },
    {
      title: t('volunteer'),
      description: t('community_desc'),
      icon: '🤲',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: t('contacts'),
      description: t('contacts_desc'),
      icon: '📞',
      image: 'https://www.accelerate2020.eu/wp-content/uploads/2017/01/Contacts.jpg'
    },
    {
      title: t('peer_support'),
      description: t('peer_desc'),
      icon: '🗣️',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
          <span className="text-3xl">🤝</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('community_title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('community_intro')}
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
                  <div className="flex justify-center">
                    <button className="bg-white border-2 border-kitacare-purple text-border-2 text-kitacare-purple px-4 py-2 rounded-md hover:bg-kitacare-purple hover:text-white hover:border-1 hover:border-kitacare-purple transition-colors text-sm"
                    onClick={service.onClick}
                    >
                      {t('learn_more')}
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-kitacare-purple to-kitacare-blue text-white max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t('find_support')}</h2>
        <p className="mb-6">{t('community_intro')}</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-kitacare-purple px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium">
            {t('contact')}
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors font-medium">
            {t('find_facility')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
