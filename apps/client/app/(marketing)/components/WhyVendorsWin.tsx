import { Users, MessageSquareText, Star, CircleUserIcon } from 'lucide-react'

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Customer Reviews',
    description: 'Gain trust with verified ratings that help you stand out..'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Reach More Clients',
    description: 'Get discovered by planners and event owners actively searching for your services.'
  },
  {
    icon: <CircleUserIcon className="w-8 h-8" />,
    title: 'Professional Profile',
    description: 'Build credibility with a detailed business profile, photos, and reviews.'
  },
  {
    icon: <MessageSquareText className="w-8 h-8" />,
    title: 'Direct Inquiries',
    description: 'Receive messages and manage requests from your dashboard.'
  }
]

export default function WhyVendorsWin() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-[Euclid-Circular-B-Bold] text-center mb-12">Why Vendors Win with FEV</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex gap-4 flex-col shadow-sm p-6 rounded-2xl transition-shadow bg-[#050A30] hover:shadow-lg">
              <div className="text-white flex-shrink-0 bg-[]">
                {value.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">{value.title}</h3>
                <p className="text-white">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-20">
          <button className="bg-[#600FD7] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow hover:bg-[#600FD7]/20 hover:border hover:text-black border-[#600FD7]">
            Get Started
          </button>
        </div>
    </section>
  )
}
