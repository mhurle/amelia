'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import ShopDropdown from './ShopDropdown'

const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className="section-padding py-6">
      <div className="max-container">
        <div className="flex justify-center items-center mb-6">
          <Logo size="small" />
        </div>
        
        <div className="flex justify-center items-center">
          <div className="flex space-x-8">
            <Link
              href="/"
              className={`font-sans text-sm uppercase tracking-wide transition-colors duration-200 ${
                pathname === '/' 
                  ? 'text-navy font-medium' 
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              Home
            </Link>
            <ShopDropdown />
            <Link
              href="/about"
              className={`font-sans text-sm uppercase tracking-wide transition-colors duration-200 ${
                pathname === '/about' 
                  ? 'text-navy font-medium' 
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-sans text-sm uppercase tracking-wide transition-colors duration-200 ${
                pathname === '/contact' 
                  ? 'text-navy font-medium' 
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation