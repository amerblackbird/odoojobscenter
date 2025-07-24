"use client"

import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {ArrowRight, Award, Code, Globe, Shield, Users, Zap} from "lucide-react"
import {motion} from "motion/react"
import {useTranslations} from "next-intl";


export function BentoSection() {
    const t = useTranslations('bento');

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
        <section className="py-20 bg-gray-50">
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

                {/* Bento Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    {/* Large Feature Card */}
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
                        <Card
                            className="border-0 hover:scale-[1.02] transition-all duration-300 bg-white rounded-3xl h-full">
                            <CardContent className="p-8 h-full flex flex-col">
                                <Badge className="bg-primary-100 text-primary-700 w-fit mb-6 rounded-full px-4 py-2">
                                    {t('featuredExcellence')}
                                </Badge>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {t('yearsOfInnovation')}
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed flex-1">
                                    {t('yearsOfInnovationDesc')}
                                </p>
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                                        <div className="text-2xl font-bold text-primary-600">100+</div>
                                        <div className="text-sm text-gray-600">{t('projects')}</div>
                                    </div>
                                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                                        <div className="text-2xl font-bold text-secondary-600">25+</div>
                                        <div className="text-sm text-gray-600">{t('experts')}</div>
                                    </div>
                                </div>
                                <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-xl">
                                    {t('learnMore')}
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Service Cards */}
                    <motion.div variants={itemVariants}>
                        <Card
                            className="border-0 hover:scale-105 transition-all duration-300 bg-white rounded-3xl h-full">
                            <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                                <div
                                    className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                                    <Code className="h-8 w-8"/>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{t('enterpriseSoftware')}</h3>
                                <p className="text-sm text-gray-600">{t('enterpriseSoftwareDesc')}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card
                            className="border-0 hover:scale-105 transition-all duration-300 bg-white rounded-3xl h-full">
                            <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                                <div
                                    className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-600 mx-auto mb-4">
                                    <Shield className="h-8 w-8"/>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{t('networkSecurity')}</h3>
                                <p className="text-sm text-gray-600">{t('networkSecurityDesc')}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Multi-Sector Card */}
                    <motion.div variants={itemVariants} className="md:col-span-2">
                        <Card
                            className="border-0 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-3xl h-full">
                            <CardContent className="p-8 h-full flex flex-col justify-center">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 bg-secondary-200 rounded-xl flex items-center justify-center text-secondary-700 mr-4">
                                        <Globe className="h-6 w-6"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{t('multiSectorExpertise')}</h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    {t('multiSectorExpertiseDesc')}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        {label: t("government"), color: "bg-green-100 text-green-800"},
                                        {label: t("banking"), color: "bg-blue-100 text-blue-800"},
                                        {label: t("healthcare"), color: "bg-pink-100 text-pink-800"},
                                        {label: t("telecom"), color: "bg-yellow-100 text-yellow-800"},
                                    ].map((sector, index) => (
                                        <Badge
                                            key={sector.label}
                                            variant="secondary"
                                            className={`bg-white/80 rounded-full px-3 py-1 ${sector.color}`}
                                        >
                                            {sector.label}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Team & Quality Cards */}
                    <motion.div variants={itemVariants}>
                        <Card
                            className="border-0 hover:scale-105 transition-all duration-300 bg-white rounded-3xl h-full">
                            <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                                <div
                                    className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                                    <Users className="h-8 w-8"/>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{t('expertTeam')}</h3>
                                <p className="text-sm text-gray-600">{t('expertTeamDesc')}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card
                            className="border-0 hover:scale-105 transition-all duration-300 bg-white rounded-3xl h-full">
                            <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                                <div
                                    className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-600 mx-auto mb-4">
                                    <Award className="h-8 w-8"/>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{t('qualityAssured')}</h3>
                                <p className="text-sm text-gray-600">{t('qualityAssuredDesc')}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Innovation Card */}
                    <motion.div variants={itemVariants} className="md:col-span-2">
                        <Card
                            className="border-0 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl h-full">
                            <CardContent className="p-8 h-full flex flex-col justify-center">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 bg-primary-200 rounded-xl flex items-center justify-center text-primary-700 mr-4 rtl:m-4">
                                        <Zap className="h-6 w-6"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{t('innovationTechnology')}</h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    {t('innovationTechnologyDesc')}
                                </p>
                                <Button
                                    variant="outline"
                                    className="border-primary-300 text-primary-700 hover:bg-primary-50 rounded-xl bg-transparent"
                                >
                                    {t('viewTechnologies')}
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}
