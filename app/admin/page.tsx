import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getWaitlistStats, getRecentSignups } from "../actions/waitlist"
import { Brain, Users, Calendar, Building } from "lucide-react"

export default async function AdminPage() {
  const stats = await getWaitlistStats()
  const recentSignups = await getRecentSignups(20)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Aicruitly Admin</h1>
            <p className="text-gray-600">Waitlist Management Dashboard</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Signups</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.count}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Week</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {
                      recentSignups.filter((signup) => {
                        const signupDate = new Date(signup.created_at)
                        const weekAgo = new Date()
                        weekAgo.setDate(weekAgo.getDate() - 7)
                        return signupDate > weekAgo
                      }).length
                    }
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Companies</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {new Set(recentSignups.map((s) => s.company)).size}
                  </p>
                </div>
                <Building className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-3xl font-bold text-gray-900">12.5%</p>
                </div>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold">%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Signups */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Recent Signups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSignups.map((signup) => (
                <div key={signup.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {signup.first_name} {signup.last_name}
                        </h3>
                        <p className="text-sm text-gray-600">{signup.email}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        <Building className="w-4 h-4 inline mr-1" />
                        {signup.company}
                      </span>
                      {signup.job_title && <span className="text-sm text-gray-500">{signup.job_title}</span>}
                      {signup.team_size && (
                        <Badge variant="secondary" className="text-xs">
                          Team: {signup.team_size}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{new Date(signup.created_at).toLocaleDateString()}</p>
                    <p className="text-xs text-gray-400">{new Date(signup.created_at).toLocaleTimeString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
