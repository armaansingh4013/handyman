export default function ContactHero() {
  return (
    <section
      className="relative pt-24 pb-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20construction%20consultation%20meeting%2C%20construction%20manager%20discussing%20project%20plans%20with%20clients%2C%20construction%20office%20interior%20with%20blueprints%20and%20architectural%20drawings%2C%20professional%20business%20meeting%20in%20construction%20company%20office%2C%20client%20consultation%20session%20with%20construction%20experts&width=1920&height=800&seq=contact-hero&orientation=landscape')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Ready to start your construction project? Let's discuss your vision and provide you with a comprehensive consultation and quote.
          </p>
        </div>
      </div>
    </section>
  )
}


