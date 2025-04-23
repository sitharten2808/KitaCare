import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from '../../contexts/LanguageContext';


export const BouncyCardsFeatures = () => {
  const { t } = useLanguage();
  return (
    <section id="kitacare-features" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-slate-900 px-4 py-20 text-black dark:text-white overflow-hidden">

      <motion.div 
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >{t('about_title')}
        </motion.h2>
        <motion.p 
          className="text-lg mt-4 text-slate-800 dark:text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {t('how_it_helps')}
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-12 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        <BounceCard 
          className="col-span-12 md:col-span-4"
          icon="🧭"
          delay={0.1}
          bgColor="bg-gradient-to-br from-slate-300/30 to-blue-900/20"
          borderColor="border-blue-700/30"
          iconBgColor="bg-blue-800/50"
          hoverColor="group-hover:shadow-blue-500/20"
          glowColor="blue-500"
        >
          <CardTitle>{t('benefit1')}</CardTitle>
          <CardDescription>
            {t('benefit1_desc')}
          </CardDescription>
        </BounceCard>

        <BounceCard 
          className="col-span-12 md:col-span-4"
          icon="💸"
          delay={0.2}
          bgColor="bg-gradient-to-br from-slate-300/30 to-amber-900/20"
          borderColor="border-amber-700/30"
          iconBgColor="bg-amber-800/50"
          hoverColor="group-hover:shadow-amber-500/20"
          glowColor="amber-500"
        >
          <CardTitle>{t('benefit2')}</CardTitle>
          <CardDescription>
            {t('benefit2_desc')}
          </CardDescription>
        </BounceCard>

        <BounceCard 
          className="col-span-12 md:col-span-4"
          icon="🧠"
          delay={0.3}
          bgColor="bg-gradient-to-br from-slate-300/30 to-emerald-900/20"
          borderColor="border-emerald-700/30"
          iconBgColor="bg-emerald-800/50"
          hoverColor="group-hover:shadow-emerald-500/20"
          glowColor="emerald-500"
        >
          <CardTitle>{t('benefit3')}</CardTitle>
          <CardDescription>
            {t('benefit3_desc')}
          </CardDescription>
        </BounceCard>
      </motion.div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

const BounceCard = ({ 
  className, 
  children, 
  icon, 
  delay,
  bgColor = "bg-slate-800",
  borderColor = "border-slate-700",
  iconBgColor = "bg-slate-700",
  hoverColor = "group-hover:shadow-slate-500/20",
  glowColor = "slate-400"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl ${bgColor} ${borderColor} border p-8 transition-all duration-300 ease-in-out hover:shadow-md ${hoverColor} ${className}`}
    >
      <div className="relative z-10">
        <motion.div 
          className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${iconBgColor} text-3xl transition-all duration-300 ease-in-out group-hover:scale-110`}
          animate={isHovered ? { y: [0, -10, 0], transition: { repeat: 0, duration: 0.6 } } : {}}
        >
          {icon}
        </motion.div>
        {children}
      </div>
      
      {/* Glow effect on hover */}
      <motion.div 
        className={`absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-${glowColor}/10 blur-3xl transition-all duration-500 ease-in-out`}
        animate={isHovered ? { 
          scale: 1.5, 
          opacity: 0.7,
          transition: { duration: 0.8 } 
        } : { 
          scale: 1, 
          opacity: 0.2,
          transition: { duration: 0.8 } 
        }}
      />
      
      {/* Dark grid pattern overlay */}
      {/* <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-black to-transparent" /> */}
      
      {/* Shine effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={isHovered ? { 
          backgroundPosition: ["200% 0%", "-50% 100%"],
          transition: { duration: 1.5, repeat: Infinity, repeatType: "mirror" } 
        } : {}}
      />
    </motion.div>
  );
};

const CardTitle = ({ children }) => (
  <motion.h3 
    className="mx-auto text-center text-2xl font-bold text-black dark:text-white mb-4"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {children}
  </motion.h3>
);

const CardDescription = ({ children }) => (
  <motion.p 
    className="text-center text-lg text-slate-800 dark:text-slate-300"
    initial={{ opacity: 0.8 }}
    whileHover={{ opacity: 1 }}
  >
    {children}
  </motion.p>
);
