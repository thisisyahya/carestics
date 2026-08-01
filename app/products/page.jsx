'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import CarModelViewer from '@/app/components/CarModelViewer'; 

const allProducts = [
  { 
    id: 1, 
    name: 'Precision Car Chamber', 
    category: 'Car Chamber', 
    price: '$499', 
    description: 'Climate-controlled isolation engineered for automotive perfection. Protects museum-grade finishes from micro-dust, humidity fluctuations, and static accumulation.', 
    image: '/hero/hero-p5.png' 
  },
  { 
    id: 2, 
    name: 'Aero Dynamics Blueprint', 
    category: 'Posters', 
    price: '$89', 
    description: 'Museum-grade archival print mapping hypercar aerodynamic channels and downforce vectors on heavyweight matte canvas stock.', 
    image: '/posters/hero-p1.png' 
  },
  { 
    id: 3, 
    name: 'Neon Accent Tube', 
    category: 'Car Tubes', 
    price: '$120', 
    description: 'Seamless ambient lighting delivering uniform illumination with absolute zero hot-spots. Fully dimmable via custom controller integration.', 
    image: '/hero/hero-p1.jpg' 
  },
  { 
    id: 4, 
    name: 'Carbon Fiber Display', 
    category: 'Car Chamber', 
    price: '$650', 
    description: 'Forged carbon fiber structural base paired with an optically clear, tempered glass enclosure designed to showcase elite scale models.', 
    image: '/hero/hero-p2.png' 
  },
  { 
    id: 5, 
    name: 'Vintage Circuit Art', 
    category: 'Posters', 
    price: '$75', 
    description: 'Minimalist legendary race track layouts etched directly onto brushed matte black aerospace-grade aluminum plates.', 
    image: '/posters/hero-p2.png' 
  },
  { 
    id: 6, 
    name: 'Ambient Floor Tube', 
    category: 'Car Tubes', 
    price: '$140', 
    description: 'Low-profile underglow matrix designed for seamless synchronization with your display chamber floor perimeter.', 
    image: '/hero/hero-p4.png' 
  }
];

