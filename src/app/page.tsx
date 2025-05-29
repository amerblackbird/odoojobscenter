import Link from "next/link"
import {ArrowRight, Briefcase, MapPin, Search, Star, TrendingUp, Users} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

export default function HomePage() {
    const stats = [
        {icon: Briefcase, label: "Odoo Jobs", value: "850+", description: "Active positions"},
        {icon: Users, label: "Odoo Partners", value: "200+", description: "Certified companies"},
        {icon: TrendingUp, label: "Placement Rate", value: "92%", description: "Success stories"},
        {icon: Star, label: "User Rating", value: "4.8/5", description: "Platform satisfaction"},
    ]

    const featuredJobs = [
        {
            title: "Senior Odoo Developer",
            company: "Odoo S.A.",
            location: "Remote",
            salary: "$80k - $120k",
            type: "Full-Time",
            urgent: true,
        },
        {
            title: "Odoo Technical Consultant",
            company: "Cybrosys Technologies",
            location: "Kochi, India",
            salary: "$45k - $65k",
            type: "Full-Time",
            urgent: false,
        },
        {
            title: "Odoo Functional Consultant",
            company: "Serpent Consulting",
            location: "Ahmedabad, India",
            salary: "$40k - $60k",
            type: "Full-Time",
            urgent: false,
        },
    ]

    const features = [
        {
            title: "Specialized Matching",
            description: "AI-powered matching based on Odoo modules and expertise",
            icon: "🎯",
        },
        {
            title: "Verified Companies",
            description: "All employers are verified Odoo partners or users",
            icon: "✅",
        },
        {
            title: "Career Growth",
            description: "Access to training and certification opportunities",
            icon: "📈",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section
                className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-12 sm:py-20">
                <div className="mx-auto container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-8 text-center">
                        <div className="space-y-4">
                            {/*<Badge variant="secondary" className="bg-purple-100 text-purple-700">*/}
                            {/*    🚀 New: 50+ jobs added this week*/}
                            {/*</Badge>*/}
                            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                                Find the Best <span
                                className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Odoo Jobs</span> in
                                One Place
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                                Discover opportunities with Odoo partners, implementation companies, and businesses
                                using Odoo ERP worldwide.
                            </p>
                        </div>

                        {/* Search Bar */}
                        {/*<Card className="w-full max-w-4xl">*/}
                        {/*    <CardContent className="p-6">*/}
                        {/*        <div className="flex flex-col gap-4 sm:flex-row">*/}
                        {/*            <div className="relative flex-1">*/}
                        {/*                <Search*/}
                        {/*                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>*/}
                        {/*                <Input placeholder="Odoo Developer, Consultant, Analyst..." className="pl-10"/>*/}
                        {/*            </div>*/}
                        {/*            <div className="relative flex-1">*/}
                        {/*                <MapPin*/}
                        {/*                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>*/}
                        {/*                <Input placeholder="City, country, or remote" className="pl-10"/>*/}
                        {/*            </div>*/}
                        {/*            <Button asChild className="bg-purple-600 hover:bg-purple-700">*/}
                        {/*                <Link href="/jobs">*/}
                        {/*                    Search Jobs*/}
                        {/*                    <ArrowRight className="ml-2 h-4 w-4"/>*/}
                        {/*                </Link>*/}
                        {/*            </Button>*/}
                        {/*        </div>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}

                        {/*/!* Stats *!/*/}
                        {/*<div className="grid w-full max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">*/}
                        {/*    {stats.map((stat, index) => (*/}
                        {/*        <Card key={index} className="text-center">*/}
                        {/*            <CardContent className="p-6">*/}
                        {/*                <div*/}
                        {/*                    className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-lg">*/}
                        {/*                    <stat.icon className="h-6 w-6 text-purple-600"/>*/}
                        {/*                </div>*/}
                        {/*                <div className="text-2xl font-bold">{stat.value}</div>*/}
                        {/*                <div className="text-sm font-medium text-gray-900">{stat.label}</div>*/}
                        {/*                <div className="text-xs text-muted-foreground">{stat.description}</div>*/}
                        {/*            </CardContent>*/}
                        {/*        </Card>*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            {/*/!* Featured Jobs *!/*/}
            {/*<section className="py-12 md:py-24">*/}
            {/*    <div className="mx-auto container px-4 md:px-6">*/}
            {/*        <div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
            {/*            <div className="space-y-2">*/}
            {/*                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Odoo Jobs</h2>*/}
            {/*                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
            {/*                    Latest opportunities from top Odoo partners and companies*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">*/}
            {/*            {featuredJobs.map((job, index) => (*/}
            {/*                <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg">*/}
            {/*                    <CardHeader>*/}
            {/*                        <div className="flex items-start justify-between">*/}
            {/*                            <div className="space-y-1">*/}
            {/*                                <CardTitle className="text-lg">{job.title}</CardTitle>*/}
            {/*                                <CardDescription*/}
            {/*                                    className="text-purple-600 font-medium">{job.company}</CardDescription>*/}
            {/*                            </div>*/}
            {/*                            {job.urgent && (*/}
            {/*                                <Badge variant="destructive" className="text-xs">*/}
            {/*                                    Urgent*/}
            {/*                                </Badge>*/}
            {/*                            )}*/}
            {/*                        </div>*/}
            {/*                    </CardHeader>*/}
            {/*                    <CardContent>*/}
            {/*                        <div className="space-y-3">*/}
            {/*                            <div className="flex items-center gap-2 text-sm text-muted-foreground">*/}
            {/*                                <MapPin className="h-4 w-4"/>*/}
            {/*                                {job.location}*/}
            {/*                            </div>*/}
            {/*                            <div className="flex items-center justify-between">*/}
            {/*                                <span className="font-semibold">{job.salary}</span>*/}
            {/*                                <Badge variant="secondary">{job.type}</Badge>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </CardContent>*/}
            {/*                </Card>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*        <div className="flex justify-center">*/}
            {/*            <Button asChild variant="outline" size="lg">*/}
            {/*                <Link href="/jobs">*/}
            {/*                    View All Odoo Jobs*/}
            {/*                    <ArrowRight className="ml-2 h-4 w-4"/>*/}
            {/*                </Link>*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*/!* Features *!/*/}
            {/*<section className="bg-gray-50 py-12 md:py-24">*/}
            {/*    <div className="mx-auto container px-4 md:px-6">*/}
            {/*        <div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
            {/*            <div className="space-y-2">*/}
            {/*                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose*/}
            {/*                    OdooJobsCenter?</h2>*/}
            {/*                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
            {/*                    Built by Odoo professionals, for Odoo professionals*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">*/}
            {/*            {features.map((feature, index) => (*/}
            {/*                <Card key={index}>*/}
            {/*                    <CardHeader>*/}
            {/*                        <div className="flex items-center space-x-2">*/}
            {/*                            <span className="text-2xl">{feature.icon}</span>*/}
            {/*                            <CardTitle>{feature.title}</CardTitle>*/}
            {/*                        </div>*/}
            {/*                    </CardHeader>*/}
            {/*                    <CardContent>*/}
            {/*                        <CardDescription>{feature.description}</CardDescription>*/}
            {/*                    </CardContent>*/}
            {/*                </Card>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*/!* Odoo Specializations *!/*/}
            {/*<section className="py-12 md:py-24">*/}
            {/*    <div className="container px-4 md:px-6">*/}
            {/*        <div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
            {/*            <div className="space-y-2">*/}
            {/*                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Odoo Career Paths</h2>*/}
            {/*                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
            {/*                    Explore different Odoo specializations and find your perfect role*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">*/}
            {/*            <Card className="text-center">*/}
            {/*                <CardHeader>*/}
            {/*                    <div*/}
            {/*                        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">*/}
            {/*                        <span className="text-2xl">💻</span>*/}
            {/*                    </div>*/}
            {/*                    <CardTitle>Technical Roles</CardTitle>*/}
            {/*                </CardHeader>*/}
            {/*                <CardContent>*/}
            {/*                    <CardDescription>Odoo Developer, Technical Consultant, Support*/}
            {/*                        Engineer</CardDescription>*/}
            {/*                    <div className="mt-4 flex flex-wrap gap-2 justify-center">*/}
            {/*                        <Badge variant="outline">Python</Badge>*/}
            {/*                        <Badge variant="outline">JavaScript</Badge>*/}
            {/*                        <Badge variant="outline">XML</Badge>*/}
            {/*                    </div>*/}
            {/*                </CardContent>*/}
            {/*            </Card>*/}

            {/*            <Card className="text-center">*/}
            {/*                <CardHeader>*/}
            {/*                    <div*/}
            {/*                        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">*/}
            {/*                        <span className="text-2xl">🎯</span>*/}
            {/*                    </div>*/}
            {/*                    <CardTitle>Functional Roles</CardTitle>*/}
            {/*                </CardHeader>*/}
            {/*                <CardContent>*/}
            {/*                    <CardDescription>Functional Consultant, Business Analyst, ERP*/}
            {/*                        Consultant</CardDescription>*/}
            {/*                    <div className="mt-4 flex flex-wrap gap-2 justify-center">*/}
            {/*                        <Badge variant="outline">Sales</Badge>*/}
            {/*                        <Badge variant="outline">Inventory</Badge>*/}
            {/*                        <Badge variant="outline">Accounting</Badge>*/}
            {/*                    </div>*/}
            {/*                </CardContent>*/}
            {/*            </Card>*/}

            {/*            <Card className="text-center">*/}
            {/*                <CardHeader>*/}
            {/*                    <div*/}
            {/*                        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">*/}
            {/*                        <span className="text-2xl">📊</span>*/}
            {/*                    </div>*/}
            {/*                    <CardTitle>Management Roles</CardTitle>*/}
            {/*                </CardHeader>*/}
            {/*                <CardContent>*/}
            {/*                    <CardDescription>Project Manager, Trainer, QA Tester</CardDescription>*/}
            {/*                    <div className="mt-4 flex flex-wrap gap-2 justify-center">*/}
            {/*                        <Badge variant="outline">Leadership</Badge>*/}
            {/*                        <Badge variant="outline">Training</Badge>*/}
            {/*                        <Badge variant="outline">Quality</Badge>*/}
            {/*                    </div>*/}
            {/*                </CardContent>*/}
            {/*            </Card>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*/!* CTA Section *!/*/}
            {/*<section className="py-12 md:py-24">*/}
            {/*    <div className="mx-auto container bg-gradient-to-r from-purple-600 to-pink-500  px-4 md:px-6 rounded-lg py-24">*/}
            {/*        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">*/}
            {/*            <div className="space-y-2">*/}
            {/*                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Advance Your Odoo*/}
            {/*                    Career?</h2>*/}
            {/*                <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
            {/*                    Join the largest community of Odoo professionals and find your next opportunity*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <div className="flex flex-col gap-2 min-[400px]:flex-row">*/}
            {/*                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">*/}
            {/*                    <Link href="/jobs">*/}
            {/*                        Browse Odoo Jobs*/}
            {/*                        <ArrowRight className="ml-2 h-4 w-4"/>*/}
            {/*                    </Link>*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    )
}
