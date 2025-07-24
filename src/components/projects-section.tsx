"use client"

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Building, TrendingUp, CheckCircle } from "lucide-react"
import { motion } from "motion/react"
import {useTranslations} from "next-intl";
export function ProjectsSection() {
  const t = useTranslations('projects');
  const projects = [
    {
      title: t("ePassport.title"),
      client: t("ePassport.client"),
      description: t("ePassport.description"),
      category: t("government"),
      year: "2023",
      impact: { processed: "500K+", efficiency: "75%", security: "99.9%" },
      technologies: [
        t("ePassport.technologies.biometricSystems"),
        t("ePassport.technologies.documentSecurity"),
        t("ePassport.technologies.databaseManagement"),
      ],
      status: t("completed"),
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: t("coreBanking.title"),
      client: t("coreBanking.client"),
      description: t("coreBanking.description"),
      category: t("banking"),
      year: "2022",
      impact: { transactions: "1M+", branches: "50+", uptime: "99.95%" },
      technologies: [
        t("ePassport.technologies.biometricSystems"),
        t("ePassport.technologies.documentSecurity"),
        t("ePassport.technologies.databaseManagement"),
      ],
      status: t("completed"),
      color: "bg-green-100 text-green-800",
    },
    {

      title: t("hospitalIT.title"),
      client: t("hospitalIT.client"),
      description: t("hospitalIT.description"),
      category: t("healthcare"),
      year: "2022",
      impact: { patients: "50K+", efficiency: "80%", departments: "15+" },
      technologies: [
        t("hospitalIT.technologies.networkInfrastructure"),
        t("hospitalIT.technologies.hospitalManagement"),
        t("hospitalIT.technologies.medicalIntegration"),
      ],
      status: t("completed"),
      color: "bg-red-100 text-red-800",
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-secondary-100 text-secondary-700 mb-4 rounded-full px-4 py-2">{t('badge')}</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:scale-[1.02] transition-all duration-300 bg-white rounded-3xl h-full border">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={project.color}>{project.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1 rtl:ml-1" />
                      {project.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{project.title}</CardTitle>
                  <div className="flex items-center text-gray-600">
                    <Building className="h-4 w-4 mr-2 rtl:ml-2" />
                    {project.client}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gray-50 rounded-2xl">
                    {Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{t(key)}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 rtl:ml-2 text-primary-600" />
                      {t('technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/*<div className="flex items-center justify-between">*/}
                  {/*  <div className="flex items-center">*/}
                  {/*    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />*/}
                  {/*    <span className="text-sm text-green-600 font-medium">{project.status}</span>*/}
                  {/*  </div>*/}
                  {/*  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">*/}
                  {/*    {t('viewDetails')}*/}
                  {/*    <ExternalLink className="h-4 w-4 ml-2 rtl:mr-2" />*/}
                  {/*  </Button>*/}
                  {/*</div>*/}
                </CardContent>
                <CardFooter>

                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 bg-gradient-to-r rtl:from-secondary-600 rtl:to-primary-600 from-primary-600 to-secondary-600 rounded-3xl">
            <CardContent className="p-12 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{t('readyToStart')}</h3>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                {t('readyToStartDesc')}
              </p>
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 rounded-xl px-8 py-4">
                {t('scheduleConsultation')}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
