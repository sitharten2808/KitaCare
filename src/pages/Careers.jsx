import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { secureApi } from '@/lib/secureApi';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Careers = () => {
  const { t } = useLanguage();
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setLoading(true);
      // Check rate limit
      await secureApi.rateLimitedRequest('fetch_careers');
      
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setCareers(data || []);
    } catch (err) {
      console.error('Error fetching careers:', err);
      setError(err.message);
      toast.error('Failed to load careers. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (careerId) => {
    try {
      // Validate request
      secureApi.validateRequest({ careerId }, {
        careerId: { required: true, type: 'string' }
      });

      // Check rate limit
      await secureApi.rateLimitedRequest('apply_career');

      // Handle sensitive operation
      const result = await secureApi.handleSensitiveOperation('apply_career', {
        careerId,
        timestamp: new Date().toISOString()
      });

      toast.success('Application submitted successfully!');
      return result;
    } catch (err) {
      console.error('Error applying for career:', err);
      toast.error(err.message || 'Failed to submit application. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-kitacare-orange" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <div className="text-center text-red-500">
          <p>Error loading careers: {error}</p>
          <button 
            onClick={fetchCareers}
            className="mt-4 px-4 py-2 bg-kitacare-blue text-white rounded-md hover:bg-kitacare-blue/80 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-kitacare-orange dark:bg-kitacare-orange rounded-full mb-4">
          <span className="text-3xl">💼</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('careers')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('careers_intro')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((career) => (
          <Card key={career.id} className="border-kitacare-orange hover:border-kitacare-orange transition-colors overflow-hidden relative">
            <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden">
              {career.hot_job && (
                <div className="absolute transform rotate-45 bg-red-500 opacity-80 text-xs text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                  {t('hot_job')}
                </div>
              )}
            </div>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{career.icon}</span>
                <CardTitle>{career.title}</CardTitle>
              </div>
              <CardDescription>{career.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t('requirements')}</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  {career.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">{t('salary_range')}</h4>
                <p className="text-sm text-muted-foreground">{career.salary_range}</p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">{t('location')}</h4>
                <p className="text-sm text-muted-foreground">{career.location}</p>
              </div>
              <button 
                onClick={() => handleApply(career.id)}
                className="mt-4 w-full py-2 px-4 rounded-md text-white font-medium bg-kitacare-orange hover:bg-kitacare-orange/80 transition-colors"
              >
                {t('apply_now')}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Careers;