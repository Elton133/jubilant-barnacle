/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReusableHero from '../../components/ReusableHero'
import NewsletterSignup from '../../components/Newsletter'

// blogs: array coming from Strapi
export default function BlogClientPage({ blogs }: any) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Normalize incoming `blogs` from Strapi. Strapi responses may come as
  // { data: [...] } or as an array directly. Guard against null/undefined.
  const blogItems: any[] = Array.isArray(blogs)
    ? blogs
    : blogs && Array.isArray(blogs.data)
    ? blogs.data
    : []

  // Format Strapi response into your UI structure with safe fallbacks
  const formattedBlogs = blogItems.map((item: any) => {
    const attrs = item.attributes ?? item
    const categoryName =
      attrs.category?.data?.attributes?.name || attrs.category || 'General'

    // Resolve image URL (Strapi may nest media info differently)
    const coverUrl =
      attrs.cover?.data?.attributes?.url || attrs.cover?.url || attrs.image || '/placeholder.svg'

    return {
      id: item.id || attrs.id || Math.random().toString(36).slice(2, 9),
      slug: attrs.slug || attrs?.meta?.slug || '',
      title: attrs.title || attrs.name || 'Untitled',
      description: attrs.excerpt || attrs.description || '',
      category: categoryName,
      image: coverUrl,
      readTime: attrs.readTime || '5 min read',
      date: attrs.publishedAt || attrs.createdAt || null,
    }
  })

  const categories = [
    'All',
    ...Array.from(new Set(formattedBlogs.map((b: any) => b.category).filter(Boolean))),
  ]

  const filteredPosts = selectedCategory === "All"
    ? formattedBlogs
    : formattedBlogs.filter((post: any) => post.category === selectedCategory)

  const featuredPost = filteredPosts[0]
  const otherPosts = filteredPosts.slice(1)

  return (
    <main className="min-h-screen">
      <div className="relative">
        <ReusableHero 
          title="Event Planning Insights &"
          bluetitle="Tips"
          subtitle="Expert advice, industry trends, and practical guides to help you create unforgettable events"
          background='bg-linear-to-br from-[#600FD7] to-[#9CD7FF]'
        />

        {featuredPost && (
          <section className="px-4 md:px-8 lg:px-12 pb-12 max-w-6xl mx-auto relative -mt-20 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-xl">

              <div className="space-y-4 flex flex-col p-8">
                <h2 className="text-3xl md:text-4xl font-[Euclid-Circular-B-Bold]">
                  {featuredPost.title}
                </h2>

                <p className="text-lg text-muted-foreground">
                  {featuredPost.description}
                </p>

                <span className="text-sm text-gray-500">
                  {featuredPost.readTime}
                </span>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <button className="bg-[#600FD7] text-white gap-2 px-6 py-2 rounded-xl hover:bg-[#600FD7]/20 hover:border hover:text-black border-[#600FD7]">
                    Read More →
                  </button>
                </Link>
              </div>

              <div className="overflow-hidden h-80 md:h-96 md:rounded-r-xl rounded-b-xl">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </section>
        )}
      </div>

      <section className="px-4 md:px-8 lg:px-12 py-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {categories.map((category: any) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#600FD7] text-white border-[#600FD7]'
                  : 'border-purple-200 text-purple-600 hover:bg-purple-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-12 py-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#9CD7FF] text-black px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </main>
  )
}
