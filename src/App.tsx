import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Sparkles, ShieldCheck, Heart, Sofa, ShoppingBag, Image } from 'lucide-react';

const BASE = '/ShirolaFurnitureRepair/images';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const galleryItems = [
    { title: 'Tan Leather Loveseat', before: [`${BASE}/IMG_4090.PNG`], after: `${BASE}/IMG_4091.PNG` },
    { title: 'Brown Leather Repair', before: [`${BASE}/IMG_4092.PNG`], after: `${BASE}/IMG_4093.PNG` },
    { title: 'Orange Fabric Sofa', before: [`${BASE}/IMG_4100.PNG`], after: `${BASE}/IMG_4101.PNG` },
    { title: 'Gray Leather Sofa', before: [`${BASE}/IMG_4102.PNG`], after: `${BASE}/IMG_4103.PNG` },
    {
      title: 'Complete Structural Rebuild',
      before: [`${BASE}/IMG_4095.PNG`, `${BASE}/IMG_4096.PNG`, `${BASE}/IMG_4097.PNG`, `${BASE}/IMG_4099.PNG`],
      after: `${BASE}/IMG_4094.PNG`,
      wide: true,
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src={`${BASE}/shirola_furnitre_repair.png`} alt="Shirola's" className="w-10 h-10 object-contain" />
              <div>
                <h1 className="text-2xl font-serif text-sage-900">Shirola's</h1>
                <p className="text-xs text-sage-700 -mt-1">Furniture & Leather</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Gallery', 'Store', 'About', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-amber-700 ${activeSection === item.toLowerCase() ? 'text-amber-700' : 'text-brown-700'}`}>
                  {item}
                </button>
              ))}
            </div>
            <a href="tel:+17192315391" className="hidden sm:flex items-center space-x-2 bg-earth-green-600 text-white px-4 py-2 rounded-lg hover:bg-earth-green-700 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Us</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-b from-amber-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Family-Owned Since 1991</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-brown-900 leading-tight mb-6">
                Specializing in all phases of furniture wood and leather repair
              </h2>
              <p className="text-lg text-brown-700 mb-8 leading-relaxed">Committed to quality, services, and customer satisfaction.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="bg-earth-green-600 text-white px-8 py-4 rounded-lg hover:bg-earth-green-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl">
                  Get a Free Quote
                </button>
                <button onClick={() => scrollToSection('services')} className="border-2 border-brown-300 text-brown-800 px-8 py-4 rounded-lg hover:bg-brown-50 transition-colors font-medium text-lg">
                  Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={`${BASE}/shirola_furnitre_repair.png`} alt="Shirola's Furniture Repair" className="w-90 h-90 object-contain" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border-2 border-sage-600 flex items-center space-x-4">
                <img src={`${BASE}/shirola_furnitre_repair.png`} alt="Shirola's" className="w-20 h-20 object-contain flex-shrink-0" />
                <div>
                  <p className="text-sm text-sage-600 font-medium mb-1">Trusted by families for</p>
                  <p className="text-3xl font-serif text-sage-700">34+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">Our Craftsmanship</h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">From cherished heirlooms to everyday pieces, we bring expertise and care to every restoration.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles className="w-7 h-7 text-white" />, title: 'Furniture Repair', desc: 'Expert restoration of wood furniture, structural repairs, refinishing, and custom modifications.', items: ['Wood refinishing & staining', 'Structural repairs', 'Hardware replacement', 'Custom modifications'] },
              { icon: <Sofa className="w-7 h-7 text-white" />, title: 'Furniture Cleaning', desc: 'Professional upholstery and furniture cleaning to remove dirt, stains, and odors.', items: ['Upholstery deep cleaning', 'Stain & odor removal', 'Fabric protection', 'Steam cleaning services'] },
              { icon: <Sparkles className="w-7 h-7 text-white" />, title: 'Leather Cleaning', desc: 'Professional cleaning services that preserve the beauty and extend the life of your leather.', items: ['Deep cleaning & conditioning', 'Stain removal', 'Color restoration', 'Protection treatments'] },
              { icon: <ShieldCheck className="w-7 h-7 text-white" />, title: 'Leather Repair', desc: 'Meticulous repair of tears, scratches, and wear with perfect color matching.', items: ['Tear & rip repair', 'Scratch removal', 'Reupholstery services', 'Custom color matching'] },
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-50 to-cream-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-brown-100">
                <div className="w-14 h-14 bg-earth-green-600 rounded-xl flex items-center justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif text-brown-900 mb-4">{service.title}</h3>
                <p className="text-brown-700 leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2 text-sm text-brown-600">{service.items.map((item, j) => <li key={j}>• {item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-white to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-green-600 rounded-2xl mb-6">
              <Image className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">Before & After Gallery</h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">See the transformations we've achieved for our valued customers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, i) => (
              <div key={i} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brown-100 ${item.wide ? 'lg:col-span-2' : ''}`}>
                {item.before.length === 1 ? (
                  <>
                    <div className="grid grid-cols-2">
                      <div className="aspect-square relative overflow-hidden">
                        <img src={item.before[0]} alt="Before" className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3 bg-brown-800 text-white text-xs px-3 py-1 rounded-full font-medium">Before</div>
                      </div>
                      <div className="aspect-square relative overflow-hidden">
                        <img src={item.after} alt="After" className="w-full h-full object-cover" />
                        <div className="absolute top-3 right-3 bg-earth-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">After</div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-amber-50 border-t border-brown-100">
                      <p className="text-sm font-medium text-brown-700">{item.title}</p>
                    </div>
                  </>
                ) : (
                  <div className="p-4">
                    <p className="text-sm font-semibold text-brown-800 mb-3">{item.title}</p>
                    <div className="grid grid-cols-4 gap-2 mb-2">
                      {item.before.map((src, j) => (
                        <div key={j} className="relative overflow-hidden rounded-lg aspect-square">
                          <img src={src} alt="Before" className="w-full h-full object-cover" />
                          <div className="absolute top-1 left-1 bg-brown-800 text-white text-xs px-1 py-0.5 rounded-full">Before</div>
                        </div>
                      ))}
                    </div>
                    <div className="relative overflow-hidden rounded-lg aspect-video mt-2">
                      <img src={item.after} alt="After" className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 bg-earth-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">After</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={() => scrollToSection('contact')} className="inline-flex items-center space-x-2 bg-earth-green-600 text-white px-6 py-3 rounded-lg hover:bg-earth-green-700 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Schedule a Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-green-600 rounded-2xl mb-6">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">Professional Care Products</h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">Premium products for stain removal, leather conditioning, and furniture restoration.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-2xl overflow-hidden border border-brown-100 hover:shadow-xl transition-all">
              <div className="aspect-square bg-gradient-to-br from-brown-200 to-amber-200 flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-brown-600/30" strokeWidth={1} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-brown-900 mb-2">Stain Removers</h3>
                <p className="text-brown-600 text-sm mb-4">Professional-grade solutions for tackling tough stains on fabric and leather upholstery.</p>
                <div className="text-amber-700 font-medium text-sm">Coming Soon</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-2xl overflow-hidden border border-brown-100 hover:shadow-xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img src={`${BASE}/image.png`} alt="Leather Conditioners and Cleaner Kit" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-brown-900 mb-2">Leather Conditioners & Cleaner Kit</h3>
                <p className="text-brown-600 text-sm mb-4">Professional-grade leather care with conditioning and cleaning treatments.</p>
                <div className="text-earth-green-600 font-medium text-sm">Available Now</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-2xl overflow-hidden border border-brown-100 hover:shadow-xl transition-all">
              <div className="aspect-square bg-gradient-to-br from-brown-200 to-amber-200 flex items-center justify-center">
                <Sofa className="w-24 h-24 text-brown-600/30" strokeWidth={1} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-brown-900 mb-2">Recoloring Kits</h3>
                <p className="text-brown-600 text-sm mb-4">Restore faded leather and fabric with our color-matched recoloring solutions.</p>
                <div className="text-amber-700 font-medium text-sm">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-cream-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-brown-300 to-amber-300 rounded-3xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={`${BASE}/shirola_furnitre_repair.png`} alt="Shirola's" className="w-90 h-90 object-contain" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-6">A Family Tradition of Quality</h2>
              <p className="text-lg text-brown-700 leading-relaxed mb-6">
                Since 1991, Shirola's has been the trusted name in furniture and leather care. What started as a small workshop has grown into a beloved local business, but we've never lost sight of what matters most: treating every piece with care and every customer like family.
              </p>
              <p className="text-lg text-brown-700 leading-relaxed mb-8">
                Our craftsmen bring decades of experience and genuine passion to every restoration. We believe that furniture holds memories, and we're honored to help preserve those stories for generations to come.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <p className="text-4xl font-serif text-amber-700 mb-1">34+</p>
                  <p className="text-sm text-brown-600 font-medium">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <p className="text-4xl font-serif text-amber-700 mb-1">5000+</p>
                  <p className="text-sm text-brown-600 font-medium">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">Ready to restore your furniture? Contact us today for a free consultation.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: <Phone className="w-6 h-6 text-amber-700" />, title: 'Phone', content: <a href="tel:+17192315391" className="text-brown-700 hover:text-earth-green-600 transition-colors">719-231-5391</a> },
                { icon: <Mail className="w-6 h-6 text-amber-700" />, title: 'Email', content: <a href="mailto:shirolafurniturerepair@yahoo.com" className="text-brown-700 hover:text-earth-green-600 transition-colors">shirolafurniturerepair@yahoo.com</a> },
                { icon: <MapPin className="w-6 h-6 text-amber-700" />, title: 'Location', content: <p className="text-brown-700">Colorado Springs, CO</p> },
                { icon: <Clock className="w-6 h-6 text-amber-700" />, title: 'Hours', content: <div className="text-brown-700 space-y-1"><p>Monday - Friday: 8:00 AM - 5:00 PM</p><p>Saturday: 9:00 AM - 5:00 PM</p><p>Sunday: Closed</p></div> },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div><h3 className="text-xl font-serif text-brown-900 mb-1">{item.title}</h3>{item.content}</div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-cream-50 p-8 rounded-2xl border border-brown-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {[
                  { label: 'Your Name', id: 'name', type: 'text', placeholder: 'John Smith' },
                  { label: 'Email Address', id: 'email', type: 'email', placeholder: 'john@example.com' },
                  { label: 'Phone Number', id: 'phone', type: 'tel', placeholder: '(123) 456-7890' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-brown-800 mb-2">{field.label}</label>
                    <input type={field.type} id={field.id} className="w-full px-4 py-3 bg-white border border-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-green-500" placeholder={field.placeholder} />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown-800 mb-2">Tell us about your project</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white border border-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none" placeholder="Describe what needs to be repaired or cleaned..." />
                </div>
                <button type="submit" className="w-full bg-earth-green-600 text-white px-8 py-4 rounded-lg hover:bg-earth-green-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-sage-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={`${BASE}/shirola_furnitre_repair.png`} alt="Shirola's" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="text-xl font-serif text-white">Shirola's</h3>
                <p className="text-xs text-sage-400 -mt-1">Furniture & Leather</p>
              </div>
            </div>
            <p className="text-sm text-sage-400 text-center md:text-right">
              &copy; 2025 Shirola's Furniture & Leather. All rights reserved.<br />
              Crafted with care since 1991.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
