import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Young Leaders in Cybersecurity & AI",
  description: "Privacy Policy for Young Leaders in Cybersecurity & AI (YLCA) - Learn how we protect and handle your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              PRIVACY POLICY
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
              Privacy <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 2025
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 sm:space-y-12">
              {/* Introduction */}
              <Card className="border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Introduction</h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Young Leaders in Cybersecurity & AI (YLCA) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our programs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Information We Collect */}
              <Card className="border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Information We Collect</h2>
                      <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                          <p className="mb-2">We may collect personal information that you voluntarily provide to us when you:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Register for our programs or workshops</li>
                            <li>Sign up as a student, ambassador, or volunteer</li>
                            <li>Contact us through our website forms</li>
                            <li>Subscribe to our newsletter or updates</li>
                          </ul>
                          <p className="mt-3">This information may include:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Name, email address, and contact information</li>
                            <li>School name, grade level, and location</li>
                            <li>Age and demographic information</li>
                            <li>Any other information you choose to provide</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                          <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                            <li>IP address and browser type</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Your Information */}
              <Card className="border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">How We Use Your Information</h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                        We use the information we collect to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed ml-4">
                        <li>Provide, maintain, and improve our programs and services</li>
                        <li>Process registrations and manage program participation</li>
                        <li>Communicate with you about programs, workshops, and opportunities</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Send you newsletters, updates, and educational content (with your consent)</li>
                        <li>Analyze website usage and improve user experience</li>
                        <li>Ensure the safety and security of our programs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card className="border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Information Sharing and Disclosure</h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                        We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed ml-4">
                        <li><strong className="text-foreground">With Your Consent:</strong> We may share information when you have given us explicit permission to do so.</li>
                        <li><strong className="text-foreground">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and programs, subject to confidentiality agreements.</li>
                        <li><strong className="text-foreground">Legal Requirements:</strong> We may disclose information if required by law or to protect our rights, property, or safety.</li>
                        <li><strong className="text-foreground">Program Partners:</strong> With your consent, we may share information with program partners (such as Elevance Systems) for mentorship and program coordination purposes.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card className="border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Data Security</h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Your Rights</h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                        You have the right to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed ml-4">
                        <li>Access and review your personal information</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt-out of receiving communications from us</li>
                        <li>Withdraw consent for data processing at any time</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Children's Privacy */}
              <Card className="border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Children's Privacy</h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        YLCA is designed for teens ages 12-18. We take special care to protect the privacy of minors. We require parental consent for participants under 13 years of age where required by law. We encourage parents and guardians to monitor their children's online activities and to help enforce this Privacy Policy by instructing their children never to provide personal information without permission.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Us */}
              <Card className="border-2 border-primary/30 dark:border-primary/40 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Contact Us</h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                      </p>
                      <div className="space-y-2 text-sm sm:text-base">
                        <p className="text-foreground font-semibold">Email:</p>
                        <p>
                          <a href="mailto:Arth.Bhardwaj@elevancesystems.com" className="text-primary hover:text-secondary transition-colors underline underline-offset-2">
                            Arth.Bhardwaj@elevancesystems.com
                          </a>
                        </p>
                        <p className="text-foreground font-semibold mt-4">Website:</p>
                        <p>
                          <Link href="/get-involved" className="text-primary hover:text-secondary transition-colors underline underline-offset-2">
                            Contact Form
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Changes to Privacy Policy */}
              <Card className="border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Changes to This Privacy Policy</h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                      </p>
                    </div>
                  </div>
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

