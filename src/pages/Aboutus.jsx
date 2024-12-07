import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom'
import { X, Menu, Users, BookOpen, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const stats = [
    { icon: Users, title: "Active Users", value: "10,000+", color: "bg-blue-500" },
    { icon: BookOpen, title: "Lessons", value: "500+", color: "bg-green-500" },
    { icon: Award, title: "Certifications", value: "50+", color: "bg-yellow-500" },
    { icon: Globe, title: "Countries Reached", value: "30+", color: "bg-purple-500" },
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
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium"
              >
                About
              </a>
              <a
                href="/features"
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
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
                  Log in
                </Button>
                <Button className="w-full">Sign up</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* About Page Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-20">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-blue-600 text-white rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">About ConstitutionEdu</h1>
            <p className="text-xl">
              Empowering citizens through innovative constitutional education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-green-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  Our mission is to empower individuals with a deep understanding of constitutional principles, fostering informed citizenship and strengthening democratic participation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-purple-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700">
                  We envision a society where every citizen is well-versed in their constitutional rights and responsibilities, leading to a more engaged and effective democracy.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className={`${stat.color} text-white`}>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <stat.icon className="h-12 w-12 mb-4" />
                    <CardTitle className="text-2xl font-bold">{stat.value}</CardTitle>
                    <p className="text-sm mt-2">{stat.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {['Sai Keerthi', 'Teja Thota', 'Sharmi'].map((name, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>
                    <CardTitle className="text-xl font-medium text-gray-900">{name}</CardTitle>
                    <p className="text-gray-600 mt-2">Constitutional Expert</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}