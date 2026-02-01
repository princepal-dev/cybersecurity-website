"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function scrollToHash() {
  const hash = typeof window !== "undefined" ? window.location.hash : ""
  if (!hash) return
  const id = hash.slice(1)
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    if (window.location.hash) {
      const t = setTimeout(scrollToHash, 150)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [pathname])

  useEffect(() => {
    if (typeof window === "undefined") return
    window.addEventListener("hashchange", scrollToHash)
    if (window.location.hash) setTimeout(scrollToHash, 200)
    return () => window.removeEventListener("hashchange", scrollToHash)
  }, [])

  return null
}
