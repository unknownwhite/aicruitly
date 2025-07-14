"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Brain,
  Target,
  Filter,
  ListChecks,
  BarChart3,
  Upload,
  Zap,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle,
  Check,
  Sparkles,
  Users,
  Building,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Sticky CTA Button */}
      <div
        className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <Link href="/waitlist">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Join Waitlist
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-100/50 backdrop-blur-sm bg-white/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Aicruitly
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-gray-200 hover:border-blue-300 bg-transparent"
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-full blur-3xl transform -translate-y-1/2 scale-150"></div>

        <div className="max-w-5xl mx-auto text-center relative">
          <Badge
            variant="secondary"
            className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50 rounded-full px-4 py-2 shadow-sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Early Access • Limited Beta Spots Available
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Smarter Hiring
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Starts with Aicruitly
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Transform your recruitment with AI-powered screening, intelligent matching, and automated shortlists.
            <span className="text-blue-600 font-medium"> Find perfect candidates 10x faster.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/waitlist">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Join Waitlist - Free Beta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-4 text-lg rounded-full border-gray-200 hover:border-blue-300 bg-white/50 backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Free during beta
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Setup in 2 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700 border-blue-200/50 rounded-full">
              Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Everything you need to hire smarter
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Powerful AI tools designed for modern recruitment teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Resume Screening",
                description:
                  "Automatically analyze and score resumes with 95% accuracy, saving hours of manual review.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Target,
                title: "Smart JD Matching",
                description: "Intelligent algorithm matches candidates to job requirements with precision scoring.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Filter,
                title: "Advanced Filtering",
                description: "Filter candidates by skills, experience, location, and custom criteria instantly.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: ListChecks,
                title: "Auto Shortlists",
                description: "Generate ranked candidate shortlists with detailed match scores and highlights.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "Track hiring metrics, candidate pipeline, and team performance in real-time.",
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm group hover:scale-105"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700 border-blue-200/50 rounded-full">
              How It Works
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Three steps to better hiring
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Upload,
                step: "1",
                title: "Upload Job Description",
                description:
                  "Simply paste your JD. Our AI understands requirements, skills, and qualifications instantly.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Zap,
                step: "2",
                title: "AI Analyzes Everything",
                description: "Advanced algorithms process resumes, extract key data, and match against your criteria.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Trophy,
                step: "3",
                title: "Get Ranked Results",
                description: "Receive scored shortlists with detailed insights and recommendations for each candidate.",
                color: "from-purple-500 to-purple-600",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-gray-100">
                  <span className="text-gray-700 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 bg-green-50 text-green-700 border-green-200/50 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Early Bird Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Simple, transparent pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light mb-8">
              Get 50% off for the first 6 months as an early adopter
            </p>

            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
              <span className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-500"}`}>
                Annual{" "}
                <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                  Save 20%
                </Badge>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                icon: Users,
                price: isAnnual ? 39 : 49,
                originalPrice: isAnnual ? 78 : 98,
                description: "Perfect for small teams",
                features: [
                  "Up to 100 resume scans/month",
                  "Basic AI matching",
                  "5 job postings",
                  "Email support",
                  "Basic analytics",
                ],
                popular: false,
              },
              {
                name: "Professional",
                icon: Target,
                price: isAnnual ? 79 : 99,
                originalPrice: isAnnual ? 158 : 198,
                description: "Most popular for growing teams",
                features: [
                  "Up to 500 resume scans/month",
                  "Advanced AI matching",
                  "Unlimited job postings",
                  "Priority support",
                  "Advanced analytics",
                  "Custom filters",
                  "Team collaboration",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                icon: Building,
                price: "Custom",
                originalPrice: null,
                description: "For large organizations",
                features: [
                  "Unlimited resume scans",
                  "Custom AI training",
                  "White-label solution",
                  "Dedicated support",
                  "Custom integrations",
                  "Advanced security",
                  "SLA guarantee",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                } bg-white/80 backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${
                      plan.name === "Starter"
                        ? "from-green-500 to-green-600"
                        : plan.name === "Professional"
                          ? "from-blue-500 to-blue-600"
                          : "from-purple-500 to-purple-600"
                    } rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 font-light">{plan.description}</p>

                  <div className="mb-6">
                    {plan.price === "Custom" ? (
                      <div className="text-3xl font-bold text-gray-900">Custom</div>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-500 ml-2">/{isAnnual ? "year" : "month"}</span>
                      </div>
                    )}
                    {plan.originalPrice && (
                      <div className="flex items-center mt-2">
                        <span className="text-lg text-gray-400 line-through">${plan.originalPrice}</span>
                        <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                          50% OFF
                        </Badge>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/pricing">
                    <Button
                      className={`w-full rounded-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                      size="lg"
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8 bg-blue-50 text-blue-700 border-blue-200/50 rounded-full">
            Testimonials
          </Badge>
          <h2 className="text-4xl font-bold mb-16">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Loved by forward-thinking recruiters
            </span>
          </h2>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 italic mb-8 font-light leading-relaxed">
                "Aicruitly transformed our hiring process completely. We're finding better candidates 10x faster, and
                our time-to-hire dropped from weeks to days. It's like having a super-powered recruiting assistant."
              </blockquote>
              <div className="text-gray-900 font-semibold text-lg">Sarah Johnson</div>
              <div className="text-blue-600 font-medium">Head of Talent • TechCorp</div>
              <Badge variant="secondary" className="mt-3 bg-green-100 text-green-700">
                Beta User
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to revolutionize your hiring?</h2>
          <p className="text-xl text-blue-100 mb-12 font-light max-w-2xl mx-auto">
            Join 500+ recruiters already on our waitlist. Be among the first to experience AI-powered hiring.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                className="bg-white/90 backdrop-blur-sm border-0 text-gray-900 placeholder-gray-500 rounded-full"
              />
              <Link href="/waitlist">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap rounded-full px-8 font-semibold">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 text-blue-100 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Free during beta
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              50% early bird discount
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Aicruitly</span>
            </div>

            <div className="flex space-x-8 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Aicruitly. All rights reserved. | aicruitly.com</p>
            <p className="mt-2">Made with ❤️ for modern recruiters</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
