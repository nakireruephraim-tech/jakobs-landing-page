"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Vision() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-[#fff9ef] text-[#332460] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c3df]/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.vision.sectionTitle}</h2>

          <p className="text-lg md:text-xl leading-relaxed text-pretty">
            {t.vision.paragraph1}
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-pretty">
            {t.vision.paragraph2}
          </p>
        </div>
      </div>
    </section>
  )
}
