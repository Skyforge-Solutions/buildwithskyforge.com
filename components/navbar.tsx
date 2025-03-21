"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-22">
          <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
             <img src="/logo.png" alt="SkyForge Logo" className="h-13 w-30" />
          </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button asChild size="sm">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <NavLinks mobile onClick={toggleMenu} />
              <Button asChild size="sm" className="w-full">
                <Link href="#contact" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLinks({ mobile = false, onClick = () => {} }: { mobile?: boolean; onClick?: () => void }) {
  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#products", label: "Products" },
    { href: "/#mvp", label: "MVP Development" },
    { href: "/ai", label: "SkyForge AI" },
    { href: "/language-services", label: "Language Services" },
  ]

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${mobile ? "block py-2" : ""} text-gray-700 hover:text-blue-600 transition-colors`}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

