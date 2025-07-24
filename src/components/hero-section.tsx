"use client"

import {Button} from "@/components/ui/button"
import {ArrowRight, Play} from "lucide-react"
import {motion} from "motion/react"
import {useTranslations} from "next-intl";

export function HeroSection() {
    const t = useTranslations('hero');

    return (
        <section
            className="relative  flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            {/*/!* Subtle background elements *!/*/}
            {/*<div className="absolute inset-0">*/}
            {/*    <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100/30 rounded-full blur-3xl"></div>*/}
            {/*    <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-100/30 rounded-full blur-3xl"></div>*/}
            {/*</div>*/}

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center px-4 rtl:space-x-reverse  py-2 bg-white rounded-full text-gray-600 text-sm font-medium mb-8 shadow-sm border border-gray-100"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 rtl:ml-2"></span>
                        {t('badge')}
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-4xl sm:text-5xl sm:leading-[1.4] md:leading-[1.3] lg:leading-[1.2] rtl:lg:leading-[1.6] lg:text-6xl font-bold mb-6 text-gray-900"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        {t('title')}
                        <span
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {t('titleHighlight')}
            </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                    >
                        {t('subtitle')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.6}}
                    >
                        <Button size="lg"
                                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg rounded-xl">
                            {t('exploreServices')}
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-xl bg-transparent"
                        >
                            <Play className="mr-2 h-5 w-5"/>
                            {t('watchStory')}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
