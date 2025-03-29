"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, Home, LogIn, Heart, Building, CircleHelp, HousePlus} from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  // Mock function to toggle login state (for demo purposes)
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn)

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="mr-2 h-4 w-4" /> },
    { name: "Buy", href: "/properties?type=buy", icon: <HousePlus className="mr-2 h-4 w-4" /> },
    { name: "Rent", href: "/properties?type=rent", icon: <Building className="mr-2 h-4 w-4" /> },
    { name: "About", href: "/about", icon: <CircleHelp className="mr-2 h-4 w-4"/> },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex gap-12 h-20 items-center px-4">
        <Link href="/" className="mr-6 flex items-center">
          <span className="text-2xl font-bold">RealEstate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-1">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex md:items-center md:gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/saved">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={toggleLogin}>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button>Sign Up</Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mx-4 mt-12">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="flex items-center py-2 text-lg font-medium">
                  {link.icon}
                  {link.name}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-2">
                {isLoggedIn ? (
                  <>
                    <Link href="/saved" className="flex items-center py-2 text-lg font-medium">
                      <Heart className="mr-2 h-4 w-4" />
                      Saved Properties
                    </Link>
                    <Link href="/profile" className="flex items-center py-2 text-lg font-medium">
                      <User className="mr-2 h-4 w-4" />
                      My Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <Button variant="outline" onClick={toggleLogin} className="w-full justify-start">
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                    <Button className="w-full justify-start">Sign Up</Button>
                  </>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

