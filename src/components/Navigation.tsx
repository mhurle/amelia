'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import ShopDropdown from './ShopDropdown'

const Navigation = () => {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="section-padding py-6">
      <div className="max-container">
        <div className="flex justify-center items-center mb-6">
          <Logo size="small" />
        </div>
        
        <div className="flex justify-center items-center">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-sm uppercase tracking-wide transition-colors duration-200 ${
                  pathname === item.href 
                    ? 'text-navy font-medium' 
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ShopDropdown />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation