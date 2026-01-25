"use client"

import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedNumber } from "@/components/animated-number"
import { Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const stats = [
  {
    value: 2500,
    suffix: "+",
    label: "Students Reached",
    gradient: "from-primary via-primary to-primary/80",
    cardVariant: "primary" as const,
  },
  {
    value: 25,
    suffix: "+",
    label: "Workshops Delivered",
    gradient: "from-secondary via-secondary to-secondary/80",
    cardVariant: "secondary" as const,
  },
  {
    value: 3,
    suffix: "",
    label: "Corporate Partnerships",
    gradient: "from-primary via-primary to-primary/80",
    cardVariant: "primary" as const,
  },
  {
    value: 50,
    suffix: "+",
    label: "Trained Ambassadors",
    gradient: "from-secondary via-secondary to-secondary/80",
    cardVariant: "secondary" as const,
  },
]

export function ImpactStats() {
  return (
    <section
      id="impact-stats-section"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
            OUR IMPACT
          </Badge>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-foreground tracking-tight px-4">
          Impact{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Snapshot
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <Card
              key={stat.label}
              className={`group relative overflow-hidden text-center border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-3 ${
                stat.cardVariant === "primary"
                  ? "hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:border-primary/60 dark:hover:border-primary/70"
                  : "hover:shadow-secondary/30 dark:hover:shadow-secondary/40 hover:border-secondary/60 dark:hover:border-secondary/70"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  stat.cardVariant === "primary"
                    ? "from-primary/8 via-transparent to-transparent"
                    : "from-secondary/8 via-transparent to-transparent"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />
              <div
                className={`absolute top-0 right-0 w-40 h-40 ${
                  stat.cardVariant === "primary"
                    ? "bg-primary/8"
                    : "bg-secondary/8"
                } rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                <div
                  className={`text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 ease-out tabular-nums min-h-[1.2em]`}
                >
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <CardDescription className="font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link href="/impact">
            <Button
              variant="outline"
              className="border-2 border-primary/50 dark:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold group"
            >
              View Full Impact Report
              <Award className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
