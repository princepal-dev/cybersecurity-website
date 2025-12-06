import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-card/60 dark:from-card/40 to-background border-t border-border/60 dark:border-border/40 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-start mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 relative flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Young Leaders in Cybersecurity & AI Logo" 
                  width={112} 
                  height={112} 
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">Empowering Teens to Secure the Digital World</p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 sm:mb-6 text-base tracking-tight">Programs</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/programs" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform">
                  Youth Workshops
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform">
                  Ambassador Program
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform">
                  Certification Levels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 sm:mb-6 text-base tracking-tight">About</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform">
                  Founder
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 sm:mb-6 text-base tracking-tight">Get Involved</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/get-involved" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform">
                  Student Sign-Up
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform">
                  School Workshops
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 dark:border-border/40 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs sm:text-sm text-muted-foreground">
          <p className="text-center sm:text-left">&copy; 2025 Young Leaders in Cybersecurity & AI. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
            <a 
              href="https://www.elevancesystems.com/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Elevance Systems
            </a>
            <span className="text-border/60 dark:text-border/40 hidden sm:inline">•</span>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

