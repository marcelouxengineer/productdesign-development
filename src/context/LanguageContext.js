import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // 👇 Português como idioma padrão
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};