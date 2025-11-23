import CategoryHeader from '@/components/CategoryHeader'

export default function LinenTwoPieces() {
  const products = [
    { name: 'Linen Crop Top & Trouser Set', price: '$195', description: 'Coordinated comfort, endless versatility' },
    { name: 'Oversized Shirt & Short Set', price: '$165', description: 'Relaxed elegance for summer days' },
    { name: 'Linen Blazer & Pant Set', price: '$225', description: 'Tailored sophistication, coastal ease' },
    { name: 'Camisole & Wide-Leg Set', price: '$185', description: 'Flowing silhouettes, perfect harmony' },
    { name: 'Knit Top & Linen Skirt Set', price: '$175', description: 'Mixed textures, unified style' },
    { name: 'Button Shirt & Shorts Set', price: '$155', description: 'Classic pairing, modern comfort' }
  ]

  return (
    <div className="min-h-screen">
      <CategoryHeader 
        title="Linen Two-Pieces"
        description="Perfectly coordinated sets that take the guesswork out of getting dressed. Mix, match, or wear together."
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
                    Two-Piece Set
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