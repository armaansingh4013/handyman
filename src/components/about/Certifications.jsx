const items = [
  {
    icon: 'ri-award-fill',
    title: 'Licensed General Contractor',
    desc: 'Fully licensed and bonded in all states where we operate, ensuring compliance and protection.'
  },
  {
    icon: 'ri-shield-check-fill',
    title: 'OSHA Safety Certified',
    desc: 'Comprehensive safety training and certification ensuring the highest safety standards on all projects.'
  },
  {
    icon: 'ri-star-fill',
    title: 'Industry Excellence Awards',
    desc: 'Multiple awards for construction excellence, innovation, and outstanding customer service.'
  }
]

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate animate">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Certifications & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is recognized by industry organizations and regulatory bodies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(item => (
            <div key={item.title} className="scroll-animate card-3d animate">
              <div className="card-3d-inner bg-gray-50 p-8 rounded-xl shadow-3d hover-lift text-center h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                  <i className={`${item.icon} text-3xl text-orange-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


