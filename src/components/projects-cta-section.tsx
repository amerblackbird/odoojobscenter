"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText } from "lucide-react"
import { motion } from "motion/react"
export function ProjectsCTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl">
            <CardContent className="p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Start Your Success Story</h2>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Join our portfolio of successful implementations and transform your business with proven solutions.
                Let's create your next success story together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 rounded-xl px-8 py-4">
                  Schedule Project Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-xl px-8 py-4 bg-transparent"
                >
                  Download Case Studies
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
