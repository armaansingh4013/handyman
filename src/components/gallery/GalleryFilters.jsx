function GalleryFilters({ activeFilter = 'Photos', onChange }) {
  const filters = ['Photos', 'Video']
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((label) => {
            const isActive = activeFilter === label
            const base = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap'
            const active = 'bg-orange-600 text-white shadow-lg'
            const inactive = 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            return (
              <button
                key={label}
                className={`${base} ${isActive ? active : inactive}`}
                onClick={() => onChange && onChange(label)}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GalleryFilters


