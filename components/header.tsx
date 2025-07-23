"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
]

const MemoizedNavigation = React.memo(({ navigation, activeSection, scrollToSection }) => (
  <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
    {navigation.map((item) => (
      <button
        key={item.name}
        onClick={() => scrollToSection(item.href)}
        className={`relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group px-3 py-2 rounded-xl hover:bg-blue-50 ${
          activeSection === item.href.substring(1) ? "text-blue-600 bg-blue-50" : ""
        }`}
      >
        {item.name}
        <span
          className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full ${
            activeSection === item.href.substring(1) ? "w-full" : ""
          }`}
        />
      </button>
    ))}
  </nav>
))

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }

    const handleSectionChange = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navigation.map((item) => item.href.substring(1))
          const currentSection = sections.find((section) => {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              return rect.top <= 100 && rect.bottom >= 100
            }
            return false
          })
          if (currentSection) {
            setActiveSection(currentSection)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("scroll", handleSectionChange, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleSectionChange)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-top ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100/50"
      }`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo - Enhanced for mobile */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <span className="text-white font-bold text-sm sm:text-lg">LS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                LayerSync
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-600 leading-tight">AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <MemoizedNavigation navigation={navigation} activeSection={activeSection} scrollToSection={scrollToSection} />

          {/* Get Started Button - Enhanced for mobile */}
          <div className="hidden sm:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-0 text-sm sm:text-base"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button - Enhanced */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-xl hover:bg-blue-50 tap-highlight-transparent touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        <div
          className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-1 pt-4 border-t border-gray-100">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-left py-3 px-4 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 touch-manipulation ${
                  activeSection === item.href.substring(1) ? "text-blue-600 bg-blue-50" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 border-0 touch-manipulation"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
