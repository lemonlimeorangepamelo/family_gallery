"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, ImagePlus } from "lucide-react"

export function FamilyBanner() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-[#005BBB]/10 to-[#FFD500]/10 border border-border px-6 py-5 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD500]/20">
              <Heart className="h-5 w-5 text-[#005BBB]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-foreground">
                Сімейна галерея
              </span>
              <span className="text-xs text-muted-foreground">
                Наші спільні спогади
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              asChild
            >
              <Link href="#gallery">
                <ImagePlus className="h-4 w-4" />
                Переглянути все
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-[#005BBB] hover:bg-[#004a99] gap-2"
              asChild
            >
              <Link href="#upload">
                Додати фото
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
