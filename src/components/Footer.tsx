'use client'

import { useState } from 'react'
import Link from 'next/link'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log('Email subscription:', email)
    setEmail('')
  }

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/size-guide', label: 'Size Guide' },
    { href: '/care', label: 'Care Instructions' },
    { href: '/returns', label: 'Returns' },
  ]

  const customerLinks = [
    { href: '/contact', label: 'Contact' },
    { href: '/shipping', label: 'Shipping' },
    { href: '/returns-policy', label: 'Returns Policy' },
    { href: '/privacy', label: 'Privacy Policy' },
  ]

  return (
    <footer className="bg-navy text-cream">
      {/* Newsletter Section */}
      <div className="section-padding py-16 border-b border-cream/20">
        <div className="max-container">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-serif text-3xl mb-4 letter-spacing-wide">
              Subscribe to our newsletter
            </h3>
            
            <form onSubmit={handleEmailSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 bg-cream text-navy placeholder-navy/60 font-sans rounded-none border-none focus:outline-none focus:ring-2 focus:ring-cream/50"
                required
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-navy hover:text-navy/70 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="section-padding py-12">
        <div className="max-container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="font-serif text-lg mb-4 letter-spacing-wide">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-sans text-sm text-cream/80 hover:text-cream transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-serif text-lg mb-4 letter-spacing-wide">Customer Care</h4>
              <ul className="space-y-2">
                {customerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-sans text-sm text-cream/80 hover:text-cream transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Country */}
            <div>
              <h4 className="font-serif text-lg mb-4 letter-spacing-wide">Location</h4>
              <div>
                <label className="font-sans text-sm text-cream/60 uppercase tracking-wide mb-2 block">
                  Country/Region
                </label>
                <select className="bg-navy border border-cream/30 text-cream font-sans text-sm px-3 py-2 rounded-none focus:outline-none focus:border-cream">
                  <option value="uk">United Kingdom | GBP £</option>
                  <option value="us">United States | USD $</option>
                  <option value="eu">European Union | EUR €</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="section-padding py-6 border-t border-cream/20">
        <div className="max-container">
          <div className="text-center">
            <p className="font-sans text-sm text-cream/60">
              © 2024, Cove & Ellen
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer