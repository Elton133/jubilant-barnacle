import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-4">
            <h2
              className="
                text-3xl md:text-4xl font-[Euclid-Circular-B-Bold]
                relative w-fit
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[3px] after:w-full
                after:bg-[linear-gradient(to_right,#600FD7,#9CD7FF)]
              "
            >
              About Us
            </h2>
            <div className="space-y-3 text-foreground/80">
              <p>
                At FEV (FindEventVendors.com), we’re redefining how people plan events. Our platform connects individuals, businesses, and event planners with verified vendors, making it easier than ever to find the right professionals for any occasion. <br /> <br />
                Whether you’re organizing a wedding, a conference, or a private celebration, FEV gives you access to a trusted community of decorators, caterers, photographers, DJs, and more, all in one place. <br /> <br />
                We believe that planning an event should be simple, efficient, and inspiring, not stressful. That’s why our platform combines innovation, usability, and reliability to ensure seamless vendor discovery and collaboration.
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="flex justify-center">
            <Image
              src="/team.png"
              alt="FEV team members"
              width={500}
              height={500}
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
