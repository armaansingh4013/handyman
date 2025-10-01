const leaders = [
  {
    initials: 'JM',
    name: 'John Mitchell',
    role: 'Founder & CEO',
    facts: ['20+ Years', 'Project Management & Business Development', 'Licensed General Contractor, MBA']
  },
  {
    initials: 'ST',
    name: 'Sarah Thompson',
    role: 'Head of Operations',
    facts: ['15+ Years', 'Construction Operations & Quality Control', 'Construction Management Degree, OSHA Certified']
  },
  {
    initials: 'MR',
    name: 'Michael Rodriguez',
    role: 'Chief Engineer',
    facts: ['18+ Years', 'Structural Engineering & Design', 'PE License, MS in Civil Engineering']
  },
  {
    initials: 'EC',
    name: 'Emily Chen',
    role: 'Project Manager',
    facts: ['12+ Years', 'Residential & Commercial Projects', 'PMP Certified, Construction Management']
  }
]

export default function LeadershipTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate animate">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team brings decades of combined expertise in construction, engineering, and project management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map(l => (
            <div key={l.name} className="scroll-animate card-3d animate">
              <div className="card-3d-inner bg-gray-50 p-8 rounded-xl shadow-3d hover-lift">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{l.initials}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{l.name}</h3>
                    <div className="text-orange-600 font-medium mb-3">{l.role}</div>
                    <div className="space-y-2 text-gray-600">
                      {l.facts.map(f => (
                        <div key={f} className="flex items-start space-x-2">
                          <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                            <i className="ri-check-line text-orange-600"></i>
                          </div>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


