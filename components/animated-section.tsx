"use client"

import { useEffect, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay: number
  className?: string
}

export function AnimatedSection({ children, delay, className = "" }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  )
}
