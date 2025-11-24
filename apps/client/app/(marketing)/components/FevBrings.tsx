import { Scale } from "lucide-react"
import { SearchIcon } from "lucide-react"
import { MessageCircle } from "lucide-react"

export default function FevBrings() {
  const advantages = [
    {
      id: 1,
      icon: <SearchIcon className="w-10 h-10" color="#9CD7FF" />,
      title: 'Discover',
      description: 'All verified vendors in one searchable platform with detailed profiles'
    },
    {
      id: 2,
      icon: <Scale className="w-10 h-10" color="#9CD7FF"/>,
      title: 'Compare',
      description: 'View profiles side-by-side with real ratings and customer reviews'
    },
    {
      id: 3,
      icon: <MessageCircle className="w-10 h-10" color="#9CD7FF"/>,
      title: 'Connect',
      description: 'Message vendors directly with no middleman or hidden fees'
    }
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-2">FEV Brings Everything Together</h2>
        <p className="text-center mb-10">From discovery to booking, we make finding event vendors seamless</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="text-center px-6 py-10 rounded-lg hover:shadow-sm transition-shadow bg-[#050A30]">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12  flex items-center justify-center text-xl">
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
