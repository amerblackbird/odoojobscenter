"use client"

import {Card, CardContent} from "@/components/ui/card"
import {motion} from "motion/react";
import {Award, Building2, Globe, Users} from "lucide-react"
import {useTranslations} from "next-intl";

export function StatsSection() {
    const t = useTranslations('stats');
    const stats = [
        {
            icon: <Building2 className="h-8 w-8"/>,
            number: "23+",
            label: t('yearsExperience'),
            description: t('yearsExperienceDesc'),
            color: "text-primary-600",
            bgColor: "bg-primary-50",
        },
        {
            icon: <Users className="h-8 w-8"/>,
            number: "25+",
            label: t('expertTeam'),
            description: t('expertTeamDesc'),
            color: "text-secondary-600",
            bgColor: "bg-secondary-50",
        },
        {
            icon: <Award className="h-8 w-8"/>,
            number: "100+",
            label: t('projectsDelivered'),
            description: t('projectsDeliveredDesc'),
            color: "text-primary-700",
            bgColor: "bg-primary-100",
        },
        {
            icon: <Globe className="h-8 w-8"/>,
            number: "5",
            label: t('keyIndustries'),
            description: t('keyIndustriesDesc'),
            color: "text-secondary-700",
            bgColor: "bg-secondary-100",
        },
    ]
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
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
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    {stats.map((stat, index) => (
                        <motion.div key={index} variants={itemVariants} className="flex">
                            <Card
                                className="flex flex-col flex-1 border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white rounded-2xl border h-full"
                            >
                                <CardContent className="p-8 text-center flex flex-col flex-1">
                                    <div
                                        className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center ${stat.color} mx-auto mb-6`}
                                    >
                                        {stat.icon}
                                    </div>
                                    <motion.div
                                        className={`text-4xl font-bold ${stat.color} mb-2`}
                                        initial={{scale: 0}}
                                        whileInView={{scale: 1}}
                                        viewport={{once: true}}
                                        transition={{delay: index * 0.1, type: "spring"}}
                                    >
                                        {stat.number}
                                    </motion.div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{stat.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
