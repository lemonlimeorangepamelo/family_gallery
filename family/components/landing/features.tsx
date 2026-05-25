"use client"

import { motion } from "framer-motion"
import { 
  Image, 
  FolderHeart, 
  Lock, 
  Search, 
  Smartphone, 
  Cloud 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Image,
    title: "Удобный просмотр",
    description: "Просматривайте фото и видео в красивой галерее с удобной навигацией",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: FolderHeart,
    title: "Семейные альбомы",
    description: "Создавайте тематические альбомы для праздников, путешествий и событий",
    color: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Lock,
    title: "Приватный доступ",
    description: "Только приглашённые члены семьи могут видеть ваши фотографии",
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Search,
    title: "Умный поиск",
    description: "Находите фото по дате, тегам, людям и местам за секунды",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Smartphone,
    title: "С любого устройства",
    description: "Загружайте и просматривайте с телефона, планшета или компьютера",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Cloud,
    title: "Облачное хранение",
    description: "Ваши файлы надёжно хранятся в облаке и доступны в любой момент",
    color: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Всё для сохранения ваших воспоминаний
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Простой и удобный инструмент, созданный специально для семей, 
            которые хотят бережно хранить свои фотографии и видео.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="group h-full border-border/50 bg-card/50 backdrop-blur transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
