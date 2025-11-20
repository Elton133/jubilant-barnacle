export function MissionVision() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="max-w-6xl mx-auto">
        {/* Mission statement banner */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            FEV connects people and businesses with the right vendors to make every event a success.
          </h3>
        </div>

        {/* Mission and Vision boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-800 bg-opacity-50 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-white mb-4">Mission</h4>
            <p className="text-white/90">
              To ultimately connect vendors and their services to event professionals and consumers to make every experience a success.
            </p>
          </div>
          <div className="bg-purple-800 bg-opacity-50 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-white mb-4">Vision</h4>
            <p className="text-white/90">
              To become the industry leader and authority in the event vendor marketplace industry, the go-to platform for connecting events, vendor discovery, professionalism and collaboration to transform people's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
