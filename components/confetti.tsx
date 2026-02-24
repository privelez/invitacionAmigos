"use client"

import { useEffect, useState, useCallback } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  rotation: number
  speedX: number
  speedY: number
  rotationSpeed: number
  opacity: number
}

const COLORS = ["#d4a853", "#e8c97a", "#f0dba8", "#c49b3d", "#fff5d6"]

export function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([])

  // 🔁 Función para generar partículas
  const generateParticles = useCallback(() => {
    const newParticles: Particle[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 40,
      size: 4 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      speedX: (Math.random() - 0.5) * 2,
      speedY: 1 + Math.random() * 3,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 0.7 + Math.random() * 0.3,
    }))

    setParticles(newParticles)
  }, [])

  // 🎉 Se generan al montar
  useEffect(() => {
    generateParticles()
  }, [generateParticles])

  // 🎬 Animación
  useEffect(() => {
    if (particles.length === 0) return

    const interval = setInterval(() => {
      setParticles((prev) => {
        const updated = prev
          .map((p) => ({
            ...p,
            y: p.y + p.speedY * 0.5,
            x: p.x + p.speedX * 0.15,
            rotation: p.rotation + p.rotationSpeed,
            opacity: p.y > 80 ? p.opacity - 0.02 : p.opacity,
          }))
          .filter((p) => p.opacity > 0 && p.y < 110)

        // 💥 Si ya no quedan partículas → reiniciar
        if (updated.length === 0) {
          setTimeout(() => {
            generateParticles()
          }) // pequeña pausa antes de repetir
        }

        return updated
      })
    }, 50)

    return () => clearInterval(interval)
  }, [particles.length, generateParticles])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.6}px`,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            opacity: p.opacity,
            borderRadius: "1px",
          }}
        />
      ))}
    </div>
  )
}