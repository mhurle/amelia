import CategoryHeader from '@/components/CategoryHeader'
import Link from 'next/link'
import Image from 'next/image'

interface Product {
  name: string
  price: string
  description: string
  href?: string
  image?: string
}

export default function LinenDresses() {
  const products: Product[] = [
    { 
      name: 'Linen Halter Dress', 
      price: '£145', 
      description: 'Effortless coastal elegance with halter neckline', 
      href: '/shop/linen-dresses/halter-dress',
      image: '/items/dress.jpg'
    }
  ]

  return (
    <div className="min-h-screen">
      <CategoryHeader 
        title="Linen Dresses"
        description="Effortless elegance for every coastal moment. Our linen dresses move with you from sunrise to sunset."
      />

      <section className="pb-20 section-padding">
        <div className="max-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product, index) => {
              const content = (
                <>
                  <div className="relative aspect-[3/4] bg-cream border border-sand/30 mb-4 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        quality={95}
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
                      Linen Dress
                    </p>
                    <p className="font-sans text-sm text-navy/70 mb-2 leading-relaxed">
                      {product.description}
                    </p>
                    <p className="font-sans text-lg text-navy font-medium">
                      {product.price}
                    </p>
                  </div>
                </>
              )
              
              return product.href ? (
                <Link key={index} href={product.href} className="group cursor-pointer block">
                  {content}
                </Link>
              ) : (
                <div key={index} className="group cursor-pointer">
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}