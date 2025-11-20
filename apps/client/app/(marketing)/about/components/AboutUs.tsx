import Image from 'next/image'

export function AboutUs() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
            <div className="space-y-3 text-foreground/80">
              <p>
                At FEV Professionals.com, we're redefining how event planners, coordinators, and hosts discover, vet, and connect with premium vendors. We believe that finding the right event vendor shouldn't be complicated or time-consuming—it should be intuitive and enjoyable.
              </p>
              <p>
                Whether you're organizing a wedding, conference, corporate event, or creating a brand experience—FEV Professionals is your trusted partner. We are committed to delivering an exceptional marketplace experience where event professionals discover and collaborate with premium vendors and strategic partners.
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="FEV team members"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
