import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RelatedArticles() {
  const blogPosts = [
    {
      id: 1,
      slug: "how-to-choose-perfect-venue",
      category: "Venue Planning",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "How to Choose the Perfect Venue",
      description: "Essential tips for selecting the right event venue for your needs.",
    },
    {
      id: 2,
      slug: "top-10-vendor-questions",
      category: "Vendor Management",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Top 10 Vendor Questions to Ask",
      description: "Questions you should ask vendors before booking their services.",
    },
    {
      id: 3,
      slug: "event-planning-checklist-guide",
      category: "Planning Guide",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Event Planning Checklist Guide",
      description: "Complete checklist to ensure your event runs smoothly.",
    },
  ]

  return (
    <section className="w-full py-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="md:text-5xl text-3xl font-[Euclid-Circular-B-Bold] text-center mb-12">Related Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer shadow-sm h-full flex flex-col relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#9CD7FF] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    width={400}
                    height={225}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>

                  <p className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="flex-1">{post.description}</span>
                    <ArrowRight size={26} className="flex-shrink-0 mt-0.5" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
