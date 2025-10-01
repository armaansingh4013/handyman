export default function AboutHero() {
  return (
    <section
      className="relative pt-24 pb-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://readdy.ai/api/search-image?query=Professional%20construction%20company%20office%20interior%20with%20modern%20design%2C%20construction%20team%20meeting%20in%20conference%20room%2C%20architectural%20plans%20and%20blueprints%20on%20table%2C%20professional%20construction%20management%20setting%2C%20modern%20office%20environment%20with%20construction%20industry%20elements%2C%20team%20collaboration%20and%20planning%20session&width=1920&height=800&seq=about-hero&orientation=landscape)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About GG Brothers
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Building excellence since 2008. We are a team of dedicated professionals committed to delivering exceptional construction services with integrity, quality, and innovation.
          </p>
        </div>
      </div>
    </section>
  )
}


