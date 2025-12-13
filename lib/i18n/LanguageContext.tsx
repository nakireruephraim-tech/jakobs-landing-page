"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { translations, type Language, type Translations } from "./translations"

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = "jakobs-language"

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "en"

  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored && ["en", "es", "fr", "zh"].includes(stored)) return stored

  const browser = navigator.language.toLowerCase()
  if (browser.startsWith("es")) return "es"
  if (browser.startsWith("fr")) return "fr"
  if (browser.startsWith("zh")) return "zh"

  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    setLanguageState(detectInitialLanguage())
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language)
    }
  }, [language])

  function setLanguage(next: Language) {
    setLanguageState(next)
  }

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
