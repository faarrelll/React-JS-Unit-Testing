import { createContext, ReactNode, useContext, useState } from "react";
import content from "@/languages/index.json";
import { Translation } from "@/lib/interfaces";

interface TranslationContext {
  language: Translation;
  handleLanguageChange: (language: "id" | "en") => void;
}

const TranslationContext = createContext<TranslationContext | null>(null);

export const TranslationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<Translation>(content.en);

  const handleLanguageChange = (language: "id" | "en") => {
    setLanguage(content[language]);
  };

  return (
    <TranslationContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslation must be used within a TranslationContextProvider"
    );
  }
  return context;
};
