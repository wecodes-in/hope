import React from 'react'

const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Our Mission",
      description: "To bridge the education gap for underprivileged children across India through innovative teaching methods and sustainable community programs."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Our Vision",
      description: "A world where every child has access to quality education and the opportunity to reach their full potential, regardless of their background."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Our Values",
      description: "Transparency, empathy, innovation, and community-driven solutions guide our approach to creating sustainable educational impact."
    }
  ]

  const achievements = [
    { number: "250+", label: "Children Impacted" },
    { number: "150+", label: "Schools Partnered" },
    { number: "12+", label: "Years of Impact" },
    { number: "250+", label: "Volunteers" }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            About Hope Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
            Empowering Communities,
            <span className="block text-primary-600">Transforming Lives</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Since 2008, Hope Foundation has been at the forefront of social change in India,
            working tirelessly to bridge the gap between privilege and opportunity through
            sustainable community-driven programs.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Make A Difference started in 2008 when a group of young professionals in Mumbai
                decided to spend their weekends teaching underprivileged children. What began as
                a small initiative has now grown into India's largest youth volunteer movement.
              </p>
              <p>
                We believe that education is the most powerful tool to break the cycle of poverty.
                Through our innovative programs, we work directly with children in shelter homes,
                providing them with quality education, life skills, and the confidence to dream big.
              </p>
              <p>
                Our approach is simple yet effective: we train young volunteers to become mentors
                and teachers, creating a sustainable model that benefits both the children we serve
                and the volunteers who dedicate their time to this cause.
              </p>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors">
                Read Our Full Story
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Download Report
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Volunteers teaching children"
              className="rounded-2xl shadow-xl w-full h-96 lg:h-[500px] object-cover"
            />
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Children show improved learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((value, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {value.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-16 text-white overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6">Our Impact in Numbers</h3>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Every number represents a life touched, a community empowered, and a future transformed.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className="text-5xl lg:text-6xl font-bold mb-4 text-yellow-300">{achievement.number}</div>
                    <div className="text-white/90 font-semibold text-lg">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105">
                📊 View Detailed Impact Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
