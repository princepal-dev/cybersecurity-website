"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, School, Handshake, Briefcase, Mail } from "lucide-react"
import { useState } from "react"

export default function GetInvolved() {
  const [submitted, setSubmitted] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault()
    // Handle form submission here
    console.log(`Form submitted: ${formType}`)
    setSubmitted(formType)
    setTimeout(() => {
      setSubmitted(null)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">JOIN US</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
                Get <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Involved</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Join YLCA and help build a safer digital future. Whether you're a student, educator, volunteer, or partner, there's a place for you.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <Card className="group relative overflow-hidden text-center border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative pt-6">
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20 dark:shadow-primary/30">
                      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-sm sm:text-base font-bold tracking-tight">Students</CardTitle>
                  <CardDescription className="text-xs sm:text-sm mt-2">Join as a student</CardDescription>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden text-center border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:border-secondary/50 dark:hover:border-secondary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative pt-6">
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 dark:from-secondary/40 dark:via-secondary/30 dark:to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-secondary/20 dark:shadow-secondary/30">
                      <School className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                    </div>
                  </div>
                  <CardTitle className="text-sm sm:text-base font-bold tracking-tight">Schools</CardTitle>
                  <CardDescription className="text-xs sm:text-sm mt-2">Request workshops</CardDescription>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden text-center border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative pt-6">
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20 dark:shadow-primary/30">
                      <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-sm sm:text-base font-bold tracking-tight">Volunteers</CardTitle>
                  <CardDescription className="text-xs sm:text-sm mt-2">Mentor & help</CardDescription>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden text-center border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:border-secondary/50 dark:hover:border-secondary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative pt-6">
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 dark:from-secondary/40 dark:via-secondary/30 dark:to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-secondary/20 dark:shadow-secondary/30">
                      <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                    </div>
                  </div>
                  <CardTitle className="text-sm sm:text-base font-bold tracking-tight">Partners</CardTitle>
                  <CardDescription className="text-xs sm:text-sm mt-2">Partner with us</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Forms Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="secondary" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">GET STARTED</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">Choose Your Path</h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
                Select the form that best matches how you'd like to get involved with YLCA.
              </p>
            </div>
            
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-4 sm:mb-6 md:mb-8 bg-card/50 backdrop-blur-sm border border-border/50 p-1 rounded-xl h-auto text-xs sm:text-sm">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="school">School</TabsTrigger>
                <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
                <TabsTrigger value="partnership">Partnership</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              {/* Student Sign-Up Form */}
              <TabsContent value="student">
                <Card className="shadow-xl">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl sm:text-3xl">Student Sign-Up</CardTitle>
                        <CardDescription>Join YLCA as a student participant</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e, "student")} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-name">Full Name *</Label>
                        <Input
                          type="text"
                          id="student-name"
                          name="name"
                          required
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="student-email">Email Address *</Label>
                        <Input
                          type="email"
                          id="student-email"
                          name="email"
                          required
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="student-age">Age *</Label>
                          <Input
                            type="number"
                            id="student-age"
                            name="age"
                            min="12"
                            max="18"
                            required
                            placeholder="12-18"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="student-grade">Grade Level *</Label>
                          <Select name="grade" required>
                            <SelectTrigger id="student-grade">
                              <SelectValue placeholder="Select grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="7">7th Grade</SelectItem>
                              <SelectItem value="8">8th Grade</SelectItem>
                              <SelectItem value="9">9th Grade</SelectItem>
                              <SelectItem value="10">10th Grade</SelectItem>
                              <SelectItem value="11">11th Grade</SelectItem>
                              <SelectItem value="12">12th Grade</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="student-school">School Name *</Label>
                        <Input
                          type="text"
                          id="student-school"
                          name="school"
                          required
                          placeholder="Your school name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="student-location">Location (City, Country) *</Label>
                        <Input
                          type="text"
                          id="student-location"
                          name="location"
                          required
                          placeholder="Mountain View, USA"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="student-interest">What interests you most? *</Label>
                        <Select name="interest" required>
                          <SelectTrigger id="student-interest">
                            <SelectValue placeholder="Select interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="workshops">Attending Workshops</SelectItem>
                            <SelectItem value="ambassador">Becoming an Ambassador</SelectItem>
                            <SelectItem value="both">Both</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="student-message">Why do you want to join YLCA?</Label>
                        <Textarea
                          id="student-message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about yourself and why you're interested..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-3 rounded-full"
                      >
                        {submitted === "student" ? "Application Submitted! ✓" : "Submit Application"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* School Workshop Request Form */}
              <TabsContent value="school">
                <Card className="shadow-xl">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <School className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl sm:text-3xl">School Workshop Request</CardTitle>
                        <CardDescription>Request a free workshop for your school</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e, "school")} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="school-name">School Name *</Label>
                        <Input type="text" id="school-name" name="schoolName" required placeholder="Your school name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Contact Name *</Label>
                        <Input type="text" id="contact-name" name="contactName" required placeholder="Your name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email Address *</Label>
                        <Input type="email" id="contact-email" name="email" required placeholder="your@email.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-role">Your Role *</Label>
                        <Select name="role" required>
                          <SelectTrigger id="contact-role">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="administrator">Administrator</SelectItem>
                            <SelectItem value="counselor">Counselor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="school-location">School Location (City, Country) *</Label>
                        <Input type="text" id="school-location" name="location" required placeholder="Mountain View, USA" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="student-count">Expected Number of Students *</Label>
                        <Input type="number" id="student-count" name="studentCount" min="10" required placeholder="e.g., 50" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferred-date">Preferred Date(s)</Label>
                        <Input type="text" id="preferred-date" name="preferredDate" placeholder="e.g., March 2025 or specific dates" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="workshop-message">Additional Information</Label>
                        <Textarea id="workshop-message" name="message" rows={4} placeholder="Tell us about your school and any specific requirements..." />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-3 rounded-full">
                        {submitted === "school" ? "Request Submitted! ✓" : "Submit Request"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Volunteer & Mentor Form */}
              <TabsContent value="volunteer">
                <Card className="shadow-xl">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl sm:text-3xl">Volunteer & Mentor Form</CardTitle>
                        <CardDescription>Help mentor and guide young leaders</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e, "volunteer")} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-name">Full Name *</Label>
                        <Input type="text" id="volunteer-name" name="name" required placeholder="Your full name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-email">Email Address *</Label>
                        <Input type="email" id="volunteer-email" name="email" required placeholder="your@email.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-role">I want to: *</Label>
                        <Select name="role" required>
                          <SelectTrigger id="volunteer-role">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mentor">Be a Mentor</SelectItem>
                            <SelectItem value="volunteer">Volunteer at Events</SelectItem>
                            <SelectItem value="both">Both</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-company">Company/Organization</Label>
                        <Input type="text" id="volunteer-company" name="company" placeholder="Your company or organization" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-expertise">Area of Expertise *</Label>
                        <Select name="expertise" required>
                          <SelectTrigger id="volunteer-expertise">
                            <SelectValue placeholder="Select expertise" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                            <SelectItem value="ai">Artificial Intelligence</SelectItem>
                            <SelectItem value="both">Both</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-experience">Years of Experience</Label>
                        <Input type="number" id="volunteer-experience" name="experience" min="0" placeholder="e.g., 5" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-message">Why do you want to volunteer/mentor with YLCA? *</Label>
                        <Textarea id="volunteer-message" name="message" rows={4} required placeholder="Tell us about yourself and how you'd like to contribute..." />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-3 rounded-full">
                        {submitted === "volunteer" ? "Application Submitted! ✓" : "Submit Application"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Partnership Request Form */}
              <TabsContent value="partnership">
                <Card className="shadow-xl">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl sm:text-3xl">Partnership Request</CardTitle>
                        <CardDescription>Partner with YLCA to make an impact</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e, "partnership")} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="partner-name">Organization Name *</Label>
                        <Input type="text" id="partner-name" name="organizationName" required placeholder="Your organization name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-contact">Contact Name *</Label>
                        <Input type="text" id="partner-contact" name="contactName" required placeholder="Your name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-email">Email Address *</Label>
                        <Input type="email" id="partner-email" name="email" required placeholder="your@email.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-type">Partnership Type *</Label>
                        <Select name="partnershipType" required>
                          <SelectTrigger id="partner-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="corporate">Corporate Sponsor</SelectItem>
                            <SelectItem value="educational">Educational Institution</SelectItem>
                            <SelectItem value="nonprofit">Non-Profit Organization</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-website">Website</Label>
                        <Input type="url" id="partner-website" name="website" placeholder="https://example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-message">Partnership Proposal *</Label>
                        <Textarea id="partner-message" name="message" rows={5} required placeholder="Tell us about your organization and how you'd like to partner with YLCA..." />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-3 rounded-full">
                        {submitted === "partnership" ? "Request Submitted! ✓" : "Submit Partnership Request"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Contact Form */}
              <TabsContent value="contact">
                <Card className="shadow-xl">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/20 dark:via-secondary/20 dark:to-primary/20 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl sm:text-3xl">Contact Us</CardTitle>
                        <CardDescription>Get in touch with our team</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e, "contact")} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-form-name">Name *</Label>
                        <Input type="text" id="contact-form-name" name="name" required placeholder="Your name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-form-email">Email Address *</Label>
                        <Input type="email" id="contact-form-email" name="email" required placeholder="your@email.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-subject">Subject *</Label>
                        <Select name="subject" required>
                          <SelectTrigger id="contact-subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="program">Program Question</SelectItem>
                            <SelectItem value="media">Media Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-message">Message *</Label>
                        <Textarea id="contact-message" name="message" rows={5} required placeholder="Tell us how we can help..." />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-3 rounded-full">
                        {submitted === "contact" ? "Message Sent! ✓" : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Information */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-foreground">Contact Information</h2>
            <div className="flex justify-center">
              <Card className="max-w-md w-full">
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="break-all">
                    <a href="mailto:Arth.Bhardwaj@elevancesystems.com" className="text-primary hover:text-secondary transition-colors underline underline-offset-2">Arth.Bhardwaj@elevancesystems.com</a>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

