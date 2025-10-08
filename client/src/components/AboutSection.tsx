"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Zap, TrendingUp, MessageSquare, Sparkles, Target } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Lightbulb,
    title: "Share Your Vision",
    description:
      "Transform your thoughts into impactful ideas. Our platform makes it effortless to capture, refine, and share your creative vision with the world.",
  },
  {
    icon: Users,
    title: "Build Community",
    description:
      "Connect with like-minded innovators and creators. Collaborate, discuss, and grow together in a space designed for meaningful interactions.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description:
      "Get real-time responses from a global community. Iterate faster with constructive feedback that helps you refine and perfect your ideas.",
  },
  {
    icon: TrendingUp,
    title: "Track Impact",
    description:
      "Watch your ideas gain momentum. Analytics and insights help you understand what resonates and how your contributions make a difference.",
  },
  {
    icon: MessageSquare,
    title: "Rich Discussions",
    description:
      "Engage in thoughtful conversations. Our threaded discussions and smart notifications keep you connected to the ideas that matter most.",
  },
  {
    icon: Sparkles,
    title: "Discover Inspiration",
    description:
      "Explore a curated feed of innovative ideas. Our algorithm surfaces content that sparks creativity and pushes boundaries.",
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
      ease: "easeOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-12 text-center"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Target className="h-4 w-4" />
            Our Mission
          </span>
        </motion.div>
        <motion.h2 variants={itemVariants} className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
          Make collaboration seamless.
        </motion.h2>
        <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          Tools for creators and innovators to share feedback, iterate faster, and bring their best work to the world.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group relative h-full overflow-hidden border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-pretty text-muted-foreground">{feature.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
