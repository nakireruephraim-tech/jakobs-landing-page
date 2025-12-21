"use client"

import dynamic from "next/dynamic"

const Portfolio = dynamic(
  () => import("@/components/portfolio").then((m) => m.Portfolio),
  { ssr: false },
)

export function PortfolioClient() {
  return <Portfolio />
}
