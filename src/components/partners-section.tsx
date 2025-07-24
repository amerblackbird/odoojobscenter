import {Card, CardContent} from "@/components/ui/card"
import {useTranslations} from "next-intl";

export function PartnersSection() {
    const t = useTranslations('partners')
    const partners = [
        {
            name: t("temenos.name"),
            category: t("temenos.category"),
            description: t("temenos.description"),
            logo: "https://placehold.co/400",
        },
        {
            name: t("saperion.name"),
            category: t("saperion.category"),
            description: t("saperion.description"),
            logo: "https://placehold.co/400",
        },
        {
            name: t("cisco.name"),
            category: t("cisco.category"),
            description: t("cisco.description"),
            logo: "https://placehold.co/400",
        },
        {
            name: t("juniper.name"),
            category: t("juniper.category"),
            description: t("juniper.description"),
            logo: "https://placehold.co/400",
        },
        {
            name: t("microsoft.name"),
            category: t("microsoft.category"),
            description: t("microsoft.description"),
            logo: "https://placehold.co/400",
        },
        {
            name: t("dellTechnologies.name"),
            category: t("dellTechnologies.category"),
            description: t("dellTechnologies.description"),
            logo: "https://placehold.co/400",
        },
        {
            name: t("vmware.name"),
            category: t("vmware.category"),
            description: t("vmware.description"),
            logo: "https://placehold.co/400",
        },
        {
            name: t("vmware.name"),
            category: t("vmware.category"),
            description: t("vmware.description"),
            logo: "https://placehold.co/400",
        },
    ]
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {partners.map((partner, index) => (
                        <Card key={index}
                              className="group hover:shadow-lg transition-all duration-300 border-1 bg-white">
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 h-16 flex items-center justify-center">
                                    <img
                                        src={partner.logo || "/placeholder.svg"}
                                        alt={`${partner.name} logo`}
                                        className="rounded max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{partner.name}</h3>
                                <p className="text-sm text-blue-600 font-medium mb-2">{partner.category}</p>
                                <p className="text-xs text-gray-500">{partner.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Partnership Benefits */}
                <div className="bg-white rounded-2xl border p-8">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('partnershipBenefits')}</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">{t('certifiedExpertise')}</h4>
                            <p className="text-gray-600 text-sm">
                                {t('certifiedExpertiseDesc')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">{t('latestTechnologies')}</h4>
                            <p className="text-gray-600 text-sm">
                                {t('latestTechnologiesDesc')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">{t('premiumSupport')}</h4>
                            <p className="text-gray-600 text-sm">
                                {t('premiumSupportDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
