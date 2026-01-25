"use client"

import { useEffect, useRef, useState } from "react"

const DURATION_MS = 1800

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

export function AnimatedNumber({
  value,
  suffix = "",
  className,
  observeSectionId = "impact-stats-section",
}: {
  value: number
  suffix?: string
  className?: string
  observeSectionId?: string
}) {
  const [display, setDisplay] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    const el = document.getElementById(observeSectionId)
    if (!el) {
      setDisplay(value)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true
        const start = performance.now()
        const animate = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / DURATION_MS, 1)
          const eased = easeOutQuart(progress)
          setDisplay(Math.round(value * eased))
          if (progress < 1) requestAnimationFrame(animate)
          else setDisplay(value)
        }
        requestAnimationFrame(animate)
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, observeSectionId])

  return (
    <span className={className}>
      {display.toLocaleString()}{suffix}
    </span>
  )
}
