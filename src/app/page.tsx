import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero1.png"
          alt="Two women in elegant coastal attire standing on beach with dramatic cliffs"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute bottom-8 left-8 z-10">
          <Logo size="small" className="opacity-90" />
        </div>
      </section>


      <section className="py-20 bg-sand/20">
        <div className="section-padding">
          <div className="max-container text-center">
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy mb-12 letter-spacing-wide">
              Featured Essentials
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Linen Halter Dress', price: '£145', category: 'Dresses', href: '/shop/linen-dresses/halter-dress' },
                { name: 'Embroidered Sage Top', price: '£115', category: 'Tops', href: '/shop/linen-tops/embroidered-sage-top' },
                { name: 'Leaf Detail Linen Top', price: '£105', category: 'Tops', href: '/shop/linen-tops/leaf-detail-linen-top' }
              ].map((item, index) => {
                const content = (
                  <>
                    <div className="relative h-80 bg-cream border border-sand/30 mb-4 rounded-sm overflow-hidden">
                      {item.name === 'Linen Halter Dress' ? (
                        <Image
                          src="/items/dress.jpg"
                          alt="Linen Halter Dress"
                          fill
                          className="object-cover"
                          quality={95}
                        />
                      ) : item.name === 'Embroidered Sage Top' ? (
                        <Image
                          src="/items/sage-embroidered-top-1.jpg"
                          alt="Embroidered Sage Top"
                          fill
                          className="object-cover"
                          quality={95}
                        />
                      ) : item.name === 'Leaf Detail Linen Top' ? (
                        <Image
                          src="/items/pastel-olive2.jpg"
                          alt="Leaf Detail Linen Top"
                          fill
                          className="object-cover"
                          quality={95}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-navy/40 font-sans text-sm">
                          [{item.name} image]
                        </div>
                      )}
                    </div>
                    <h3 className="font-serif text-xl text-navy mb-1">{item.name}</h3>
                    <p className="font-sans text-sm text-navy/60 uppercase tracking-wide mb-1">{item.category}</p>
                    <p className="font-sans text-lg text-navy font-medium">{item.price}</p>
                  </>
                )
                
                return item.href ? (
                  <Link key={index} href={item.href} className="group cursor-pointer block">
                    {content}
                  </Link>
                ) : (
                  <div key={index} className="group cursor-pointer">
                    {content}
                  </div>
                )
              })}
            </div>
            
            <div className="mt-12">
              <Link href="/collection" className="btn-primary">
                View Full Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop By Colour Section */}
      <section className="py-20 section-padding">
        <div className="max-container">
          {/* Right-aligned layout with gap */}
          <div className="ml-auto mr-8 max-w-7xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-navy letter-spacing-wide">
                / Shop By Colour
              </h2>
              <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Colour Swatches */}
            <div className="relative group cursor-pointer">
              <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-sm">
                <Image
                  src="/colour-scheme.jpg"
                  alt="Cove & Ellen colour palette - coastal fabric swatches"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={95}
                />
                <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Color Names */}
              <div className="grid grid-cols-5 gap-4 mt-6">
                <div className="text-center">
                  <h3 className="font-serif text-lg text-navy">Stone Blue</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg text-navy">Coastal Brown</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg text-navy">Ivory White</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg text-navy">Ocean Blue</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg text-navy">Blush Sand</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}