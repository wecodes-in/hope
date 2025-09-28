
import React from 'react'

const Programs = () => {
  const programs = [
    {
      title: "Classroom Teaching",
      description: "Direct classroom intervention in shelter homes and government schools to improve learning outcomes for underprivileged children.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Children Reached", value: "250+" },
        { label: "Shelter Homes", value: "150+" },
        { label: "Volunteers", value: "250+" }
      ],
      features: [
        "Interactive teaching methods",
        "Personalized learning plans",
        "Regular assessments",
        "Life skills development"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Digital Learning",
      description: "Technology-enabled learning programs that make education accessible and engaging for children in remote areas.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Digital Centers", value: "75+" },
        { label: "Students Enrolled", value: "100+" },
        { label: "Learning Hours", value: "500+" }
      ],
      features: [
        "Computer literacy programs",
        "Online learning platforms",
        "Digital content creation",
        "Tech skill development"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Life Skills Training",
      description: "Comprehensive life skills and career guidance programs to prepare children for their future beyond education.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Youth Trained", value: "8,000+" },
        { label: "Career Sessions", value: "1,200+" },
        { label: "Job Placements", value: "500+" }
      ],
      features: [
        "Communication skills",
        "Career counseling",
        "Interview preparation",
        "Personality development"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Community Outreach",
      description: "Building sustainable communities through awareness programs, health initiatives, and environmental conservation.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Communities Reached", value: "200+" },
        { label: "Awareness Programs", value: "500+" },
        { label: "Health Camps", value: "150+" }
      ],
      features: [
        "Health awareness campaigns",
        "Environmental education",
        "Community mobilization",
        "Sustainable practices"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Our Programs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
            Comprehensive Solutions for
            <span className="block text-primary-600">Lasting Change</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We work across multiple interconnected programs to ensure holistic development of underprivileged
            communities, creating sustainable pathways to prosperity and empowerment.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <div key={index} className="group">
              {/* Program Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Icon overlay */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold">
                    Core Program
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">{program.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {program.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center bg-gray-50 rounded-2xl p-4 hover:bg-primary-50 transition-colors">
                        <div className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Explore Program →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-16 text-white text-center relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Join Our Mission
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 px-4">Ready to Make a Difference?</h3>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Join thousands of volunteers, donors, and partners who are creating lasting change in communities
              across India. Every contribution, big or small, helps us build a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Become a Volunteer
              </button>
              <button className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Support Our Cause
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs

