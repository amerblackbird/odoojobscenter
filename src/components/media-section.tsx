"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Palette, Monitor, Video, Camera, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
export function MediaSection() {
  const mediaServices = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "3D Design & Animation",
      description: "Professional 3D modeling, rendering, and animations",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Branding & Identity",
      description: "Complete brand identity and visual design solutions",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Creative digital marketing campaigns and materials",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const mediaClients = [
    { name: "Sudatel", project: "Corporate Website & Branding", color: "bg-blue-100 text-blue-800" },
    { name: "Amipharma", project: "Product Catalog & Marketing", color: "bg-green-100 text-green-800" },
    { name: "Omdurman National Bank", project: "Digital Banking Interface", color: "bg-purple-100 text-purple-800" },
    { name: "Various Corporations", project: "3D Walkthroughs", color: "bg-orange-100 text-orange-800" },
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
          <Badge className="bg-secondary-100 text-secondary-700 mb-4 rounded-full px-4 py-2">
            Media Production Division
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Creative & Media Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bringing your brand to life with cutting-edge design, development, and multimedia solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mediaServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group hover:scale-105 transition-all duration-300 border-0 bg-white rounded-3xl h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center ${service.color} mx-auto mb-4`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Creative Solutions</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our media production division combines technical expertise with creative vision to deliver exceptional
              digital experiences. From corporate websites to immersive 3D presentations, we help brands communicate
              effectively in the digital age.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Design Team</h4>
                  <p className="text-gray-600 text-sm">Expert designers and developers with years of experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Latest Technologies</h4>
                  <p className="text-gray-600 text-sm">Using cutting-edge tools and frameworks for optimal results</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">End-to-End Service</h4>
                  <p className="text-gray-600 text-sm">
                    From concept to deployment, we handle every aspect of your project
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-xl">
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Client Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 bg-white rounded-3xl">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Media Clients</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mediaClients.map((client, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge className={`${client.color} mb-3 rounded-full`}>{client.name}</Badge>
                    <p className="text-sm text-gray-600">{client.project}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
