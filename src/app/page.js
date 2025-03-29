import Image from "next/image";
import Link from "next/link"

import Search from "@/components/searchbar";
import Searchbar from "@/components/searchbar";
import FeaturedProperties from "@/components/featured-properties";
import HowItWorks from "@/components/how-it-works";


export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">Find Your Dream Home</h1>
          <p className="mb-8 max-w-2xl text-xl text-white">
            Discover thousands of properties for sale and rent across the country
          </p>

          <Searchbar />
        </div> 
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Properties</h2>
          <Link href="/properties" className="text-blue-600 hover:underline">
            View all properties
          </Link>
        </div>
        <FeaturedProperties />
      </section> 

      {/* How It Works */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
        <HowItWorks />
        </div>
      </section>
    </div>
  );
}
