import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

const CommunitySupport = () => {
  const { t } = useLanguage();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('community_services')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setServices(data || []);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-kitacare-purple" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <div className="text-center text-red-500">
          <p>Error loading services: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block p-3 bg-kitacare-purple dark:bg-kitacare-purple rounded-full mb-4">
          <span className="text-3xl">🤝</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('community_support')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('community_support_intro')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="border-kitacare-purple hover:border-kitacare-purple transition-colors overflow-hidden relative">
            
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{service.icon}</span>
                <CardTitle>{service.title}</CardTitle>
              </div>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t('services_offered')}</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button 
                disabled={service.coming_soon}
                className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium
                  ${service.coming_soon 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-kitacare-purple hover:bg-kitacare-purple/80 transition-colors'}`}
              >
                {service.coming_soon ? t('coming_soon') : t('connect')}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunitySupport; 