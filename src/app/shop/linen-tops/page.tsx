import CategoryHeader from '@/components/CategoryHeader'
import Image from 'next/image'

interface Product {
  name: string
  price: string
  description: string
  image?: string
}

export default function LinenTops() {
  const products: Product[] = [
    { name: 'Linen Tank Top', price: '$65', description: 'Essential layering piece, perfect drape' },
    { name: 'Oversized Linen Tee', price: '$75', description: 'Relaxed comfort, effortless style' },
    { name: 'Linen Camisole', price: '$55', description: 'Delicate straps, timeless silhouette' },
    { name: 'Cropped Linen Top', price: '$85', description: 'Modern length, coastal ease' },
    { name: 'Linen Sleeveless Blouse', price: '$95', description: 'Refined details, airy comfort' },
    { name: 'Linen Wrap Top', price: '$105', description: 'Flattering fit, versatile styling' },
    { name: 'Embroidered Sage Top', price: '$115', description: 'Relaxed fit with delicate leaf embroidery', image: '/items/sage-embroidered-top-1.jpg' },
    { name: 'Leaf Detail Linen Top', price: '$105', description: 'Handcrafted botanical details, timeless elegance', image: '/items/sage-embroidered-top-2.jpg' }
  ]

  return (
    <div className="min-h-screen">
      <CategoryHeader 
        title="Linen Tops"
        description="Lightweight essentials for warm weather dressing. Layer, mix, and match with effortless ease."
      />

      <section className="pb-20 section-padding">
        <div className="max-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-cream border border-sand/30 mb-4 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-navy/40 font-sans text-sm">
                      [{product.name} image]
                    </div>
                  )}
                  <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-xl text-navy mb-1 group-hover:text-navy/80 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm text-navy/60 uppercase tracking-wide mb-2">
                    Linen Top
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