"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "motion/react"
export function ContactInfoSection() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Office",
      details: ["3rd Floor, Hurria Tower", "Apartment 4, Khartoum, Sudan", "P.O. Box: 11919"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+249 XXX XXX XXX", "Available during business hours", "Emergency support available"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@itway.com.sd", "support@itway.com.sd", "24h response guarantee"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Sunday - Thursday: 8:00 AM - 5:00 PM", "Friday: 8:00 AM - 12:00 PM", "Saturday: Closed"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-primary-100 text-primary-700 mb-4 rounded-full px-4 py-2">Contact Information</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the most convenient way to get in touch with our expert team
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 bg-white rounded-3xl h-full hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center ${info.color} mx-auto mb-6`}
                  >
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 bg-white rounded-3xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Find Us on the Map</h3>
              <div className="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-primary-600" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Hurria Tower, Khartoum, Sudan</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
