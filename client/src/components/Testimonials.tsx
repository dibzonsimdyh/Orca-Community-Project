"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    content:
      "This platform has transformed how our team collaborates. The ability to share and iterate on ideas in real-time is incredible.",
    avatar: "/professional-woman.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    content:
      "I've found my co-founder and raised seed funding through connections made here. The community is genuinely supportive and innovative.",
    avatar: "/man-entrepreneur.png",
  },
  {
    name: "Aisha Patel",
    role: "Software Engineer",
    content:
      "The best place to get feedback on technical ideas. I've learned so much from the diverse perspectives shared here.",
    avatar: "/woman-engineer-at-work.png",
  },
  {
    name: "James Wilson",
    role: "Creative Director",
    content:
      "Finally, a platform that understands the creative process. Sharing ideas here has led to some of my best work.",
    avatar: "/creative-man.png",
  },
  {
    name: "Elena Kowalski",
    role: "Marketing Lead",
    content:
      "The insights I've gained from this community have directly impacted our marketing strategy. Invaluable resource!",
    avatar: "/woman-marketing-strategy.png",
  },
  {
    name: "David Kim",
    role: "UX Researcher",
    content: "I love how easy it is to validate ideas with real people. The feedback loop here is unmatched.",
    avatar: "/man-researcher.png",
  },
]

// Duplicate testimonials for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Loved by Creators Worldwide</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Join thousands of innovators who are already sharing and building together
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[400px] p-6 bg-card hover:bg-accent/5 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-card-foreground mb-6 text-balance leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
