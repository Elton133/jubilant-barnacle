export function FevAdvantage() {
  const advantages = [
    {
      id: 1,
      icon: '🔍',
      title: 'Wide Vendor Selection',
      description: 'Vetted and curated vendors'
    },
    {
      id: 2,
      icon: '⭐',
      title: 'Best Reviews',
      description: 'All vendor pricing is verified'
    },
    {
      id: 3,
      icon: '💬',
      title: 'Direct Communication',
      description: 'Chat directly with vendors'
    }
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">The FEV Advantage To You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="text-center p-6 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                  {advantage.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
