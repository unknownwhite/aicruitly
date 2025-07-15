import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Database, Users, Lock, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and email address when you join our waitlist</li>
                  <li>Company information and job title</li>
                  <li>Phone number (optional)</li>
                  <li>Professional background and hiring needs</li>
                </ul>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6">Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Website usage patterns and analytics</li>
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>To provide and improve our AI-powered hiring services</li>
                  <li>To communicate with you about product updates and features</li>
                  <li>To send you relevant content and marketing materials</li>
                  <li>To analyze usage patterns and optimize our platform</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To prevent fraud and ensure platform security</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure data storage with access controls</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>If you have questions about this Privacy Policy or want to exercise your rights, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@aicruitly.com</p>
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
