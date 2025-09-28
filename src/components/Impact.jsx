import React from 'react'

const Impact = () => {
  const impactStats = [
    {
      category: "Education",
      stats: [
        { label: "Children Educated", value: "250+", icon: "📚" },
        { label: "Schools Built/Renovated", value: "150+", icon: "🏫" },
        { label: "Digital Learning Centers", value: "75+", icon: "💻" },
        { label: "Scholarships Provided", value: "250+", icon: "🎓" }
      ]
    },
    {
      category: "Healthcare",
      stats: [
        { label: "Patients Treated", value: "75,000+", icon: "🏥" },
        { label: "Health Camps Organized", value: "500+", icon: "⛑️" },
        { label: "Vaccinations Given", value: "50,000+", icon: "💉" },
        { label: "Maternal Health Programs", value: "200+", icon: "👶" }
      ]
    },
    {
      category: "Women Empowerment",
      stats: [
        { label: "Women Trained", value: "5,000+", icon: "👩‍💼" },
        { label: "Self-Help Groups", value: "300+", icon: "🤝" },
        { label: "Micro-loans Disbursed", value: "₹2 Cr+", icon: "💰" },
        { label: "Women Entrepreneurs", value: "1,200+", icon: "🚀" }
      ]
    },
    {
      category: "Environment",
      stats: [
        { label: "Trees Planted", value: "100,000+", icon: "🌳" },
        { label: "Solar Panels Installed", value: "200+", icon: "☀️" },
        { label: "Water Conservation Projects", value: "50+", icon: "💧" },
        { label: "Organic Farmers Trained", value: "1,000+", icon: "🌱" }
      ]
    }
  ]

  const successStories = [
    {
      name: "Meera Devi",
      location: "Rajasthan",
      story: "From a housewife to a successful entrepreneur, Meera now runs a tailoring business employing 15 women in her village.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      impact: "Empowered 15+ women"
    },
    {
      name: "Ravi Kumar",
      location: "Bihar",
      story: "Once a school dropout, Ravi is now pursuing engineering after receiving our scholarship and mentorship support.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      impact: "First in family to attend college"
    },
    {
      name: "Sunita Sharma",
      location: "Madhya Pradesh",
      story: "As a community health worker, Sunita has helped reduce infant mortality in her village by 60% through our health programs.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      impact: "Saved 100+ lives"
    }
  ]

  return (
    <section id="impact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Our Impact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
            Transforming Lives,
            <span className="block text-primary-600">Measuring Success</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Every number tells a story of hope, transformation, and lasting change. Here's how we're
            making a difference across India, one community at a time.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {impactStats.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  {category.category === "Education" ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ) : category.category === "Healthcare" ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ) : category.category === "Women Empowerment" ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="space-y-6">
                {category.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors">
                    <span className="text-3xl">{stat.icon}</span>
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Stories of Transformation</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every statistic is a human story of courage, determination, and hope.
              Meet some of the incredible people whose lives have been transformed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {successStories.map((story, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2">
                <div className="relative mb-8">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-100 group-hover:border-primary-200 transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{story.name}</h4>
                  <p className="text-primary-600 font-semibold mb-6 text-lg">📍 {story.location}</p>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{story.story}</p>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6">
                    <span className="text-primary-700 font-bold text-lg">🎯 {story.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-16 text-white text-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Join Our Mission
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 px-4">Be Part of Our Impact Story</h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Every donation, every volunteer hour, every shared story creates ripples of change that transform
              entire communities. Join thousands of changemakers who are building a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Start Your Impact Today
              </button>
              <button className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                View Impact Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
