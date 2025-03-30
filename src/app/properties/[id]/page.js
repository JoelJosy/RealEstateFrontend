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

  const property = mockProperties.find((p) => p.id === Number(params.id));

  if (!property) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title + Buttons */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{property.Title}</h1>
          <div className="mt-1 flex items-center text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{property.County}</span>
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
            <CarouselItem key={0}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-2">
                        <Image
                          src={property.image1 || "/placeholder.svg"}
                          alt={`${property.Title} ${1}`}
                          width={800}
                          height={500}
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={1}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-2">
                        <Image
                          src={property.image2 || "/placeholder.svg"}
                          alt={`${property.Title} ${2}`}
                          width={800}
                          height={500}
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={2}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-2">
                        <Image
                          src={property.image3 || "/placeholder.svg"}
                          alt={`${property.Title} ${3}`}
                          width={800}
                          height={500}
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
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
                <Badge className="mb-2">
                  For Sale
                </Badge>
                <p className="text-3xl font-bold text-primary">
                  ${property.Price.toLocaleString()}
                </p>
              </div>
              <div className="flex flex-wrap justify-between gap-7">
                <div className="flex items-center">
                  <Bed className="mr-2 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.NoOfBedrooms}</p>
                    <p className="text-sm text-muted-foreground">Beds</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="mr-2 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.NoOfBathrooms}</p>
                    <p className="text-sm text-muted-foreground">Baths</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Square className="mr-2 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.FloorArea}</p>
                    <p className="text-sm text-muted-foreground">Sq M</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.DateOfConstruction}</p>
                    <p className="text-sm text-muted-foreground">Year</p>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="area">
              <TabsList className="mb-4">
                <TabsTrigger value="area">Area</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="prediction">Price Prediction</TabsTrigger>
              </TabsList>
              <TabsContent value="area">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Area</h3>
                  <h3 className="mb-3">{property.Area}</h3>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">County</h3>
                  <h3>{property.County}</h3>
                </div>
              </TabsContent>
              <TabsContent value="features">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Property Features</h3>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    {property.Features.split(",").map((feature, index) => (
                      <li key={index} className="pl-2">{feature.trim()}</li>
                    ))}
                  </ul>
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