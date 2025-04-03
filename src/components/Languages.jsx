import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const Languages = ({ children }) => {
  const [language, setLanguage] = useState('en');
 
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Persist language choice
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, Languages};