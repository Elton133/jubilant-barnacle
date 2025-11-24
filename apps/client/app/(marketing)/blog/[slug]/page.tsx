"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"

import { ChevronLeft, Calendar, Clock } from "lucide-react"
import RelatedArticles from "../../components/RelatedArticles"

import NewsletterSignup from "../../components/Newsletter"

// Sample blog data - replace with your actual data/CMS
const blogPostsData = {
  "meeting-vendors-from-across-the-country": {
    title: "Meeting Vendors From Across The Country",
    date: "November 1, 2025",
    readTime: "5 min read",
    category: "Trends",
    image: "/vendors-meeting-discussion.jpg",
    content: `
      <p>The event industry is constantly evolving, and 2025 is shaping up to be a year of exciting innovations and transformative trends. As event planners and vendors, staying ahead of these trends is crucial for delivering exceptional experiences that resonate with modern audiences.</p>
      
      <h2>Sustainable and Eco-Friendly Events</h2>
      <p>Sustainability is no longer just a buzzword—it's a necessity. Event planners are increasingly prioritizing eco-friendly practices, from zero-waste catering to digital invitations and sustainable décor. Guests are more conscious than ever about environmental impact, and events that demonstrate a commitment to sustainability stand out.</p>
      
      <p>Consider partnering with vendors who share your sustainability values. Look for caterers who source locally, decorators who use reusable materials, and venues with green certifications.</p>
      
      <h2>Looking Ahead</h2>
      <p>These trends represent just the beginning of what's possible in 2025. The most successful events will be those that thoughtfully integrate these innovations while staying true to their core purpose: bringing people together for meaningful experiences.</p>
      
      <p>Whether you're planning an intimate wedding or a large-scale conference, keeping these trends in mind will help you create events that not only meet but exceed expectations.</p>
    `,
  },
  "want-to-attract-more-clients": {
    title: "Want To Attract More Clients? Learn How To Stand Out as a Vendor on FEV.",
    date: "October 28, 2025",
    readTime: "7 min read",
    category: "Vendors",
    image: "/professional-vendor-woman.jpg",
    content: `
      <p>In a competitive vendor market, standing out is essential. Learn the strategies that help vendors attract more clients and build a thriving business on Find Event Vendors.</p>
      
      <h2>Build a Strong Profile</h2>
      <p>Your vendor profile is your storefront. Make sure it showcases your best work with high-quality images, detailed descriptions, and competitive pricing.</p>
      
      <h2>Client Engagement</h2>
      <p>Respond quickly to inquiries and engage with potential clients professionally. Your reputation depends on excellent communication and service delivery.</p>
    `,
  },
  "how-to-choose-perfect-venue": {
    title: "Event Planning Trends For 2025",
    date: "October 25, 2025",
    readTime: "6 min read",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <p>Discover the top trends shaping event planning in 2025. From technology integration to personalized experiences, learn what's driving the industry forward.</p>
      
      <h2>Technology Integration</h2>
      <p>Virtual and hybrid events are now the norm. Technology allows for better engagement, reach, and data collection.</p>
      
      <h2>Personalization</h2>
      <p>Attendees expect customized experiences. Use data to personalize every aspect of your event.</p>
    `,
  },
}

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const post = blogPostsData[slug as keyof typeof blogPostsData]

  if (!post) {
    return (
      <main className="min-h-screen px-4 md:px-8 lg:px-12 py-12 max-w-4xl mx-auto">
        <button  onClick={() => router.back()} className="gap-2 mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <button onClick={() => router.push("/blog")}>Return to Blog</button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <div className="px-4 md:px-8 lg:px-12 max-w-4xl mx-auto">
        <button  onClick={() => router.back()} className="gap-2 mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      </div>

        <div className="relative">
         <div className=" w-full mx-auto">
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="w-full h-full object-cover"
            />

            <div className="absolute top-4 left-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
            </div>
          </div>
        </div>
      
        {/* Featured Article */}
        {post ? (
          <section className="px-4 md:px-8 lg:px-12 pb-12 max-w-5xl mx-auto relative -mt-20">
            <div className=" rounded-xl p-6 md:p-8 shadow-xl bg-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          </section>
        ) : null}
      </div>

      {/* Article Content */}
      <div className="px-4 md:px-8 lg:px-12 max-w-5xl mx-auto mb-16">
        <div className="prose prose-lg max-w-none">
          <article
            className="text-foreground leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      {/* Related Articles Component - Already exists in your project */}
      <section className="px-4 md:px-8 lg:px-12 py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <RelatedArticles />
          <NewsletterSignup/>
        </div>
      </section>
    </main>
  )
}
