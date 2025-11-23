'use client'

import Link from 'next/link'
import { useState } from 'react'

const ShopDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const shopCategories = [
    { href: '/shop/linen-dresses', label: 'Linen Dresses' },
    { href: '/shop/linen-two-pieces', label: 'Linen Two-Pieces' },
    { href: '/shop/linen-trousers-shorts', label: 'Linen Trousers/Shorts' },
    { href: '/shop/linen-tops', label: 'Linen Tops' },
    { href: '/shop/linen-shirt-blouse', label: 'Linen Shirt/Blouse' },
    { href: '/shop/gift-voucher', label: 'Gift Voucher' },
  ]

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href="/collection" className="font-sans text-sm uppercase tracking-wide text-navy/70 hover:text-navy transition-colors duration-200 flex items-center gap-1">
        Shop
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-cream border border-sand/30 rounded-sm shadow-lg z-50">
          <div className="py-2">
            {shopCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="block px-6 py-3 font-sans text-sm text-navy/80 hover:text-navy hover:bg-sand/20 transition-colors duration-200"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ShopDropdown