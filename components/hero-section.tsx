"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Zap, TrendingUp, Bot, Sparkles, Play } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
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
      className="hero-section relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-20 safe-area-top"
    >
      {/* Enhanced Background Pattern with Animations */}
      <div className="absolute inset-0 top-20 sm:top-24 lg:top-20 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Animated Floating Icons - Desktop and Tablet */}
      <div className="absolute inset-0 top-20 sm:top-24 lg:top-20 pointer-events-none hidden sm:block">
        <div className="absolute top-1/4 left-1/6 animate-float">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Bot className="w-6 h-6 text-blue-300" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/6 animate-float-delayed">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Zap className="w-5 h-5 text-purple-300" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float">
          <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <TrendingUp className="w-4 h-4 text-cyan-300" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float-delayed">
          <div className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Sparkles className="w-3 h-3 text-pink-300" />
          </div>
        </div>
        {/* Additional floating elements for desktop */}
        <div className="absolute top-2/3 left-1/6 animate-float hidden lg:block">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/6 right-1/4 animate-float-delayed hidden lg:block">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50"></div>
        </div>
      </div>

      <div className="relative z-10 container-responsive text-center py-8 sm:py-12 lg:py-16">
        {/* Animated Badge */}
        <div
          className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6 sm:mb-8 transition-all duration-700 hover:bg-white/20 hover:scale-105 cursor-pointer ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Zap className="w-4 h-4 mr-2 text-blue-300 animate-pulse" />
          AI-Powered Business Automation
        </div>

        {/* Animated Main Headline */}
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight max-w-6xl mx-auto transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-gradient">
            Transform Your Business
          </span>{" "}
          with AI Automation That Actually Works
        </h1>

        {/* Animated Subheadline */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/90 mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            We help businesses increase conversions by{" "}
            <span className="text-green-300 font-semibold animate-pulse">300%</span> and boost customer retention
            through intelligent AI solutions that automate lead generation, content creation, and customer engagement
            across all platforms.
          </p>
        </div>

        {/* Animated Feature Cards */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { icon: Bot, title: "AI Chatbots", color: "from-blue-500 to-cyan-500" },
            { icon: TrendingUp, title: "Lead Generation", color: "from-purple-500 to-pink-500" },
            { icon: Zap, title: "Automation", color: "from-green-500 to-emerald-500" },
            { icon: Sparkles, title: "ROI Growth", color: "from-orange-500 to-red-500" },
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2 touch-manipulation group cursor-pointer ${
                isLoaded ? `animate-slide-up` : ""
              }`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div
                className={`w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 shadow-lg mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                <feature.icon className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base leading-tight text-center group-hover:text-blue-200 transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Animated CTA Buttons */}
        <div
          className={`flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl border-0 min-h-[56px] touch-manipulation animate-pulse-glow"
          >
            Get Your Free AI Strategy Session
            <Sparkles className="ml-2 w-5 h-5 animate-spin" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-110 hover:border-white/50 bg-transparent min-h-[56px] touch-manipulation group"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
            See How It Works
          </Button>
        </div>

        {/* Animated Trust Indicators */}
        <div
          className={`mt-12 sm:mt-16 transition-all duration-1000 delay-1200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-blue-200/80 max-w-3xl mx-auto">
            {[
              { text: "Industry AI Specialists", color: "bg-green-400" },
              { text: "300% Average ROI", color: "bg-blue-400" },
              { text: "24/7 AI Support", color: "bg-purple-400" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isLoaded ? "animate-scale-in" : ""
                }`}
                style={{ animationDelay: `${1400 + index * 200}ms` }}
              >
                <div className={`w-2 h-2 ${item.color} rounded-full animate-pulse`}></div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 group touch-manipulation animate-float"
        >
          <span className="text-sm mb-2 font-medium group-hover:text-blue-300 transition-colors duration-300">
            Discover Our Solutions
          </span>
          <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 animate-bounce">
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  )
}
