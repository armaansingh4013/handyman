const values = [
  {
    icon: 'ri-shield-check-line',
    title: 'Quality First',
    desc:
      'We never compromise on quality. Every project is built to exceed industry standards and client expectations.'
  },
  {
    icon: 'ri-time-line',
    title: 'On-Time Delivery',
    desc:
      'We respect your time and deadlines. Our projects are completed on schedule without compromising quality.'
  },
  {
    icon: 'ri-customer-service-line',
    title: 'Client Focused',
    desc:
      'Your satisfaction is our priority. We maintain open communication throughout every project phase.'
  },
  {
    icon: 'ri-leaf-line',
    title: 'Sustainable Building',
    desc:
      'We incorporate eco-friendly practices and materials to create sustainable, energy-efficient structures.'
  }
]

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate animate">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide every decision we make and every project we undertake.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(v => (
            <div key={v.title} className="scroll-animate card-3d animate">
              <div className="card-3d-inner bg-white p-8 rounded-xl shadow-3d hover-lift text-center h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                  <i className={`${v.icon} text-3xl text-orange-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


