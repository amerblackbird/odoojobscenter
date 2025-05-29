export default function HireTalentPage() {
  return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-gray-600">This page is coming soon!</p>
        </div>
      </div>
  )
}

// "use client"
//
// import type React from "react"
// import { useState } from "react"
// import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
//
// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//   }
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }
//
//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email Us",
//       details: "hello@odoojobscenter.com",
//       description: "Get in touch anytime",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       icon: Phone,
//       title: "Call Us",
//       details: "+1 (555) 123-4567",
//       description: "Mon-Fri from 9am to 6pm",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       icon: MapPin,
//       title: "Visit Us",
//       details: "456 Tech Hub, Suite 200",
//       description: "Austin, TX 78701",
//       color: "bg-orange-100 text-orange-600",
//     },
//     {
//       icon: Clock,
//       title: "Business Hours",
//       details: "Monday - Friday",
//       description: "9:00 AM - 6:00 PM CST",
//       color: "bg-purple-100 text-purple-600",
//     },
//   ]
//
//   const faqs = [
//     {
//       question: "Do I need Odoo certification to apply?",
//       answer:
//         "While Odoo certification is valuable, many positions welcome candidates with practical Odoo experience. We help match your skills with the right opportunities.",
//     },
//     {
//       question: "Is the platform free for job seekers?",
//       answer:
//         "Yes! Creating a profile, browsing Odoo jobs, and applying to positions is completely free for all Odoo professionals.",
//     },
//     {
//       question: "How do I post Odoo jobs?",
//       answer:
//         "Companies can create employer accounts and post Odoo-specific positions. Our platform helps you reach qualified Odoo talent worldwide.",
//     },
//     {
//       question: "Do you offer Odoo career guidance?",
//       answer:
//         "Our team includes experienced Odoo professionals who can provide career advice and help you navigate the Odoo ecosystem.",
//     },
//   ]
//
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center">
//             <Badge variant="secondary" className="bg-purple-100 text-purple-700">
//               💬 We're here to help
//             </Badge>
//             <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
//               Contact <span className="text-purple-600">OdooJobsCenter</span>
//             </h1>
//             <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
//               Have questions about Odoo careers or our platform? Our team of Odoo experts is here to help. Reach out and
//               we'll get back to you promptly.
//             </p>
//           </div>
//         </div>
//       </section>
//
//       {/* Contact Info Cards */}
//       <section className="py-12 md:py-16">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
//             {contactInfo.map((info, index) => (
//               <Card key={index} className="text-center hover:shadow-lg transition-shadow">
//                 <CardHeader>
//                   <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${info.color}`}>
//                     <info.icon className="h-8 w-8" />
//                   </div>
//                   <CardTitle>{info.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-2">
//                   <p className="font-medium text-purple-600">{info.details}</p>
//                   <CardDescription>{info.description}</CardDescription>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//
//           {/* Contact Form and Info */}
//           <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
//             {/* Contact Form */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-2xl">Send us a Message</CardTitle>
//                 <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Full Name</Label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your full name"
//                         required
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email Address</Label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="your.email@example.com"
//                         required
//                       />
//                     </div>
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject</Label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Odoo career inquiry, partnership, etc."
//                       required
//                     />
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us about your Odoo experience or what you're looking for..."
//                       rows={6}
//                       required
//                     />
//                   </div>
//
//                   <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
//                     <Send className="mr-2 h-4 w-4" />
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//
//             {/* Office Info */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-2xl">Our Office</CardTitle>
//                 <CardDescription>Visit us or get in touch during business hours</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
//                   <p className="text-muted-foreground">Interactive Map Placeholder</p>
//                 </div>
//
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="font-semibold mb-2">Headquarters</h3>
//                     <p className="text-muted-foreground">
//                       456 Tech Hub, Suite 200
//                       <br />
//                       Austin, TX 78701
//                       <br />
//                       United States
//                     </p>
//                   </div>
//
//                   <Separator />
//
//                   <div>
//                     <h3 className="font-semibold mb-2">Office Hours</h3>
//                     <p className="text-muted-foreground">
//                       Monday - Friday: 9:00 AM - 6:00 PM CST
//                       <br />
//                       Saturday: 10:00 AM - 2:00 PM CST
//                       <br />
//                       Sunday: Closed
//                     </p>
//                   </div>
//
//                   <Separator />
//
//                   <div>
//                     <h3 className="font-semibold mb-2">About Our Team</h3>
//                     <p className="text-muted-foreground">
//                       Our team consists of certified Odoo professionals with years of experience in development,
//                       consulting, and implementation across various industries.
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//
//       {/* FAQ Section */}
//       <section className="bg-gray-50 py-12 md:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Common questions about Odoo careers and our platform
//               </p>
//             </div>
//           </div>
//
//           <div className="mx-auto max-w-3xl">
//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`}>
//                   <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
//                   <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
