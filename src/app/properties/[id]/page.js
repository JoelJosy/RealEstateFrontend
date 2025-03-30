import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, MapPin, Bed, Bath, Square, Calendar, CheckCircle2, Phone, Mail } from "lucide-react"
import { mockProperties } from "@/lib/mock-data"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function PropertyPage({ params }) {
  const property = mockProperties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title + Buttons */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{property.title}</h1>
          <div className="mt-1 flex items-center text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{property.location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Heart className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr]">
        {/* Left: Carousel */}
        <div>
          <Carousel className="w-full max-w-4xl">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-2">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${property.title} ${index + 1}`}
                          width={800}
                          height={500}
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Right: Two Cards stacked */}
        <div className="flex flex-col gap-6">
          {/* Property Info Card */}
          <div className="rounded-lg border h-full w-lg bg-card p-6 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge variant={property.type === "rent" ? "secondary" : "default"} className="mb-2">
                  {property.type === "rent" ? "For Rent" : "For Sale"}
                </Badge>
                <p className="text-3xl font-bold text-primary">
                  ${property.price.toLocaleString()}
                  {property.type === "rent" && <span className="text-lg text-muted-foreground">/month</span>}
                </p>
              </div>
              <div className="flex flex-wrap justify-between gap-7">
                <div className="flex items-center">
                  <Bed className="mr-2 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Beds</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="mr-2 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Baths</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Square className="mr-2 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.squareFeet}</p>
                    <p className="text-sm text-muted-foreground">Sq Ft</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.yearBuilt}</p>
                    <p className="text-sm text-muted-foreground">Year</p>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="prediction">Price Prediction</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <p>{property.description}</p>
              </TabsContent>
              <TabsContent value="features">
                <div className="grid gap-2 sm:grid-cols-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              {/* Optional: Reviews and Prediction content */}
            </Tabs>
          </div>

          {/* Agent Card */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-6 text-center">
              <Image
                src={property.agent.photo || "/images/placeholder.svg"}
                alt={property.agent.name}
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold">{property.agent.name}</h3>
              <p className="text-muted-foreground">Real Estate Agent</p>
            </div>
            <div className="mb-6 space-y-2">
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{property.agent.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{property.agent.email}</span>
              </div>
            </div>
            <div className="space-y-4">
              <Button className="w-full">Contact Agent</Button>
              <Button variant="outline" className="w-full">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}