import {Mail, MapPin, Phone} from "lucide-react"
import {useTranslations} from "next-intl";

export function Footer() {
    const t = useTranslations('footer');

    const quickLinks = [
        {name: t("quickLinks"), href: "#about"},
        {name: t("ourServices"), href: "#services"},
        {name: t("industries"), href: "#industries"},
        {name: t("projects"), href: "#projects"},
        {name: t("contact"), href: "#contact"},
    ]

    const services = [
        t("services.itInfrastructure"),
        t("services.enterpriseSoftware"),
        t("services.coreBanking"),
        t("services.documentManagement"),
        t("services.networkSecurity"),
        t("services.mediaServices"),
    ]

    const industries = [
        t("industriesList.government"),
        t("industriesList.banking"),
        t("industriesList.healthcare"),
        t("industriesList.telecommunications"),
        t("industriesList.education"),
    ]

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <div className="text-2xl font-bold text-secondary-400">IT WAY</div>
                            <div className="ml-2 text-sm text-gray-400">Co.</div>
                        </div>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                            {t("description")}
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-300">
                                <MapPin className="h-4 w-4 mr-2 ml-2 text-secondary-400 flex-shrink-0"/>
                                <span>{t("addressValue")}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-300">
                                <Phone className="h-4 w-4 mr-2 ml-2 text-secondary-400 flex-shrink-0"/>
                                <span>{t("phoneValue")}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-300">
                                <Mail className="h-4 w-4 mr-2 ml-2 text-secondary-400 flex-shrink-0"/>
                                <span>{t("emailValue")}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">{t("quickLinks")}</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-secondary-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">{t("ourServices")}</h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-300 text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">{t("industries")}</h3>
                        <ul className="space-y-2 mb-6">
                            {industries.map((industry, index) => (
                                <li key={index}>
                                    <span className="text-gray-300 text-sm">{industry}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400 mb-4 md:mb-0">
                            {t("copyright")}
                        </div>
                        <div className="flex space-x-6 rtl:space-x-reverse text-sm text-gray-400">
                            <a href="#" className="hover:text-secondary-400 transition-colors duration-200">
                                {t("privacyPolicy")}
                            </a>
                            <a href="#" className="hover:text-secondary-400 transition-colors duration-200">
                                {t("termsOfService")}
                            </a>
                            <a href="#" className="hover:text-secondary-400 transition-colors duration-200">
                                {t("sitemap")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}