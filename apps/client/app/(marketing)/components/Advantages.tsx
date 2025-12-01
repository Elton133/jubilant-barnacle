import { Star, ShieldCheck, MessageSquareText } from "lucide-react"

export default function FevAdvantage() {
  const advantages = [
    {
      id: 1,
      icon: <ShieldCheck className="w-8 h-8" />,
      title: '1000+ Verified Vendors',
      description: 'Choose from over 1,000 verified vendors across various categories'
    },
    {
      id: 2,
      icon: <Star className="w-8 h-8" />,
      title: 'Real Reviews',
      description: 'Authentic feedback from verified customers who worked with vendors'
    },
    {
      id: 3,
      icon: <MessageSquareText className="w-8 h-8" />,
      title: 'Direct Communication',
      description: 'Message vendors instantly with no middleman or commission fees'
    }
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-[Euclid-Circular-B-Bold] text-center mb-12">The FEV Advantage To You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="text-center p-6 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                  {advantage.icon}
                </div>
              </div>
              <h3 className="text-lg font-[Euclid-Circular-B-Bold] mb-2">{advantage.title}</h3>
              <p className="text-black">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
