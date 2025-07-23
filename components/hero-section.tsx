"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Zap, TrendingUp, Bot, Sparkles, Play } from "lucide-react"

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = "Transform Your Business with AI Automation"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden pt-16 sm:pt-20 safe-area-top"
    >
      {/* Enhanced Background Pattern - Optimized for mobile */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs - Reduced on mobile */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-r from-blue-400/15 to-purple-600/15 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-gradient-to-r from-purple-400/15 to-pink-600/15 rounded-full blur-2xl sm:blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-cyan-400/8 to-blue-600/8 rounded-full blur-xl sm:blur-2xl"></div>

        {/* Grid pattern - Responsive */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px] lg:bg-[size:100px_100px]"></div>
      </div>

      {/* Floating Icons - Mobile optimized */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-1/4 left-1/6 animate-float">
          <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
            <Bot className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-blue-300" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/6 animate-float-delayed">
          <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
            <Zap className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-purple-300" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float">
          <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
            <TrendingUp className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-cyan-300" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float-delayed">
          <div className="w-6 sm:w-8 lg:w-10 h-6 sm:w-8 lg:h-10 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
            <Sparkles className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-pink-300" />
          </div>
        </div>
      </div>

      <div className="relative z-10 container-responsive text-center">
        {/* Badge - Mobile optimized */}
        <div
          className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs sm:text-sm font-medium mb-6 sm:mb-8 transition-all duration-1000 ${
            isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Zap className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-blue-300" />
          AI-Powered Business Automation
        </div>

        {/* Main Headline - Responsive typography */}
        <h1 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
          {displayedText}
          <span className="animate-pulse text-blue-400">|</span>
        </h1>

        {/* Subheadline - Mobile optimized */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-responsive-sm sm:text-responsive-base text-blue-100/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 font-light">
            We help law firms, solar companies, and financial professionals automate operations, boost conversions by{" "}
            <span className="text-cyan-300 font-semibold">300%</span>, and scale efficiently with custom AI solutions.
          </p>
        </div>

        {/* Feature Cards - Mobile responsive grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 transition-all duration-1000 delay-700 ${
            isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { icon: Bot, title: "Custom AI Chatbots", color: "from-blue-500 to-cyan-500" },
            { icon: TrendingUp, title: "Lead Generation", color: "from-purple-500 to-pink-500" },
            { icon: Zap, title: "Process Automation", color: "from-green-500 to-emerald-500" },
            { icon: Sparkles, title: "ROI Optimization", color: "from-orange-500 to-red-500" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group touch-manipulation"
            >
              <div
                className={`w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}
              >
                <feature.icon className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Mobile optimized */}
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 delay-1000 ${
            isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group border-0 min-w-[280px] touch-manipulation"
          >
            Get Your Free AI Audit
            <Sparkles className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 group bg-transparent min-w-[280px] touch-manipulation"
          >
            <Play className="mr-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Watch Demo
          </Button>
        </div>

        {/* Trust Indicators - Mobile responsive */}
        <div
          className={`mt-12 sm:mt-16 transition-all duration-1000 delay-1500 ${
            isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-blue-200/80">
            <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">Industry AI Specialists</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">Average 300% ROI</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">24/7 AI Automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Mobile optimized */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2000 ${
          isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 group touch-manipulation"
        >
          <span className="text-xs sm:text-sm mb-2 font-medium">Discover Our Solutions</span>
          <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  )
}
