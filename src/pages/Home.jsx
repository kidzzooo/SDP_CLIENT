import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, MessageCircle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
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
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium"
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-green-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Learn Your Rights and Duties
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Promoting awareness about the Indian Constitution through
              interactive content, discussions, and events.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <a href="/explore">Explore Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/signup">Sign Up</a>
              </Button>
            </div>
          </div>
          <div className="md:w-[300px] flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/85/Constitution_of_India_%28calligraphic%29_Cover.png"
              alt="Indian Constitution"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <BookOpen className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Content</h3>
                <p className="text-center text-gray-600">
                  Explore detailed articles, videos, and quizzes about the
                  Constitution.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Calendar className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Events</h3>
                <p className="text-center text-gray-600">
                  Join webinars and workshops conducted by educators.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <MessageCircle className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Discussions</h3>
                <p className="text-center text-gray-600">
                  Engage in discussions and share your insights with the
                  community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Empower yourself with knowledge. Be an informed citizen.
          </h2>
          <p className="text-xl mb-8">
            Join our community and start learning about the Indian Constitution
            today.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="/signup">Sign Up Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">ConstitutionEdu</h3>
              <p className="text-sm">
                Empowering citizens through constitutional knowledge.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="/about" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/features" className="hover:text-gray-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} ConstitutionEdu. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
