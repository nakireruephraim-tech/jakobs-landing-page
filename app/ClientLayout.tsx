"use client"

import type { ReactNode } from "react"
import { LanguageProvider } from "@/lib/i18n/LanguageContext"

export function ClientLayout({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
