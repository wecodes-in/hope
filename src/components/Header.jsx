import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Hope Foundation</h1>
              <p className="text-xs text-gray-500">Empowering Communities</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              About Us
            </a>
            <a href="#programs" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              Our Work
            </a>
            <a href="#impact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              Impact
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              Stories
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="px-6 py-2 text-primary-600 border border-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors">
              Volunteer
            </button>
            <button className="px-6 py-2 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                About Us
              </a>
              <a href="#programs" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                Our Work
              </a>
              <a href="#impact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                Impact
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                Stories
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <button className="px-6 py-3 text-primary-600 border border-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors">
                  Volunteer
                </button>
                <button className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors">
                  Donate Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
