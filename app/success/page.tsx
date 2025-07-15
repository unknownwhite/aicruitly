import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, CheckCircle, Mail, Calendar, Gift, ArrowRight, Twitter, Linkedin, Share2 } from "lucide-react"
import { getWaitlistStats } from "../actions/waitlist"

export default async function SuccessPage() {
  const stats = await getWaitlistStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-gray-100/50 backdrop-blur-sm bg-white/80">
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
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Welcome to the
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aicruitly Family!
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4 font-light">
            🎉 You're officially on our waitlist! Check your email for a confirmation and exclusive updates.
          </p>

          <p className="text-lg text-gray-500 mb-12">
            You're #{stats.count} on our waitlist - join {stats.count > 1 ? `${stats.count - 1} other` : "the"}{" "}
            professionals already waiting!
          </p>

          {/* What's Next Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-sm bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
                <p className="text-gray-600 text-sm font-light">
                  We've sent you a welcome email with all the details about your early access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">50% Early Bird Discount</h3>
                <p className="text-gray-600 text-sm font-light">
                  You've secured exclusive pricing for the first 6 months when we launch.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expected Launch</h3>
                <p className="text-gray-600 text-sm font-light">
                  We're targeting Q2 2024 for beta access. You'll be among the first to know!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">What Happens Next?</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Welcome Email (Now)</h3>
                    <p className="text-gray-600 text-sm">
                      Check your inbox for your welcome email with exclusive content and next steps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Product Updates (Monthly)</h3>
                    <p className="text-gray-600 text-sm">
                      Get behind-the-scenes updates, hiring tips, and exclusive previews from our team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Beta Access (Q2 2024)</h3>
                    <p className="text-gray-600 text-sm">
                      Be the first to try Aicruitly with your exclusive early access and special pricing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Share Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Help us spread the word!</h2>
            <p className="text-gray-600 mb-6">
              Know other recruiters who could benefit from AI-powered hiring? Share Aicruitly with them!
            </p>

            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="rounded-full border-blue-200 hover:border-blue-300 bg-white/50">
                <Twitter className="w-4 h-4 mr-2" />
                Share on Twitter
              </Button>
              <Button variant="outline" className="rounded-full border-blue-200 hover:border-blue-300 bg-white/50">
                <Linkedin className="w-4 h-4 mr-2" />
                Share on LinkedIn
              </Button>
              <Button variant="outline" className="rounded-full border-blue-200 hover:border-blue-300 bg-white/50">
                <Share2 className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Pricing Plans
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <div>
              <Link href="/">
                <Button variant="outline" className="rounded-full bg-white/50">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
