import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom'
import { X, Menu, BookOpen, Users, MessageSquare, Award, Zap, Globe, Target, Layers } from 'lucide-react'

export default function FeaturesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Engage with dynamic, multimedia-rich lessons that break down complex constitutional concepts into easily digestible modules.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Expert-Led Discussions",
      description: "Participate in live discussions and Q&A sessions with constitutional scholars and legal experts.",
      color: "bg-green-500"
    },
    {
      icon: MessageSquare,
      title: "Community Forums",
      description: "Connect with fellow learners, share insights, and engage in thoughtful debates on constitutional topics.",
      color: "bg-yellow-500"
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Earn certificates and badges as you progress through our comprehensive constitutional education curriculum.",
      color: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Personalized Learning Paths",
      description: "Tailored learning experiences based on your interests, knowledge level, and learning style.",
      color: "bg-pink-500"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Explore constitutional principles from various countries and legal systems around the world.",
      color: "bg-indigo-500"
    },
    {
      icon: Target,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed progress reports and performance analytics.",
      color: "bg-red-500"
    },
    {
      icon: Layers,
      title: "Multi-format Content",
      description: "Access diverse content types including video lectures, interactive quizzes, infographics, and more.",
      color: "bg-teal-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <a href="/" className="flex-shrink-0 flex items-center">
                <img src="/placeholder.svg" alt="Logo" className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  ConstitutionEdu
                </span>
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                About
              </a>
              <a
                href="/features"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="/contact"
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                Contact
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="outline" className="mr-2">
                <Link to="/login">
                Log in
                </Link>
              </Button>
              <Button>Sign up</Button>
            </div>
            <div className="flex items-center sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="/features"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <Button variant="outline" className="mr-2 w-full">
                <Link to="/login">
                Log in
                </Link>
                </Button>
                <Button className="w-full">Sign up</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Features Page Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-20">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Features</h1>
            <p className="text-xl">
              Discover the innovative features that make ConstitutionEdu the leading platform for constitutional education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className={`${feature.color} text-white`}>
                  <feature.icon className="h-8 w-8 mb-2" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-gray-100 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Ready to start your constitutional journey?</h2>
            <p className="text-xl text-gray-700 mb-6">Join thousands of learners and become a constitutional expert today.</p>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">Get Started Now</Button>
          </div>
        </div>
      </main>
    </div>
  )
}