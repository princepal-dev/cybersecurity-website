'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Eye, GraduationCap, Rocket, Shield, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const advisors = [
  {
    name: "Vaijayanti Korde",
    title: "Head of Cybersecurity, Crypto Agility & Cloud Security, Visa",
    linkedin: "https://www.linkedin.com/in/vaijayantikorde",
    image: "https://images.squarespace-cdn.com/content/v1/66d5495ee0be0777a7bc5b72/bf730e9c-7e02-47a5-85a7-46ad0ec619fc/Vaijyanti+Generative+AI+.jpg?format=750w"
  },
  {
    name: "Anjali Mangal",
    title: "Senior Director Azure Security @ Microsoft | Leading AI and Research in Cybersecurity",
    linkedin: "https://www.linkedin.com/in/anjali-mangal-0b67667/",
    image: "https://images.squarespace-cdn.com/content/v1/66d5495ee0be0777a7bc5b72/9e6168f4-27c9-46d8-b1d6-d7149688d982/Anjali-profile.jpeg?format=2500w"
  },
  {
    name: "Michael Ingram",
    title: "Director - Network Security & Architecture, Elevance Systems, Inc.",
    linkedin: null,
    image: "https://images.squarespace-cdn.com/content/v1/66d5495ee0be0777a7bc5b72/ec686b54-9455-4c4e-9f62-573ed0cb103e/MI.jpg?format=750w"
  },
  {
    name: "Prativa Bawri",
    title: "Staff Software Engineer, VMWare Carbon Black",
    linkedin: "https://www.linkedin.com/in/prativa-bawri-b9797351",
    image: "https://images.squarespace-cdn.com/content/v1/66d5495ee0be0777a7bc5b72/c5d5c13a-e577-4f48-b0a5-cc4767d635d8/Prativa_Expand.jpg?format=750w"
  },
  {
    name: "Michael Zeberlein",
    title: "Principal Security Researcher, Microsoft",
    linkedin: "https://www.linkedin.com/in/ception/",
    image: "https://images.squarespace-cdn.com/content/v1/66d5495ee0be0777a7bc5b72/a1c9483f-cc12-4f3e-9158-596ac5a48ed4/ZeberleinProfile.jpg?format=750w"
  },
  {
    name: "Ralph Johnson",
    title: "Vice President, IT Managed Services, Elevance Systems",
    linkedin: null,
    image: "https://images.squarespace-cdn.com/content/v1/66d5495ee0be0777a7bc5b72/4f135a4f-5104-4924-a582-ddd8b7a80d50/AI_Ralph+Johnson+2.jpg?format=750w"
  },
  {
    name: "Lalit Jain, PhD",
    title: "Co-Founder, CTO, & AI Innovator, Microsoft",
    linkedin: "https://www.linkedin.com/in/lalit-jain-phd-54248b20",
    image: "https://images.squarespace-cdn.com/content/v1/66d5495ee0be0777a7bc5b72/032e3765-aace-4e74-9359-c271dfb03100/lalit.jpeg?format=750w"
  },
  {
    name: "Sia Godika",
    title: "Computer Science & Finance undergrad student at MIT. Founder to international organizations, interested in applications of Technology and ML in the real world.",
    linkedin: "https://www.linkedin.com/in/sia-godika-986238285/?trk=blended-typeahead",
    image: "/sia.jpeg"
  }
]

const ambassadors = [
  {
    name: "Vedika Jain",
    title: "YLCA Ambassador - Government Schools (Delhi)",
    image: "/vedika.jpeg",
    description: "10th-grade STEM enthusiast and mathematics Olympiad awardee. Founded Youth Voice Journal and Kitaab4U to promote education and creativity.",
    achievements: [
      "Mathematics Olympiad awardee",
      "Founded Youth Voice Journal",
      "Launched Kitaab4U initiative",
      "STEM leadership in Delhi"
    ]
  }
]

