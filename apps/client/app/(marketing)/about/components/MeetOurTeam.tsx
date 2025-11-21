"use client"

import Image from "next/image"

interface TeamMember {
  name: string
  title: string
  image: string
  bgGradient: string
}

const team: TeamMember[] = [
  {
    name: "David Lawrence",
    title: "Founder & CEO",
    image: "/96 1.png",
    bgGradient: "from-purple-400 to-[#050A30]",
  },
  {
    name: "Velma Adade",
    title: "VP Operations",
    image: "/47 1.png",
    bgGradient: "from-purple-300 to-[#050A30]",
  },
  {
    name: "Robert Nkansah",
    title: "Marketing Director",
    image: "/63 2.png",
    bgGradient: "from-blue-600 to-[#050A30]",
  },
  {
    name: "Afia Koopman",
    title: "Creative Director",
    image: "/789 1.png",
    bgGradient: "from-purple-500 to-[#050A30]",
  },
  {
    name: "Emmanuel Ansah",
    title: "Product Manager",
    image: "/63 1.png",
    bgGradient: "from-purple-500 to-[#050A30]",
  },
]

export function MeetOurTeam() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Behind FEV is a passionate team of event enthusiasts committed to making vendor discovery smarter and
            simpler.
          </p>
        </div>

        {/* Team Grid - 2 on top, 3 on bottom */}
        <div className="flex flex-col items-center gap-12">
          {/* Top Row - 2 members */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center w-full">
            {team.slice(0, 2).map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className={`w-40 h-40 mb-6 rounded-full overflow-hidden bg-gradient-to-br ${member.bgGradient} p-1 flex items-center justify-center`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-black mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 members */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center w-full flex-wrap">
            {team.slice(2).map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className={`w-40 h-40 mb-6 rounded-full overflow-hidden bg-gradient-to-br ${member.bgGradient} p-1 flex items-center justify-center`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-black mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
