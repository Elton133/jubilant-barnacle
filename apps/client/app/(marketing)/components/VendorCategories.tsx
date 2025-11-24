import { Camera, Building, Flower, Lightbulb, ForkKnifeCrossed } from "lucide-react"
import Image from "next/image"

export default function VendorCategories() {
  const categories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1541126274323-dbac58d14741?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'dj',
      category: 'DJ',
      categoryIcon: '/dj.png'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1696805566858-fe4a670d5df3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Catering',
      category: 'Catering',
      categoryIcon: '/food.png'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'photography',
      category: 'Photography',
      categoryIcon: '/camera.png'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Venue',
      category: 'Venue',
      categoryIcon: '/travel.png'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1755704282977-340323fa52df?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Flowers',
      category: 'Decor',
      categoryIcon: '/decor.png'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1708530708513-81e715632c4b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Lighting',
      category: 'Rentals',
      categoryIcon: '/rentals.png'
    }
  ]

  return (
    <section className="w-full py-12 bg-[#050A30]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:4xl font-bold text-center mb-8 text-white">Explore Vendor Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <div key={category.id} className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Image 
                src={category.image || "/placeholder.svg"} 
                alt={category.alt}
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-4 flex items-center gap-2">
                {category.category}
                <Image src={category.categoryIcon} alt="category-icon" width={20} height={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="border-gray-300 text-black px-6 py-3 rounded-lg font-semibold bg-white transition hover:cursor-pointer hover:bg-gray-100">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  )
}
