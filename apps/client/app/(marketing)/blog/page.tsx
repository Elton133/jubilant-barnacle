// 'use client'

// import { useState } from 'react'
// import Card from '../components/Card'
// import Link from 'next/link'
// import Image from 'next/image'
// import ReusableHero from '../components/ReusableHero'
// import Newsletter from './components/Newsletter'
// import NewsletterSignup from '../components/Newsletter'
// import { getBlogs } from '../../../lib/blog-services'

// // Sample blog data - replace with your actual data/CMS
// const blogPosts = [
//   {
//     id: 1,
//     slug: 'meeting-vendors-from-across-the-country',
//     title: 'Meeting Vendors From Across The Country',
//     description: 'Discover tips, trends, and stories from the world of events, all curated to help vendors and planners thrive.',
//     category: 'Trends',
//     image: 'https://images.unsplash.com/photo-1612315689640-c896b323083d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlbmRvcnN8ZW58MHx8MHx8fDA%3D',
//     readTime: '5 min read',
//     date: 'November 1, 2025',
//   },
//   {
//     id: 2,
//     slug: 'want-to-attract-more-clients',
//     title: 'Want To Attract More Clients? Learn How To Stand Out as a Vendor on FEV.',
//     category: 'Vendors',
//     image: 'https://images.unsplash.com/photo-1612315689640-c896b323083d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlbmRvcnN8ZW58MHx8MHx8fDA%3D',
//     readTime: '7 min read',
//     date: 'October 28, 2025',
//   },
//   {
//     id: 3,
//     slug: 'event-planning-trends-2025',
//     title: 'Event Planning Trends For 2025',
//     category: 'Planning',
//     image: 'https://images.unsplash.com/photo-1612315689640-c896b323083d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlbmRvcnN8ZW58MHx8MHx8fDA%3D',
//     readTime: '6 min read',
//     date: 'October 25, 2025',
//   },
//   {
//     id: 4,
//     slug: 'sustainable-events',
//     title: 'How to Plan Sustainable Events',
//     category: 'Trends',
//     image: 'https://images.unsplash.com/photo-1612315689640-c896b323083d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlbmRvcnN8ZW58MHx8MHx8fDA%3D',
//     readTime: '5 min read',
//     date: 'October 22, 2025',
//   },
//   {
//     id: 5,
//     slug: 'vendor-marketing-guide',
//     title: 'Vendor Marketing Guide: Boost Your Visibility',
//     category: 'Vendors',
//     image: 'https://images.unsplash.com/photo-1612315689640-c896b323083d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlbmRvcnN8ZW58MHx8MHx8fDA%3D',
//     readTime: '8 min read',
//     date: 'October 19, 2025',
//   },
//   {
//     id: 6,
//     slug: 'event-budgeting-101',
//     title: 'Event Budgeting 101: Getting It Right',
//     category: 'Planning',
//     image: 'https://images.unsplash.com/photo-1612315689640-c896b323083d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlbmRvcnN8ZW58MHx8MHx8fDA%3D',
//     readTime: '6 min read',
//     date: 'October 16, 2025',
//   },
// ]

// const categories = ['All', 'Trends', 'Planning', 'Vendors']

// export default function BlogPage() {
//   const [selectedCategory, setSelectedCategory] = useState('All')

//   const filteredPosts = selectedCategory === 'All' 
//     ? blogPosts 
//     : blogPosts.filter(post => post.category === selectedCategory)

//   const featuredPost = filteredPosts[0]
//   const otherPosts = filteredPosts.slice(1)

//   return (
//     <main className="min-h-screen">
//       {/* Hero Section */}
//       <div className="relative">
//         <ReusableHero 
//           title="Event Planning Insights &"
//           bluetitle="Tips"
//           subtitle="Expert advice, industry trends, and practical guides to help you create unforgettable events"
//           background='bg-linear-to-br from-[#600FD7] to-[#9CD7FF]'
//         />


//         {/* Featured Article */}
//         {featuredPost ? (
//           <section className="px-4 md:px-8 lg:px-12 pb-12 max-w-6xl mx-auto relative -mt-20 rounded-xl">
//             <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-xl">
              
//         <div className="space-y-4 flex flex-col p-8">
//           <h2 className="text-3xl md:text-4xl font-[Euclid-Circular-B-Bold]">{featuredPost.title}</h2>
//           <p className="text-lg text-muted-foreground">{featuredPost.description}</p>
//           <span className="text-sm text-gray-500">{featuredPost.readTime}</span>

//           <Link href={`/blog/${featuredPost.slug}`}>
//             <button className="bg-[#600FD7] text-white gap-2 px-6 py-2 rounded-xl hover:bg-[#600FD7]/20 hover:border hover:text-black border-[#600FD7]">
//               Read More →
//             </button>
//           </Link>
//         </div>

//         <div className=" overflow-hidden h-80 md:h-96 md:rounded-r-xl rounded-b-xl">
//           <Image
//             src={featuredPost.image}
//             alt={featuredPost.title}
//             width={400}
//             height={400}
//             className="w-full h-full object-cover"
//           />
//         </div>

//       </div>
//     </section>
//   ) : null}
//         </div>


//       {/* Category Filter */}
//       <section className="px-4 md:px-8 lg:px-12 py-4 max-w-7xl mx-auto">
//         <div className="flex flex-wrap gap-3">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-full border font-medium transition-colors ${
//                 selectedCategory === category
//                   ? 'bg-[#600FD7] text-white border-[#600FD7]'
//                   : 'border-purple-200 text-purple-600 hover:bg-purple-50'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Blog Grid */}
//       <section className="px-4 md:px-8 lg:px-12 py-6 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {otherPosts.map((post) => (
//             <Link key={post.id} href={`/blog/${post.slug}`}>
//               <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
//                 <div className="relative h-48 overflow-hidden">
//                   <div className="absolute top-4 left-4">
//               <span className="bg-[#9CD7FF] text-black px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
//             </div>
//                   <Image
//                     src={post.image || "/placeholder.svg"}
//                     alt={post.title}
//                     width={400}
//                     height={300}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform"
//                   />
                
//                 </div>
//                 <div className="p-4 flex-1 flex flex-col">
//                   <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
//                     {post.title}
//                   </h3>
//                 </div>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </section>
//       <NewsletterSignup />
//     </main>
//   )
// }


import BlogClientPage from "./components/blog-client-page"
import { getBlogs } from "../../../lib/blog-services"

export default async function BlogPage() {
  const blogs = await getBlogs()

  return <BlogClientPage blogs={blogs} />
}
