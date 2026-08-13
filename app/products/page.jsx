'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, ArrowRight, Package, Layers, Shirt, Box, ShieldCheck, Sparkles, FileImage, Palette, Upload, Check } from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Toast Notification State
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Fetch products from the API endpoint on component mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/fetch-products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Dynamically generate unique categories from fetched products
  const categories = ['All', ...Array.from(new Set(products.map((item) => item.category).filter(Boolean)))];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter((item) => item.category === activeCategory);

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Add to Cart logic: updates localStorage and either shows toast or redirects
  const handleAddToCart = (product, redirect = false) => {
    // 1. Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // 2. Check if product already exists in cart
    const existingItemIndex = existingCart.findIndex(item => item._id === (product._id || product.id));
    
    if (existingItemIndex > -1) {
      // If it exists, increase quantity
      existingCart[existingItemIndex].quantity = (existingCart[existingItemIndex].quantity || 1) + 1;
    } else {
      // If new, add to array with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }
    
    // 3. Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    // 4. Redirect or show toast
    if (redirect) {
      router.push('/checkout');
    } else {
      setToastMessage(`${product.name} added to cart`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Auto-hide after 3 seconds
    }
  };

  return (
    <main className="relative min-h-screen bg-studio-950 text-studio-100 selection:bg-amber-500/20 selection:text-amber-400 overflow-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-600/10 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-studio-900/20 rounded-full blur-[150px] z-0 pointer-events-none" />

      {/* NAVBAR */}
      <nav className="fixed top-7 w-full z-50  transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6  py-3 flex items-center backdrop-blur-md justify-between border border-slate-200/50 bg-slate-400/20 rounded-full">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl text-white tracking-tighter">
              CAR<span className="text-yellow-400">ESTICS</span>
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              {/* <Link href="/products" className="hover:text-indigo-600 transition-colors">Posters</Link>
              <Link href="/products" className="hover:text-indigo-600 transition-colors">Bundles</Link>
              <Link href="/products" className="hover:text-indigo-600 transition-colors">Apparel</Link>
              <Link href="/products" className="hover:text-indigo-600 transition-colors">3D Signs</Link> */}
            </div>
          </div>
          <div className="flex items-center gap-4">

            {/* UPDATED: Navbar Shopping Bag now pushes to checkout */}
            <button 
              onClick={() => router.push('/checkout')}
              className="p-2 text-slate-400 hover:text-indigo-600 transition-colors relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-600 rounded-full"></span>
            </button>
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {["Posters", "Bundles", "Apparel", "3D Signs"].map((item) => (
                  <Link key={item} href="#" className="text-lg font-medium text-slate-800 border-b border-slate-100 pb-2">
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <section className="relative z-10 pt-24 pb-12 px-3 sm:pt-40 sm:pb-20 sm:px-6 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="relative text-center mb-6 sm:mb-20 py-6 sm:py-20 px-4 sm:px-6 rounded-2xl sm:rounded-3xl overflow-hidden border border-studio-800/60 bg-gradient-to-b from-studio-900/80 via-studio-950/60 to-studio-950/20 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_60px_rgba(0,0,0,0.7)]">
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
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-amber-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold">
                The Curated Collection
              </h2>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-3xl sm:text-5xl md:text-7xl tracking-tighter uppercase mb-3 sm:mb-6 font-medium bg-clip-text text-transparent bg-gradient-to-b from-white via-studio-100 to-studio-400/50"
          >
            Automotive <br className="md:hidden" /> Artistry
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="relative z-10 text-studio-100/60 text-xs sm:text-sm md:text-base max-w-xl mx-auto tracking-wide font-light leading-relaxed"
          >
            Exquisite isolation chambers, structural carbon displays, and archival lighting engineered for automotive perfection.
          </motion.p>
        </div>

        {/* Dynamic Category Filters */}
        {!loading && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-6 sm:mb-16 p-1.5 sm:p-2 backdrop-blur-md bg-studio-900/40 rounded-full border border-studio-800/50 w-fit mx-auto shadow-2xl"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-500 text-studio-950 font-bold shadow-[0_0_20px_rgba(217,119,6,0.4)]'
                    : 'text-studio-100/70 hover:text-amber-400 hover:bg-studio-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Loading Skeleton / Product Grid */}
        {loading ? (
          <div className="text-center py-20 text-studio-100/50 text-sm tracking-widest uppercase animate-pulse">
            Loading collection...
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-10">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product) => {
                const displayPrice = product.discounted_price || product.origional_price;

                return (
                  <motion.div
                    key={product._id || product.id}
                    onClick={() => setSelectedProduct(product)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.04, y: -5 }}
                    className="group cursor-pointer flex flex-col bg-studio-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-studio-800/80 hover:border-amber-500/50 transition-all duration-150 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.3)]"
                  >
                    <div className="relative w-full h-28 sm:h-52 md:h-[22rem] overflow-hidden bg-studio-950 shrink-0">
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        src={product.image || '/hero/hero-p1.jpg'} 
                        alt={product.name}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-900/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                      
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-studio-950/80 backdrop-blur-md border border-studio-800 px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full">
                        <span className="text-[10px] sm:text-sm font-medium text-studio-100">
                          Rs. {displayPrice?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-2.5 sm:p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-studio-950/50">
                      <span className="text-[8px] sm:text-[10px] text-amber-500 font-bold tracking-[0.2em] uppercase mb-1 sm:mb-3">
                        {product.category}
                      </span>
                      <h3 className="text-xs sm:text-base md:text-xl tracking-wide font-medium text-studio-100 group-hover:text-amber-400 transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                        {product.name}
                      </h3>
                      
                      <div className="mt-2 sm:mt-6 md:mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-500 flex items-center gap-1 sm:gap-2">
                          Explore 
                          <span className="text-xs sm:text-lg leading-none">&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-studio-950/90 backdrop-blur-md"
            />

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

              {/* Left Side: Product Image */}
              <div className="lg:w-1/2 relative h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[500px] bg-studio-950 shrink-0">
                <img 
                  src={selectedProduct.image || '/hero/hero-p1.jpg'} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-950/80 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Right Side: Details & Actions */}
              <div className="lg:w-1/2 p-5 sm:p-8 lg:p-12 flex flex-col justify-between bg-black">
                <div>
                  <span className="text-[10px] sm:text-xs text-amber-500 font-bold tracking-[0.25em] uppercase mb-2 block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-2 sm:mb-4">
                    {selectedProduct.name}
                  </h2>

                  {/* Price display with discount support */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <span className="text-lg sm:text-2xl font-light text-amber-400">
                      Rs. {(selectedProduct.discounted_price || selectedProduct.origional_price)?.toLocaleString()}
                    </span>
                    {selectedProduct.discounted_price && selectedProduct.origional_price && (
                      <span className="text-sm text-studio-100/40 line-through">
                        Rs. {selectedProduct.origional_price?.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <p className="text-studio-100/70 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                    {selectedProduct.description || 'Archival quality automotive display item engineered for perfection.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-studio-800 mt-2 sm:mt-0">
                  {/* UPDATED: Add to Cart Button */}
                  <button 
                    onClick={() => handleAddToCart(selectedProduct, false)}
                    className="flex-1 py-3.5 sm:py-4 px-4 sm:px-6 rounded-full border border-amber-500/50 hover:border-amber-500 text-amber-400 hover:bg-amber-500/10 text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-200 text-center"
                  >
                    Add to Cart
                  </button>
                  
                  {/* UPDATED: Buy Now Button */}
                  <button 
                    onClick={() => handleAddToCart(selectedProduct, true)}
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

      {/* NEW: Custom Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-[100] flex items-center gap-3 bg-studio-900 border border-amber-500/50 text-studio-100 px-6 py-3 rounded-full shadow-[0_10px_40px_-10px_rgba(217,119,6,0.3)]"
          >
            <Check size={18} className="text-amber-500" />
            <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
