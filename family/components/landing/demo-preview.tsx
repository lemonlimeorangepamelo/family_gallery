"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Image, Video, FolderHeart, Play, Calendar, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "photos", label: "Фото", icon: Image },
  { id: "videos", label: "Видео", icon: Video },
  { id: "albums", label: "Альбомы", icon: FolderHeart },
]

const photoItems = [
  { id: 1, date: "15 июля 2024", location: "Море", likes: 12, color: "bg-blue-200" },
  { id: 2, date: "10 июля 2024", location: "Дача", likes: 8, color: "bg-green-200" },
  { id: 3, date: "5 июля 2024", location: "Парк", likes: 15, color: "bg-amber-200" },
  { id: 4, date: "1 июля 2024", location: "Дом", likes: 23, color: "bg-rose-200" },
  { id: 5, date: "28 июня 2024", location: "Кафе", likes: 6, color: "bg-purple-200" },
  { id: 6, date: "25 июня 2024", location: "Пляж", likes: 19, color: "bg-cyan-200" },
]

const videoItems = [
  { id: 1, title: "День рождения бабушки", duration: "2:34", color: "bg-rose-200" },
  { id: 2, title: "Первые шаги малыша", duration: "0:45", color: "bg-amber-200" },
  { id: 3, title: "Новый год 2024", duration: "5:12", color: "bg-blue-200" },
  { id: 4, title: "Выпускной", duration: "3:28", color: "bg-green-200" },
]

const albums = [
  { id: 1, title: "Лето 2024", count: 124, color: "bg-blue-200" },
  { id: 2, title: "День рождения", count: 56, color: "bg-rose-200" },
  { id: 3, title: "Новый год", count: 89, color: "bg-emerald-200" },
  { id: 4, title: "Путешествия", count: 234, color: "bg-amber-200" },
]

export function DemoPreview() {
  const [activeTab, setActiveTab] = useState("photos")

  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Посмотрите, как это выглядит
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Интуитивный интерфейс, в котором легко разберётся каждый член семьи
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-4 border-b border-border bg-secondary/30 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1">
                <div className="mx-auto max-w-md rounded-lg bg-background px-4 py-1.5 text-center text-sm text-muted-foreground">
                  fotoarchive.family/albums
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6 flex gap-2">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab(tab.id)}
                    className="gap-2"
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </Button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "photos" && (
                  <motion.div
                    key="photos"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 gap-4 sm:grid-cols-3"
                  >
                    {photoItems.map((item) => (
                      <div
                        key={item.id}
                        className="group relative aspect-square overflow-hidden rounded-xl"
                      >
                        <div className={cn("h-full w-full", item.color)} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform group-hover:translate-y-0">
                          <div className="flex items-center gap-2 text-xs text-white">
                            <Calendar className="h-3 w-3" />
                            <span>{item.date}</span>
                          </div>
                          <div className="mt-1 flex items-center justify-between text-xs text-white/80">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{item.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              <span>{item.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "videos" && (
                  <motion.div
                    key="videos"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {videoItems.map((item) => (
                      <div
                        key={item.id}
                        className="group relative aspect-video overflow-hidden rounded-xl"
                      >
                        <div className={cn("h-full w-full", item.color)} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                            <Play className="h-5 w-5 text-foreground ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                          <div className="text-sm font-medium text-white">
                            {item.title}
                          </div>
                          <div className="text-xs text-white/80">{item.duration}</div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "albums" && (
                  <motion.div
                    key="albums"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {albums.map((album) => (
                      <div
                        key={album.id}
                        className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-lg"
                      >
                        <div
                          className={cn(
                            "mb-3 aspect-[4/3] rounded-lg",
                            album.color
                          )}
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-foreground">
                              {album.title}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {album.count} фото
                            </div>
                          </div>
                          <FolderHeart className="h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
