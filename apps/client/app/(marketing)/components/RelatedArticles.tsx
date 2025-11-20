import Image from "next/image";

export function RelatedArticles() {
  const articles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to Choose the Perfect Venue',
      description: 'Essential tips for selecting the right event venue for your needs.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Top 10 Vendor Questions to Ask',
      description: 'Questions you should ask vendors before booking their services.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Event Planning Checklist Guide',
      description: 'Complete checklist to ensure your event runs smoothly.'
    }
  ]

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Related Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <Image 
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                  width={400}
                  height={225}
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
