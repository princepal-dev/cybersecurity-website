"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { EVENT_LOCATIONS } from "./impact-map"

export function ImpactMapContent() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    })
  }, [])

  // Center between USA and India for initial view
  const centerLat = 28
  const centerLng = 25
  const zoom = 2

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={zoom}
      className="h-[400px] w-full rounded-xl z-0"
      scrollWheelZoom
      style={{ minHeight: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {EVENT_LOCATIONS.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]}>
          <Popup>
            <div className="text-sm font-semibold text-foreground">{loc.name}</div>
            {(loc.city || loc.region) && (
              <div className="text-xs text-muted-foreground">
                {[loc.city, loc.region].filter(Boolean).join(", ")} · {loc.country}
              </div>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
