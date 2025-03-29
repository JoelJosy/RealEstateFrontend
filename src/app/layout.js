import React from "react"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })


export const metadata = {
  title: "RealEstate Market",
  description: "Find your dream property",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <div className="flex min-h-screen flex-col">
            {/* <Navbar /> */}
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
      </body>
    </html>
  );
}
