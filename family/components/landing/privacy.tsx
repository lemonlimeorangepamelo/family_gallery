"use client"

import { motion } from "framer-motion"
import { Shield, UserCheck, Eye, Server, Trash2, Lock } from "lucide-react"

const privacyFeatures = [
  {
    icon: Shield,
    title: "Архив только для семьи",
    description: "Ваши фотографии видны только тем, кого вы пригласили",
  },
  {
    icon: UserCheck,
    title: "Доступ по приглашению",
    description: "Добавляйте членов семьи через персональные ссылки",
  },
  {
    icon: Eye,
    title: "Контроль видимости",
    description: "Выбирайте, кто видит каждый альбом отдельно",
  },
  {
    icon: Server,
    title: "Защищённое хранение",
    description: "Данные зашифрованы и хранятся на надёжных серверах",
  },
  {
    icon: Trash2,
    title: "Полное удаление",
    description: "Удаляйте любые данные без возможности восстановления",
  },
  {
    icon: Lock,
    title: "Приватность по умолчанию",
    description: "Новые альбомы автоматически скрыты от посторонних",
  },
]

export function Privacy() {
  return (
    <section id="privacy" className="bg-secondary/30 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              <Shield className="h-4 w-4" />
              Ваша приватность важна
            </div>

            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Надёжная защита ваших воспоминаний
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
              Мы понимаем, насколько личными являются семейные фотографии. 
              Поэтому безопасность и конфиденциальность — наш главный приоритет. 
              Только вы решаете, кто имеет доступ к вашим воспоминаниям.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
                <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium text-foreground">SSL шифрование</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-foreground">GDPR совместимость</span>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-medium text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
