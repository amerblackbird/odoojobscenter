"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import {Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import LanguageSwitcher from "@/components/language-switcher";
import {useMemo} from "react";
import {useTranslations} from 'next-intl';
import useResource from "@/hooks/use-resource"

export function Header() {
    const t = useTranslations('Navigation');

    const pathname = usePathname()
    const {dir} = useResource();

    const navItems = useMemo(() => {
        return [
            {href: "/", label: t("home")},
            {href: "/jobs", label: t("findJobs")},
            {href: "/create-job", label: t("postJob")},
            {href: "/about", label: t("about")},
            {href: "/contact", label: t("contact")},
        ]
    }, []);


    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Image className={" h-8 w-8 "} src={"/logo.png"} width={"36"} height={"36"} alt={"O"}/>
                    <span className="hidden font-bold sm:inline-block font-sans">OdooJobsCenter</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="mx-6 hidden md:flex items-start">
                    <NavigationMenu dir={dir}>
                        <NavigationMenuList>
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <Link href={item.href} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${
                                                pathname === item.href ? "text-purple-600" : ""
                                            }`}
                                        >
                                            {item.label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <LanguageSwitcher/>
                </div>

                {/*<div className="flex flex-1 items-center justify-end space-x-4">*/}
                {/*    /!* User Profile *!/*/}
                {/*    /!*<div className="hidden items-center space-x-3 sm:flex">*!/*/}
                {/*    /!*  <div className="text-right">*!/*/}
                {/*    /!*    <div className="text-sm font-medium">Gausul Haque</div>*!/*/}
                {/*    /!*    <div className="text-xs text-muted-foreground">Odoo Developer</div>*!/*/}
                {/*    /!*  </div>*!/*/}
                {/*    /!*  <Avatar className="h-8 w-8">*!/*/}
                {/*    /!*    <AvatarImage src="/placeholder.svg?height=32&width=32" />*!/*/}
                {/*    /!*    <AvatarFallback>GH</AvatarFallback>*!/*/}
                {/*    /!*  </Avatar>*!/*/}
                {/*    /!*</div>*!/*/}

                {/*  */}
                {/*</div>*/}

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="md:hidden" size="icon">
                            <Menu className="h-5 w-5"/>
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetTitle className="sr-only">
                        menu
                    </SheetTitle>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block px-2 py-1 text-lg ${pathname === item.href ? "text-purple-600" : ""}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {/*<div className="mt-4 flex items-center space-x-3 border-t pt-4">*/}
                            {/*  <Avatar className="h-8 w-8">*/}
                            {/*    <AvatarImage src="/placeholder.svg?height=32&width=32" />*/}
                            {/*    <AvatarFallback>GH</AvatarFallback>*/}
                            {/*  </Avatar>*/}
                            {/*  <div>*/}
                            {/*    <div className="text-sm font-medium">Gausul Haque</div>*/}
                            {/*    <div className="text-xs text-muted-foreground">Odoo Developer</div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
