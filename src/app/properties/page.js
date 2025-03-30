"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { mockProperties } from "@/lib/mock-data"
import PropertyCard from "@/components/property-card"

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // In a real app, this would be replaced with API calls
  // For now, we'll just filter the mock data
  const filteredProperties = mockProperties.filter((property) => {
    if (!searchQuery) return true

    const query = searchQuery.toLowerCase()
    return (
      property.Title.toLowerCase().includes(query) ||
      property.County.toLowerCase().includes(query) ||
      property.Area.toLowerCase().includes(query)
    )
  })

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real app, this would trigger an API call
    console.log("Search query:", searchQuery)
  }

  return (
    <div className="container px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Properties For Sale</h1>

      {/* Simple Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by location, property name, or features"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit">Search</Button>
        </div>
      </form>

      {/* Property Listings */}
      {filteredProperties.length === 0 ? (
        <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
          <h3 className="mb-2 text-xl font-bold">No properties found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  )
}
