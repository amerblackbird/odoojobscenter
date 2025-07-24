import "./globals.css"

import type React from "react"
import type {Metadata} from "next"
import {Sora, Tajawal, Noto_Sans_Arabic, IBM_Plex_Sans_Arabic} from "next/font/google"
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getTranslations} from "next-intl/server";
import {cn} from "@/lib/utils";
import DirectionProvider from "@/providers/direction";

const inter = Sora({subsets: ["latin"]})

const tajawal = IBM_Plex_Sans_Arabic({
    variable: "--font-scheherazade-new",
    subsets: ["arabic"],
    weight: ["400", "500", "600", "700"],
});


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('app');
    return {
        title: t('name'),
        description: t('description'),
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon.ico",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",
        openGraph: {
            type: "website",
            url: "https://www.itways.com",
            title: t('name'),
            description: t('description'),
            images: [
                {
                    url: "https://www.itways.com/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: t('openGraphAlt'),
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@itways",
            title: t('name'),
            description: t('description'),
        },
    };
}


export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const isRtl = locale === "ar";

    return (
        <html lang={locale} className={"h-screen w-full max-w-full overflow-x-hidden"}>
        <body
            className={cn(`${isRtl ? `${tajawal.className} ${inter.className}` : inter.className}  w-full max-w-full h-full overflow-x-hidden`, isRtl ? "rtl" : "ltr")}
            dir={isRtl ? "rtl" : "ltr"}
        >
        <NextIntlClientProvider>
            <DirectionProvider locale={locale}>
                {children}
            </DirectionProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}
