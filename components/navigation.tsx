"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/blogs", label: "Blogs" },
    { href: "/impact", label: "Impact" },
    { href: "/get-involved", label: "Get Involved" },
  ]

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link 
      href={href} 
      onClick={onClick}
      className={`relative block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out ${
        isActive(href) 
          ? "text-primary bg-primary/10 dark:bg-primary/20" 
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50 dark:hover:bg-muted/30"
      }`}
    >
      {label}
      {isActive(href) && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></span>
      )}
    </Link>
  )

  return (
    <nav className="fixed top-0 w-full bg-background/95 dark:bg-background/95 backdrop-blur-xl border-b border-border/60 z-50 shadow-sm shadow-black/5 dark:shadow-black/20 transition-all duration-300 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative flex items-center justify-center group-hover:scale-105 transition-all duration-300 ease-out will-change-transform">
              <Image 
                src="/logo.png" 
                alt="Young Leaders in Cybersecurity & AI Logo" 
                width={96} 
                height={96} 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/get-involved">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full shadow-md shadow-primary/25 dark:shadow-primary/40 hover:shadow-lg hover:shadow-primary/40 dark:hover:shadow-primary/50 transition-all duration-300 ease-out hover:scale-105 will-change-transform text-sm px-5 py-2.5 font-semibold">
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-lg hover:bg-muted/50 transition-all duration-200"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border/50">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center">
                        <Image 
                          src="/logo.png" 
                          alt="Young Leaders in Cybersecurity & AI Logo" 
                          width={96} 
                          height={96} 
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">Empowering Teens to Secure the Digital World</p>
                  </div>
                  
                  <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navLinks.map((link) => (
                      <NavLink 
                        key={link.href} 
                        href={link.href} 
                        label={link.label}
                        onClick={() => setMobileMenuOpen(false)}
                      />
                    ))}
                  </nav>
                  
                  <div className="p-4 border-t border-border/50 space-y-3">
                    <Link href="/get-involved" onClick={() => setMobileMenuOpen(false)} className="block w-full">
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full shadow-md shadow-primary/20 transition-all duration-300 ease-out">
                        Join Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
