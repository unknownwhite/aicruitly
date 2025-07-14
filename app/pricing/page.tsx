"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Brain,
  ArrowLeft,
  Check,
  Sparkles,
  Users,
  Target,
  Building,
  Crown,
  Shield,
  Zap,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      icon: Users,
      price: isAnnual ? 39 : 49,
      originalPrice: isAnnual ? 78 : 98,
      description: "Perfect for small teams getting started",
      features: [
        "Up to 100 resume scans/month",
        "Basic AI matching algorithm",
        "5 active job postings",
        "Email support",
        "Basic analytics dashboard",
        "Standard integrations",
        "Mobile app access",
      ],
      popular: false,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Professional",
      icon: Target,
      price: isAnnual ? 79 : 99,
      originalPrice: isAnnual ? 158 : 198,
      description: "Most popular for growing teams",
      features: [
        "Up to 500 resume scans/month",
        "Advanced AI matching + scoring",
        "Unlimited job postings",
        "Priority email & chat support",
        "Advanced analytics & insights",
        "Custom filtering options",
        "Team collaboration tools",
        "API access",
        "Custom branding",
      ],
      popular: true,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Enterprise",
      icon: Building,
      price: "Custom",
      originalPrice: null,
      description: "For large organizations with custom needs",
      features: [
        "Unlimited resume scans",
        "Custom AI model training",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations & API",
        "Advanced security & compliance",
        "SLA guarantee (99.9% uptime)",
        "On-premise deployment option",
        "Custom reporting & analytics",
      ],
      popular: false,
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-gray-100/50 backdrop-blur-sm bg-white/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Aicruitly
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200/50 rounded-full px-4 py-2"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Early Bird Special • 50% Off First 6 Months
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-light">
            Choose the perfect plan for your team. All plans include our core AI features and come with a 14-day free
            trial.
          </p>

          {/* Billing Toggle */}
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

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
              } bg-white/80 backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full">
                    <Crown className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-3xl flex items-center justify-center mx-auto mb-4`}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <p className="text-gray-600 font-light">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                {/* Pricing */}
                <div className="text-center mb-8">
                  {plan.price === "Custom" ? (
                    <div className="text-4xl font-bold text-gray-900">Custom</div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-500 ml-2">/{isAnnual ? "year" : "month"}</span>
                    </div>
                  )}

                  {plan.originalPrice && (
                    <div className="flex items-center justify-center mt-3">
                      <span className="text-lg text-gray-400 line-through">${plan.originalPrice}</span>
                      <Badge variant="secondary" className="ml-3 bg-green-100 text-green-700">
                        50% OFF
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/waitlist">
                  <Button
                    className={`w-full rounded-full text-lg py-3 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                    size="lg"
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </Link>

                <p className="text-center text-sm text-gray-500 mt-3">
                  {plan.price === "Custom" ? "Custom pricing available" : "14-day free trial • No credit card required"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Why Choose Aicruitly?</CardTitle>
            <p className="text-gray-600 font-light">All plans include these powerful features</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Process 100+ resumes in seconds",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "SOC 2 compliant with end-to-end encryption",
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description: "Deep insights into your hiring pipeline",
                },
                {
                  icon: HeadphonesIcon,
                  title: "Expert Support",
                  description: "Dedicated support from our hiring experts",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "Can I change plans anytime?",
                  answer:
                    "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at your next billing cycle.",
                },
                {
                  question: "What happens after the free trial?",
                  answer:
                    "After your 14-day free trial, you'll be automatically enrolled in your chosen plan. You can cancel anytime during the trial.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment in full.",
                },
                {
                  question: "Is my data secure?",
                  answer:
                    "Absolutely. We're SOC 2 compliant and use enterprise-grade encryption to protect all your data and candidate information.",
                },
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to transform your hiring process?</h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Join hundreds of companies already using Aicruitly to hire smarter and faster.
          </p>

          <div className="space-x-4">
            <Link href="/waitlist">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>

            <Button variant="outline" size="lg" className="rounded-full bg-white/50 px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
