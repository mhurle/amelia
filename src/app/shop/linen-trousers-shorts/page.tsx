import CategoryHeader from '@/components/CategoryHeader'

export default function LinenTrousersShorts() {
  const products = [
    { name: 'Wide-Leg Linen Trousers', price: '$125', description: 'Flowing comfort for any occasion' },
    { name: 'High-Waisted Linen Shorts', price: '$85', description: 'Elevated casual, perfect fit' },
    { name: 'Cropped Linen Pants', price: '$115', description: 'Modern length, timeless style' },
    { name: 'Pleated Linen Shorts', price: '$95', description: 'Structured elegance, easy wear' },
    { name: 'Relaxed Linen Trousers', price: '$135', description: 'Effortless sophistication' },
    { name: 'Tailored Linen Shorts', price: '$105', description: 'Clean lines, coastal comfort' }
  ]

  return (
    <div className="min-h-screen">
      <CategoryHeader 
        title="Linen Trousers/Shorts"
        description="Breathable bottoms that move with you. From wide-leg trousers to tailored shorts, find your perfect fit."
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
                    {product.name.includes('Shorts') ? 'Linen Shorts' : 'Linen Trousers'}
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