"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, CreditCard, Heart, Radio, GraduationCap } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
export function IndustriesSection() {
  const t = useTranslations("industries")
  const industries = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: t('government.title'),
      description: t('government.description'),
      projects: t('government.projects'),
      stats: { projects: "50+", years: "20+", agencies: "25+" },
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradientFrom: "from-blue-50",
      gradientTo: "to-blue-100",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: t('banking.title'),
      description: t('banking.description'),
      projects: t('banking.projects'),
      stats: { projects: "15+", banks: "8", transactions: "1M+" },
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradientFrom: "from-green-50",
      gradientTo: "to-green-100",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('healthcare.title'),
      description: t('healthcare.description'),
      projects: t('healthcare.projects'),
      stats: { projects: "25+", hospitals: "12", patients: "100K+" },
      color: "text-red-600",
      bgColor: "bg-red-50",
      gradientFrom: "from-red-50",
      gradientTo: "to-red-100",
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: t('telecommunications.title'),
      description: t('telecommunications.description'),
      projects: t('telecommunications.projects'),
      stats: { projects: "30+", coverage: "95%", users: "5M+" },
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradientFrom: "from-purple-50",
      gradientTo: "to-purple-100",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: t('education.title'),
      description: t('education.description'),
      projects: t('education.projects'),
      stats: { projects: "20+", institutions: "15", students: "50K+" },
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
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-primary-100 text-primary-700 mb-4 rounded-full px-4 py-2">{t('badge')}</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:scale-[1.02] transition-all duration-300 border-0 bg-white rounded-3xl h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center ${industry.color} mb-6`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

                  {/* Stats */}
                  <div
                    className={`grid grid-cols-3 gap-3 mb-6 p-4 bg-gradient-to-r ${industry.gradientFrom} ${industry.gradientTo} rounded-2xl`}
                  >
                    {Object.entries(industry.stats).map(([key, value], statIndex) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-bold ${industry.color}`}>{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{t(key)}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-gray-500">
                    <span className="font-medium">{t('keyProjects')}:</span> {industry.projects}
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
