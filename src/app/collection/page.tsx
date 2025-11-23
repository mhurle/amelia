import Image from 'next/image'
import Link from 'next/link'

export default function Collection() {
  const categories = [
    { 
      name: 'Linen Dresses', 
      href: '/shop/linen-dresses',
      description: 'Effortless elegance for every coastal moment',
      items: 1
    },
    { 
      name: 'Linen Two-Pieces', 
      href: '/shop/linen-two-pieces',
      description: 'Perfectly coordinated sets for easy dressing',
      items: 6
    },
    { 
      name: 'Linen Trousers/Shorts', 
      href: '/shop/linen-trousers-shorts',
      description: 'Breathable bottoms that move with you',
      items: 6
    },
    { 
      name: 'Linen Tops', 
      href: '/shop/linen-tops',
      description: 'Lightweight essentials for warm weather',
      items: 2
    },
    { 
      name: 'Linen Shirt/Blouse', 
      href: '/shop/linen-shirt-blouse',
      description: 'Elevated essentials with thoughtful details',
      items: 6
    },
    { 
      name: 'Gift Voucher', 
      href: '/shop/gift-voucher',
      description: 'Give the gift of coastal elegance',
      items: 5
    }
  ]

  const featuredProducts = [
    { 
      name: 'Linen Halter Dress', 
      price: '£145', 
      href: '/shop/linen-dresses/halter-dress',
      image: '/items/dress.jpg',
      description: 'Effortless coastal elegance with halter neckline'
    },
    { 
      name: 'Leaf Detail Linen Top', 
      price: '£105', 
      href: '/shop/linen-tops/leaf-detail-linen-top',
      image: '/items/pastel-olive2.jpg',
      description: 'Handcrafted botanical details, timeless elegance'
    },
    { 
      name: 'Embroidered Sage Top', 
      price: '£115', 
      href: '/shop/linen-tops/embroidered-sage-top',
      image: '/items/sage-embroidered-top-1.jpg',
      description: 'Relaxed fit with delicate leaf embroidery'
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="pt-16 pb-12 section-padding">
        <div className="max-container text-center">
          <h1 className="font-serif text-5xl lg:text-6xl font-light text-navy mb-6 letter-spacing-wide">
            Shop Collection
          </h1>
          <p className="text-navy/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated categories of coastal essentials. 
            Each collection tells a story of timeless elegance and effortless style.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="pb-20 section-padding">
        <div className="max-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                href={category.href}
                className="group block"
              >
                <div className="bg-cream border border-sand/30 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[4/3] bg-sand/20">
                    {category.name === 'Linen Tops' ? (
                      <Image
                        src="/items/sage-embroidered-top-1.jpg"
                        alt="Linen Tops Collection"
                        fill
                        className="object-cover"
                        quality={95}
                      />
                    ) : category.name === 'Linen Dresses' ? (
                      <Image
                        src="/items/dress.jpg"
                        alt="Linen Dresses Collection"
                        fill
                        className="object-cover"
                        quality={95}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-navy/40 font-sans text-sm">
                        [{category.name} preview]
                      </div>
                    )}
                    <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-navy mb-2 group-hover:text-navy/80 transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="font-sans text-sm text-navy/70 mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-sans text-sm text-navy/60">
                        {category.items} items
                      </span>
                      <span className="font-sans text-sm text-navy uppercase tracking-wide hover:text-navy/70 transition-colors duration-200">
                        See More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="pb-20 section-padding bg-sand/10">
        <div className="max-container">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy mb-12 text-center letter-spacing-wide">
            Featured Products
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => {
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

      <section className="py-16 bg-sand/10">
        <div className="section-padding">
          <div className="max-container text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-navy mb-6 letter-spacing-wide">
              Mindful Choices
            </h2>
            <p className="text-navy/80 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Every piece in our collection is crafted from natural, sustainable materials. 
              We believe in slow fashion – creating beautiful, lasting garments that honor 
              both you and the environment.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-sans text-navy/70 uppercase tracking-wide">
              <span>Organic Cotton</span>
              <span>Linen</span>
              <span>Silk</span>
              <span>Cashmere</span>
              <span>Sustainable Practices</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}