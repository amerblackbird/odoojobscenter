"use client"

import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { motion } from "motion/react"
export function ContactHeroSection() {
  const contactMethods = [
    { icon: <Phone className="h-6 w-6" />, color: "text-blue-600", bgColor: "bg-blue-50" },
    { icon: <Mail className="h-6 w-6" />, color: "text-green-600", bgColor: "bg-green-50" },
    { icon: <MapPin className="h-6 w-6" />, color: "text-purple-600", bgColor: "bg-purple-50" },
    { icon: <Clock className="h-6 w-6" />, color: "text-orange-600", bgColor: "bg-orange-50" },
  ]

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/*/!* Subtle background elements *!/*/}
      {/*<div className="absolute inset-0">*/}
      {/*  <div className="absolute top-32 left-10 w-32 h-32 bg-primary-100/20 rounded-full blur-3xl"></div>*/}
      {/*  <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-100/20 rounded-full blur-3xl"></div>*/}
      {/*</div>*/}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-white text-gray-600 mb-8 rounded-full px-4 py-2 shadow-sm border border-gray-100">
              Get in Touch
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {" "}
              Connect
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your business? Get in touch with our experts to discuss your IT needs and discover how we
            can help drive your digital transformation
          </motion.p>

          {/* Contact Method Icons */}
          <motion.div
            className="flex justify-center items-center gap-4 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center ${method.color}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                {method.icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">25+</div>
              <div className="text-sm text-gray-600">Expert Team</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
