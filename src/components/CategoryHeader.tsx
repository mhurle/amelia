interface CategoryHeaderProps {
  title: string
  description?: string
}

const CategoryHeader = ({ title, description }: CategoryHeaderProps) => {
  return (
    <div className="section-padding pt-16 pb-12">
      <div className="max-container">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-navy mb-6 letter-spacing-wide">
          {title}
        </h1>
        {description && (
          <p className="text-navy/80 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default CategoryHeader