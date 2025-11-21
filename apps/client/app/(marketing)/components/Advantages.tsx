export function FevAdvantage() {
  const advantages = [
    {
      id: 1,
      icon: '🔍',
      title: '1000+ Verified Vendors',
      description: 'Choose from over 1,000 verified vendors across various categories'
    },
    {
      id: 2,
      icon: '⭐',
      title: 'Real Reviews',
      description: 'Authentic feedback from verified customers who worked with vendors'
    },
    {
      id: 3,
      icon: '💬',
      title: 'Direct Communication',
      description: 'Message vendors instantly with no middleman or commission fees'
    }
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The FEV Advantage To You</h2>
        
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
