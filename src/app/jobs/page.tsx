export default function HireTalentPage() {
  return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Jobs</h1>
          <p className="text-gray-600">This page is coming soon!</p>
        </div>
      </div>
  )
}



// "use client"
//
// import { useState } from "react"
// import { Search, MapPin, Bookmark, Clock, DollarSign, SlidersHorizontal } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Slider } from "@/components/ui/slider"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import { Label } from "@/components/ui/label"
//
// export default function JobsPage() {
//   const [salaryRange, setSalaryRange] = useState([40])
//
//   const jobListings = [
//     {
//       id: 1,
//       title: "Senior Odoo Developer",
//       company: "Odoo S.A.",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Odoo_logo.svg/512px-Odoo_logo.svg.png",
//       applicants: "15 Applicants",
//       salary: "$85k/year",
//       posted: "Posted 3 days ago",
//       tags: ["Full-Time", "Remote", "Senior"],
//       description: "Join the core Odoo team to develop and enhance the world's most popular open-source ERP system.",
//       bookmarked: false,
//       urgent: true,
//     },
//     {
//       id: 2,
//       title: "Odoo Technical Consultant",
//       company: "Cybrosys Technologies",
//       logo: "/placeholder.svg?height=40&width=40",
//       applicants: "22 Applicants",
//       salary: "$55k/year",
//       posted: "Posted 5 days ago",
//       tags: ["Full-Time", "Hybrid", "Mid-Level"],
//       description: "Implement Odoo solutions for clients across various industries with technical customizations.",
//       bookmarked: true,
//       urgent: false,
//     },
//     {
//       id: 3,
//       title: "Odoo Functional Consultant",
//       company: "Serpent Consulting",
//       logo: "/placeholder.svg?height=40&width=40",
//       applicants: "18 Applicants",
//       salary: "$50k/year",
//       posted: "Posted 1 week ago",
//       tags: ["Full-Time", "On-Site", "Mid-Level"],
//       description: "Configure Odoo modules and provide business process consulting for enterprise clients.",
//       bookmarked: false,
//       urgent: false,
//     },
//     {
//       id: 4,
//       title: "Odoo Business Analyst",
//       company: "Vauxoo",
//       logo: "/placeholder.svg?height=40&width=40",
//       applicants: "12 Applicants",
//       salary: "$48k/year",
//       posted: "Posted 4 days ago",
//       tags: ["Full-Time", "Remote", "Mid-Level"],
//       description: "Analyze business requirements and design Odoo solutions for Latin American markets.",
//       bookmarked: true,
//       urgent: false,
//     },
//     {
//       id: 5,
//       title: "Odoo ERP Consultant",
//       company: "Tecnativa",
//       logo: "/placeholder.svg?height=40&width=40",
//       applicants: "25 Applicants",
//       salary: "$52k/year",
//       posted: "Posted 6 days ago",
//       tags: ["Full-Time", "Hybrid", "Senior"],
//       description: "Lead Odoo implementation projects and provide strategic ERP consulting services.",
//       bookmarked: true,
//       urgent: false,
//     },
//     {
//       id: 6,
//       title: "Odoo Project Manager",
//       company: "Mint System",
//       logo: "/placeholder.svg?height=40&width=40",
//       applicants: "8 Applicants",
//       salary: "$65k/year",
//       posted: "Posted 2 days ago",
//       tags: ["Full-Time", "Remote", "Senior"],
//       description: "Manage Odoo implementation projects from initiation to successful deployment.",
//       bookmarked: false,
//       urgent: true,
//     },
//   ]
//
//   const FilterContent = () => (
//     <div className="space-y-6">
//       {/* Sort By */}
//       <div className="space-y-3">
//         <Label className="text-sm font-medium">Sort By</Label>
//         <div className="space-y-2">
//           {["Recently Posted", "Highest Salary", "Most Relevant"].map((option) => (
//             <div key={option} className="flex items-center space-x-2">
//               <Checkbox id={option.toLowerCase().replace(" ", "-")} />
//               <Label htmlFor={option.toLowerCase().replace(" ", "-")} className="text-sm">
//                 {option}
//               </Label>
//             </div>
//           ))}
//         </div>
//       </div>
//
//       <Separator />
//
//       {/* Salary Range */}
//       <div className="space-y-3">
//         <Label className="text-sm font-medium">Salary Range (Annual)</Label>
//         <div className="px-2">
//           <Slider value={salaryRange} onValueChange={setSalaryRange} max={120} min={30} step={5} className="w-full" />
//           <div className="flex justify-between text-xs text-muted-foreground mt-2">
//             <span>$30k</span>
//             <span>$120k</span>
//           </div>
//         </div>
//       </div>
//
//       <Separator />
//
//       {/* Odoo Role Type */}
//       <div className="space-y-3">
//         <Label className="text-sm font-medium">Odoo Role Type</Label>
//         <div className="space-y-2">
//           {["Developer", "Technical Consultant", "Functional Consultant", "Business Analyst", "Project Manager"].map(
//             (role) => (
//               <div key={role} className="flex items-center space-x-2">
//                 <Checkbox id={role.toLowerCase().replace(" ", "-")} />
//                 <Label htmlFor={role.toLowerCase().replace(" ", "-")} className="text-sm">
//                   {role}
//                 </Label>
//               </div>
//             ),
//           )}
//         </div>
//       </div>
//
//       <Separator />
//
//       {/* Work Location */}
//       <div className="space-y-3">
//         <Label className="text-sm font-medium">Work Location</Label>
//         <div className="space-y-2">
//           {["Remote", "On-Site", "Hybrid"].map((location) => (
//             <div key={location} className="flex items-center space-x-2">
//               <Checkbox id={location.toLowerCase()} defaultChecked={location === "Remote"} />
//               <Label htmlFor={location.toLowerCase()} className="text-sm">
//                 {location}
//               </Label>
//             </div>
//           ))}
//         </div>
//       </div>
//
//       <Separator />
//
//       {/* Experience Level */}
//       <div className="space-y-3">
//         <Label className="text-sm font-medium">Experience Level</Label>
//         <div className="space-y-2">
//           {["Junior (0-2 years)", "Mid-Level (2-5 years)", "Senior (5+ years)"].map((level) => (
//             <div key={level} className="flex items-center space-x-2">
//               <Checkbox id={level.toLowerCase().replace(/[^a-z0-9]/g, "-")} />
//               <Label htmlFor={level.toLowerCase().replace(/[^a-z0-9]/g, "-")} className="text-sm">
//                 {level}
//               </Label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
//
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex gap-8">
//         {/* Desktop Sidebar */}
//         <div className="hidden lg:block w-80 flex-shrink-0">
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle className="text-lg">Filters</CardTitle>
//                 <Button variant="ghost" size="sm" className="text-purple-600">
//                   Reset
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <FilterContent />
//             </CardContent>
//           </Card>
//         </div>
//
//         {/* Main Content */}
//         <div className="flex-1">
//           {/* Header Section */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold mb-2">Find your Dream Odoo Job!</h1>
//             <p className="text-muted-foreground">
//               Explore the latest Odoo opportunities from top partners and companies worldwide.
//             </p>
//           </div>
//
//           {/* Search Section */}
//           <Card className="mb-6">
//             <CardContent className="p-6">
//               <div className="flex flex-col gap-4 sm:flex-row">
//                 <div className="relative flex-1">
//                   <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                   <Input placeholder="Odoo Developer, Consultant, Analyst..." className="pl-10" />
//                 </div>
//                 <div className="relative flex-1">
//                   <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                   <Input placeholder="Search Country or City here" className="pl-10" />
//                 </div>
//                 <Button className="bg-purple-600 hover:bg-purple-700">Search</Button>
//               </div>
//             </CardContent>
//           </Card>
//
//           {/* Results Header */}
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
//             <div className="text-muted-foreground">
//               Showing <span className="text-purple-600 font-medium">850</span> available Odoo jobs
//             </div>
//             <div className="flex items-center gap-2">
//               {/* Mobile Filter Button */}
//               <Sheet>
//                 <SheetTrigger asChild>
//                   <Button variant="outline" size="sm" className="lg:hidden">
//                     <SlidersHorizontal className="h-4 w-4 mr-2" />
//                     Filters
//                   </Button>
//                 </SheetTrigger>
//                 <SheetContent side="left" className="w-[300px] sm:w-[400px]">
//                   <SheetHeader>
//                     <SheetTitle>Filters</SheetTitle>
//                     <SheetDescription>Refine your job search with these filters</SheetDescription>
//                   </SheetHeader>
//                   <div className="mt-6">
//                     <FilterContent />
//                   </div>
//                 </SheetContent>
//               </Sheet>
//
//               <span className="text-sm text-muted-foreground">Sort By:</span>
//               <Select defaultValue="newest">
//                 <SelectTrigger className="w-32">
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="newest">Newest</SelectItem>
//                   <SelectItem value="oldest">Oldest</SelectItem>
//                   <SelectItem value="salary-high">Salary High</SelectItem>
//                   <SelectItem value="salary-low">Salary Low</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//
//           {/* Job Listings Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {jobListings.map((job) => (
//               <Card key={job.id} className="group hover:shadow-lg transition-all duration-200">
//                 <CardHeader className="pb-3">
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
//                         <img
//                           src={job.logo || "/placeholder.svg"}
//                           alt={job.company}
//                           className="h-8 w-8 object-contain"
//                         />
//                       </div>
//                       <div className="space-y-1">
//                         <CardTitle className="text-lg leading-none">{job.title}</CardTitle>
//                         <CardDescription className="text-purple-600 font-medium">{job.company}</CardDescription>
//                         <p className="text-xs text-muted-foreground">{job.applicants}</p>
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-end gap-2">
//                       <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                         <Bookmark
//                           className={`h-4 w-4 ${job.bookmarked ? "fill-purple-600 text-purple-600" : "text-muted-foreground"}`}
//                         />
//                       </Button>
//                       {job.urgent && (
//                         <Badge variant="destructive" className="text-xs">
//                           Urgent
//                         </Badge>
//                       )}
//                     </div>
//                   </div>
//                 </CardHeader>
//
//                 <CardContent className="space-y-4">
//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {job.tags.map((tag, index) => (
//                       <Badge
//                         key={index}
//                         variant="secondary"
//                         className={`text-xs ${
//                           tag === "Full-Time"
//                             ? "bg-blue-100 text-blue-700"
//                             : tag === "Remote"
//                               ? "bg-green-100 text-green-700"
//                               : tag === "Hybrid"
//                                 ? "bg-orange-100 text-orange-700"
//                                 : tag === "Senior"
//                                   ? "bg-purple-100 text-purple-700"
//                                   : tag === "Mid-Level"
//                                     ? "bg-indigo-100 text-indigo-700"
//                                     : "bg-gray-100 text-gray-700"
//                         }`}
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//
//                   {/* Description */}
//                   <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
//
//                   {/* Footer */}
//                   <div className="flex items-center justify-between pt-2">
//                     <div className="flex items-center gap-1">
//                       <DollarSign className="h-4 w-4 text-muted-foreground" />
//                       <span className="font-semibold">{job.salary}</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-xs text-muted-foreground">
//                       <Clock className="h-3 w-3" />
//                       <span>{job.posted}</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
