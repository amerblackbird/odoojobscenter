"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, TrendingUp } from "lucide-react"
import { motion } from "motion/react"
export function ProjectsTimelineSection() {
  const timelineEvents = [
    {
      year: "2023",
      title: "Digital Government Era",
      projects: [
        { name: "E-Passport System", client: "Ministry of Interior", status: "completed" },
        { name: "5G Network Expansion", client: "Sudatel", status: "ongoing" },
      ],
      achievements: "2M+ citizens served, 95% satisfaction rate",
      color: "bg-blue-100 text-blue-800",
    },
    {
      year: "2022",
      title: "Banking & Healthcare Revolution",
      projects: [
        { name: "Core Banking Modernization", client: "Export Development Bank", status: "completed" },
        { name: "Hospital IT Infrastructure", client: "Royal Care Hospital", status: "completed" },
      ],
      achievements: "1M+ transactions processed, 50K+ patients served",
      color: "bg-green-100 text-green-800",
    },
    {
      year: "2021",
      title: "Education & Document Management",
      projects: [
        { name: "University Management System", client: "University of Khartoum", status: "completed" },
        { name: "Government DMS", client: "Ministry of Finance", status: "completed" },
      ],
      achievements: "30K+ students, 1M+ documents digitized",
      color: "bg-purple-100 text-purple-800",
    },
    {
      year: "2020",
      title: "Infrastructure Foundation",
      projects: [
        { name: "Network Infrastructure Upgrade", client: "Various Clients", status: "completed" },
        { name: "Security Systems Implementation", client: "Government Agencies", status: "completed" },
      ],
      achievements: "99.9% uptime achieved, enhanced security protocols",
      color: "bg-orange-100 text-orange-800",
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
          <Badge className="bg-primary-100 text-primary-700 mb-4 rounded-full px-4 py-2">Project Timeline</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey of Success</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A chronological view of our major project milestones and achievements over the years
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timelineEvents.map((event, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Timeline Line */}
                {index !== timelineEvents.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-200"></div>
                )}

                <Card className="border-0 bg-white rounded-3xl ml-16 relative">
                  {/* Year Badge */}
                  <div className="absolute -left-16 top-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {event.year}
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <Badge className={`${event.color} mb-4 rounded-full`}>{event.title}</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>

                        <div className="space-y-3 mb-6">
                          {event.projects.map((project, projectIndex) => (
                            <div
                              key={projectIndex}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                            >
                              <div>
                                <div className="font-medium text-gray-900">{project.name}</div>
                                <div className="text-sm text-gray-600">{project.client}</div>
                              </div>
                              <div className="flex items-center">
                                {project.status === "completed" ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : (
                                  <Clock className="h-5 w-5 text-orange-500" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-start">
                          <TrendingUp className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                          <div>
                            <div className="font-medium text-gray-900 mb-1">Key Achievements</div>
                            <div className="text-gray-600">{event.achievements}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="text-center p-6 bg-gray-50 rounded-2xl">
                          <div className="text-3xl font-bold text-primary-600 mb-2">{event.projects.length}</div>
                          <div className="text-sm text-gray-600">Major Projects</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
