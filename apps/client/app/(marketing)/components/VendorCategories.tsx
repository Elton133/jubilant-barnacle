import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function VendorCategories() {
  const categories = [
    {
      id: 1,
      image: '/dj-image.png',
      alt: 'dj',
      category: 'DJ',
      categoryIcon: '/dj.png'
    },
    {
      id: 2,
      image: '/caterer-image.png',
      alt: 'Catering',
      category: 'Catering',
      categoryIcon: '/food.png'
    },
    {
      id: 3,
      image: '/photographer-image.png',
      alt: 'photography',
      category: 'Photography',
      categoryIcon: '/camera.png'
    },
    {
      id: 4,
      image: '/venue-image.png',
      alt: 'Venue',
      category: 'Venue',
      categoryIcon: '/travel.png'
    },
    {
      id: 5,
      image: '/decor-image.png',
      alt: 'Flowers',
      category: 'Decor',
      categoryIcon: '/decor.png'
    },
    {
      id: 6,
      image: '/rentals-image.png',
      alt: 'Lighting',
      category: 'Rentals',
      categoryIcon: '/rentals.png'
    }
  ]

  return (
    <section className="w-full py-12 bg-[#050A30]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-[Euclid-Circular-B-Bold] text-center mb-8 text-white">Explore Vendor Categories</h2>
        
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
              <div className="absolute bottom-0 left-0 right-0 text-white p-4 flex items-center gap-2 font-[Euclid-Circular-B-Bold]">
                <Image src={category.categoryIcon} alt="category-icon" width={20} height={20} />
                {category.category}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="border-gray-300 text-[#050A30] px-6 py-3 rounded-lg font-semibold bg-white transition hover:cursor-pointer hover:bg-[#600fd7] hover:text-white">
            View All Categories
            <ArrowRight className="inline-block ml-2" size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
