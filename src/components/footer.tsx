"use client";

import React, {useMemo} from 'react';
import Link from 'next/link';
import {useTranslations} from "next-intl";

export default function Footer() {
    const t = useTranslations('Navigation');


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
        <footer className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between gap-8 text-gray-700">
                    {/* About Section */}
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-lg font-semibold mb-2">{t('aboutTitle')}</h3>
                        <p className="text-sm">
                            {t('aboutWebsite')}
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-lg font-semibold mb-2">{t('quickLinks')}</h3>
                        <ul className="space-y-1 text-sm">
                            {
                                navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="hover:underline">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Contact Section */}
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-lg font-semibold mb-2">{t('contactTitle')}</h3>
                        <p className="text-sm">{t('email')}: <a href="mailto:info@odoojobscenter.com"
                                                         className="hover:underline">info@odoojobscenter.com</a></p>
                        <p className="text-sm mt-1">Location: Remote / Worldwide</p>
                    </div>
                </div>
                <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} OdooJobsCenter. All rights reserved. Built with <span aria-label="love"
                                                                                                       role="img">❤️</span> by
                    Odoo professionals.
                </div>
            </div>
        </footer>
    );
}