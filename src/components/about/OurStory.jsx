export default function OurStory () {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="text-justify">
                Founded by three passionate professionals with years of experience working in the construction industry, GG Brothers was born from a shared vision: to create a company where quality, innovation, and client satisfaction come first. After years of honing our skills under established firms, we decided to bring our expertise together and build something of our own.
              </p>
              <p className="text-justify">
                In a short span, we’ve successfully completed 10 diverse projects — each one a reflection of our dedication, attention to detail, and commitment to exceeding client expectations. From residential builds to customized renovations, our work speaks for itself and continues to earn us the trust of homeowners and businesses alike.
              </p>
              <p className="text-justify">
                As a growing company, our goal is simple: deliver modern, reliable, and high-quality construction services that stand the test of time. With a fresh approach, strong values, and a hands-on team, GG Brothers is ready to take on your next project and turn your vision into reality.
              </p>
            </div>
          </div>
          <div className="scroll-animate animate">
            <div className="card-3d">
              <div className="card-3d-inner relative">
                <img
                  alt="BuildCraft Pro Team"
                  className="w-full h-96 object-cover object-top rounded-xl shadow-3d"
                  src="https://readdy.ai/api/search-image?query=Construction%20company%20founder%20and%20team%20members%20in%20professional%20attire%20at%20construction%20site%2C%20diverse%20group%20of%20construction%20professionals%2C%20construction%20team%20leadership%20portrait%2C%20professional%20construction%20company%20team%20photo%20with%20hard%20hats%20and%20safety%20gear%2C%20construction%20industry%20professionals%20standing%20together&width=600&height=500&seq=company-story&orientation=portrait"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
