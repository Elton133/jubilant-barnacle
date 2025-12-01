export default function MissionVision() {
  return (
    <section className="w-full py-6 px-4 md:px-8 bg-gradient-to-r from-[#600FD7] to-[#050A30]">
      <div className="max-w-6xl mx-auto">

        {/* Mission and Vision boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur bg-opacity-50 p-8 rounded-lg">
            <h4 className="md:text-4xl text-3xl font-bold text-white mb-4">Mission</h4>
            <p className="text-white/90">
              To ultimately connect vendors and their services to event professionals and consumers to make every experience a success.
            </p>
          </div>
          <div className="backdrop-blur bg-opacity-50 p-8 rounded-lg">
            <h4 className="md:text-4xl text-3xl font-bold text-white mb-4">Vision</h4>
            <p className="text-white/90">
              To become the industry leader and authority in the event vendor marketplace industry, the go-to platform for connecting events, vendor discovery, professionalism and collaboration to transform people's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