const categories = ['All', 'Car Chamber', 'Posters', 'Car Tubes'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show3D, setShow3D] = useState(false);
  
  const [ledColor, setLedColor] = useState('#ffcc00');

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(item => item.category === activeCategory);

  const closeModal = () => {
    setSelectedProduct(null);
    setShow3D(false);
    setLedColor('#ffcc00');
  };

  return (
    <main className="relative min-h-screen bg-studio-950 text-studio-100 selection:bg-amber-500/20 selection:text-amber-400 overflow-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-600/10 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-studio-900/20 rounded-full blur-[150px] z-0 pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-xl bg-studio-950/50 border-b border-studio-800/50">
        <Link href="/" className="text-2xl text-white tracking-tighter">
          CAR<span className="text-yellow-400">ESTICS</span>
        </Link>
        <div className="flex items-center gap-8 text-xs tracking-wider uppercase text-studio-100/70">
          <span className="text-amber-400 font-bold tracking-[0.2em] shadow-amber-500/50 drop-shadow-md">Store</span>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Cinematic Header Reveal */}
        <div className="relative text-center mb-20 py-20 px-6 rounded-3xl overflow-hidden border border-studio-800/60 bg-gradient-to-b from-studio-900/80 via-studio-950/60 to-studio-950/20 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_60px_rgba(0,0,0,0.7)]">
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[140px] bg-amber-500/15 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-amber-400 text-xs tracking-[0.3em] uppercase font-bold">
                The Curated Collection
              </h2>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-5xl md:text-7xl tracking-tighter uppercase mb-6 font-medium bg-clip-text text-transparent bg-gradient-to-b from-white via-studio-100 to-studio-400/50"
          >
            Automotive <br className="md:hidden" /> Artistry
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="relative z-10 text-studio-100/60 text-sm md:text-base max-w-xl mx-auto tracking-wide font-light leading-relaxed"
          >
            Exquisite isolation chambers, structural carbon displays, and archival lighting engineered for automotive perfection.
          </motion.p>
        </div>

        {/* Floating Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16 p-2 backdrop-blur-md bg-studio-900/40 rounded-full border border-studio-800/50 w-fit mx-auto shadow-2xl"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-500 text-studio-950 font-bold shadow-[0_0_20px_rgba(217,119,6,0.4)]'
                  : 'text-studio-100/70 hover:text-amber-400 hover:bg-studio-800/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Premium Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.04, y: -5 }}
                className="group cursor-pointer flex flex-col bg-studio-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-studio-800/80 hover:border-amber-500/50 transition-all duration-150 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.3)]"
              >
                <div className="relative w-full h-[22rem] overflow-hidden bg-studio-950">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-900/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 right-4 bg-studio-950/80 backdrop-blur-md border border-studio-800 px-4 py-1.5 rounded-full">
                    <span className="text-sm font-medium text-studio-100">{product.price}</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-studio-950/50">
                  <span className="text-[10px] text-amber-500 font-bold tracking-[0.2em] uppercase mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-xl tracking-wide font-medium text-studio-100 group-hover:text-amber-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-xs uppercase tracking-widest text-amber-500 flex items-center gap-2">
                      Explore 
                      <span className="text-lg leading-none">&rarr;</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- CINEMATIC PRODUCT DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* The Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-studio-950/90 backdrop-blur-md"
            />

            {/* The Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-5xl bg-studio-900 border border-studio-800 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row my-8 sm:my-auto shrink-0 overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-10 h-10 rounded-full bg-studio-950/80 border border-studio-800 text-studio-100/70 hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all duration-200"
              >
                ✕
              </button>

              {/* Left Side: Product Image & 3D Viewer Toggle */}
              <div className="lg:w-1/2 relative h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[500px] bg-studio-950 shrink-0">
                
                {selectedProduct.name === 'Precision Car Chamber' && show3D ? (
                  <div className="absolute inset-0 w-full h-full">
                    <CarModelViewer ledColor={ledColor} />
                  </div>
                ) : (
                  <>
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-studio-950/80 via-transparent to-transparent lg:hidden" />
                  </>
                )}

                {/* 3D Toggle Buttons (Moved to Top Left to avoid overlapping model) */}
                {selectedProduct.name === 'Precision Car Chamber' && (
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex gap-1 p-1 bg-studio-950/80 backdrop-blur-md rounded-xl border border-studio-800 shadow-xl">
                    <button 
                      onClick={() => setShow3D(false)}
                      className={`px-4 sm:px-6 py-2 rounded-lg text-[10px] sm:text-xs tracking-widest uppercase font-bold transition-all duration-200 ${
                        !show3D ? "bg-amber-500 text-studio-950" : "text-studio-100/70 hover:text-amber-400"
                      }`}
                    >
                      Photo
                    </button>
                    <button 
                      onClick={() => setShow3D(true)}
                      className={`px-4 sm:px-6 py-2 rounded-lg text-[10px] sm:text-xs tracking-widest uppercase font-bold transition-all duration-200 ${
                        show3D ? "bg-amber-500 text-studio-950" : "text-studio-100/70 hover:text-amber-400"
                      }`}
                    >
                      3D View
                    </button>
                  </div>
                )}
              </div>

              {/* Right Side: Information & Action Buttons */}
              <div className="lg:w-1/2 p-5 sm:p-8 lg:p-12 flex flex-col justify-between bg-black">
                <div>
                  <span className="text-[10px] sm:text-xs text-amber-500 font-bold tracking-[0.25em] uppercase mb-2 block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-2 sm:mb-4">
                    {selectedProduct.name}
                  </h2>
                  <div className="text-lg sm:text-2xl font-light text-amber-400 mb-4 sm:mb-6">
                    {selectedProduct.price}
                  </div>
                  <p className="text-studio-100/70 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                    {selectedProduct.description}
                  </p>

                  {/* LED Color Customizer */}
                  {selectedProduct.name === 'Precision Car Chamber' && (
                    <div className="mb-6 sm:mb-8">
                      <label className="text-[10px] sm:text-xs uppercase tracking-widest text-studio-100/60 block mb-3">
                        Chamber LED Accent Color
                      </label>
                      <div className="flex items-center gap-2 sm:gap-3">
                        {[
                          { name: 'Amber', hex: '#ffcc00' },
                          { name: 'Neon Blue', hex: '#00f0ff' },
                          { name: 'Pure White', hex: '#ffffff' },
                          { name: 'Crimson', hex: '#ff0055' },
                          { name: 'Emerald', hex: '#00ff66' }
                        ].map((color) => (
                          <button
                            key={color.hex}
                            onClick={() => setLedColor(color.hex)}
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-all duration-200 border-2 ${
                              ledColor === color.hex ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-studio-800 mt-2 sm:mt-0">
                  <button 
                    onClick={() => alert(`Added ${selectedProduct.name} to cart.`)}
                    className="flex-1 py-3.5 sm:py-4 px-4 sm:px-6 rounded-full border border-amber-500/50 hover:border-amber-500 text-amber-400 hover:bg-amber-500/10 text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-200 text-center"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => alert(`Proceeding to checkout for ${selectedProduct.name}`)}
                    className="flex-1 py-3.5 sm:py-4 px-4 sm:px-6 rounded-full bg-amber-500 hover:bg-amber-400 text-studio-950 text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-200 text-center shadow-[0_0_20px_rgba(217,119,6,0.3)]"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
