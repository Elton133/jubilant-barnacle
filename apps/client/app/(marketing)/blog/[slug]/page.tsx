'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronLeft, Calendar, Clock } from 'lucide-react'
import { getBlogBySlug, getBlogs, imageURL } from '../../../../lib/blog-services'
import { blocksToHtml } from '../../../../lib/rich-text-to-html'
import type { StrapiBlog, StrapiListResponse } from '../../../../lib/types'

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [post, setPost] = useState<StrapiBlog | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    const fetchBlog = async () => {
      setLoading(true)
      try {
        const blog = await getBlogBySlug(slug)
        if (blog) {
          setPost(blog)
          setLoading(false)
          return
        }

        // Fallback: fetch all blogs and try to find by slug (handles API shape variations)
        const all: StrapiListResponse<StrapiBlog> = await getBlogs()
        const candidates: StrapiBlog[] = Array.isArray(all) ? all : all?.data ?? []
        const found = candidates.find((it) => it.slug === slug)
        if (found) {
          setPost(found)
        } else {
          setPost(null)
        }
      } catch (err) {
        console.error('Error fetching blog by slug', err)
        setPost(null)
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [slug])

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/blog')
    }
  }

  if (loading) return <p>Loading...</p>
  if (!post)
    return (
      <main className="min-h-screen px-4 md:px-8 lg:px-12 py-12 max-w-4xl mx-auto">
        <button onClick={handleBack} className="gap-2 mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <button onClick={() => router.push('/blog')}>Return to Blog</button>
        </div>
      </main>
    )

  // Get cover image URL - Strapi v5 uses flat structure
  const coverImageUrl = imageURL(post.coverImage) || '/placeholder.svg'
  
  // Get category name - Strapi v5 uses flat structure
  const categoryName = post.category?.name || 'General'
  
  // Convert blocks content to HTML
  const contentHtml = blocksToHtml(post.content)

  return (
    <main className="min-h-screen pt-10">
      {/* Banner */}
      <div className="relative -mt-10 w-full mx-auto h-96 md:h-[500px] overflow-hidden">
        <Image
          src={coverImageUrl}
          alt={post.title}
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute top-24 left-4 z-10">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-md hover:bg-white"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      {/* Blog Header */}
      <section className="px-4 md:px-8 lg:px-12 pb-12 max-w-5xl mx-auto relative -mt-20">
        <div className="relative rounded-xl p-6 md:p-8 shadow-xl bg-white">
          <span className="absolute top-3 left-4 bg-[#9CD7FF] text-black px-3 py-1 rounded-full text-sm font-medium">
            {categoryName}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[Euclid-Circular-B-Bold] mb-6 leading-tight mt-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-muted-foreground">
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="px-4 md:px-8 lg:px-12 max-w-5xl mx-auto mb-16">
        <div className="prose prose-lg max-w-none">
          <article
            className="text-foreground leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </main>
  )
}
