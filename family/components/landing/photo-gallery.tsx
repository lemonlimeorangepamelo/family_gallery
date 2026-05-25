"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

const photos = [
  {
    id: 1,
    src: "/images/photo_1.jpg",
    alt: "",
    caption: "",
  },
  {
    id: 2,
    src: "/images/photo_2.jpg",
    alt: "",
    caption: "",
  },
  {
    id: 3,
    src: "/images/photo_3.jpg",
    alt: "",
    caption: "",
  },
]

export function PhotoGallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl mb-2">
            Останні фото:
          </h2>
          <div className="h-1 w-24 bg-[#005BBB]" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <Card
              key={photo.id}
              className="group overflow-hidden border-0 bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {photo.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#gallery"
            className="inline-flex items-center text-[#005BBB] hover:text-[#004a99] font-medium transition-colors"
          >
            Переглянути всі фото →
          </a>
        </div>
      </div>
    </section>
  )
}
