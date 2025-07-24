"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, CreditCard, Heart, Radio, GraduationCap, ArrowRight, Users, TrendingUp } from "lucide-react"
import { motion } from "motion/react"
export function IndustriesDetailSection() {
  const industries = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Government & Public Sector",
      description: "Comprehensive digital transformation solutions for government agencies and public institutions.",
      longDescription:
        "We specialize in modernizing government operations through advanced IT infrastructure, secure document management systems, and citizen service platforms. Our solutions enhance transparency, efficiency, and service delivery across all levels of government.",
      services: [
        "E-Government Platforms",
        "Digital Identity Systems",
        "Document Management",
        "Citizen Service Portals",
        "Government Accounting Systems",
        "Security & Compliance",
      ],
      achievements: {
        projects: "50+",
        agencies: "25+",
        citizens: "2M+",
        uptime: "99.9%",
      },
      keyProjects: ["E-Passport System", "Ministry of Interior Digital Platform", "Government Accounting System"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradientFrom: "from-blue-50",
      gradientTo: "to-blue-100",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Banking & Finance",
      description: "Advanced core banking systems and comprehensive financial technology implementations.",
      longDescription:
        "Our banking solutions leverage Temenos T24 and other leading platforms to deliver secure, scalable, and compliant financial systems. We help banks modernize their operations, improve customer experience, and meet regulatory requirements.",
      services: [
        "Core Banking Systems",
        "Payment Processing",
        "Mobile Banking",
        "Risk Management",
        "Compliance Solutions",
        "ATM Networks",
      ],
      achievements: {
        banks: "8+",
        transactions: "1M+",
        branches: "100+",
        availability: "99.95%",
      },
      keyProjects: ["Export Development Bank T24", "Bank of Khartoum Modernization", "Payment Gateway Solutions"],
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradientFrom: "from-green-50",
      gradientTo: "to-green-100",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Healthcare",
      description: "Complete IT infrastructure and management systems for healthcare providers.",
      longDescription:
        "We deliver comprehensive healthcare IT solutions that improve patient care, streamline operations, and ensure compliance with medical standards. Our systems integrate seamlessly with medical equipment and existing workflows.",
      services: [
        "Hospital Management Systems",
        "Electronic Health Records",
        "Medical Equipment Integration",
        "Telemedicine Platforms",
        "Laboratory Information Systems",
        "Pharmacy Management",
      ],
      achievements: {
        hospitals: "12+",
        patients: "100K+",
        departments: "50+",
        efficiency: "80%",
      },
      keyProjects: ["Royal Care Hospital System", "Medical Center Networks", "Health Information Exchange"],
      color: "text-red-600",
      bgColor: "bg-red-50",
      gradientFrom: "from-red-50",
      gradientTo: "to-red-100",
    },
    {
      icon: <Radio className="h-10 w-10" />,
      title: "Telecommunications",
      description: "Robust network infrastructure and communication solutions for telecom operators.",
      longDescription:
        "We provide end-to-end telecommunications solutions including network design, implementation, and optimization. Our expertise covers both traditional and next-generation networks, ensuring reliable connectivity and service quality.",
      services: [
        "Network Infrastructure",
        "5G Implementation",
        "Fiber Optic Networks",
        "Network Optimization",
        "Billing Systems",
        "Customer Management",
      ],
      achievements: {
        coverage: "95%",
        users: "5M+",
        networks: "10+",
        reliability: "99.8%",
      },
      keyProjects: ["Sudatel Network Expansion", "5G Pilot Projects", "Rural Connectivity Initiative"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradientFrom: "from-purple-50",
      gradientTo: "to-purple-100",
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Education",
      description: "Innovative educational technology and comprehensive learning management systems.",
      longDescription:
        "We transform educational institutions through modern IT infrastructure, learning management systems, and digital classroom solutions. Our platforms enhance teaching effectiveness and student engagement across all educational levels.",
      services: [
        "Learning Management Systems",
        "Student Information Systems",
        "Digital Classrooms",
        "E-Learning Platforms",
        "Campus Networks",
        "Educational Software",
      ],
      achievements: {
        institutions: "15+",
        students: "50K+",
        courses: "1000+",
        satisfaction: "95%",
      },
      keyProjects: ["University Management Systems", "E-Learning Platforms", "Digital Library Solutions"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      gradientFrom: "from-orange-50",
      gradientTo: "to-orange-100",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-primary-100 text-primary-700 mb-4 rounded-full px-4 py-2">Industry Expertise</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Deep Sector Knowledge</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized solutions tailored to the unique challenges and requirements of each industry
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 bg-white rounded-3xl overflow-hidden">
                <div className={`bg-gradient-to-r ${industry.gradientFrom} ${industry.gradientTo} p-8`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-20 h-20 ${industry.bgColor} rounded-2xl flex items-center justify-center ${industry.color} mr-6`}
                        >
                          {industry.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                          <p className="text-gray-600">{industry.description}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">{industry.longDescription}</p>
                      <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-xl">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Achievements */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(industry.achievements).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-white/80 rounded-2xl">
                          <div className={`text-2xl font-bold ${industry.color}`}>{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Services */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-primary-600" />
                        Our Services
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {industry.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center text-sm text-gray-700">
                            <div
                              className={`w-2 h-2 ${industry.color.replace("text-", "bg-")} rounded-full mr-2`}
                            ></div>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Projects */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-secondary-600" />
                        Key Projects
                      </h4>
                      <div className="space-y-3">
                        {industry.keyProjects.map((project, projectIndex) => (
                          <div key={projectIndex} className="p-3 bg-gray-50 rounded-xl">
                            <div className="text-sm font-medium text-gray-900">{project}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
