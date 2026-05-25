"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Title with Ukrainian Flag */}
            <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                Сімейна вебгалерея
              </h1>
              <div className="flex h-10 w-16 flex-col overflow-hidden rounded shadow-md sm:h-12 sm:w-18 lg:h-16 lg:w-24">
                <div className="h-1/2 bg-[#005BBB]" />
                <div className="h-1/2 bg-[#FFD500]" />
              </div>
            </div>

            {/* Introduction Section */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-foreground md:text-2xl">
                Вступ
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
                Це веб-архів родини Гречанних. Вона створена для обміну та зберігання світлин, відеозаписів та фото.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 px-8 bg-[#005BBB] hover:bg-[#004a99]" asChild>
                <Link href="#gallery">
                  Переглянути галерею
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="#contact">
                  Зв&apos;язок
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-landscape.jpg"
                alt="Мальовничий пейзаж України"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[#FFD500]/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
