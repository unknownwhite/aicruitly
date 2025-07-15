import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Recruitment: Trends to Watch in 2025",
    summary:
      "Explore the latest AI trends transforming the recruitment industry and how they'll impact hiring practices in the coming year.",
    content: "Artificial Intelligence is revolutionizing recruitment...",
    author: "Sarah Johnson",
    date: "2025-01-10",
    readTime: "5 min read",
    category: "AI Trends",
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "How to Reduce Hiring Bias with AI-Powered Screening",
    summary:
      "Learn practical strategies to minimize unconscious bias in your hiring process using AI technology and data-driven approaches.",
    content: "Unconscious bias in hiring is a significant challenge...",
    author: "Michael Chen",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Best Practices",
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Building a Diverse Tech Team: A Recruiter's Guide",
    summary:
      "Discover effective strategies for building diverse and inclusive tech teams that drive innovation and business success.",
    content: "Diversity in tech teams is not just a moral imperative...",
    author: "Emily Rodriguez",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Diversity",
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Resume Screening Best Practices for 2025",
    summary:
      "Master the art of efficient resume screening with modern techniques and tools that save time while finding top talent.",
    content: "Resume screening is often the first step in the hiring process...",
    author: "David Kim",
    date: "2025-01-03",
    readTime: "4 min read",
    category: "Recruitment",
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "The ROI of AI in Recruitment: Measuring Success",
    summary:
      "Learn how to measure and demonstrate the return on investment of AI-powered recruitment tools in your organization.",
    content: "Implementing AI in recruitment requires investment...",
    author: "Lisa Thompson",
    date: "2025-01-01",
    readTime: "8 min read",
    category: "Analytics",
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Remote Hiring: Challenges and Solutions",
    summary:
      "Navigate the complexities of remote hiring with proven strategies and tools for building distributed teams effectively.",
    content: "Remote work has fundamentally changed how we hire...",
    author: "Alex Morgan",
    date: "2024-12-28",
    readTime: "5 min read",
    category: "Remote Work",
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
  },
]

const categories = ["All", "AI Trends", "Best Practices", "Diversity", "Recruitment", "Analytics", "Remote Work"]

export default function Blog() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aicruitly Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and trends in AI-powered recruitment and hiring best practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-blue-100 transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm mb-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Featured</Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit mb-3">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.summary}</p>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card
              key={post.id}
              className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <Badge variant="secondary" className="mb-3">
                  {post.category}
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 mt-16">
          <CardContent className="p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6 opacity-90">
              Get the latest insights on AI recruitment and hiring best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
