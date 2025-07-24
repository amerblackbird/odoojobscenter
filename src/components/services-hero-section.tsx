"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Shield, Network, Palette, CreditCard, FileText } from "lucide-react"
import { motion } from "motion/react"
export function ServicesHeroSection() {
  const serviceIcons = [
    { icon: <Code className="h-6 w-6" />, color: "text-blue-600", bgColor: "bg-blue-50" },
    { icon: <Shield className="h-6 w-6" />, color: "text-green-600", bgColor: "bg-green-50" },
    { icon: <Network className="h-6 w-6" />, color: "text-purple-600", bgColor: "bg-purple-50" },
    { icon: <Palette className="h-6 w-6" />, color: "text-pink-600", bgColor: "bg-pink-50" },
    { icon: <CreditCard className="h-6 w-6" />, color: "text-orange-600", bgColor: "bg-orange-50" },
    { icon: <FileText className="h-6 w-6" />, color: "text-indigo-600", bgColor: "bg-indigo-50" },
  ]

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-32 h-32 bg-primary-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-white text-gray-600 mb-8 rounded-full px-4 py-2 shadow-sm border border-gray-100">
              Comprehensive IT Solutions
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {" "}
              Services
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive IT solutions designed to transform your business and drive digital innovation across all
            sectors
          </motion.p>

          {/* Service Icons */}
          <motion.div
            className="flex justify-center items-center gap-4 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {serviceIcons.map((service, index) => (
              <motion.div
                key={index}
                className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center ${service.color}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                {service.icon}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg rounded-xl">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
