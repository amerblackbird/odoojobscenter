"use client"

import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Award, Calendar, Heart, Lightbulb, MapPin, Shield, Target, Users} from "lucide-react"
import {motion} from "motion/react"
import {useTranslations} from "next-intl";

export function AboutSection() {

    const t = useTranslations('about');

    const values = [
        {
            icon: <Heart className="h-6 w-6"/>,
            title: t("customerFirst"),
            description: t("customerFirstDesc"),
            color: "text-red-600",
            bgColor: "bg-red-50",
        },
        {
            icon: <Lightbulb className="h-6 w-6"/>,
            title: t("innovation"),
            description: t("innovationDesc"),
            color: "text-yellow-600",
            bgColor: "bg-yellow-50",
        },
        {
            icon: <Shield className="h-6 w-6"/>,
            title: t("trust"),
            description: t("trustDesc"),
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            icon: <Target className="h-6 w-6"/>,
            title: t("excellence"),
            description: t("excellenceDesc"),
            color: "text-green-600",
            bgColor: "bg-green-50",
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
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <Badge className="bg-primary-100 text-primary-700 mb-4 rounded-full px-4 py-2">{t('badge')}</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Content */}
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('ourStory')}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {t('storyDesc1')}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t('storyDesc2')}
                        </p>

                        {/* Key Facts */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center p-4 bg-gray-50 rounded-2xl border">
                                <Calendar className="h-8 w-8 text-primary-600 mr-4 rtl:ml-4"/>
                                <div>
                                    <div className="font-semibold text-gray-900">{t('established')}</div>
                                    <div className="text-gray-600 text-sm">{t('establishedDate')}</div>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-gray-50 rounded-2xl border">
                                <Users className="h-8 w-8 text-secondary-600 mr-4 rtl:ml-4"/>
                                <div>
                                    <div className="font-semibold text-gray-900">{t('teamSize')}</div>
                                    <div className="text-gray-600 text-sm">{t('teamSizeValue')}</div>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-gray-50 rounded-2xl border">
                                <MapPin className="h-8 w-8 text-primary-600 mr-4 rtl:ml-4"/>
                                <div>
                                    <div className="font-semibold text-gray-900">{t('headquarters')}</div>
                                    <div className="text-gray-600 text-sm">{t('headquartersValue')}</div>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-gray-50 rounded-2xl border">
                                <Award className="h-8 w-8 text-secondary-600 mr-4 rtl:ml-4"/>
                                <div>
                                    <div className="font-semibold text-gray-900">{t('sectors')}</div>
                                    <div className="text-gray-600 text-sm">{t('sectorsValue')}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Values Cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        {values.map((value, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card
                                    className="hover:scale-105 transition-all duration-300 bg-white rounded-3xl h-full border">
                                    <CardContent className="p-6">
                                        <div
                                            className={`w-12 h-12 ${value.bgColor} rounded-2xl flex items-center justify-center ${value.color} mb-4`}
                                        >
                                            {value.icon}
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-3">{value.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Mission Statement */}
                <motion.div
                    className="text-center"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <Card className="border-0 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl">
                        <CardContent className="p-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('ourMission')}</h3>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                                {t('missionDesc')}
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
