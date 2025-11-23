'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function EmbroideredSageTop() {
  const sizes = ['6', '8', '10', '12', '14']
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('Regular')
  const [selectedColor, setSelectedColor] = useState('Sage Green')
  const [quantity, setQuantity] = useState(1)
  const [openSection, setOpenSection] = useState<string | null>(null)
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="section-padding pt-8 pb-4">
        <div className="max-container">
          <nav className="text-sm text-navy/60">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop/linen-tops" className="hover:text-navy transition-colors">Linen Tops</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Embroidered Sage Top</span>
          </nav>
        </div>
      </div>

      <div className="section-padding pb-20">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="relative aspect-[3/4] bg-cream rounded-sm overflow-hidden">
              <Image
                src="/items/sage-embroidered-top-1.jpg"
                alt="Embroidered Sage Top - Relaxed linen top with delicate leaf embroidery"
                fill
                className="object-cover"
                priority
                quality={95}
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-8">
                <h1 className="font-serif text-4xl lg:text-5xl font-medium text-navy mb-4 letter-spacing-wide">
                  Embroidered Sage Top
                </h1>
                <p className="font-sans text-2xl text-navy font-medium mb-2">
                  £115.00 GBP
                </p>
                <p className="font-sans text-sm text-navy/60 italic mb-6">
                  Tax included.
                </p>
                <p className="text-navy/80 text-lg leading-relaxed mb-4">
                  A beautifully relaxed linen top featuring delicate hand-embroidered botanical details. 
                  The soft sage green colour and flowing silhouette make this an effortless essential 
                  for warm weather dressing.
                </p>
                <p className="text-navy/60 text-sm italic">
                  Model wears size 8 regular.
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-sans text-sm text-navy mb-3 italic">Size</h3>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border-2 font-sans text-sm transition-colors duration-200 ${
                        selectedSize === size 
                          ? 'bg-navy text-cream border-navy' 
                          : 'border-navy/30 text-navy hover:border-navy'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Selection */}
              <div className="mb-6">
                <h3 className="font-sans text-sm text-navy mb-3 italic">Style</h3>
                <div className="flex gap-2">
                  {['Petite', 'Regular'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`px-4 py-2 border-2 font-sans text-sm transition-colors duration-200 ${
                        selectedStyle === style 
                          ? 'bg-navy text-cream border-navy' 
                          : 'border-navy/30 text-navy hover:border-navy'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-sans text-sm text-navy mb-3 italic">Colour</h3>
                <button
                  className="px-4 py-2 bg-navy text-cream border-2 border-navy font-sans text-sm"
                  disabled
                >
                  Sage Green
                </button>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <h3 className="font-sans text-sm text-navy mb-3 italic">Quantity</h3>
                <div className="flex items-center border-2 border-navy/30 w-32">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-navy hover:bg-sand/20 transition-colors duration-200"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex-1 text-center py-2 font-sans text-navy bg-transparent border-none outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-navy hover:bg-sand/20 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3 mb-12">
                <button className="w-full bg-cream text-navy border-2 border-navy py-4 text-base font-sans uppercase tracking-wide hover:bg-navy hover:text-cream transition-colors duration-200">
                  Add to cart
                </button>
                <p className="text-center">
                  <button className="font-sans text-sm text-navy underline hover:text-navy/70 transition-colors duration-200">
                    More payment options
                  </button>
                </p>
              </div>

              {/* Expandable Sections */}
              <div className="space-y-4">
                {/* Description & Size */}
                <div className="border-b border-sand/30 pb-4">
                  <button
                    onClick={() => setOpenSection(openSection === 'description' ? null : 'description')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      <span className="font-sans text-navy font-medium">Description & Size</span>
                    </span>
                    <svg 
                      className={`w-5 h-5 text-navy transition-transform duration-200 ${
                        openSection === 'description' ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSection === 'description' && (
                    <div className="mt-4 text-navy/80 text-sm leading-relaxed space-y-3">
                      <p>• 100% European linen</p>
                      <p>• Hand-embroidered botanical leaf details</p>
                      <p>• Relaxed, flowing fit</p>
                      <p>• Three-quarter length sleeves</p>
                      <p>• Round neckline with keyhole closure</p>
                      <p>• Designed in coastal England</p>
                      <p className="pt-2 border-t border-sand/20">
                        <strong>Size Guide:</strong> Model is 5'8" and wears size 8. 
                        For an oversized fit, consider sizing up.
                      </p>
                    </div>
                  )}
                </div>

                {/* Care Guide */}
                <div className="border-b border-sand/30 pb-4">
                  <button
                    onClick={() => setOpenSection(openSection === 'care' ? null : 'care')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21Z" />
                      </svg>
                      <span className="font-sans text-navy font-medium">Care Guide</span>
                    </span>
                    <svg 
                      className={`w-5 h-5 text-navy transition-transform duration-200 ${
                        openSection === 'care' ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSection === 'care' && (
                    <div className="mt-4 text-navy/80 text-sm leading-relaxed space-y-2">
                      <p>• Machine wash cold with like colors</p>
                      <p>• Hang dry in shade to preserve embroidery</p>
                      <p>• Iron on reverse side while slightly damp</p>
                      <p>• Do not bleach or dry clean</p>
                      <p className="pt-2 border-t border-sand/20">
                        The hand embroidery requires gentle care. Linen naturally softens with each wash, 
                        developing a beautiful lived-in texture over time.
                      </p>
                    </div>
                  )}
                </div>

                {/* Returns & Exchanges */}
                <div className="border-b border-sand/30 pb-4">
                  <button
                    onClick={() => setOpenSection(openSection === 'returns' ? null : 'returns')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z" />
                      </svg>
                      <span className="font-sans text-navy font-medium">Returns & Exchanges</span>
                    </span>
                    <svg 
                      className={`w-5 h-5 text-navy transition-transform duration-200 ${
                        openSection === 'returns' ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSection === 'returns' && (
                    <div className="mt-4 text-navy/80 text-sm leading-relaxed space-y-2">
                      <p>• 30-day return window</p>
                      <p>• Items must be unworn with tags attached</p>
                      <p>• Free returns within the UK</p>
                      <p>• Exchanges subject to availability</p>
                      <p className="pt-2 border-t border-sand/20">
                        Contact our customer care team for assistance with returns or exchanges.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Share Button */}
              <div className="mt-8">
                <button className="flex items-center gap-2 text-navy hover:text-navy/70 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span className="font-sans text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="section-padding py-20 bg-sand/10">
        <div className="max-container">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-navy mb-12 text-center letter-spacing-wide">
            Complete the Look
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Leaf Detail Linen Top', price: '£105', href: '/shop/linen-tops/leaf-detail-linen-top' },
              { name: 'Linen Halter Dress', price: '£145', href: '/shop/linen-dresses/halter-dress' },
              { name: 'Canvas Tote', price: '£45' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative aspect-square bg-cream border border-sand/30 mb-4 rounded-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-navy/40 font-sans text-sm">
                    [{item.name}]
                  </div>
                </div>
                <h3 className="font-serif text-lg text-navy mb-1">{item.name}</h3>
                <p className="font-sans text-navy">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}