"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Building, TrendingUp, CheckCircle } from "lucide-react"
import { motion } from "motion/react"
export function ProjectsGallerySection() {
  const projects = [
    {
      title: "E-Passport System Implementation",
      client: "Sudan Ministry of Interior",
      description:
        "Complete electronic passport system with biometric integration, secure document processing, and real-time verification capabilities.",
      category: "Government",
      year: "2023",
      duration: "18 months",
      status: "Completed",
      impact: {
        processed: "500K+",
        efficiency: "75%",
        security: "99.9%",
        satisfaction: "95%",
      },
      technologies: ["Biometric Systems", "Document Security", "Database Management", "API Integration"],
      challenges: [
        "Integration with existing government systems",
        "High-security requirements for sensitive data",
        "Large-scale user training and adoption",
      ],
      solutions: [
        "Custom API development for seamless integration",
        "Multi-layer security architecture implementation",
        "Comprehensive training program for 500+ staff members",
      ],
      results: [
        "Reduced passport processing time by 75%",
        "Enhanced security with biometric verification",
        "Improved citizen satisfaction scores to 95%",
      ],
      color: "bg-blue-100 text-blue-800",
      gradientFrom: "from-blue-50",
      gradientTo: "to-blue-100",
    },
    {
      title: "Core Banking System Modernization",
      client: "Export Development Bank",
      description:
        "Full Temenos T24 core banking system deployment with payment processing, mobile banking, and compliance modules.",
      category: "Banking",
      year: "2022",
      duration: "24 months",
      status: "Completed",
      impact: {
        transactions: "1M+",
        branches: "50+",
        uptime: "99.95%",
        growth: "40%",
      },
      technologies: ["Temenos T24", "Payment Systems", "Mobile Banking", "API Gateway"],
      challenges: [
        "Zero-downtime migration from legacy system",
        "Regulatory compliance requirements",
        "Staff training across multiple branches",
      ],
      solutions: [
        "Phased migration approach with parallel running",
        "Built-in compliance modules and reporting",
        "Comprehensive training program for 200+ staff",
      ],
      results: [
        "Increased transaction processing capacity by 300%",
        "Reduced operational costs by 25%",
        "Achieved 99.95% system uptime",
      ],
      color: "bg-green-100 text-green-800",
      gradientFrom: "from-green-50",
      gradientTo: "to-green-100",
    },
    {
      title: "Hospital IT Infrastructure Overhaul",
      client: "Royal Care Hospital",
      description:
        "Complete IT infrastructure upgrade with hospital management software, medical equipment integration, and telemedicine capabilities.",
      category: "Healthcare",
      year: "2022",
      duration: "12 months",
      status: "Completed",
      impact: {
        patients: "50K+",
        efficiency: "80%",
        departments: "15+",
        satisfaction: "92%",
      },
      technologies: ["Hospital Management System", "Medical Integration", "Telemedicine", "Network Infrastructure"],
      challenges: [
        "24/7 operational requirements during upgrade",
        "Integration with diverse medical equipment",
        "Staff adaptation to new digital workflows",
      ],
      solutions: [
        "Staged implementation with minimal disruption",
        "Custom integration modules for medical devices",
        "Extensive staff training and support program",
      ],
      results: [
        "Improved patient care efficiency by 80%",
        "Reduced medical errors by 60%",
        "Enhanced patient satisfaction to 92%",
      ],
      color: "bg-red-100 text-red-800",
      gradientFrom: "from-red-50",
      gradientTo: "to-red-100",
    },
    {
      title: "Telecommunications Network Expansion",
      client: "Sudatel Group",
      description:
        "Large-scale network infrastructure expansion including fiber optic deployment, 5G pilot implementation, and network optimization.",
      category: "Telecommunications",
      year: "2023",
      duration: "36 months",
      status: "Ongoing",
      impact: {
        coverage: "95%",
        users: "2M+",
        speed: "10x",
        reliability: "99.8%",
      },
      technologies: ["Fiber Optic Networks", "5G Technology", "Network Optimization", "Monitoring Systems"],
      challenges: [
        "Geographical challenges in remote areas",
        "Integration with existing infrastructure",
        "Maintaining service during upgrades",
      ],
      solutions: [
        "Innovative deployment strategies for difficult terrain",
        "Hybrid integration approach for legacy systems",
        "Advanced network management and monitoring",
      ],
      results: [
        "Extended coverage to 95% of target areas",
        "Increased network speed by 10x",
        "Improved service reliability to 99.8%",
      ],
      color: "bg-purple-100 text-purple-800",
      gradientFrom: "from-purple-50",
      gradientTo: "to-purple-100",
    },
    {
      title: "University Management System",
      client: "University of Khartoum",
      description:
        "Comprehensive university management system including student information, learning management, and campus-wide network infrastructure.",
      category: "Education",
      year: "2021",
      duration: "15 months",
      status: "Completed",
      impact: {
        students: "30K+",
        faculty: "2K+",
        courses: "500+",
        efficiency: "70%",
      },
      technologies: ["Learning Management System", "Student Information System", "Campus Network", "Digital Library"],
      challenges: [
        "Large user base with diverse needs",
        "Integration with existing academic systems",
        "Ensuring system scalability for future growth",
      ],
      solutions: [
        "Modular system design for flexibility",
        "API-first approach for easy integration",
        "Cloud-based architecture for scalability",
      ],
      results: [
        "Streamlined academic processes by 70%",
        "Improved student engagement and satisfaction",
        "Reduced administrative workload by 50%",
      ],
      color: "bg-orange-100 text-orange-800",
      gradientFrom: "from-orange-50",
      gradientTo: "to-orange-100",
    },
    {
      title: "Government Document Management System",
      client: "Ministry of Finance",
      description:
        "SAPERION-powered electronic document management system for efficient workflow automation and digital archiving.",
      category: "Government",
      year: "2021",
      duration: "10 months",
      status: "Completed",
      impact: {
        documents: "1M+",
        efficiency: "85%",
        storage: "90%",
        retrieval: "95%",
      },
      technologies: ["SAPERION DMS", "Workflow Automation", "Digital Archive", "Search Engine"],
      challenges: [
        "Massive volume of legacy documents",
        "Complex approval workflows",
        "Security and access control requirements",
      ],
      solutions: [
        "Automated document digitization process",
        "Custom workflow engine development",
        "Role-based access control implementation",
      ],
      results: [
        "Digitized over 1M legacy documents",
        "Reduced document processing time by 85%",
        "Achieved 95% faster document retrieval",
      ],
      color: "bg-indigo-100 text-indigo-800",
      gradientFrom: "from-indigo-50",
      gradientTo: "to-indigo-100",
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
          <Badge className="bg-secondary-100 text-secondary-700 mb-4 rounded-full px-4 py-2">Project Portfolio</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Detailed case studies showcasing our successful implementations and their transformative impact
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:scale-[1.02] transition-all duration-300 border-0 bg-white rounded-3xl h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={project.color}>{project.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{project.title}</CardTitle>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Building className="h-4 w-4 mr-2" />
                    {project.client}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </CardHeader>

                <CardContent>
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="text-sm font-medium text-gray-900">Duration</div>
                      <div className="text-sm text-gray-600">{project.duration}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="text-sm font-medium text-gray-900">Status</div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div
                    className={`grid grid-cols-2 gap-3 mb-6 p-4 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-2xl`}
                  >
                    {Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
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
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Key Results:
                    </h4>
                    <div className="space-y-2">
                      {project.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full rounded-xl bg-transparent border-gray-200 hover:bg-gray-50"
                  >
                    View Full Case Study
                    <ExternalLink className="h-4 w-4 ml-2" />
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
