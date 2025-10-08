"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Lightbulb, Users, Heart, Globe } from "lucide-react"
import { useEffect } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: 50000, suffix: "K+", label: "Ideas Shared", icon: Lightbulb },
  { value: 10000, suffix: "K+", label: "Active Creators", icon: Users },
  { value: 95, suffix: "%", label: "Satisfaction Rate", icon: Heart },
  { value: 2000000, suffix: "M+", label: "Connections Made", icon: Globe },
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
      ease: "easeOut",
    },
  },
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (suffix === "K+") {
      return String(Math.round(latest / 1000))
    } else if (suffix === "M+") {
      return (latest / 1000000).toFixed(1)
    }
    return String(Math.round(latest))
  })

  useEffect(() => {
    if (isInView) {
      count.set(0)
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, count, value])

  return (
    <div ref={ref} className="text-3xl font-bold text-foreground md:text-4xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 rounded-full bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
