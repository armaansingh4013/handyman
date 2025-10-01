function GalleryHero() {
  return (
    <section
      className="relative pt-24 pb-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://readdy.ai/api/search-image?query=Construction%20project%20gallery%20showcase%20with%20multiple%20completed%20buildings%2C%20professional%20construction%20company%20portfolio%20display%2C%20various%20construction%20projects%20including%20residential%20and%20commercial%20buildings%2C%20construction%20excellence%20and%20quality%20workmanship%20exhibition&width=1920&height=800&seq=gallery-hero&orientation=landscape")',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Photo Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Browse through our collection of completed construction projects and see the quality of our work.
          </p>
        </div>
      </div>
    </section>
  )
}

export default GalleryHero


