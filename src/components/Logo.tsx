import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'small' | 'large'
  className?: string
}

const Logo = ({ size = 'small', className = '' }: LogoProps) => {
  const isSmall = size === 'small'
  
  const logoContent = (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`font-serif font-medium text-navy letter-spacing-wider ${
        isSmall ? 'text-2xl md:text-3xl' : 'text-5xl md:text-7xl lg:text-8xl'
      }`}>
        Cove &
      </div>
      <div className={`relative ${
        isSmall ? 'w-16 h-8 -mt-1' : 'w-32 md:w-48 lg:w-64 h-16 md:h-24 lg:h-32 -mt-2 md:-mt-4'
      }`}>
        <Image
          src="/ellen.png"
          alt="Ellen"
          fill
          className="object-contain"
          priority={!isSmall}
        />
      </div>
    </div>
  )

  if (isSmall) {
    return (
      <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}

export default Logo