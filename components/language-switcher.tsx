"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"

const LANGUAGES: { code: "en" | "es" | "fr" | "zh"; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
  { code: "zh", label: "中文" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-xs border rounded-full px-2 py-1 bg-background/60">
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          className={`px-2 py-0.5 rounded-full transition-colors ${
            language === item.code ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
