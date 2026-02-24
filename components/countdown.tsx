"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: Date): TimeLeft {
  const now = new Date().getTime()
  const diff = Math.max(target.getTime() - now, 0)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
]

export default function MyCountdown() {
  const target = new Date("2026-03-02T10:30:00")
  const [time, setTime] = useState<TimeLeft>(getTimeLeft(target))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {UNITS.map((u) => (
          <div key={u.key} className="flex flex-col items-center gap-1.5">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-primary/20 bg-card sm:h-20 sm:w-20">
              <span className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                --
              </span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground sm:text-xs">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xs font-medium uppercase tracking-widest text-primary">
        Cuenta regresiva
      </span>
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {UNITS.map((u, i) => (
          <div key={u.key} className="flex items-center gap-3 sm:gap-4">
            <div className="flex flex-col items-center gap-1.5">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-primary/20 bg-card shadow-lg shadow-primary/5 sm:h-20 sm:w-20">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-primary/[0.04]" />
                <span className="relative font-serif text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
                  {String(time[u.key]).padStart(2, "0")}
                </span>
              </div>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground sm:text-xs">
                {u.label}
              </span>
            </div>
            {i < UNITS.length - 1 && (
              <span className="mb-5 text-lg font-bold text-primary/40 sm:text-xl">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}