const leadershipRoles = [
  {
    title: "Operations/Program Lead",
    subtitle: "Work with professional mentors",
    icon: "operations",
    responsibilities: [
      "Coordinate ambassador activities and timelines",
      "Maintain trackers and organize documents",
      "Support workshop/event planning"
    ],
    color: "primary"
  },
  {
    title: "Content Lead",
    subtitle: "Website + Social Media",
    note: "Work with existing developer (no coding required)",
    icon: "content",
    responsibilities: [
      "Publish updates on ylca.tech",
      "Create social media content",
      "Collect and curate ambassador stories"
    ],
    color: "secondary"
  }
]

function AmbassadorCardSection() {
  const [currentAmbassadorIndex, setCurrentAmbassadorIndex] = useState(0)

  const nextAmbassador = () => {
    setCurrentAmbassadorIndex((prev) => (prev + 1) % ambassadors.length)
  }

  const prevAmbassador = () => {
    setCurrentAmbassadorIndex((prev) => (prev - 1 + ambassadors.length) % ambassadors.length)
  }

  return (
    <AmbassadorCard
      currentIndex={currentAmbassadorIndex}
      onNext={nextAmbassador}
      onPrev={prevAmbassador}
    />
  )
}

function AmbassadorCard({ currentIndex, onNext, onPrev }: { currentIndex: number, onNext: () => void, onPrev: () => void }) {
  const ambassador = ambassadors[currentIndex]
  const [applyModalOpen, setApplyModalOpen] = useState(false)

  return (
    <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm hover:border-secondary/50 dark:hover:border-secondary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:scale-[1.01]">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Navigation Buttons */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-200"
          onClick={onPrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-200"
          onClick={onNext}
          disabled={currentIndex === ambassadors.length - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="relative pt-6 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          {/* Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-border/60 dark:border-border/40 shadow-xl shadow-secondary/20 dark:shadow-secondary/30 group-hover:scale-110 transition-transform duration-300">
              <img
                src={ambassador.image}
                alt={ambassador.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{ambassador.name}</h3>
              <p className="text-secondary font-medium text-sm sm:text-base">{ambassador.title}</p>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              {ambassador.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-2 text-sm">Key Achievements:</h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                {ambassador.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-secondary">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Now Button */}
            <Dialog open={applyModalOpen} onOpenChange={setApplyModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105">
                  Apply Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Apply to Become a YLCA Ambassador</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Interested in becoming a YLCA Ambassador like Vedika? Fill out our application form.
                  </p>
                  <Link href="/get-involved" onClick={() => setApplyModalOpen(false)}>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold">
                      Start Application
                    </Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Card Counter */}
        <div className="mt-4 pt-4 border-t border-border/40 text-center">
          <span className="text-xs text-muted-foreground">
            Ambassador {currentIndex + 1} of {ambassadors.length}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

function LeadershipRoleCard({ role, onApply }: { role: typeof leadershipRoles[0], onApply: (roleTitle: string) => void }) {
  const getIcon = (iconType: string) => {
    if (iconType === "operations") {
      return (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    } else {
      return (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m4 0H8l.5 16h7L16 4z" />
        </svg>
      )
    }
  }

  return (
    <Card className={`group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm hover:border-${role.color}/50 dark:hover:border-${role.color}/60 transition-all duration-300 hover:shadow-2xl hover:shadow-${role.color}/25 dark:hover:shadow-${role.color}/30 hover:-translate-y-2 hover:scale-[1.01]`}>
      <div className={`absolute inset-0 bg-gradient-to-br from-${role.color}/10 via-${role.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <div className={`absolute top-0 right-0 w-40 h-40 bg-${role.color}/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      <CardHeader className="relative pb-4 text-center px-4 sm:px-6 pt-6">
        <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-${role.color}/25 via-${role.color}/15 to-${role.color}/5 dark:from-${role.color}/35 dark:via-${role.color}/25 dark:to-${role.color}/15 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-${role.color}/25 dark:shadow-${role.color}/35 ring-2 ring-${role.color}/10 dark:ring-${role.color}/20`}>
          {getIcon(role.icon)}
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-2">{role.title}</CardTitle>
        <CardDescription className={`text-sm sm:text-base font-medium text-${role.color}`}>{role.subtitle}</CardDescription>
        {role.note && (
          <p className="text-xs text-muted-foreground italic mt-2">{role.note}</p>
        )}
      </CardHeader>

      <CardContent className="relative pt-0 px-4 sm:px-6 pb-6">
        <div className="space-y-3 mb-6">
          <h4 className="font-semibold text-foreground text-sm">Responsibilities:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {role.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className={`text-${role.color} mt-0.5 text-xs flex-shrink-0`}>•</span>
                <span className="leading-tight">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deadline Information */}
        <div className="bg-muted/30 dark:bg-muted/20 rounded-lg p-3 mb-4">
          <div className="text-center">
            <p className="text-xs font-semibold text-foreground mb-1">Deadline: January 3, 2026</p>
            <p className="text-xs text-muted-foreground">Required: role, time zone, availability, motivation, experience</p>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => onApply(role.title)}
            className={`bg-gradient-to-r ${role.color === 'primary' ? 'from-primary to-secondary' : 'from-secondary to-primary'} hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105`}
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function LeadershipRolesSection() {
  const [applyModalOpen, setApplyModalOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<string>("")

  const handleApply = (roleTitle: string) => {
    setSelectedRole(roleTitle)
    setApplyModalOpen(true)
  }

  const getFormType = (roleTitle: string) => {
    if (roleTitle === "Operations/Program Lead") return "operations"
    if (roleTitle === "Content Lead") return "content"
    return "operations" // default
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        {leadershipRoles.map((role, index) => (
          <LeadershipRoleCard
            key={index}
            role={role}
            onApply={handleApply}
          />
        ))}
      </div>

      {/* Apply Modal with Form */}
      <Dialog open={applyModalOpen} onOpenChange={setApplyModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Apply for {selectedRole}</h3>
            <p className="text-muted-foreground text-sm">
              Fill out the application form below to apply for the {selectedRole} position.
            </p>
          </div>

          <LeadershipApplicationForms selectedForm={getFormType(selectedRole)} />
        </DialogContent>
      </Dialog>
    </>
  )
}

function LeadershipApplicationForms({ selectedForm }: { selectedForm?: string }) {
  const [submitted, setSubmitted] = useState<string | null>(null)

  // State to track Select values for each form
  const [operationsForm, setOperationsForm] = useState({
    role: '',
    timeZone: '',
    availability: ''
  })
  const [contentForm, setContentForm] = useState({
    role: '',
    timeZone: '',
    availability: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: string) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    // Manually add Select values to FormData
    if (formType === 'operations') {
      if (operationsForm.role) formData.set('role', operationsForm.role)
      if (operationsForm.timeZone) formData.set('timeZone', operationsForm.timeZone)
      if (operationsForm.availability) formData.set('availability', operationsForm.availability)
    } else if (formType === 'content') {
      if (contentForm.role) formData.set('role', contentForm.role)
      if (contentForm.timeZone) formData.set('timeZone', contentForm.timeZone)
      if (contentForm.availability) formData.set('availability', contentForm.availability)
    }

    // Add form type to the form data
    formData.append('_formType', `leadership-${formType}`)
    formData.append('_captcha', 'false')
    formData.append('_template', 'box')
    formData.append('_subject', `YLCA Leadership Application - ${formType.charAt(0).toUpperCase() + formType.slice(1)} Role`)

    try {
      const response = await fetch('https://formsubmit.co/anjali8129@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(formType)
      form.reset()

      // Reset form state
      if (formType === 'operations') {
        setOperationsForm({ role: '', timeZone: '', availability: '' })
      } else if (formType === 'content') {
        setContentForm({ role: '', timeZone: '', availability: '' })
      }

      setTimeout(() => {
        setSubmitted(null)
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">Apply Now</h3>
        <p className="text-sm sm:text-base text-muted-foreground">Fill out the form for the role you're interested in</p>
      </div>

      {/* Show the appropriate form based on selectedForm */}
      {selectedForm === "operations" && (
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-base sm:text-lg">Operations Lead Application</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Work with professional mentors</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 px-4 sm:px-6">
            <form onSubmit={(e) => handleSubmit(e, "operations")} className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="ops-name">Full Name *</Label>
                <Input
                  type="text"
                  id="ops-name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ops-email">Email Address *</Label>
                <Input
                  type="email"
                  id="ops-email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ops-role">Role Interest *</Label>
                  <Select
                    name="role"
                    required
                    value={operationsForm.role}
                    onValueChange={(value) => setOperationsForm({ ...operationsForm, role: value })}
                  >
                    <SelectTrigger id="ops-role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="operations">Operations/Program Lead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ops-timezone">Time Zone *</Label>
                  <Select
                    name="timeZone"
                    required
                    value={operationsForm.timeZone}
                    onValueChange={(value) => setOperationsForm({ ...operationsForm, timeZone: value })}
                  >
                    <SelectTrigger id="ops-timezone">
                      <SelectValue placeholder="Select time zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                      <SelectItem value="mst">MST (Mountain Standard Time)</SelectItem>
                      <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                      <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                      <SelectItem value="ist">IST (Indian Standard Time)</SelectItem>
                      <SelectItem value="cet">CET (Central European Time)</SelectItem>
                      <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ops-availability">Weekly/Monthly Availability *</Label>
                <Select
                  name="availability"
                  required
                  value={operationsForm.availability}
                  onValueChange={(value) => setOperationsForm({ ...operationsForm, availability: value })}
                >
                  <SelectTrigger id="ops-availability">
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5-10 hours per week</SelectItem>
                    <SelectItem value="10-15">10-15 hours per week</SelectItem>
                    <SelectItem value="15-20">15-20 hours per week</SelectItem>
                    <SelectItem value="flexible">Flexible - depends on tasks</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ops-why">Why do you want this role? *</Label>
                <Textarea
                  id="ops-why"
                  name="whyRole"
                  rows={3}
                  className="min-h-[80px] sm:min-h-[100px]"
                  required
                  placeholder="Tell us why you're interested in the Operations/Program Lead role..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ops-experience">Relevant Experience</Label>
                <Textarea
                  id="ops-experience"
                  name="experience"
                  rows={2}
                  className="min-h-[60px] sm:min-h-[80px]"
                  placeholder="Any relevant experience you have (and links, if available)..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-4 py-2.5 rounded-lg text-sm"
              >
                {submitted === "operations" ? "Submitted! ✓" : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {selectedForm === "content" && (
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary/10 dark:bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m4 0H8l.5 16h7L16 4z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className="text-base sm:text-lg">Content Lead Application</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Website + Social Media</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 px-4 sm:px-6">
            <form onSubmit={(e) => handleSubmit(e, "content")} className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="content-name">Full Name *</Label>
                <Input
                  type="text"
                  id="content-name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content-email">Email Address *</Label>
                <Input
                  type="email"
                  id="content-email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="content-role">Role Interest *</Label>
                  <Select
                    name="role"
                    required
                    value={contentForm.role}
                    onValueChange={(value) => setContentForm({ ...contentForm, role: value })}
                  >
                    <SelectTrigger id="content-role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="content">Content Lead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content-timezone">Time Zone *</Label>
                  <Select
                    name="timeZone"
                    required
                    value={contentForm.timeZone}
                    onValueChange={(value) => setContentForm({ ...contentForm, timeZone: value })}
                  >
                    <SelectTrigger id="content-timezone">
                      <SelectValue placeholder="Select time zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                      <SelectItem value="mst">MST (Mountain Standard Time)</SelectItem>
                      <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                      <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                      <SelectItem value="ist">IST (Indian Standard Time)</SelectItem>
                      <SelectItem value="cet">CET (Central European Time)</SelectItem>
                      <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content-availability">Weekly/Monthly Availability *</Label>
                <Select
                  name="availability"
                  required
                  value={contentForm.availability}
                  onValueChange={(value) => setContentForm({ ...contentForm, availability: value })}
                >
                  <SelectTrigger id="content-availability">
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5-10 hours per week</SelectItem>
                    <SelectItem value="10-15">10-15 hours per week</SelectItem>
                    <SelectItem value="15-20">15-20 hours per week</SelectItem>
                    <SelectItem value="flexible">Flexible - depends on tasks</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content-why">Why do you want this role? *</Label>
                <Textarea
                  id="content-why"
                  name="whyRole"
                  rows={3}
                  className="min-h-[80px] sm:min-h-[100px]"
                  required
                  placeholder="Tell us why you're interested in the Content Lead role..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content-experience">Relevant Experience</Label>
                <Textarea
                  id="content-experience"
                  name="experience"
                  rows={2}
                  className="min-h-[60px] sm:min-h-[80px]"
                  placeholder="Any relevant experience you have (and links, if available)..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-4 py-2.5 rounded-lg text-sm"
              >
                {submitted === "content" ? "Submitted! ✓" : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default function About() {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="text-center md:text-left">
                <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">ABOUT US</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
                  About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Young Leaders in Cybersecurity & AI</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Empowering teens worldwide with cybersecurity and AI knowledge through hands-on training, interactive workshops, and leadership opportunities. We help young people navigate the digital world safely and ethically while preparing them for careers in technology.
                </p>
                <Link href="/get-involved" className="inline-block">
                  <Button className="relative w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg shadow-primary/30 dark:shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/50 transition-all duration-300 ease-out hover:scale-105 active:scale-100 font-semibold group overflow-hidden">
                    <span className="relative z-10">Join Our Mission</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  </Button>
                </Link>
              </div>
              <div className="relative mt-8 md:mt-0">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 dark:border-border/40 shadow-2xl dark:shadow-black/40 group">
                  <img
                    src="/young-tech-leaders-cybersecurity-ai-innovation.jpg"
                    alt="Young Leaders in Cybersecurity & AI"
                    className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-primary/20 dark:ring-primary/30 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl shadow-xl shadow-primary/30 dark:shadow-primary/40 flex items-center justify-center">
                  <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <Card className="relative overflow-hidden border-2 border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative px-4 sm:px-6 pt-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                      <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent className="relative px-4 sm:px-6 pb-6">
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      Our vision is a world where every young person—regardless of country, background, or access—has the knowledge, confidence, and leadership skills to navigate the digital age safely and ethically. YLCA strives to build a generation of global youth who understand cybersecurity, respect the responsible use of AI, and lead their communities toward a safer, more equitable digital future.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:border-secondary/50 dark:hover:border-secondary/60 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 dark:from-secondary/40 dark:via-secondary/30 dark:to-secondary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20 dark:shadow-secondary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <GraduationCap className="w-7 h-7 text-secondary" />
                      </div>
                      <CardTitle className="text-lg font-bold tracking-tight">Education First</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-sm">Comprehensive cybersecurity and AI literacy for all teens.</CardDescription>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Rocket className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold tracking-tight">Future Leaders</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-sm">Empowering the next generation of digital safety advocates.</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="secondary" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">OUR MISSION</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">Our Mission</h2>
            </div>
            
            <Card className="border-2 border-primary/30 dark:border-primary/40 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm shadow-lg">
              <CardContent className="pt-6 px-4 sm:px-6 pb-6">
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our mission is to empower teens around the world with the knowledge, skills, and confidence needed to navigate the digital age safely, responsibly, and ethically. YLCA equips young people with hands-on cybersecurity training, AI literacy, and real-world tools to recognize threats, protect themselves and others, and make informed decisions about technology. Through interactive workshops, engaging content, and leadership development opportunities, we help students build the foundation to become strong digital citizens who understand both the risks and opportunities of an interconnected world.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Beyond education, our mission is to cultivate a global network of youth leaders who take action in their schools and communities. Through our Ambassador Program, mentorship from industry professionals, and support from partners such as Elevance Systems' CSR initiative, YLCA provides teens with meaningful opportunities to teach, lead, and create positive change. We are committed to making cybersecurity and AI education accessible to all youth—regardless of background or location—and to empowering students to become advocates for digital safety, champions of responsible AI, and innovators shaping a safer and more inclusive digital future.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Founder */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="default" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">MEET THE FOUNDER</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">Founder</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 dark:border-border/40 shadow-2xl dark:shadow-black/40 group">
                  <img
                    src="/arth-img.webp"
                    alt="Arth Bhardwaj"
                    className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-primary/20 dark:ring-primary/30 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Arth Bhardwaj</h3>
                  <p className="text-muted-foreground mb-2">Founder & High School Innovator</p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                    <a href="mailto:Arth.Bhardwaj@elevancesystems.com" className="text-primary hover:text-secondary transition-colors underline underline-offset-2">Arth.Bhardwaj@elevancesystems.com</a>
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-sm sm:text-base">
                    Arth Bhardwaj is a high-school junior at Saint Francis High School in Mountain View, California, and the founder of Young Leaders in Cybersecurity & AI (YLCA). He leads his school's Cybersecurity & AI Club and works as a student researcher with the University of Illinois Urbana–Champaign (UIUC).
                  </p>
                  <p className="text-sm sm:text-base">
                    Arth is the author of <a href="https://www.amazon.com/dp/B0FMPF2WN5" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-secondary transition-colors underline underline-offset-2">"CYBERSECURITY FOR TEENS: Protecting Yourself in the Digital World"</a> (India) and has delivered hands-on workshops across the United States, India, and beyond on phishing, passwords, digital footprints, and AI ethics.
                  </p>
                  <p className="text-sm sm:text-base">
                    Beyond YLCA, he drives youth-led social impact projects under the Nova Foundation and collaborates with industry mentors from Elevance Systems and Microsoft. Through research, programs, and outreach, Arth's goal is to help teens become more cyber-aware, confident with AI, and prepared to lead in a rapidly changing digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YLCA Ambassadors */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="secondary" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">YLCA AMBASSADORS</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
                Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ambassadors</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Inspiring youth leaders bringing cybersecurity and AI education to communities worldwide.
              </p>
            </div>

            <AmbassadorCardSection />
          </div>
        </section>

        {/* Leadership Roles */}
        <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <Badge variant="default" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs">OPPORTUNITY</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 tracking-tight">
                Leadership Roles <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Now Open</span> (2 roles)
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                Join YLCA's leadership team and help shape the future of youth cybersecurity and AI education.
              </p>
            </div>

            <LeadershipRolesSection />
          </div>
        </section>

        {/* Advisors and Mentors */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="default" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">ADVISORS & MENTORS</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">Advisors and Mentors</h2>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {advisors.map((advisor, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 dark:hover:border-primary/50 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="relative">
                        <div className="aspect-square w-full mb-4 rounded-xl overflow-hidden border border-border/40">
                          <img
                            src={advisor.image}
                            alt={advisor.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <CardTitle className="text-xl font-bold">{advisor.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="mb-4 text-sm leading-relaxed">
                          {advisor.title}
                        </CardDescription>
                        {advisor.linkedin && (
                          <a
                            href={advisor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium"
                          >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-12" />
              <CarouselNext className="hidden sm:flex -right-12" />
            </Carousel>
          </div>
        </section>

        {/* Corporate Sponsor & Partners */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="secondary" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">OUR PARTNERS</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">Partners & Sponsors</h2>
            </div>
            
            {/* Corporate Sponsor */}
            <Card className="mb-8 sm:mb-12 border-2 border-primary/30 dark:border-primary/40 bg-gradient-to-br from-primary/5 via-card/80 to-secondary/5 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="pt-6 px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex-shrink-0">
                  <img
                    src="/elevence_logo.webp"
                    alt="Elevance Systems Logo"
                    className="h-16 w-auto sm:h-20 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3">Elevance Systems</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    Elevance Systems is a healthcare-focused IT managed services consulting firm in Cupertino, CA, with service offices across North America and in India. We specialize in providing best-in-class, transformative business process management services. Our goal is to maximize client profits while lowering costs and increasing staff productivity and satisfaction.
                  </p>
                  <a
                    href="https://www.elevancesystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Learn more about Elevance Systems
                    <span>→</span>
                  </a>
                </div>
              </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
