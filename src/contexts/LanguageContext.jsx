
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const languages = {
  en: { code: 'en', name: 'English', flag: '🇬🇧' },
  ms: { code: 'ms', name: 'Bahasa Malaysia', flag: '🇲🇾' },
  zh: { code: 'zh', name: '中文', flag: '🇨🇳' },
  ta: { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' }
};

const translations = {
  en: {
    government_services: 'Government Services',
    healthcare: 'Healthcare Resources',
    community: 'Community & Social Support',
    employment: 'Employment & Income Support',
    digital: 'Digital Literacy',
    contact: 'Contact Us'
  },
  ms: {
    government_services: 'Perkhidmatan Kerajaan',
    healthcare: 'Sumber Kesihatan',
    community: 'Sokongan Komuniti & Sosial',
    employment: 'Sokongan Pekerjaan & Pendapatan',
    digital: 'Literasi Digital',
    contact: 'Hubungi Kami'
  },
  zh: {
    government_services: '政府服务',
    healthcare: '医疗保健资源',
    community: '社区与社会支持',
    employment: '就业与收入支持',
    digital: '数码学习',
    contact: '联系我们'
  },
  ta: {
    government_services: 'அரசு சேவைகள்',
    healthcare: 'சுகாதார வளங்கள்',
    community: 'சமூக ஆதரவு',
    employment: 'வேலைவாய்ப்பு ஆதரவு',
    digital: 'டிஜிட்டல் கல்வியறிவு',
    contact: 'தொடர்பு கொள்ள'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const saved = localStorage.getItem('kitacare-language');
    return saved || 'en';
  });

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('kitacare-language', langCode);
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key];
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, languages, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

