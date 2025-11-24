import { Zap, Users, Lightbulb, Gauge } from 'lucide-react'

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We continuously evolve the way people choose and network.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Professionalism',
    description: 'We lead with transparency and professionalism in every interaction.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Creativity',
    description: 'We celebrate the art and imagination of events and experiences.'
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: 'Efficiency',
    description: 'We simplify the event-process for everyone.'
  }
]

export default function OurValues() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex gap-4 shadow-sm p-6 rounded-lg hover:shadow-sm transition-shadow">
              <div className="text-purple-600 flex-shrink-0">
                {value.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
