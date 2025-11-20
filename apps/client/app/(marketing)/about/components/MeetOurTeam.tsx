import Image from 'next/image'

interface TeamMember {
  name: string
  title: string
  image: string
}

const team: TeamMember[] = [
  {
    name: 'David Lawrence',
    title: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Velma Adade',
    title: 'VP Operations',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Robert Nkansah',
    title: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Afia Koopman',
    title: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Emmanuel Ansah',
    title: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export function MeetOurTeam() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Behind FEV is a passionate team of event enthusiasts committed to making vendor discovery smarter and simpler.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-4 border-purple-600">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-sm md:text-base">{member.name}</h3>
              <p className="text-xs md:text-sm text-foreground/60">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
