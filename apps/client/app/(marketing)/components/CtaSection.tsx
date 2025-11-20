

export function CtaSection() {
  return (
    <section className="w-full py-16 bg-[#F0F7FF]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Find the Perfect Event Vendor?
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get connected with vetted and trusted event vendors for your next special occasion.
        </p>
        
        <button 
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
        >
          Start Browsing Vendors
        </button>
      </div>
    </section>
  )
}
