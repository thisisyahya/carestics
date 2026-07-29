"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag,  Menu, X, ArrowRight, Package, Layers, Shirt, Box ,  Sparkles} from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

// Replace these with your actual long/narrow poster image paths
const posterImages = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80',
];
// --- DUMMY DATA ---
const categories = [
  { name: "Premium Posters", desc: "A3 & A4 Museum Quality", icon: Layers, color: "bg-blue-50" },
  { name: "Custom Bundles", desc: "Mix, Match & Save", icon: Package, color: "bg-rose-50" },
  { name: "Printed Apparel", desc: "Art You Can Wear", icon: Shirt, color: "bg-emerald-50" },
  { name: "3D Wall Signs", desc: "Textured 2D/3D Art", icon: Box, color: "bg-amber-50" },
];

const featuredProducts = [
  { id: 1, name: "Neon Tokyo Nights", type: "A3 Poster", price: "$24.00", image: "/featured/floating-car.png" },
  { id: 2, name: "Minimalist Geometry", type: "A4 Poster Bundle", price: "$45.00", image: "/featured/box-enclosed.png" },
  { id: 3, name: "Abstract Waves Tee", type: "Printed Shirt", price: "$35.00", image: "/featured/hand-drawing.png" },
  { id: 4, name: "Stay Wild", type: "3D Wall Sign", price: "$55.00", image: "/featured/broken-decor.jpg" },
];

const heroImages = [
  'printka-hero-img01',
  'printka-hero-img02',
  'printka-hero-img03',
  'printka-hero-img04',
];

// Config for scattering the images in the background
const scatteredImages = [
  { src: heroImages[0], className: "top-[-5%] left-[-5%] w-[40vw] h-[60vh] -rotate-6", delay: 0 },
  { src: heroImages[1], className: "top-[10%] right-[-10%] w-[35vw] h-[50vh] rotate-12", delay: 1 },
  { src: heroImages[2], className: "bottom-[-15%] left-[15%] w-[30vw] h-[45vh] -rotate-12", delay: 2 },
  { src: heroImages[3], className: "bottom-[5%] right-[10%] w-[25vw] h-[40vh] rotate-6", delay: 1.5 },
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};



const images = [
  '/hero/hero-p1.jpg',
  '/hero/hero-p2.png',
  '/hero/hero-p5.png',
  '/hero/hero-p4.png',

];

// Framer Motion variants for the sliding animation
const slideVariants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};



export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect: changes the slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-7 w-full z-50  transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6  py-3 flex items-center backdrop-blur-md justify-between border border-slate-200/50 bg-slate-400/20 rounded-full">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl text-white tracking-tighter">
              CAR<span className="text-yellow-400">ESTICS</span>
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              <Link href="#" className="hover:text-indigo-600 transition-colors">Posters</Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors">Bundles</Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors">Apparel</Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors">3D Signs</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors relative">
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

      {/* HERO SECTION WITH COLLAGE HEARTBEAT BACKGROUND */}
      <section className="relative pt-20 pb-20 lg:pt-36 lg:pb-40 overflow-hidden bg-black flex flex-col items-center justify-center min-h-[90vh]">


        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className=" text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-poppins mb-10">
            SHOP THE <span className="text-yellow-400">ART</span>VIBE
          </motion.h1>


        </div>



        <div className="relative w-[50%] h-[300px] overflow-hidden bg-black flex items-center justify-center">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Hero slide ${currentIndex + 1}`}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-full h-full object-contain"
              style={{
                maskImage: `
          linear-gradient(to right, transparent, black 15%, black 85%, transparent),
          linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)
        `,
                maskComposite: 'intersect',
                WebkitMaskImage: `
          linear-gradient(to right, transparent, black 15%, black 85%, transparent),
          linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)
        `,
                WebkitMaskComposite: 'source-in', // Safari fallback for intersect
              }}
            />
          </AnimatePresence>

          {/* Slide Indicators (Dots) */}
          {/* <div className="absolute bottom-4 flex gap-2 z-10">
    {images.map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          index === currentIndex ? 'bg-white' : 'bg-white/50'
        }`}
      />
    ))}
  </div> */}
        </div>



        <div className="flex gap-4 mt-8">
          <button className="w-28 sm:w-36 text-center py-3 sm:py-4 rounded-full bg-white text-black cursor-pointer">
            Shop
          </button>
          <button className="w-28 sm:w-36 text-center py-3 sm:py-4 rounded-full border-2 border-white text-white hover:bg-[#191970] hover:text-white hover:border-[#191970] transition-colors duration-300 cursor-pointer">
            Bundle
          </button>
        </div>

      </section>


   {/* FEATURED PRODUCTS */}
      <section id="shop" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Trending Now</h2>
              <p className="text-slate-500">Our most sought-after pieces this week.</p>
            </div>
            <Link href="#" className="hidden sm:flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-0 w-full px-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full py-3 bg-white/95 backdrop-blur-sm text-slate-900 rounded-xl font-medium shadow-sm hover:bg-slate-900 hover:text-white transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">{product.type}</div>
                  <h3 className="text-lg font-bold text-slate-900 flex justify-between">
                    {product.name}
                    <span>{product.price}</span>
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* CATEGORIES GRID */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-slate-900 px-8 max-w-7xl m-auto block mb-8">Shop by Category</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className={`${cat.color} p-8 rounded-3xl cursor-pointer transition-shadow hover:shadow-xl hover:shadow-slate-200/50`}
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <cat.icon size={24} className="text-slate-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-slate-600 text-sm">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



<section id="bundles" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Main Outer Box */}
    <div className="relative rounded-4xl bg-blue-950 p-8 sm:p-12 overflow-hidden text-white flex flex-col items-center text-center shadow-xl">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      {/* Text Description */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" sm:text-lg tracking-tight text-blue-50 max-w-3xl mb-6 capitalize"
      >
        Shop the custom aesthetic wallpaper for your prestigious wall available in different sizes
      </motion.p>

      {/* Button */}
      <motion.button 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md mb-10 hover:scale-105"
      >
        <ShoppingBag size={15} />
        <span>Shop Now</span>
      </motion.button>

      {/* Image Container with Natural Aspect Ratio */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-[60%] max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        <img
          src="/posters/hero-p1.png"
          alt="Custom aesthetic wallpaper preview"
          className="w-full h-auto object-contain mx-auto"
        />
      </motion.div>

    </div>
  </div>
</section>






      {/* FOOTER */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-2xl font-black tracking-tighter mb-4 block">
                ART<span className="text-indigo-600">VIBE</span>
              </Link>
              <p className="text-slate-500 max-w-md mb-6">
                Premium A3 & A4 posters, printed apparel, and revolutionary 3D wall signs to make your space and style truly yours.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer">IG</div>
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer">TT</div>
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer">X</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Shop</h4>
              <ul className="space-y-4 text-slate-500">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">A3/A4 Posters</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Custom Bundles</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Printed Apparel</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">3D Wall Signs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Shipping & Returns</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Track Order</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} ArtVibe. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-slate-900">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}