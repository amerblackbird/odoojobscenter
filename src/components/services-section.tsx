"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {ArrowRight, Code, CreditCard, FileText, Network, Palette, Shield} from "lucide-react"
import {motion} from "motion/react"
import {useTranslations} from "next-intl"

export function ServicesSection() {
    const t = useTranslations("services")
    const services = [
        {
            icon: <Network className="h-8 w-8"/>,
            title: t("itInfrastructureNetworkingTitle"),
            description: t("itInfrastructureNetworkingDescription"),
            features: [
                t("itInfrastructureNetworkingFeatures.networkDesign"),
                t("itInfrastructureNetworkingFeatures.serverSetup"),
                t("itInfrastructureNetworkingFeatures.infrastructureMaintenance"),
                t("itInfrastructureNetworkingFeatures.performanceOptimization")
            ],
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            gradientFrom: "from-blue-50",
            gradientTo: "to-blue-100",
        },
        {
            icon: <Code className="h-8 w-8"/>,
            title: t("enterpriseSoftwareSolutionsTitle"),
            description: t("enterpriseSoftwareSolutionsDescription"),
            features: [
                t("enterpriseSoftwareSolutionsFeatures.erpSystems"),
                t("enterpriseSoftwareSolutionsFeatures.financialSoftware"),
                t("enterpriseSoftwareSolutionsFeatures.insuranceSolutions"),
                t("enterpriseSoftwareSolutionsFeatures.customDevelopment")
            ],
            color: "text-green-600",
            bgColor: "bg-green-50",
            gradientFrom: "from-green-50",
            gradientTo: "to-green-100",
        },
        {
            icon: <CreditCard className="h-8 w-8"/>,
            title: t("coreBankingSystemsTitle"),
            description: t("coreBankingSystemsDescription"),
            features: [
                t("coreBankingSystemsFeatures.temenosImplementation"),
                t("coreBankingSystemsFeatures.bankingModules"),
                t("coreBankingSystemsFeatures.paymentSystems"),
                t("coreBankingSystemsFeatures.complianceTools")
            ],
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            gradientFrom: "from-purple-50",
            gradientTo: "to-purple-100",
        },
        {
            icon: <FileText className="h-8 w-8"/>,
            title: t("documentManagementTitle"),
            description: t("documentManagementDescription"),
            features: [
                t("documentManagementFeatures.documentDigitization"),
                t("documentManagementFeatures.workflowAutomation"),
                t("documentManagementFeatures.archiveManagement"),
                t("documentManagementFeatures.searchRetrieval")
            ],
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            gradientFrom: "from-orange-50",
            gradientTo: "to-orange-100",
        },
        {
            icon: <Shield className="h-8 w-8"/>,
            title: t("networkSecurityTitle"),
            description: t("networkSecurityDescription"),
            features: [
                t("networkSecurityFeatures.firewallConfiguration"),
                t("networkSecurityFeatures.idsIps"),
                t("networkSecurityFeatures.securityAudits"),
                t("networkSecurityFeatures.threatMonitoring")
            ],
            color: "text-red-600",
            bgColor: "bg-red-50",
            gradientFrom: "from-red-50",
            gradientTo: "to-red-100",
        },
        {
            icon: <Palette className="h-8 w-8"/>,
            title: t("mediaWebServicesTitle"),
            description: t("mediaWebServicesDescription"),
            features: [
                t("mediaWebServicesFeatures.webDevelopment"),
                t("mediaWebServicesFeatures.3dDesign"),
                t("mediaWebServicesFeatures.branding"),
                t("mediaWebServicesFeatures.digitalMarketing")
            ],
            color: "text-pink-600",
            bgColor: "bg-pink-50",
            gradientFrom: "from-pink-50",
            gradientTo: "to-pink-100",
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
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <Badge className="bg-primary-100 text-primary-700 mb-4 rounded-full px-4 py-2">
                        {t("ourServices")}
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {t("completeItSolutions")}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t("servicesSubheadline")}
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card
                                className="group hover:scale-[1.02] transition-all duration-300 border-0 bg-white rounded-3xl h-full">
                                <CardHeader className="pb-4">
                                    <div
                                        className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center ${service.color} mb-6`}
                                    >
                                        {service.icon}
                                    </div>
                                    <CardTitle
                                        className="text-xl font-semibold text-gray-900 mb-3">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                                    {/* Features */}
                                    <div
                                        className={`p-4 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} rounded-2xl mb-6`}
                                    >
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                            {t("keyFeatures")}
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex}
                                                     className="flex items-center text-sm text-gray-700">
                                                    <div
                                                        className={`w-1.5 h-1.5 ${service.color.replace("text-", "bg-")} rounded-full ltr:mr-2 rtl:ml-2`}
                                                    ></div>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="w-full rounded-xl bg-transparent border-gray-200 hover:bg-gray-50"
                                    >
                                        {t("learnMore")}
                                        <ArrowRight className="ml-2 h-4 w-4"/>
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