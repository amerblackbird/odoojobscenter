import "./globals.css"

import type React from "react"
import type {Metadata} from "next"
import {Sora, Tajawal} from "next/font/google"
import {NuqsAdapter} from "nuqs/adapters/next/app";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getTranslations} from "next-intl/server";
import {Header} from "@/components/header";
import {cn} from "@/lib/utils";
import DirectionProvider from "@/providers/direction";
import Footer from "@/components/footer";

const inter = Sora({subsets: ["latin"]})

const tajawal = Tajawal({
    variable: "--font-scheherazade-new",
    subsets: ["arabic"],
    weight: ["300", "400", "700", "900"],
});


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('App');
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
            url: "https://www.odoojobscenter.com",
            title: t('name'),
            description: t('description'),
            images: [
                {
                    url: "https://www.odoojobscenter.com/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: t('openGraphAlt'),
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@odoojobscenter",
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
        <html lang={locale} className={"h-screen overflow-hidden"}>
        <body
            className={cn(`${isRtl ? `${tajawal.className} ${inter.className}` : inter.className} h-screen overflow-hidden`, isRtl ? "rtl" : "ltr")}
            dir={isRtl ? "rtl" : "ltr"}
        >
        <NextIntlClientProvider>
            <DirectionProvider locale={locale}>
                <NuqsAdapter>
                    <div className={"h-full flex flex-col overflow-y-auto"}>
                        <Header/>
                        <main className={"flex flex-col flex-1"}>{children}</main>
                        <Footer/>
                    </div>
                </NuqsAdapter>
            </DirectionProvider>
        </NextIntlClientProvider>

        </body>
        </html>
    )
}
