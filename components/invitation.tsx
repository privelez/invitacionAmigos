"use client"

import { useState } from "react"
import {
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  PartyPopper,
  Wine,
  MapPinned,
} from "lucide-react"
import Image from "next/image"
import { Confetti } from "@/components/confetti"
import { AnimatedSection } from "@/components/animated-section"
import { RsvpDialog } from "@/components/rsvp-dialog"
import MyCountdown from "./countdown"

export function Invitation() {
  const [rsvpOpen, setRsvpOpen] = useState(false)

  return (
    <main className="relative flex min-h-dvh flex-col items-center overflow-hidden bg-background">
      <Confetti />

      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-primary/30" />

      <div className="flex w-full max-w-lg flex-col items-center gap-12 px-6 py-16 md:py-24">
        {/* Hero - "Nos Recibimos" */}
        <AnimatedSection delay={300} className="text-center">
          <div className="flex items-center justify-center gap-2 text-primary/8grid grid-cols-1 md:grid-cols-[2fr_1fr] overflow-hidden rounded-2xl border border-primary/20 shadow-lg shadow-primary/10">
            <div>
              <Image
                src="/images/cortado.png"
                alt="xd"
                width={300}
                height={200}
              />
            </div>
            <div>
              <div className="mb-4 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground md:text-6xl p-4">
                Nos
                <br />
                Recibimos
              </h1>
              <div className="mx-auto mt-4 h-px w-24 bg-primary/40" />
            </div>
          </div>

        </AnimatedSection>

        {/* Date */}
        <AnimatedSection delay={1200} className="w-full text-center">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-widest">
                  Fecha
                </span>
              </div>
              <p className="mt-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
                2 de Marzo
              </p>
              <p className="mt-1 text-base text-muted-foreground">2026</p>
            </div>

            {/* Image always visible, smaller on mobile */}
            <div >
              <img
                src="/images/nosotros.png"
                alt="Nosotros"
                className="h-auto w-full max-w-[150px] object-cover sm:max-w-[175px]"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <AnimatedSection delay={2000}>
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-border" />
            <div className="h-2 w-2 rotate-45 border border-primary/50" />
            <div className="h-px w-16 bg-border" />
          </div>
        </AnimatedSection>

        {/* Thesis Defense */}
        <AnimatedSection delay={2400} className="w-full">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-primary">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-widest">
                Defensa de Tesis
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary/70" />
                <span className="text-base">10:30 hs</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary/70" />
                <span className="text-base text-balance">
                  Sala de Posgrado 2 - Departamento de Informatica
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <AnimatedSection delay={3200}>
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-border" />
            <div className="h-2 w-2 rotate-45 border border-primary/50" />
            <div className="h-px w-16 bg-border" />
          </div>
        </AnimatedSection>

        {/* Party */}
        <AnimatedSection delay={3600} className="w-full">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-primary">
              <PartyPopper className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-widest">
                El Festejo
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary/70" />
                <span className="text-base">17:00 hs</span>
            </div>
            <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Quincho Multiespacio
            </p>
            <a
              href="https://maps.google.com/?q=Quincho+Multiespacio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary/50"
            >
              <MapPinned className="h-4 w-4" />
              Ver en el Mapa
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={4800}>
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-border" />
            <div className="h-2 w-2 rotate-45 border border-primary/50" />
            <div className="h-px w-16 bg-border" />
          </div>
        </AnimatedSection>

        {/* Bring your drinks */}
        <AnimatedSection delay={4400} className="w-full">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className=" mb-3 flex items-center justify-lefth gap-2 text-primary">
              <Image
                  src="/images/0e3520e03ddaaee64abe92be87d85f0b.png"
                  alt="nosotros"
                  width={150}
                  height={75}
                />
            </div>
            <div className=" mb-3 flex items-center justify-center gap-2 text-primary">
              <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Traer lo que quieran tomar, lo importante es compartir juntos!
            </p>
            </div>
            <div className=" mb-3 flex  justify-end gap-2 text-primary">
              <Image
                  src="/images/60e37c0c0904a5eff8fda1abe88a08b7.png"
                  alt="nosotros"
                  width={150}
                  height={75}
                />
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <AnimatedSection delay={4800}>
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-border" />
            <div className="h-2 w-2 rotate-45 border border-primary/50" />
            <div className="h-px w-16 bg-border" />
          </div>
        </AnimatedSection>

        {/* RSVP Button */}
        <AnimatedSection delay={5200} className="w-full text-center">
          <div>
            <Image
              src="/images/c62b51ae09c2e3176119de54a7a36cb7(1).png"
              alt="xd"
              width={150}
              height={75}
            />

            <button
              onClick={() => setRsvpOpen(true)}
              className="w-full max-w-xs rounded-xl bg-primary px-8 py-4 font-serif text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
            >
              Confirmar Asistencia
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={5200} className="w-full text-center">
          <MyCountdown />
        </AnimatedSection>

        {/* Footer sparkle */}
        <AnimatedSection delay={5600} className="pb-8 text-center">
          <p className="text-sm text-muted-foreground/60">
            {"Te esperamos!"}
          </p>
        </AnimatedSection>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-t from-transparent to-primary/30" />

      <RsvpDialog open={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </main>
  )
}
