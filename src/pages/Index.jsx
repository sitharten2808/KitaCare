import React, { useRef } from 'react';  // Add useRef import here
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { BouncyCardsFeatures } from "@/components/ui/BouncyCardsFeatures";
import health from '../assets/health.jpg';
import gov from '../assets/gov.jpg';
import community from '../assets/community.jpg';
import employment from '../assets/employment.jpg';
import digital from '../assets/digital.jpg';
import ShuffleHero from "@/components/ui/ShuffleHero";
import FaqSection from "@/components/ui/accordion1";
import { Card } from '@/components/ui/card';

import { motion } from 'framer-motion';
import { services } from '../config/services';


const Index = () => {
  const { t } = useLanguage();
    const servicesRef = useRef(null);
  

    const scrollToServices = () => {
      servicesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
    const ServiceBlock = ({ title, icon, description }) => (
      <motion.div 
        className="bg-card dark:bg-card/80 border border-border dark:border-border/50 p-8 rounded-2xl mb-10 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUp}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10 }}
      >
        <div className="flex items-center space-x-6">
          <motion.div 
            className="text-5xl"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
          <div>
            <motion.h3 
              className="text-2xl font-bold text-foreground dark:text-white mb-2"
              whileHover={{ color: "#3b82f6" }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/80">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  

    const features = [
      {
        icon: '🧭',
        title: t('benefit1'),
        description: t('benefit1_desc'),
      },
      {
        icon: '💸',
        title: t('benefit2'),
        description: t('benefit2_desc'),
      },
      {
        icon: '🧠',
        title: t('benefit3'),
        description: t('benefit3_desc'),
      },
    ];

  const faqData = [
    { id: 1, questionKey: "question1", answerKey: "answer1", iconPosition: "left" },
    { id: 2, questionKey: "question2", answerKey: "answer2", iconPosition: "left" },
    { id: 3, questionKey: "question3", answerKey: "answer3", iconPosition: "left" },
  ];
  const scrollToResources = () => {
    const section = document.getElementById("alternating-features");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  
  const featureData = [
    
    {
      title: t('government_services'),
      description: t('government_services_desc'),
      image: gov,
      link: "/government-services"
    },
    {
      title: t('healthcare'),
      description: t('healthcare_desc'),
      image: health,
      link: "/healthcare"
    },
    {
      title: t('community'),
      description: t('community_desc'),
      image: community,
      link: "/community"
    },
    {
      title: t('employment'),
      description: t('employment_desc'),
      image: employment,
      link: "/employment"
    },
    {
      title: t('digital'),
      description: t('digital_desc'),
      image: digital,
      link: "/digital"
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* SECTION 1: Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
<ShuffleHero onImageClick={scrollToServices} />
</motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <BouncyCardsFeatures items={features} />
      </motion.div>

      {/* SECTION 3: Services */}
      <motion.section 
        id="alternating-features" 
        className="py-20 bg-muted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 max-w-6xl mx-auto space-y-20">
          <motion.div 
            className="text-center mb-16"
            variants={slideUp}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('resources')}
            </motion.h2>
            <motion.p 
              className="text-lg mt-4 text-muted-foreground dark:text-muted-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('resources_desc')}
            </motion.p>
          </motion.div>

          {featureData.map((feature, index) => (
            <Link to={feature.link} key={index} className="block hover:no-underline">
              <motion.div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } gap-10 mb-20`}
                variants={slideUp}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="md:w-1/2 w-full"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 object-cover rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"

                  />
                </motion.div>

                <motion.div 
                  className="md:w-1/2 w-full text-center md:text-left"
                  whileHover={{ x: index % 2 !== 0 ? -10 : 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.h3 
                    className= "text-3xl font-bold text-black dark:text-white light:text-black mb-4"
                    // whileHover={{ color: "#3b82f6", scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-muted-foreground dark:text-muted-foreground/80"
                    // whileHover={{ color: "#64748b" }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

       {/* SECTION: Services Grid */}
            <section ref={servicesRef} className="py-20 bg-background">
        <div className="container px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white">
            {t('our_services')}
            </h2>
             <p className="text-lg mt-4 text-muted-foreground dark:text-muted-foreground/80 max-w-2xl mx-auto">
            {t('our_services_desc')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="col-span-1 md:col-span-1 row-span-1 md:row-span-1 md:col-start-2 md:row-start-2 p-0 shadow-md hover:shadow-xl transition-all border-2 border-kitacare-blue bg-transparent dark:bg-transparent overflow-hidden">
              <div className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-emerald-500 to-blue-500 dark:from-emerald-600 dark:to-blue-700 w-full h-full p-10 rounded-l text-white transition-transform hover:scale-[1.02] cursor-pointer">
                <h2 className="text-3xl font-bold mb-4">KitaCare</h2>
                <p className="text-lg">{t('ideas')}</p>
              </div>
            </Card>
      
            {services.map((service, index) => {
              const position = getGridPosition(index);
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={service.path}>
                    <Card
                      className={`col-span-1 row-span-1 md:col-start-${position.col} md:row-start-${position.row} flex flex-col justify-between p-6 hover:transform hover:scale-105 transition-all duration-300 hover:bg-blue-300 hover:text-white animate-scale-in border-t-4 ${service.color} shadow-md hover:shadow-xl bg-card dark:bg-card/80 border-border dark:border-border/50 dark:hover:bg-blue-800 cursor-pointer`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-3xl">{service.icon}</span>
                        <span className={`inline-block ${service.color} text-black dark:text-white text-xs px-2 py-1 rounded-full`}>
                          {index + 1}/5
                        </span>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-foreground dark:text-white">
                          {t(service.title)}
                        </h3>
                        <p className="text-gray-800 dark:text-gray-100 mt-2 text-sm">
                          {t(service.description)}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section 
  id="faq" 
  className="pt-24 px-4 bg-muted dark:bg-gray-900"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  <motion.h2 
    className="text-5xl font-bold text-center mb-8"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {t('faq')} 
  </motion.h2>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <FaqSection data={faqData} />
  </motion.div>
</motion.section>

    </motion.div>
  );
};
// Helper function to position items in the bento grid
const getGridPosition = (index) => {
  const positions = [
    { col: 1, row: 1 },
    { col: 3, row: 1 },
    { col: 1, row: 3 },
    { col: 3, row: 3 },
    { col: 2, row: 3 },
  ];
  return positions[index] || { col: 1, row: 1 };
};

 export default Index;

