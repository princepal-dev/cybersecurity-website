"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🚀
            </div>
            <span className="text-xl font-bold text-foreground">CyberLeaders</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition">
              About
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground transition">
              Programs
            </Link>
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              Resources
            </a>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition">
              Contact
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full">
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  )
}
