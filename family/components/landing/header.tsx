"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "#features", label: "Можливості" },
  { href: "#gallery", label: "Галерея" },
  { href: "#family", label: "Родина" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Ukrainian Flag */}
          <div className="flex h-8 w-12 flex-col overflow-hidden rounded-sm shadow-sm">
            <div className="h-1/2 bg-[#005BBB]" />
            <div className="h-1/2 bg-[#FFD500]" />
          </div>
          <span className="font-serif text-lg font-semibold text-foreground">
            Сімейна вебгалерея
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Основна навігація">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#login">Увійти</Link>
          </Button>
          <Button size="sm" className="bg-[#005BBB] hover:bg-[#004a99]" asChild>
            <Link href="#signup">Створити галерею</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Відкрити меню">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3">
                <div className="flex h-6 w-9 flex-col overflow-hidden rounded-sm">
                  <div className="h-1/2 bg-[#005BBB]" />
                  <div className="h-1/2 bg-[#FFD500]" />
                </div>
                Сімейна вебгалерея
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4" aria-label="Мобільна навігація">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 pt-4 border-t">
                <Button variant="outline" asChild>
                  <Link href="#login" onClick={() => setIsOpen(false)}>
                    Увійти
                  </Link>
                </Button>
                <Button className="bg-[#005BBB] hover:bg-[#004a99]" asChild>
                  <Link href="#signup" onClick={() => setIsOpen(false)}>
                    Створити галерею
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
