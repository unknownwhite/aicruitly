import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Shield, Gavel } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Aicruitly
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By using Aicruitly, you agree to these terms.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  By accessing and using Aicruitly ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of our website located at aicruitly.com and our AI-powered hiring assistant service 
                  operated by Aicruitly Inc. ("us", "we", or "our").
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">User Accounts and Responsibilities</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-medium text-gray-900">Account Creation</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must provide accurate and complete information when creating an account</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You must be at least 18 years old to use our services</li>
                  <li>One person or entity may not maintain more than one account</li>
                </ul>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6">Acceptable Use</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the service only for lawful purposes and in accordance with these Terms</li>
                  <li>Do not upload malicious code, viruses, or harmful content</li>
                  <li>Respect intellectual property rights of others</li>
                  <li>Do not attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Service Description</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Aicruitly provides AI-powered hiring assistance services including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Automated resume screening and analysis</li>
                  <li>Job description matching algorithms</li>
                  <li>Candidate ranking and shortlist generation</li>
                  <li>Skill-based filtering and assessment</li>
                  <li>Recruiter dashboard and analytics</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to modify, suspend, or discontinue any part of our service at any time with reasonable notice.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Prohibited Activities</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>You agree not to engage in any of the following prohibited activities:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Infringing on intellectual property rights</li>
                  <li>Transmitting harmful or malicious code</li>
                  <li>Attempting to reverse engineer our algorithms</li>
                  <li>Using the service for discriminatory hiring practices</li>
                  <li>Sharing account credentials with unauthorized users</li>
                  <li>Scraping or harvesting data from our platform</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  To the fullest extent permitted by applicable law, Aicruitly shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                </p>
                <p>
                  Our total liability to you for any damages arising from or related to this agreement shall not exceed 
                  the amount you have paid us in the twelve (12) months immediately preceding the event giving rise to the claim.
                </p>
                <p>
                  We provide our service "as is" without warranties of any kind, either express or implied.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Termination</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may terminate or suspend your account and access to the service immediately, without prior notice, 
                  for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
                <p>
                  You may terminate your account at any time by contacting us. Upon termination, your right to use 
                  the service will cease immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Governing Law</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms shall be interpreted and governed by the laws of the State of California, without regard 
                  to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these Terms will be resolved through binding arbitration in accordance with 
                  the rules of the American Arbitration Association.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@aicruitly.com</p>
                  <p><strong>Address:</strong> 123 Innovation Drive, Tech Valley, CA 94000</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
