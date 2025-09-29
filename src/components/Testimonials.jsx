import React, { useState } from 'react'

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Dr. Anjali Verma",
      role: "Medical Officer, AIIMS Delhi",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "Empower Seva Foundation's healthcare initiatives have been instrumental in reaching the most vulnerable populations. Their mobile health units have saved countless lives in remote areas where medical care was previously inaccessible.",
      rating: 5
    },
    {
      name: "Rajesh Gupta",
      role: "Village Sarpanch, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "The digital learning center established by Empower Seva Foundation has transformed education in our village. Children who never had access to computers are now learning coding and digital skills. It's truly remarkable.",
      rating: 5
    },
    {
      name: "P. Patel",
      role: "Women's Self-Help Group Leader",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "Through Empower Seva Foundation's microfinance program, I was able to start my own business. Today, I employ 20 women from my community. They didn't just give us money; they gave us hope and dignity.",
      rating: 5
    },
    {
      name: "Prof. Suresh Kumar",
      role: "Education Researcher, JNU",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "Empower Seva Foundation's approach to education is holistic and sustainable. They don't just build schools; they create learning ecosystems that involve the entire community. Their impact is measurable and lasting.",
      rating: 5
    },
    {
      name: "Kavita Singh",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "Volunteering with Empower Seva Foundation has been life-changing. The organization's transparency, dedication, and genuine care for communities is evident in every project. I'm proud to be part of this mission.",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
            Stories from Our
            <span className="block text-primary-600">Community</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Hear from the communities we serve, partners we work with, and volunteers who make our mission possible.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-xl border border-gray-100">
            <div className="mb-8">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 inline-block mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-10 font-serif italic px-4">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <img
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-primary-100"
              />
              <div className="text-center sm:text-left">
                <div className="font-bold text-gray-900 text-xl sm:text-2xl mb-1">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-primary-600 text-base sm:text-lg font-medium">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.quote.substring(0, 120)}..."
              </p>
              <div className="mt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted By</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-lg font-semibold">Ministry of Rural Development</div>
              <div className="text-sm text-gray-600">Government Partner</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">UNICEF India</div>
              <div className="text-sm text-gray-600">International Partner</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">Tata Trusts</div>
              <div className="text-sm text-gray-600">Funding Partner</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">GuideStar India</div>
              <div className="text-sm text-gray-600">Transparency Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
