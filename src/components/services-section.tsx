"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, CreditCard, FileText, Shield, Palette, Network, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
export function ServicesSection() {
  const services = [
    {
      icon: <Network className="h-8 w-8" />,
      title: "IT Infrastructure & Networking",
      description:
        "Complete design, implementation, and maintenance of robust IT infrastructure and networking solutions.",
      features: ["Network Design", "Server Setup", "Infrastructure Maintenance", "Performance Optimization"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradientFrom: "from-blue-50",
      gradientTo: "to-blue-100",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Enterprise Software Solutions",
      description: "Custom ERP, financial systems, and enterprise applications tailored to your business needs.",
      features: ["ERP Systems", "Financial Software", "Insurance Solutions", "Custom Development"],
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradientFrom: "from-green-50",
      gradientTo: "to-green-100",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Core Banking Systems",
      description: "Comprehensive banking solutions powered by Temenos for modern financial institutions.",
      features: ["Temenos Implementation", "Banking Modules", "Payment Systems", "Compliance Tools"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradientFrom: "from-purple-50",
      gradientTo: "to-purple-100",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Management",
      description: "SAPERION-powered electronic document management systems for efficient workflow automation.",
      features: ["Document Digitization", "Workflow Automation", "Archive Management", "Search & Retrieval"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      gradientFrom: "from-orange-50",
      gradientTo: "to-orange-100",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Network Security",
      description: "Advanced security solutions including firewalls, intrusion detection, and threat prevention.",
      features: ["Firewall Configuration", "IDS/IPS", "Security Audits", "Threat Monitoring"],
      color: "text-red-600",
      bgColor: "bg-red-50",
      gradientFrom: "from-red-50",
      gradientTo: "to-red-100",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Media & Web Services",
      description: "Creative design, web development, and multimedia solutions for modern businesses.",
      features: ["Web Development", "3D Design", "Branding", "Digital Marketing"],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      gradientFrom: "from-pink-50",
      gradientTo: "to-pink-100",
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-primary-100 text-primary-700 mb-4 rounded-full px-4 py-2">Our Services</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete IT Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive digital innovation
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:scale-[1.02] transition-all duration-300 border-0 bg-white rounded-3xl h-full">
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center ${service.color} mb-6`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div
                    className={`p-4 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} rounded-2xl mb-6`}
                  >
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div
                            className={`w-1.5 h-1.5 ${service.color.replace("text-", "bg-")} rounded-full mr-2`}
                          ></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full rounded-xl bg-transparent border-gray-200 hover:bg-gray-50"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
