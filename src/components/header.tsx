"use client"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Globe, Menu, X} from "lucide-react"
import {useLocale, useTranslations} from "next-intl"
import {usePathname, useRouter} from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import LanguageSwitcher from "@/components/language-switcher";


export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const t = useTranslations("navigation")
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const navItems = [
        {name: t("about"), href: "#about"},
        {name: t("services"), href: "/services"},
        {name: t("industries"), href: "/industries"},
        {name: t("projects"), href: "/projects"},
        {name: t("contact"), href: "/contact"},
    ]

    const toggleLanguage = () => {
        const newLocale = locale === "en" ? "ar" : "en"
        const currentPath = pathname.replace(`/${locale}`, "")
        router.push(`/${newLocale}${currentPath}`)
    }

    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-sans" dir={"ltr"}>
                        <Image className={" h-8 w-8 "} src={"/logo.gif"} width={"36"} height={"36"} alt={"O"}/>
                        <div className="flex items-center font-sans" dir={"ltr"}>
                            <div className="text-2xl font-bold text-primary-900">IT WAY</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-primary-700 transition-colors duration-200"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Language Switcher & CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSwitcher/>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href.startsWith("#") ? item.href : `${item.href}`}
                                    className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-2 px-3 py-2">
                                <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                                    <Globe className="h-4 w-4 mr-2"/>
                                    {t("language")}
                                </Button>
                                <Button size="sm">{t("contactUs")}</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
