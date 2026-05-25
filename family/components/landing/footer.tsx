import Link from "next/link"
import { Heart, Camera, Users } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-10 md:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-12 flex-col overflow-hidden rounded-sm shadow-sm">
              <div className="h-1/2 bg-[#005BBB]" />
              <div className="h-1/2 bg-[#FFD500]" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Сімейна галерея
            </span>
          </div>

          {/* Family-oriented tagline */}
          <p className="text-sm text-muted-foreground max-w-md">
            Зберігаємо найцінніші моменти нашої родини. Кожне фото — це історія, кожен спогад — це скарб.
          </p>

          {/* Simple family-oriented links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="#gallery"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Camera className="h-4 w-4" />
              <span>Галерея</span>
            </Link>
            <Link
              href="#family"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>Родина</span>
            </Link>
            <Link
              href="#memories"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>Спогади</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-border" />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            Родина Гречанних © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
