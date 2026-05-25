import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { PhotoGallery } from "@/components/landing/photo-gallery"
import { FamilyBanner } from "@/components/landing/namedly-banner"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PhotoGallery />
      <FamilyBanner />
      <Footer />
    </main>
  )
}
