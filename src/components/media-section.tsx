"use client"

import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {ArrowRight, Camera, Monitor, Palette, Video} from "lucide-react"
import {motion} from "motion/react"
import {useTranslations} from "next-intl"

export function MediaSection() {
    const t = useTranslations('services')

    const mediaServices = [
        {
            icon: <Monitor className="h-8 w-8"/>,
            title: t("mediaWebDevelopmentTitle"),
            description: t("mediaWebDevelopmentDescription"),
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            icon: <Palette className="h-8 w-8"/>,
            title: t("media3dDesignTitle"),
            description: t("media3dDesignDescription"),
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
        {
            icon: <Camera className="h-8 w-8"/>,
            title: t("mediaBrandingTitle"),
            description: t("mediaBrandingDescription"),
            color: "text-pink-600",
            bgColor: "bg-pink-50",
        },
        {
            icon: <Video className="h-8 w-8"/>,
            title: t("mediaDigitalMarketingTitle"),
            description: t("mediaDigitalMarketingDescription"),
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
    ]

    const mediaClients = [
        {name: t("clientSudatel"), project: t("clientSudatelProject"), color: "bg-blue-100 text-blue-800"},
        {name: t("clientAmipharma"), project: t("clientAmipharmaProject"), color: "bg-green-100 text-green-800"},
        {
            name: t("clientOmdurmanBank"),
            project: t("clientOmdurmanBankProject"),
            color: "bg-purple-100 text-purple-800"
        },
        {
            name: t("clientVariousCorporations"),
            project: t("clientVariousCorporationsProject"),
            color: "bg-orange-100 text-orange-800"
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
        hidden: {opacity: 0, y: 30},
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
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <Badge className="bg-secondary-100 text-secondary-700 mb-4 rounded-full px-4 py-2">
                        {t("mediaProductionDivision")}
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("mediaServicesHeadline")}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t("mediaServicesSubheadline")}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Services Grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        {mediaServices.map((service, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card
                                    className="group hover:scale-105 transition-all duration-300 border-0 bg-white rounded-3xl h-full">
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
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("mediaComprehensiveSolutionsTitle")}</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t("mediaComprehensiveSolutionsDescription")}
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 ltr:mr-3 rtl:ml-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{t("mediaProfessionalTeamTitle")}</h4>
                                    <p className="text-gray-600 text-sm">{t("mediaProfessionalTeamDescription")}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 ltr:mr-3 rtl:ml-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{t("mediaLatestTechTitle")}</h4>
                                    <p className="text-gray-600 text-sm">{t("mediaLatestTechDescription")}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 ltr:mr-3 rtl:ml-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{t("mediaEndToEndTitle")}</h4>
                                    <p className="text-gray-600 text-sm">{t("mediaEndToEndDescription")}</p>
                                </div>
                            </div>
                        </div>

                        <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-xl">
                            {t("mediaViewPortfolio")}
                            <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180"/>
                        </Button>
                    </motion.div>
                </div>

                {/* Client Showcase */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <Card className="border-0 bg-white rounded-3xl">
                        <CardContent className="p-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("mediaClientsHeadline")}</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {mediaClients.map((client, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center p-6 bg-gray-50 rounded-2xl"
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        viewport={{once: true}}
                                        transition={{delay: index * 0.1}}
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