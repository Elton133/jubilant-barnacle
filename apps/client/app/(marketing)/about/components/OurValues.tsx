import { Lightbulb,  Brain, BriefcaseBusiness, Timer } from 'lucide-react'

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We continuously evolve the way people choose and network.'
  },
  {
    icon: <BriefcaseBusiness className="w-8 h-8" />,
    title: 'Professionalism',
    description: 'We lead with transparency and professionalism in every interaction.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Creativity',
    description: 'We celebrate the art and imagination of events and experiences.'
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: 'Efficiency',
    description: 'We simplify the event-process for everyone.'
  }
]

export default function OurValues() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-[Euclid-Circular-B-Bold] text-center mb-12">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
          <div
  key={index}
  className="
    relative rounded-lg p-[2px] transition-all
    hover:bg-gradient-to-r hover:from-purple-500 hover:to-[#9CD7FF]
  "
>
  <div
    className="
      flex flex-col gap-4 shadow-sm p-6 rounded-lg bg-white
      transition-shadow hover:shadow-md
      h-40
    "
  >
    <div className="text-purple-600 flex-shrink-0">
      {value.icon}
    </div>

    <div>
      <h3 className="font-bold text-lg mb-2">{value.title}</h3>
      <p className="text-foreground/70">{value.description}</p>
    </div>
  </div>
</div>


          ))}
        </div>
      </div>
    </section>
  )
}
