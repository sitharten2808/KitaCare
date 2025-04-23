import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Phone, Clock, Star } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const NearbyFacilities = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('facilities')
        .select('*')
        .order('distance', { ascending: true });

      if (error) throw error;
      setFacilities(data || []);
    } catch (error) {
      console.error('Error fetching facilities:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredFacilities = facilities.filter(facility =>
    facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-kitacare-blue mx-auto"></div>
            <p className="mt-4 text-muted-foreground">{t('loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-500">{t('error_loading_facilities')}</p>
            <Button 
              onClick={fetchFacilities}
              className="mt-4 bg-kitacare-blue hover:bg-blue-700 text-white"
            >
              {t('retry')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{t('find_facility')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('find_facility_desc')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder={t('search_facilities')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-kitacare-blue"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <Card key={facility.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{facility.name}</h3>
                  <p className="text-sm text-muted-foreground">{facility.type}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">{facility.rating}</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-kitacare-blue mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{facility.address}</p>
                    <p className="text-sm font-medium text-kitacare-blue">{facility.distance} km</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-kitacare-blue" />
                  <p className="text-sm text-muted-foreground">{facility.opening_hours}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-kitacare-blue" />
                  <p className="text-sm text-muted-foreground">{facility.phone}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">{t('available_services')}</h4>
                <div className="flex flex-wrap gap-2">
                  {facility.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full bg-kitacare-blue hover:bg-blue-700 text-white"
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(facility.address)}`, '_blank')}
              >
                {t('get_directions')}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyFacilities; 