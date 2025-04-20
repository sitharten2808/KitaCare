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
    contact: 'Contact Us',
    welcome: 'Welcome to KitaCare',
    hero_subtitle: 'Empowering Malaysian seniors and low-income families with easy access to vital services.',
    about_title: 'How KitaCare Helps You',
    easy_access: 'Easy Access',
    easy_access_desc: 'Simple interface designed for users with varying digital literacy.',
    multilingual: 'Multilingual Support',
    multilingual_desc: 'Content available in multiple languages for better accessibility.',
    mobile_friendly: 'Mobile Friendly',
    mobile_friendly_desc: 'Access services from any device, anytime, anywhere.',
    get_started: 'Get Started',
    learn_more: 'Learn More',
    contact_us: 'Contact Us',
    footer_description: 'Empowering Malaysian seniors and low-income families with easy access to vital services.',
    address: 'KitaCare Malaysia',
    email: 'Email',
    phone: 'Phone',
    rights_reserved: 'All rights reserved.'
  },
  ms: {
    government_services: 'Perkhidmatan Kerajaan',
    healthcare: 'Sumber Kesihatan',
    community: 'Sokongan Komuniti & Sosial',
    employment: 'Sokongan Pekerjaan & Pendapatan',
    digital: 'Literasi Digital',
    contact: 'Hubungi Kami',
    welcome: 'Selamat Datang ke KitaCare',
    hero_subtitle: 'Memperkasakan warga emas dan keluarga berpendapatan rendah Malaysia dengan akses mudah kepada perkhidmatan penting.',
    about_title: 'Bagaimana KitaCare Membantu Anda',
    easy_access: 'Akses Mudah',
    easy_access_desc: 'Antara muka mudah direka untuk pengguna dengan tahap celik digital yang berbeza.',
    multilingual: 'Sokongan Pelbagai Bahasa',
    multilingual_desc: 'Kandungan tersedia dalam pelbagai bahasa untuk kebolehcapaian yang lebih baik.',
    mobile_friendly: 'Mesra Mudah Alih',
    mobile_friendly_desc: 'Akses perkhidmatan dari mana-mana peranti, bila-bila masa, di mana sahaja.',
    get_started: 'Mulakan',
    learn_more: 'Ketahui Lebih Lanjut',
    contact_us: 'Hubungi Kami',
    footer_description: 'Memperkasakan warga emas dan keluarga berpendapatan rendah Malaysia dengan akses mudah kepada perkhidmatan penting.',
    address: 'KitaCare Malaysia',
    email: 'Emel',
    phone: 'Telefon',
    rights_reserved: 'Hak cipta terpelihara.'
  },
  zh: {
    government_services: '政府服务',
    healthcare: '医疗保健资源',
    community: '社区与社会支持',
    employment: '就业与收入支持',
    digital: '数码学习',
    contact: '联系我们',
    welcome: '欢迎来到KitaCare',
    hero_subtitle: '为马来西亚乐龄人士和低收入家庭提供便捷的重要服务访问。',
    about_title: 'KitaCare如何帮助您',
    easy_access: '轻松访问',
    easy_access_desc: '为不同数字素养水平的用户设计的简单界面。',
    multilingual: '多语言支持',
    multilingual_desc: '提供多种语言内容以提高可访问性。',
    mobile_friendly: '移动设备友好',
    mobile_friendly_desc: '随时随地通过任何设备访问服务。',
    get_started: '开始使用',
    learn_more: '了解更多',
    contact_us: '联系我们',
    footer_description: '为马来西亚乐龄人士和低收入家庭提供便捷的重要服务访问。',
    address: 'KitaCare马来西亚',
    email: '电子邮件',
    phone: '电话',
    rights_reserved: '版权所有。'
  },
  ta: {
    government_services: 'அரசு சேவைகள்',
    healthcare: 'சுகாதார வளங்கள்',
    community: 'சமூக ஆதரவு',
    employment: 'வேலைவாய்ப்பு ஆதரவு',
    digital: 'டிஜிட்டல் கல்வியறிவு',
    contact: 'தொடர்பு கொள்ள',
    welcome: 'KitaCare-க்கு வரவேற்கிறோம்',
    hero_subtitle: 'மலேசிய மூத்த குடிமக்கள் மற்றும் குறைந்த வருமானம் கொண்ட குடும்பங்களுக்கு முக்கிய சேவைகளை எளிதாக அணுக உதவுகிறது.',
    about_title: 'KitaCare உங்களுக்கு எப்படி உதவுகிறது',
    easy_access: 'எளிய அணுகல்',
    easy_access_desc: 'பல்வேறு டிஜிட்டல் கல்வியறிவு கொண்ட பயனர்களுக்காக வடிவமைக்கப்பட்ட எளிய இடைமுகம்.',
    multilingual: 'பன்மொழி ஆதரவு',
    multilingual_desc: 'சிறந்த அணுகலுக்காக பல மொழிகளில் உள்ளடக்கம் கிடைக்கிறது.',
    mobile_friendly: 'மொபைல் நட்பு',
    mobile_friendly_desc: 'எந்த சாதனத்திலிருந்தும், எப்போது வேண்டுமானாலும், எங்கிருந்தும் சேவைகளை அணுகலாம்.',
    get_started: 'தொடங்குங்கள்',
    learn_more: 'மேலும் அறிக',
    contact_us: 'எங்களை தொடர்பு கொள்ள',
    footer_description: 'மலேசிய மூத்த குடிமக்கள் மற்றும் குறைந்த வருமானம் கொண்ட குடும்பங்களுக்கு முக்கிய சேவைகளை எளிதாக அணுக உதவுகிறது.',
    address: 'KitaCare மலேசியா',
    email: 'மின்னஞ்சல்',
    phone: 'தொலைபேசி',
    rights_reserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
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
