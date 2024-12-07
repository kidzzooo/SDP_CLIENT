import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom'
import { X, Menu, Mail, Phone, MapPin, Clock, Globe } from 'lucide-react'

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  const contactInfo = [
    { icon: Mail, title: "Email", content: "info@constitutionedu.com", color: "bg-blue-500" },
    { icon: Phone, title: "Phone", content: "+1 (555) 123-4567", color: "bg-green-500" },
    { icon: MapPin, title: "Address", content: "123 Constitution Ave, Washington, D.C. 20001", color: "bg-yellow-500" },
    { icon: Clock, title: "Office Hours", content: "Monday - Friday: 9AM - 5PM EST", color: "bg-purple-500" },
    { icon: Globe, title: "Website", content: "www.constitutionedu.com", color: "bg-pink-500" },
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
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="/contact"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium"
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

      {/* Contact Page Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-20">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              Have questions or feedback? We'd love to hear from you. Reach out to us using the form below or through our contact information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" name="name" type="text" required className="mt-1" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input id="email" name="email" type="email" required className="mt-1" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <Textarea id="message" name="message" rows={4} required className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center p-4">
                      <div className={`${item.color} p-3 rounded-full mr-4`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Card>
              <CardContent className="p-0">
                <iframe
                  title="ConstitutionEdu Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.664599550255!2d80.6203580249125!3d16.441851934292973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a073957d%3A0xe79d66babc83e470!2sK%20L%20UNIVERSITY%2C%20Vaddeswaram%2C%20Andhra%20Pradesh%20522303!5e0!3m2!1sen!2sin!4v1731699752880!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}