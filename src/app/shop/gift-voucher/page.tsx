import CategoryHeader from '@/components/CategoryHeader'

export default function GiftVoucher() {
  const vouchers = [
    { amount: '$50', description: 'Perfect for discovering a new favorite piece' },
    { amount: '$100', description: 'Ideal for a complete coastal look' },
    { amount: '$150', description: 'For the linen lover in your life' },
    { amount: '$250', description: 'A generous gift for someone special' },
    { amount: '$500', description: 'The ultimate coastal wardrobe refresh' },
  ]

  return (
    <div className="min-h-screen">
      <CategoryHeader 
        title="Gift Voucher"
        description="Give the gift of coastal elegance. Our digital vouchers arrive instantly and never expire."
      />

      <section className="pb-20 section-padding">
        <div className="max-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-4xl mx-auto">
            {vouchers.map((voucher, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-cream to-sand border border-sand/30 mb-4 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-4xl text-navy mb-2">
                      {voucher.amount}
                    </div>
                    <div className="font-sans text-sm uppercase tracking-wide text-navy/70">
                      Gift Voucher
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-xl text-navy mb-2 group-hover:text-navy/80 transition-colors duration-200">
                    {voucher.amount} Gift Voucher
                  </h3>
                  <p className="font-sans text-sm text-navy/70 leading-relaxed">
                    {voucher.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-navy mb-4">How It Works</h3>
            <div className="space-y-4 text-navy/80">
              <p className="font-sans leading-relaxed">
                Digital vouchers are delivered instantly to your email. Simply forward to your recipient 
                or print at home for a personal touch.
              </p>
              <p className="font-sans leading-relaxed">
                Vouchers never expire and can be used across our entire collection. 
                Any remaining balance is saved for future purchases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}