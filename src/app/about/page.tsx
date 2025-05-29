export default function HireTalentPage() {
  return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
          <p className="text-gray-600">This page is coming soon!</p>
        </div>
      </div>
  )
}

// import { Users, Target, Award, Globe } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
//
// export default function AboutPage() {
//   const values = [
//     {
//       icon: Target,
//       title: "Our Mission",
//       description:
//         "To connect Odoo professionals with their ideal careers and help companies find the best Odoo talent worldwide.",
//     },
//     {
//       icon: Users,
//       title: "Odoo Community",
//       description: "Building the largest network of Odoo developers, consultants, and specialists globally.",
//     },
//     {
//       icon: Award,
//       title: "Expertise",
//       description: "Deep understanding of Odoo ecosystem, from technical development to functional consulting.",
//     },
//     {
//       icon: Globe,
//       title: "Global Reach",
//       description: "Connecting Odoo talent with opportunities across all continents and time zones.",
//     },
//   ]
//
//   const team = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       image: "/placeholder.svg?height=200&width=200",
//       bio: "Former Odoo Partner with 10+ years in ERP consulting and Odoo implementations.",
//       badges: ["Odoo Certified", "ERP Expert"],
//     },
//     {
//       name: "Michael Chen",
//       role: "CTO",
//       image: "/placeholder.svg?height=200&width=200",
//       bio: "Senior Odoo Developer with expertise in custom module development and system architecture.",
//       badges: ["Python Expert", "Technical Lead"],
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Head of Partnerships",
//       image: "/placeholder.svg?height=200&width=200",
//       bio: "Odoo Functional Consultant with experience across multiple industries and business processes.",
//       badges: ["Functional Expert", "Business Analyst"],
//     },
//     {
//       name: "David Kim",
//       role: "Community Manager",
//       image: "/placeholder.svg?height=200&width=200",
//       bio: "Active Odoo community member and organizer of Odoo meetups and conferences.",
//       badges: ["Community Leader", "Event Organizer"],
//     },
//   ]
//
//   const stats = [
//     { value: "850+", label: "Odoo Jobs Posted" },
//     { value: "200+", label: "Odoo Partners" },
//     { value: "10K+", label: "Odoo Professionals" },
//     { value: "92%", label: "Placement Success" },
//   ]
//
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center">
//             <Badge variant="secondary" className="bg-purple-100 text-purple-700">
//               🚀 Trusted by 200+ Odoo Partners
//             </Badge>
//             <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
//               About <span className="text-purple-600">OdooJobsCenter</span>
//             </h1>
//             <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
//               The world&#39;s premier platform for Odoo professionals. Since 2021, we've helped over 10,000 Odoo specialists
//               find their perfect roles and assisted 500+ companies in building their Odoo teams.
//             </p>
//           </div>
//         </div>
//       </section>
//
//       {/* Story Section */}
//       <section className="py-12 md:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//             <div className="space-y-4">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
//               <div className="space-y-4 text-gray-500">
//                 <p>
//                   OdooJobsCenter was founded by Odoo professionals who understood the unique challenges of finding
//                   specialized talent in the Odoo ecosystem. Traditional job boards didn't cater to the specific skills
//                   and knowledge required for Odoo roles.
//                 </p>
//                 <p>
//                   As certified Odoo partners ourselves, we recognized the need for a dedicated platform that could
//                   properly match Odoo developers, consultants, and specialists with companies implementing or
//                   maintaining Odoo systems.
//                 </p>
//                 <p>
//                   Today, we're the go-to platform for Odoo talent acquisition, trusted by official Odoo partners,
//                   implementation companies, and businesses worldwide.
//                 </p>
//               </div>
//             </div>
//             <Card className="overflow-hidden">
//               <CardContent className="p-0">
//                 <img
//                   src="/placeholder.svg?height=400&width=600"
//                   alt="Odoo team collaboration"
//                   className="aspect-video w-full object-cover"
//                 />
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//
//       {/* Values Section */}
//       <section className="bg-gray-50 py-12 md:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Drives Us</h2>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Our commitment to the Odoo community and ecosystem
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
//             {values.map((value, index) => (
//               <Card key={index} className="text-center">
//                 <CardHeader>
//                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
//                     <value.icon className="h-8 w-8 text-purple-600" />
//                   </div>
//                   <CardTitle>{value.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription>{value.description}</CardDescription>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* Team Section */}
//       <section className="py-12 md:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Odoo Experts</h2>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Odoo professionals helping other Odoo professionals
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
//             {team.map((member, index) => (
//               <Card key={index} className="text-center">
//                 <CardHeader>
//                   <img
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     className="mx-auto h-24 w-24 rounded-full object-cover"
//                   />
//                   <div className="space-y-1">
//                     <CardTitle className="text-lg">{member.name}</CardTitle>
//                     <CardDescription className="text-purple-600 font-medium">{member.role}</CardDescription>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <p className="text-sm text-gray-500">{member.bio}</p>
//                   <div className="flex flex-wrap gap-1 justify-center">
//                     {member.badges.map((badge, badgeIndex) => (
//                       <Badge key={badgeIndex} variant="outline" className="text-xs">
//                         {badge}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* Stats Section */}
//       <section className="bg-purple-600 py-12 md:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
//             {stats.map((stat, index) => (
//               <div key={index} className="space-y-2">
//                 <div className="text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
//                 <div className="text-purple-100">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
