import { Scale, Compass, Users } from "lucide-react";

export default function FevBrings() {
  const advantages = [
    {
      id: 1,
      icon: <Compass className="w-10 h-10" color="#9CD7FF" />,
      title: "Discover",
      description:
        "All verified vendors in one searchable platform with detailed profiles",
    },
    {
      id: 2,
      icon: <Scale className="w-10 h-10" color="#9CD7FF" />,
      title: "Compare",
      description:
        "View profiles side-by-side with real ratings and customer reviews",
    },
    {
      id: 3,
      icon: <Users className="w-10 h-10" color="#9CD7FF" />,
      title: "Connect",
      description:
        "Message vendors directly with no middleman or hidden fees",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="md:text-5xl text-3xl font-[Euclid-Circular-B-Bold] text-center mb-2">
          FEV Brings Everything Together
        </h2>
        <p className="text-center mb-10">
          From discovery to booking, we make finding event vendors seamless
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.id}
              className="
                bg-gradient-to-br from-[#600FD7] to-[#9CD7FF] 
                p-[2px] rounded-xl transition-all duration-300
                hover:shadow-lg
              "
            >
              {/* Actual card */}
              <div
                className="
                  bg-[#050A30] rounded-xl h-full
                  px-6 py-10 text-center transition-all duration-300
                  hover:bg-opacity-90
                "
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    {adv.icon}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-white">
                  {adv.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
