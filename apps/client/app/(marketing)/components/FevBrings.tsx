export function FevBrings() {
  const advantages = [
    {
      id: 1,
      icon: '🔍',
      title: 'Discover',
      description: 'Vetted and curated vendors'
    },
    {
      id: 2,
      icon: '⭐',
      title: 'Compare',
      description: 'All vendor pricing is verified'
    },
    {
      id: 3,
      icon: '💬',
      title: 'Connect',
      description: 'Chat directly with vendors'
    }
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">FEV Brings Everything Together</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="text-center px-6 py-10 rounded-lg hover:shadow-sm transition-shadow bg-[#050A30]">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                  {advantage.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{advantage.title}</h3>
              <p className="text-gray-100">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
