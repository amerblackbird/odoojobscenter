"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Building, TrendingUp, CheckCircle } from "lucide-react"
import { motion } from "motion/react"
export function IndustriesCaseStudies() {
  const caseStudies = [
    {
      title: "Digital Government Transformation",
      client: "Sudan Ministry of Interior",
      industry: "Government",
      description: "Complete digital transformation including e-passport system and citizen services platform.",
      year: "2023",
      impact: {
        citizens: "2M+",
        efficiency: "75%",
        satisfaction: "95%",
        cost_savings: "40%",
      },
      technologies: ["Digital Identity", "Biometric Systems", "Cloud Infrastructure", "API Gateway"],
      color: "bg-blue-100 text-blue-800",
      gradientFrom: "from-blue-50",
      gradientTo: "to-blue-100",
    },
    {
      title: "Banking System Modernization",
      client: "Export Development Bank",
      industry: "Banking",
      description: "Full core banking system implementation with Temenos T24 and digital banking services.",
      year: "2022",
      impact: {
        transactions: "1M+",
        branches: "50+",
        uptime: "99.95%",
        growth: "40%",
      },
      technologies: ["Temenos T24", "Mobile Banking", "Payment Gateway", "Risk Management"],
      color: "bg-green-100 text-green-800",
      gradientFrom: "from-green-50",
      gradientTo: "to-green-100",
    },
    {
      title: "Healthcare Digital Revolution",
      client: "Royal Care Hospital",
      industry: "Healthcare",
      description: "Comprehensive hospital management system with medical equipment integration.",
      year: "2022",
      impact: {
        patients: "50K+",
        departments: "15+",
        efficiency: "80%",
        errors_reduced: "60%",
      },
      technologies: ["Hospital Management", "Medical Integration", "Telemedicine", "Electronic Records"],
      color: "bg-red-100 text-red-800",
      gradientFrom: "from-red-50",
      gradientTo: "to-red-100",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-secondary-100 text-secondary-700 mb-4 rounded-full px-4 py-2">Success Stories</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world examples of how we've transformed businesses across different industries
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:scale-[1.02] transition-all duration-300 border-0 bg-white rounded-3xl h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={study.color}>{study.industry}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {study.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{study.title}</CardTitle>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Building className="h-4 w-4 mr-2" />
                    {study.client}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{study.description}</p>
                </CardHeader>

                <CardContent>
                  {/* Impact Metrics */}
                  <div
                    className={`grid grid-cols-2 gap-3 mb-6 p-4 bg-gradient-to-r ${study.gradientFrom} ${study.gradientTo} rounded-2xl`}
                  >
                    {Object.entries(study.impact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace("_", " ")}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-primary-600" />
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-green-600 font-medium">Completed</span>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                      View Details
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
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
