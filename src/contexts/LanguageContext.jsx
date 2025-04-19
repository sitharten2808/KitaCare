
import React, { createContext, useContext, useState, useEffect } from 'react';

// Available languages
const languages = {
  en: {
    name: 'English',
    code: 'en',
    flag: '🇬🇧'
  },
  ms: {
    name: 'Bahasa Malaysia',
    code: 'ms',
    flag: '🇲🇾'
  },
  zh: {
    name: '中文',
    code: 'zh',
    flag: '🇨🇳'
  },
  ta: {
    name: 'தமிழ்',
    code: 'ta',
    flag: '🇮🇳'
  }
};

// Example translations
const translations = {
  en: {
    'government_services': 'Government Services',
    'healthcare': 'Healthcare Resources',
    'community': 'Community & Social Support',
    'employment': 'Employment & Income Support',
    'digital': 'Digital Literacy & Accessibility',
    'about': 'About',
    'contact': 'Contact',
    'language': 'Language',
    'search': 'Search'
  },
  ms: {
    'government_services': 'Perkhidmatan Kerajaan',
    'healthcare': 'Sumber Kesihatan',
    'community': 'Sokongan Komuniti & Sosial',
    'employment': 'Sokongan Pekerjaan & Pendapatan',
    'digital': 'Literasi & Akses Digital',
    'about': 'Tentang Kami',
    'contact': 'Hubungi Kami',
    'language': 'Bahasa',
    'search': 'Cari'
  },
  zh: {
    'government_services': '政府服务',
    'healthcare': '医疗资源',
    'community': '社区与社会支持',
    'employment': '就业与收入支持',
    'digital': '数字文化与可访问性',
    'about': '关于我们',
    'contact': '联系我们',
    'language': '语言',
    'search': '搜索'
  },
  ta: {
    'government_services': 'அரசாங்க சேவைகள்',
    'healthcare': 'சுகாதார வளங்கள்',
    'community': 'சமூக ஆதரவு',
    'employment': 'வேலைவாய்ப்பு & வருமான ஆதரவு',
    'digital': 'டிஜிட்டல் கல்வியறிவு & அணுகல்',
    'about': 'எங்களை பற்றி',
    'contact': 'தொடர்பு கொள்ள',
    'language': 'மொழி',
    'search': 'தேடல்'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('kitacare-language');
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLanguage(langCode);
      localStorage.setItem('kitacare-language', langCode);
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        currentLanguage, 
        languages,
        changeLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
