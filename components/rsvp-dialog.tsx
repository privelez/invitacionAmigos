"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface RsvpDialogProps {
  open: boolean
  onClose: () => void
}

export function RsvpDialog({ open, onClose }: RsvpDialogProps) {
  const [name, setName] = useState("")
  const [guests, setGuests] = useState("1")
  const [confirmed, setConfirmed] = useState(false)

  if (!open) return null

  const handleConfirm = async () => {
    if (name.trim()) {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyJ7y-YZBxPB83YmyfnnbVZXrNKUHOjH6_Gus574DD5ekXCbtwim-iG4pRqLVyTRWU/exec", {
          method: "POST",
          body: JSON.stringify({
            nombre: name
          })
        });

        const data = await response.json();
        console.log(data);
      setConfirmed(true)
      setTimeout(() => {
        onClose()
        setConfirmed(false)
        setName("")
        setGuests("1")
      }, 2000)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        role="presentation"
      />
      <div className="relative w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-2xl">
        {confirmed ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <Check className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl text-foreground">
              {"Asistencia Confirmada!"}
            </h3>
            <p className="text-muted-foreground">
              {"Te esperamos, "}{name}{"!"}
            </p>
          </div>
        ) : (
          <>
            <h3 className="mb-6 text-center font-serif text-2xl text-foreground">
              Confirmar Asistencia
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mt-2 flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={!name.trim()}
                  className="flex-1 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 disabled:opacity-50"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
