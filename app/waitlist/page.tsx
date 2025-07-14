"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Brain, ArrowLeft, Sparkles, CheckCircle, Shield, Star } from "lucide-react"
import { joinWaitlist } from "../actions/waitlist"

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await joinWaitlist(formData)
    } catch (error) {
      setErrors({ general: error instanceof Error ? error.message : "Something went wrong" })
      setIsSubmitting(false)
    }
  }

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50 rounded-full px-4 py-2"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Limited Beta Access • 500+ Already Joined
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Join the Aicruitly
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Waitlist</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Be among the first to experience AI-powered hiring. Get exclusive early access and 50% off for 6 months.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Star,
              title: "Early Access",
              description: "Be first to use Aicruitly when we launch",
            },
            {
              icon: CheckCircle,
              title: "50% Discount",
              description: "Exclusive pricing for early adopters",
            },
            {
              icon: Shield,
              title: "Priority Support",
              description: "Direct line to our founding team",
            },
          ].map((benefit, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm font-light">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Form */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900">Tell us about yourself</CardTitle>
            <p className="text-gray-600 font-light">Help us tailor Aicruitly to your needs</p>
          </CardHeader>
          <CardContent className="p-8">
            <form action={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="rounded-lg border-gray-200 focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="rounded-lg border-gray-200 focus:border-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-lg border-gray-200 focus:border-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Company Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      className="rounded-lg border-gray-200 focus:border-blue-500"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      className="rounded-lg border-gray-200 focus:border-blue-500"
                      placeholder="HR Manager"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Team Size</Label>
                  <RadioGroup name="teamSize" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["1-10", "11-50", "51-200", "200+"].map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <RadioGroupItem value={size} id={size} />
                        <Label htmlFor={size} className="font-normal">
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Current Setup */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Current Hiring Process
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="currentTool">What tools do you currently use for hiring?</Label>
                  <Input
                    id="currentTool"
                    name="currentTool"
                    className="rounded-lg border-gray-200 focus:border-blue-500"
                    placeholder="e.g., LinkedIn Recruiter, Indeed, Manual process"
                  />
                </div>

                <div className="space-y-3">
                  <Label>What are your biggest hiring challenges? (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Too many resumes to review",
                      "Finding qualified candidates",
                      "Time-consuming screening process",
                      "Inconsistent evaluation criteria",
                      "Poor candidate matching",
                      "Lack of hiring analytics",
                    ].map((challenge) => (
                      <div key={challenge} className="flex items-center space-x-2">
                        <Checkbox id={challenge} name="painPoints" value={challenge} />
                        <Label htmlFor={challenge} className="font-normal text-sm">
                          {challenge}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  What interests you most about Aicruitly?
                </h3>

                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "AI-powered resume screening",
                    "Automated candidate matching",
                    "Time-saving features",
                    "Better candidate quality",
                    "Hiring analytics and insights",
                    "Integration capabilities",
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox id={interest} name="interests" value={interest} />
                      <Label htmlFor={interest} className="font-normal text-sm">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Error Display */}
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Joining Waitlist...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Join Waitlist - Get Early Access
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  By joining, you agree to our{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join 500+ professionals already on the waitlist</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-medium">TechCorp</div>
            <div className="text-sm font-medium">StartupXYZ</div>
            <div className="text-sm font-medium">InnovateCo</div>
            <div className="text-sm font-medium">GrowthLabs</div>
          </div>
        </div>
      </div>
    </div>
  )
}
