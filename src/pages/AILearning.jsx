import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AILearning = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const containerRef = useRef(null);

  const steps = [
    {
      title: t('ai_intro_title'),
      content: t('ai_intro_content'),
      image: '🤖'
    },
    {
      title: t('ai_basics_title'),
      content: t('ai_basics_content'),
      image: '📚'
    },
    {
      title: t('ai_applications_title'),
      content: t('ai_applications_content'),
      image: '💡'
    },
    {
      title: t('ai_ethics_title'),
      content: t('ai_ethics_content'),
      image: '⚖️'
    },
    {
      title: t('ai_future_title'),
      content: t('ai_future_content'),
      image: '🚀'
    }
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isBottom = scrollHeight - scrollTop - clientHeight < 50;
      setIsAtBottom(isBottom);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      // Save progress to localStorage
      const progress = Math.round((newStep / (steps.length - 1)) * 100);
      localStorage.setItem('aiLearningProgress', progress.toString());
      
      if (containerRef.current) {
        containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // If on last step, navigate back to digital page
      navigate('/digital');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={(currentStep / (steps.length - 1)) * 100} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>{t('step')} {currentStep + 1}/{steps.length}</span>
            <span>{Math.round((currentStep / (steps.length - 1)) * 100)}%</span>
          </div>
        </div>

        {/* Content Container */}
        <div 
          ref={containerRef}
          className="h-[calc(100vh-200px)] overflow-y-auto rounded-lg bg-card dark:bg-gray-800 p-6 shadow-lg"
        >
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-6xl mb-6 text-center">{steps[currentStep].image}</div>
            <h1 className="text-3xl font-bold mb-6 text-foreground">
              {steps[currentStep].title}
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {steps[currentStep].content}
            </div>
          </motion.div>
        </div>

        {/* Navigation Button */}
        <div className="mt-6 flex justify-end">
          <Button
            onClick={handleNext}
            
            className="bg-kitacare-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            {currentStep === steps.length - 1 ? t('finish') : t('next')}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AILearning; 