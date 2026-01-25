"use client"

import dynamic from "next/dynamic"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export interface MapLocation {
  id: string
  name: string
  city?: string
  region: string
  country: "USA" | "India"
  lat: number
  lng: number
}

export const EVENT_LOCATIONS: MapLocation[] = [
  // USA - California
  { id: "sfhs", name: "Saint Francis High School", city: "Mountain View", region: "California", country: "USA", lat: 37.3861, lng: -122.0839 },
  { id: "cupertino", name: "Cupertino", region: "California", country: "USA", lat: 37.323, lng: -122.0322 },
  { id: "sunnyvale", name: "Sunnyvale", region: "California", country: "USA", lat: 37.3688, lng: -122.0363 },
  { id: "sanjose", name: "San Jose", region: "California", country: "USA", lat: 37.3382, lng: -121.8863 },
  { id: "lathrop", name: "Lathrop", region: "California", country: "USA", lat: 37.8227, lng: -121.2766 },
  { id: "bayarea", name: "Bay Area", region: "California", country: "USA", lat: 37.3861, lng: -122.0839 },
  // USA - New Jersey
  { id: "newjersey", name: "New Jersey", region: "New Jersey", country: "USA", lat: 40.0583, lng: -74.4057 },
  // India - Delhi / NCR
  { id: "tagore", name: "Tagore International School, Vasant Vihar", city: "Delhi", region: "Delhi", country: "India", lat: 28.5562, lng: 77.1582 },
  { id: "gdgoenka", name: "GD Goenka School", city: "Delhi", region: "Delhi", country: "India", lat: 28.5244, lng: 77.1855 },
  { id: "punjabibagh", name: "Government School Punjabi Bagh", city: "Delhi", region: "Delhi", country: "India", lat: 28.6692, lng: 77.1278 },
  { id: "sarvodaya", name: "Sarvodaya Bal Vidyalaya", city: "Delhi", region: "Delhi", country: "India", lat: 28.64, lng: 77.13 },
  { id: "dpsgurgaon", name: "DPS Gurgaon", city: "Gurgaon", region: "Haryana", country: "India", lat: 28.4595, lng: 77.0266 },
  { id: "kothari", name: "Kothari International School", city: "Noida", region: "Uttar Pradesh", country: "India", lat: 28.5355, lng: 77.391 },
  // India - North & West
  { id: "auckland", name: "Auckland House School for Boys", city: "Shimla", region: "Himachal Pradesh", country: "India", lat: 31.1048, lng: 77.1734 },
  { id: "dpskarnal", name: "DPS Karnal", city: "Karnal", region: "Haryana", country: "India", lat: 29.6857, lng: 76.9905 },
  { id: "sacredheart", name: "Sacred Heart School", city: "Ludhiana", region: "Punjab", country: "India", lat: 30.901, lng: 75.8573 },
  { id: "welham", name: "Welham Boys' School", city: "Dehradun", region: "Uttarakhand", country: "India", lat: 30.3165, lng: 78.0322 },
  { id: "jbcn", name: "JBCN International School", city: "Mumbai", region: "Maharashtra", country: "India", lat: 19.1334, lng: 72.9133 },
  { id: "sprs", name: "SPRS High School", city: "Kaithal", region: "Haryana", country: "India", lat: 29.8013, lng: 76.3998 },
  { id: "tennisambala", name: "Tennis Academy", city: "Ambala", region: "Haryana", country: "India", lat: 30.3782, lng: 76.7767 },
  { id: "shahabad", name: "Shahabad Markanda", region: "Haryana", country: "India", lat: 30.1696, lng: 76.8692 },
  { id: "bangalore", name: "Bangalore", region: "Karnataka", country: "India", lat: 12.9716, lng: 77.5946 },
]

const ImpactMapContent = dynamic(() => import("./impact-map-content").then((m) => m.ImpactMapContent), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px] min-h-[400px] bg-muted/30 rounded-xl">
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <MapPin className="w-12 h-12 animate-pulse" />
        <p className="text-sm font-medium">Loading map...</p>
      </div>
    </div>
  ),
})

export function ImpactMap() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <Badge variant="secondary" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
            WHERE WE&apos;VE BEEN
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight px-4">
            Event <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Locations</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Workshops and events across the USA and India.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border-2 border-border/50 dark:border-border/40 shadow-xl bg-card/50">
          <ImpactMapContent />
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">USA:</span> California (Bay Area, Cupertino, Mountain View, San Jose, Sunnyvale, Lathrop), New Jersey
          </div>
          <div>
            <span className="font-semibold text-foreground">India:</span> Delhi/NCR, Karnal, Ambala, Mumbai, Kaithal, Shahabad Markanda, Shimla, Ludhiana, Gurgaon, Dehradun, Bangalore, Noida
          </div>
        </div>
      </div>
    </section>
  )
}
