import CategoryHeader from '@/components/CategoryHeader'

export default function LinenShirtBlouse() {
  const products = [
    { name: 'Classic Linen Button Shirt', price: '$115', description: 'Timeless elegance, perfect drape' },
    { name: 'Oversized Linen Blouse', price: '$125', description: 'Relaxed sophistication, airy comfort' },
    { name: 'Linen Poet Blouse', price: '$135', description: 'Romantic details, modern ease' },
    { name: 'Short-Sleeve Linen Shirt', price: '$105', description: 'Casual refinement, summer-ready' },
    { name: 'Linen Tunic Blouse', price: '$145', description: 'Flowing length, versatile styling' },
    { name: 'Mandarin Collar Linen Shirt', price: '$120', description: 'Eastern influence, coastal comfort' }
  ]

  return (
    <div className="min-h-screen">
      <CategoryHeader 
        title="Linen Shirt/Blouse"
        description="Elevated essentials with thoughtful details. From classic button-downs to flowing blouses."
      />

      <section className="pb-20 section-padding">
        <div className="max-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-cream border border-sand/30 mb-4 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute inset-0 flex items-center justify-center text-navy/40 font-sans text-sm">
                    [{product.name} image]
                  </div>
                  <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-xl text-navy mb-1 group-hover:text-navy/80 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm text-navy/60 uppercase tracking-wide mb-2">
                    {product.name.includes('Shirt') ? 'Linen Shirt' : 'Linen Blouse'}
                  </p>
                  <p className="font-sans text-sm text-navy/70 mb-2 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="font-sans text-lg text-navy font-medium">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}