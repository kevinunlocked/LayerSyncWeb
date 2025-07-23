"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Users, PenTool, MessageCircle, ArrowRight, TrendingUp, Clock, Target, Sparkles } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Database,
    headline: "Unlock Hidden Revenue in Your Existing Data",
    description:
      "Transform dormant customer databases into active revenue streams through AI-powered re-engagement campaigns and personalized outreach strategies.",
    details: [
      "AI-powered customer segmentation",
      "Automated re-engagement campaigns",
      "Personalized outreach sequences",
      "Revenue recovery optimization",
    ],
    color: "from-blue-500 to-cyan-500",
    delay: 0,
  },
  {
    id: 2,
    icon: Users,
    headline: "AI-Powered Lead Generation That Never Sleeps",
    description:
      "Intelligent lead identification, qualification, and nurturing across LinkedIn, email, and social platforms with 24/7 automated follow-up sequences.",
    details: [
      "Multi-platform lead identification",
      "Automated qualification scoring",
      "24/7 follow-up sequences",
      "Cross-channel nurturing",
    ],
    color: "from-purple-500 to-pink-500",
    delay: 200,
  },
  {
    id: 3,
    icon: PenTool,
    headline: "Scale Your Content Without Scaling Your Team",
    description:
      "AI-generated blogs, social media posts, email sequences, and marketing materials that maintain your brand voice while driving engagement.",
    details: [
      "Brand voice consistency",
      "Multi-format content creation",
      "SEO-optimized blog posts",
      "Social media automation",
    ],
    color: "from-emerald-500 to-green-500",
    delay: 400,
  },
  {
    id: 4,
    icon: MessageCircle,
    headline: "Never Miss Another Lead with AI Agents",
    description:
      "Intelligent AI agents handle customer inquiries, qualify leads, and schedule appointments across your website, social media, and WhatsApp.",
    details: [
      "24/7 customer support",
      "Intelligent lead qualification",
      "Automated appointment scheduling",
      "Multi-platform integration",
    ],
    color: "from-orange-500 to-red-500",
    delay: 600,
  },
]

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((service, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, service.id])
              }, service.delay)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Enhanced Background Pattern - Mobile optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-cyan-50/20 to-blue-50/20 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-200/50">
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Complete AI Automation Solutions
          </h2>
          <p className="text-responsive-sm sm:text-responsive-base text-slate-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed font-light">
            We're currently automating growth for a select group of businesses ready to scale with AI. You could be
            next.
          </p>

          {/* CRM Integration Message - Mobile responsive */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 shadow-lg">
                <Target className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent text-center sm:text-left">
                Unified CRM Integration
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed text-center">
              All services integrate seamlessly with our Client Management/CRM system for complete visibility and
              control
            </p>

            {/* Connection Lines Visual - Mobile responsive */}
            <div className="flex items-center justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3 overflow-x-auto">
              {services.map((service, index) => (
                <div key={index} className="flex items-center flex-shrink-0">
                  <div
                    className={`w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r ${service.color} rounded-full shadow-lg`}
                  ></div>
                  {index < services.length - 1 && (
                    <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 mx-1 sm:mx-2"></div>
                  )}
                </div>
              ))}
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 ml-2 sm:ml-4 flex-shrink-0" />
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center ml-1 sm:ml-2 shadow-lg flex-shrink-0">
                <Database className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid - Mobile responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            const isVisible = visibleCards.includes(service.id)
            const isHovered = hoveredCard === service.id

            return (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-700 hover:shadow-2xl bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl sm:rounded-3xl shadow-xl touch-manipulation ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${isHovered ? "sm:scale-105 sm:-translate-y-4" : ""}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6 pt-6 sm:pt-8">
                  <div
                    className={`w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl`}
                  >
                    <IconComponent className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 leading-tight mb-3 sm:mb-4">
                    {service.headline}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 px-4 sm:px-6 pb-6 sm:pb-8">
                  <CardDescription className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {service.description}
                  </CardDescription>

                  {/* Expandable Details - Mobile optimized */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isHovered ? "max-h-64 opacity-100 mb-4 sm:mb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-slate-200 pt-3 sm:pt-4">
                      <h4 className="font-bold text-slate-900 mb-3 sm:mb-4 flex items-center text-xs sm:text-sm">
                        <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-blue-600" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-center text-xs sm:text-sm text-slate-600">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className={`w-full bg-gradient-to-r ${service.color} hover:shadow-2xl transition-all duration-500 group-hover:scale-105 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 font-semibold text-white border-0 text-sm sm:text-base touch-manipulation`}
                  >
                    Learn More
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section - Mobile optimized */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 border border-white/20 shadow-lg">
                  <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-blue-300" />
                </div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-center sm:text-left">
                  Ready to Transform Your Business?
                </span>
              </div>
              <p className="text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                See how our AI automation solutions can increase your conversions by 300% and boost customer retention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 font-bold transition-all duration-300 hover:scale-105 rounded-xl sm:rounded-2xl shadow-2xl min-w-[250px] touch-manipulation"
                >
                  Schedule Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 font-bold transition-all duration-300 hover:scale-105 bg-transparent rounded-xl sm:rounded-2xl min-w-[200px] touch-manipulation"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
