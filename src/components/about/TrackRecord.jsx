const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '250+', label: 'Projects Completed' },
  { value: '50+', label: 'Team Members' },
  { value: '98%', label: 'Client Satisfaction' }
]

export default function TrackRecord() {
  return (
    <section className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Track Record</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">Numbers that speak to our experience, reliability, and commitment to excellence.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label} className="scroll-animate animate">
              <div className="text-5xl font-bold text-white mb-2">{s.value}</div>
              <div className="text-xl text-orange-100">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


