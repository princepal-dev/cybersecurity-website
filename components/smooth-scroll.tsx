"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return null
}

