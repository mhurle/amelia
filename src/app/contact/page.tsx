export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="pt-16 pb-20 section-padding">
        <div className="max-container">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-navy mb-6 letter-spacing-wide">
              Get in Touch
            </h1>
            <p className="text-navy/80 text-lg max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have a question about our pieces, 
              need styling advice, or just want to say hello.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-light text-navy mb-8 letter-spacing-wide">
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-sand/50 focus:border-navy focus:outline-none bg-cream/50 font-sans"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-sand/50 focus:border-navy focus:outline-none bg-cream/50 font-sans"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-sand/50 focus:border-navy focus:outline-none bg-cream/50 font-sans"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-sand/50 focus:border-navy focus:outline-none bg-cream/50 font-sans resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-light text-navy mb-8 letter-spacing-wide">
                Visit Our Studio
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">Address</h3>
                  <p className="text-navy text-lg leading-relaxed">
                    123 Coastal Drive<br />
                    Seaside Village, CA 90210
                  </p>
                </div>
                
                <div>
                  <h3 className="font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">Hours</h3>
                  <p className="text-navy text-lg leading-relaxed">
                    Monday - Friday: 10am - 6pm<br />
                    Saturday: 10am - 5pm<br />
                    Sunday: 12pm - 4pm
                  </p>
                </div>
                
                <div>
                  <h3 className="font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">Contact</h3>
                  <p className="text-navy text-lg leading-relaxed">
                    Email: hello@coveandellen.com<br />
                    Phone: (555) 123-4567
                  </p>
                </div>
                
                <div>
                  <h3 className="font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-navy hover:text-navy/70 transition-colors duration-200">
                      Instagram
                    </a>
                    <a href="#" className="text-navy hover:text-navy/70 transition-colors duration-200">
                      Pinterest
                    </a>
                    <a href="#" className="text-navy hover:text-navy/70 transition-colors duration-200">
                      Newsletter
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="relative h-64 bg-sand/30 rounded-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-navy/40 font-sans text-sm">
                    [Studio location map]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand/10">
        <div className="section-padding">
          <div className="max-container text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-navy mb-6 letter-spacing-wide">
              Customer Care
            </h2>
            <p className="text-navy/80 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Our dedicated team is here to help with sizing, styling, or any questions 
              about your order. We believe in providing the same thoughtful attention 
              to our service as we do to our designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center text-center">
              <div>
                <h4 className="font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">Sizing Help</h4>
                <p className="text-navy">sizing@coveandellen.com</p>
              </div>
              <div>
                <h4 className="font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">Orders</h4>
                <p className="text-navy">orders@coveandellen.com</p>
              </div>
              <div>
                <h4 className="font-sans text-sm text-navy/70 uppercase tracking-wide mb-2">Press</h4>
                <p className="text-navy">press@coveandellen.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}