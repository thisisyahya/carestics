// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import Link from 'next/link';

// // Mock product data - updated with working image links
// const allProducts = [
//   { id: 1, name: 'Precision Car Chamber', category: 'Car Chamber', price: '$499', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
//   { id: 2, name: 'Aero Dynamics Poster', category: 'Posters', price: '$89', image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop' },
//   { id: 3, name: 'Neon Accent Tube', category: 'Car Tubes', price: '$120', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop' },
//   { id: 4, name: 'Carbon Fiber Display Chamber', category: 'Car Chamber', price: '$650', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop' },
//   { id: 5, name: 'Vintage Circuit Poster', category: 'Posters', price: '$75', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop' },
//   { id: 6, name: 'Ambient Floor Tube', category: 'Car Tubes', price: '$140', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop' },
// ];

// const categories = ['All', 'Car Chamber', 'Posters', 'Car Tubes'];

// export default function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState('All');

//   // Filter products based on selected tab
//   const filteredProducts = activeCategory === 'All' 
//     ? allProducts 
//     : allProducts.filter(item => item.category === activeCategory);

//   return (
//     <main className="bg-studio-950 text-studio-100 min-h-screen selection:bg-amber-500/20 selection:text-amber-400">
      
//     {/* Navbar with Back Link */}
//       <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-studio-950/70 border-b border-studio-800/50">
        
//         {/* Updated Uniformly Scaling CARESTICS Logo */}
//         <motion.div 
//           whileHover={{ scale: 1.2 }} // Slightly higher scale to make growth obvious
//           className="inline-flex items-center justify-center p-1" // Switched to inline-flex + padding
//         >
//           <Link href="/" className="tracking-widest text-lg font-bold uppercase flex leading-none">
//             <span className="text-studio-100">CAR</span>
//             <span className="text-amber-500">ESTICS</span>
//           </Link>
//         </motion.div>

//         <div className="flex items-center gap-8 text-xs tracking-wider uppercase text-studio-100/70">
//           <span className="text-amber-400">Store</span>
//         </div>
//       </nav>


//       <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
//         {/* Page Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-6xl tracking-tight leading-tight uppercase mb-4">
//             Curated Collections
//           </h1>
//           <p className="text-studio-100/60 font-light max-w-xl mx-auto">
//             Explore our precision-engineered displays, automotive prints, and atmospheric lighting.
//           </p>
//         </motion.div>

//         {/* Category Filters */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="flex flex-wrap items-center justify-center gap-4 mb-16"
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
//                 activeCategory === category
//                   ? 'bg-amber-500 text-studio-950 font-bold'
//                   : 'bg-studio-900 border border-studio-800 text-studio-100/70 hover:border-amber-500/50 hover:text-amber-400'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Product Grid */}
//         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence mode="popLayout">
//             {filteredProducts.map((product, index) => (
//               <motion.div
//                 layout
//                 key={product.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.3 , delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
//                 exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
//                 // Hover Grow Animation
//                 whileHover={{ scale: 1.05 }}
//                 className="group cursor-pointer flex flex-col bg-studio-900 rounded-2xl overflow-hidden border border-studio-800/50 hover:border-amber-500/30 transition-colors"
//               >
//                 {/* Image Container */}
//                 <div className="relative w-full h-80 overflow-hidden bg-studio-950">
//                   <img 
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
//                   />
//                   {/* Subtle overlay gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-studio-900 to-transparent opacity-60" />
//                 </div>
                
//                 {/* Product Details */}
//                 <div className="p-6 flex flex-col flex-grow">
//                   <span className="text-[10px] text-amber-500 tracking-widest uppercase mb-2">
//                     {product.category}
//                   </span>
//                   <h3 className="text-xl tracking-wide mb-4">
//                     {product.name}
//                   </h3>
//                   <div className="mt-auto flex items-center justify-between">
//                     <span className="text-studio-100/60 font-light">
//                       {product.price}
//                     </span>
//                     <button className="text-xs uppercase tracking-widest hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </section>
//     </main>
//   );
// }


















// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import Link from 'next/link';

// // Mock product data
// const allProducts = [
//   // Changed image to '/hero/hero-p5.png'
//   { id: 1, name: 'Precision Car Chamber', category: 'Car Chamber', price: '$499', description: 'Climate-controlled isolation for automotive perfection.', image: '/hero/hero-p5.png' },
  
//   { id: 2, name: 'Aero Dynamics Blueprint', category: 'Posters', price: '$89', description: 'Museum-grade archival print of hypercar aerodynamics.', image: '/posters/hero-p1.png' },
  
//   // Changed image to '/hero/hero-p1.jpg'
//   { id: 3, name: 'Neon Accent Tube', category: 'Car Tubes', price: '$120', description: 'Seamless ambient lighting with zero hot-spots.', image: '/hero/hero-p1.jpg' },
  
//   { id: 4, name: 'Carbon Fiber Display', category: 'Car Chamber', price: '$650', description: 'Forged carbon base with tempered glass enclosure.', image: '/hero/hero-p2.png' },
//   { id: 5, name: 'Vintage Circuit Art', category: 'Posters', price: '$75', description: 'Minimalist track layouts on matte black metal.', image: '/posters/hero-p2.png' },
//   { id: 6, name: 'Ambient Floor Tube', category: 'Car Tubes', price: '$140', description: 'Underglow synchronization for your chamber floor.', image: '/hero/hero-p4.png' }
// ];

// const categories = ['All', 'Car Chamber', 'Posters', 'Car Tubes'];

// export default function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState('All');

//   const filteredProducts = activeCategory === 'All' 
//     ? allProducts 
//     : allProducts.filter(item => item.category === activeCategory);

//   return (
//     <main className="relative min-h-screen bg-studio-950 text-studio-100 selection:bg-amber-500/20 selection:text-amber-400 overflow-hidden">
      
//       {/* BACKGROUND EFFECTS (The "Spazz") */}
//       {/* 1. Subtle Engineering Grid */}
//       <div 
//         className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
//           backgroundSize: '40px 40px'
//         }}
//       />
      
//       {/* 2. Floating Ambient Glow Orbs */}
//       <motion.div 
//         animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-600 rounded-full blur-[120px] z-0 pointer-events-none" 
//       />
//       <motion.div 
//         animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
//         transition={{ duration: 0.2 , repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-studio-800 rounded-full blur-[150px] z-0 pointer-events-none" 
//       />

//       {/* Navbar */}
//       <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-xl bg-studio-950/50 border-b border-studio-800/50">
//         <motion.div 
//           whileHover={{ scale: 1.1 }} 
//           className="inline-flex items-center justify-center p-1"
//         >
//           <Link href="/" className="tracking-widest text-lg font-bold uppercase flex leading-none">
//             <span className="text-amber-500">CAR</span>
//             <span className="text-studio-100">ESTICS</span>
//           </Link>
//         </motion.div>
//         <div className="flex items-center gap-8 text-xs tracking-wider uppercase text-studio-100/70">
//           <span className="text-amber-400 font-bold tracking-[0.2em] shadow-amber-500/50 drop-shadow-md">Store</span>
//         </div>
//       </nav>

//       {/* Main Content (Wrapped in z-10 to sit above backgrounds) */}
//       <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto">
        
//         {/* Cinematic Header Reveal */}
//         <div className="text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <h2 className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4 font-bold">
//               The Collection
//             </h2>
//           </motion.div>
//           <motion.h1 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-5xl md:text-7xl tracking-tighter uppercase mb-6 font-medium bg-clip-text text-transparent bg-gradient-to-b from-white to-studio-100/50"
//           >
//             Precision <br className="md:hidden" /> Engineered
//           </motion.h1>
//         </div>

//         {/* Floating Category Filters */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.2 }}
//           className="flex flex-wrap items-center justify-center gap-3 mb-16 p-2 backdrop-blur-md bg-studio-900/40 rounded-full border border-studio-800/50 w-fit mx-auto shadow-2xl"
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
//                 activeCategory === category
//                   ? 'bg-amber-500 text-studio-950 font-bold shadow-[0_0_20px_rgba(217,119,6,0.4)]'
//                   : 'text-studio-100/70 hover:text-amber-400 hover:bg-studio-800/50'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Premium Product Grid */}
//         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           <AnimatePresence mode="popLayout">
//             {filteredProducts.map((product, index) => (
//               <motion.div
//                 layout
//                 key={product.id}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
//                 exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", transition: { duration: 0.1 } }}
//                 whileHover={{ scale: 1.04, y: -5 }}
//                 className="group cursor-pointer flex flex-col bg-studio-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-studio-800/80 hover:border-amber-500/50 transition-all duration-150 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.3)]"
//               >
//                 {/* Image Container with Inner Zoom */}
//                 <div className="relative w-full h-[22rem] overflow-hidden bg-studio-950">
//                   <motion.img 
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.2, ease: "easeOut" }}
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
//                   />
//                   {/* Glassmorphism gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-900/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                  
//                   {/* Floating Price Tag */}
//                   <div className="absolute top-4 right-4 bg-studio-950/80 backdrop-blur-md border border-studio-800 px-4 py-1.5 rounded-full">
//                     <span className="text-sm font-medium text-studio-100">{product.price}</span>
//                   </div>
//                 </div>
                
//                 {/* Product Details */}
//                 <div className="p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-studio-950/50">
//                   <span className="text-[10px] text-amber-500 font-bold tracking-[0.2em] uppercase mb-3">
//                     {product.category}
//                   </span>
//                   <h3 className="text-xl tracking-wide font-medium text-studio-100 group-hover:text-amber-400 transition-colors duration-300">
//                     {product.name}
//                   </h3>
                  
//                   <div className="mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//                     <span className="text-xs uppercase tracking-widest text-amber-500 flex items-center gap-2">
//                       Explore 
//                       <span className="text-lg leading-none">&rarr;</span>
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </section>
//     </main>
//   );
// }


















// 'use client';

// import { useState, useRef } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
// import Link from 'next/link';

// // Product data mapped to your local image paths!
// const allProducts = [
//   { id: 1, name: 'Precision Car Chamber', category: 'Car Chamber', price: '$499', description: 'Climate-controlled isolation for automotive perfection.', image: '/hero/hero-p5.png' },
//   { id: 2, name: 'Aero Dynamics Blueprint', category: 'Posters', price: '$89', description: 'Museum-grade archival print of hypercar aerodynamics.', image: '/posters/hero-p1.png' },
//   { id: 3, name: 'Neon Accent Tube', category: 'Car Tubes', price: '$120', description: 'Seamless ambient lighting with zero hot-spots.', image: '/hero/hero-p1.jpg' },
//   { id: 4, name: 'Carbon Fiber Display', category: 'Car Chamber', price: '$650', description: 'Forged carbon base with tempered glass enclosure.', image: '/hero/hero-p2.png' },
//   { id: 5, name: 'Vintage Circuit Art', category: 'Posters', price: '$75', description: 'Minimalist track layouts on matte black metal.', image: '/posters/hero-p2.png' },
//   { id: 6, name: 'Ambient Floor Tube', category: 'Car Tubes', price: '$140', description: 'Underglow synchronization for your chamber floor.', image: '/hero/hero-p4.png' }
// ];

// const categories = ['All', 'Car Chamber', 'Posters', 'Car Tubes'];

// // --- INDIVIDUAL PRODUCT CARD WITH PARALLAX ---
// function ParallaxProductCard({ product }) {
//   const cardRef = useRef(null);
  
//   // Track this specific card's scroll position in the window
//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"]
//   });

//   // Move the image slightly slower than the scroll to create Parallax
//   const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

//   return (
//     <motion.div 
//       layout
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//       className="group relative w-full h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden cursor-pointer"
//     >
//       <div ref={cardRef} className="absolute inset-0 w-full h-full overflow-hidden bg-studio-950">
//         {/* The Parallax Image */}
//         <motion.img 
//           style={{ y: imageY, scale: 1.1 }} // Scale up slightly so edges don't show during parallax
//           src={product.image} 
//           alt={product.name}
//           className="w-full h-[130%] object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
//       </div>

//       {/* Text Content Overlay */}
//       <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
//         <div className="flex justify-between items-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
//           <div>
//             <motion.span layout className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
//               {product.category}
//             </motion.span>
//             <motion.h3 layout className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
//               {product.name}
//             </motion.h3>
//             <p className="text-studio-100/60 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//               {product.description}
//             </p>
//           </div>
          
//           <div className="hidden md:flex flex-col items-end">
//             <span className="text-2xl font-light text-white mb-4">{product.price}</span>
//             <button className="w-12 h-12 rounded-full border border-amber-500 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-studio-950 transition-colors duration-300">
//               <span className="text-xl leading-none">&rarr;</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState('All');

//   const filteredProducts = activeCategory === 'All' 
//     ? allProducts 
//     : allProducts.filter(item => item.category === activeCategory);

//   return (
//     <main className="relative min-h-screen bg-studio-950 text-studio-100 selection:bg-amber-500/20 selection:text-amber-400">
      
//       {/* Navbar */}
//       <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-xl bg-studio-950/70 border-b border-studio-800/50">
//         <motion.div whileHover={{ scale: 1.1 }} className="inline-flex items-center justify-center p-1">
//           <Link href="/" className="tracking-widest text-lg font-bold uppercase flex leading-none">
//             <span className="text-amber-500">CAR</span>
//             <span className="text-studio-100">ESTICS</span>
//           </Link>
//         </motion.div>
//         <div className="flex items-center gap-8 text-xs tracking-wider uppercase">
//           <span className="text-amber-500 font-bold tracking-[0.2em]">Exhibition Store</span>
//         </div>
//       </nav>

//       {/* Massive Cinematic Hero */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-studio-800/20 via-studio-950 to-studio-950 z-0" />
        
//         <div className="relative z-10 text-center flex flex-col items-center">
//           <div className="overflow-hidden mb-4">
//             <motion.h2 
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//               className="text-amber-500 text-sm tracking-[0.4em] uppercase font-bold"
//             >
//               The Archives
//             </motion.h2>
//           </div>
//           <div className="overflow-hidden">
//             <motion.h1 
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//               className="text-6xl md:text-8xl lg:text-[9rem] tracking-tighter uppercase font-medium bg-clip-text text-transparent bg-gradient-to-b from-white to-studio-100/30 leading-none"
//             >
//               Inventory
//             </motion.h1>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Layout Section */}
//       <section className="max-w-[1400px] mx-auto px-6 pb-32">
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
//         {/* LEFT: Sticky Category Menu */}
//           <div className="lg:w-1/4 relative z-20 mb-12 lg:mb-0">
//             <div className="lg:sticky lg:top-32 flex flex-wrap justify-center lg:justify-start lg:flex-col gap-x-8 gap-y-4 lg:gap-6">
              
//               <h3 className="hidden lg:block w-full text-xs text-studio-100/50 tracking-[0.2em] uppercase mb-2 border-b border-studio-800 pb-4">
//                 Filter Configurations
//               </h3>
              
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`relative flex items-center text-sm lg:text-lg tracking-widest uppercase transition-all duration-300 ${
//                     activeCategory === category
//                       ? 'text-amber-500 font-bold lg:translate-x-6'
//                       : 'text-studio-100/40 hover:text-studio-100 lg:hover:translate-x-2'
//                   }`}
//                 >
//                   {/* The dot is now absolute, so it floats next to the text without breaking spacing */}
//                   {activeCategory === category && (
//                     <motion.span 
//                       layoutId="activeDot" 
//                       className="absolute -left-6 w-2 h-2 rounded-full bg-amber-500 hidden lg:block" 
//                     />
//                   )}
//                   {category}
//                 </button>
//               ))}
              
//             </div>
//           </div>

//           {/* RIGHT: Massive Parallax Products List */}
//           <div className="lg:w-3/4 flex flex-col gap-16 md:gap-32">
//             <AnimatePresence mode="popLayout">
//               {filteredProducts.map((product) => (
//                 <ParallaxProductCard key={product.id} product={product} />
//               ))}
//             </AnimatePresence>
            
//             {filteredProducts.length === 0 && (
//               <div className="h-[40vh] flex items-center justify-center text-studio-100/40 tracking-widest uppercase">
//                 No items in this configuration.
//               </div>
//             )}
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }



















// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import Link from 'next/link';

// // Mock product data with full descriptions for the modal
// const allProducts = [
//   { 
//     id: 1, 
//     name: 'Precision Car Chamber', 
//     category: 'Car Chamber', 
//     price: '$499', 
//     description: 'Climate-controlled isolation engineered for automotive perfection. Protects museum-grade finishes from micro-dust, humidity fluctuations, and static accumulation.', 
//     image: '/hero/hero-p5.png' 
//   },
//   { 
//     id: 2, 
//     name: 'Aero Dynamics Blueprint', 
//     category: 'Posters', 
//     price: '$89', 
//     description: 'Museum-grade archival print mapping hypercar aerodynamic channels and downforce vectors on heavyweight matte canvas stock.', 
//     image: '/posters/hero-p1.png' 
//   },
//   { 
//     id: 3, 
//     name: 'Neon Accent Tube', 
//     category: 'Car Tubes', 
//     price: '$120', 
//     description: 'Seamless ambient lighting delivering uniform illumination with absolute zero hot-spots. Fully dimmable via custom controller integration.', 
//     image: '/hero/hero-p1.jpg' 
//   },
//   { 
//     id: 4, 
//     name: 'Carbon Fiber Display', 
//     category: 'Car Chamber', 
//     price: '$650', 
//     description: 'Forged carbon fiber structural base paired with an optically clear, tempered glass enclosure designed to showcase elite scale models.', 
//     image: '/hero/hero-p2.png' 
//   },
//   { 
//     id: 5, 
//     name: 'Vintage Circuit Art', 
//     category: 'Posters', 
//     price: '$75', 
//     description: 'Minimalist legendary race track layouts etched directly onto brushed matte black aerospace-grade aluminum plates.', 
//     image: '/posters/hero-p2.png' 
//   },
//   { 
//     id: 6, 
//     name: 'Ambient Floor Tube', 
//     category: 'Car Tubes', 
//     price: '$140', 
//     description: 'Low-profile underglow matrix designed for seamless synchronization with your display chamber floor perimeter.', 
//     image: '/hero/hero-p4.png' 
//   }
// ];

// const categories = ['All', 'Car Chamber', 'Posters', 'Car Tubes'];

// export default function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const filteredProducts = activeCategory === 'All' 
//     ? allProducts 
//     : allProducts.filter(item => item.category === activeCategory);

//   return (
//     <main className="relative min-h-screen bg-studio-950 text-studio-100 selection:bg-amber-500/20 selection:text-amber-400 overflow-hidden">
      
//       {/* BACKGROUND EFFECTS */}
//       <div 
//         className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
//           backgroundSize: '40px 40px'
//         }}
//       />
      
//       <motion.div 
//         animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-600 rounded-full blur-[120px] z-0 pointer-events-none" 
//       />
//       <motion.div 
//         animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
//         transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-studio-800 rounded-full blur-[150px] z-0 pointer-events-none" 
//       />

//       {/* Navbar */}
//       <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-xl bg-studio-950/50 border-b border-studio-800/50">
//         <motion.div 
//           whileHover={{ scale: 1.2 }} 
//           className="inline-flex items-center justify-center p-1"
//         >
//           <Link href="/" className="tracking-tighter text-xl font-medium uppercase flex leading-none">
//             <span className="text-studio-100">CAR</span>
//             <span className="text-amber-500">ESTICS</span>
//           </Link>
//         </motion.div>
//         <div className="flex items-center gap-8 text-xs tracking-wider uppercase text-studio-100/70">
//           <span className="text-amber-400 font-bold tracking-[0.2em] shadow-amber-500/50 drop-shadow-md">Store</span>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto">
        
//         {/* Cinematic Header Reveal */}
//         <div className="text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <h2 className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4 font-bold">
//               The Collection
//             </h2>
//           </motion.div>
//           <motion.h1 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-5xl md:text-7xl tracking-tighter uppercase mb-6 font-medium bg-clip-text text-transparent bg-gradient-to-b from-white to-studio-100/50"
//           >
//             Gallery of <br className="md:hidden" /> Motion
//           </motion.h1>
//         </div>

//         {/* Floating Category Filters */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.2 }}
//           className="flex flex-wrap items-center justify-center gap-3 mb-16 p-2 backdrop-blur-md bg-studio-900/40 rounded-full border border-studio-800/50 w-fit mx-auto shadow-2xl"
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
//                 activeCategory === category
//                   ? 'bg-amber-500 text-studio-950 font-bold shadow-[0_0_20px_rgba(217,119,6,0.4)]'
//                   : 'text-studio-100/70 hover:text-amber-400 hover:bg-studio-800/50'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Premium Product Grid */}
//         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           <AnimatePresence mode="popLayout">
//             {filteredProducts.map((product, index) => (
//               <motion.div
//                 layout
//                 key={product.id}
//                 onClick={() => setSelectedProduct(product)}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
//                 exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", transition: { duration: 0.1 } }}
//                 whileHover={{ scale: 1.04, y: -5 }}
//                 className="group cursor-pointer flex flex-col bg-studio-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-studio-800/80 hover:border-amber-500/50 transition-all duration-150 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.3)]"
//               >
//                 {/* Image Container with Inner Zoom */}
//                 <div className="relative w-full h-[22rem] overflow-hidden bg-studio-950">
//                   <motion.img 
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.2, ease: "easeOut" }}
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-150"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-900/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-0" />
                  
//                   <div className="absolute top-4 right-4 bg-studio-950/80 backdrop-blur-md border border-studio-800 px-4 py-1.5 rounded-full">
//                     <span className="text-sm font-medium text-studio-100">{product.price}</span>
//                   </div>
//                 </div>
                
//                 {/* Product Details */}
//                 <div className="p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-studio-950/50">
//                   <span className="text-[10px] text-amber-500 font-bold tracking-[0.2em] uppercase mb-3">
//                     {product.category}
//                   </span>
//                   <h3 className="text-xl tracking-wide font-medium text-studio-100 group-hover:text-amber-400 transition-colors duration-300">
//                     {product.name}
//                   </h3>
                  
//                   <div className="mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//                     <span className="text-xs uppercase tracking-widest text-amber-500 flex items-center gap-2">
//                       Explore 
//                       <span className="text-lg leading-none">&rarr;</span>
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </section>

//       {/* --- CINEMATIC PRODUCT DETAIL MODAL --- */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            
//             {/* Backdrop Blur Fade */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedProduct(null)}
//               className="absolute inset-0 bg-studio-950/80 backdrop-blur-md"
//             />

//             {/* Modal Content Box */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
//               className="relative z-10 w-full max-w-5xl bg-black border border-studio-800 rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-studio-950/80 border border-studio-800 text-studio-100/70 mo:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all duration-200"
//               >
//                 ✕
//               </button>

//               {/* Left Side: Product Image */}
//               <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px] bg-studio-950 overflow-hidden">
//                 <img 
//                   src={selectedProduct.image} 
//                   alt={selectedProduct.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-studio-950/60 via-transparent to-transparent lg:hidden" />
//               </div>

//               {/* Right Side: Information & Action Buttons */}
//               <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-studio-900/90">
//                 <div>
//                   <span className="text-xs text-amber-500 font-bold tracking-[0.25em] uppercase mb-3 block">
//                     {selectedProduct.category}
//                   </span>
//                   <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">
//                     {selectedProduct.name}
//                   </h2>
//                   <div className="text-2xl font-light text-amber-400 mb-6">
//                     {selectedProduct.price}
//                   </div>
//                   <p className="text-studio-100/70 text-sm leading-relaxed mb-8">
//                     {selectedProduct.description}
//                   </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-studio-800">
//                   <button 
//                     onClick={() => alert(`Added ${selectedProduct.name} to cart.`)}
//                     className="flex-1 py-4 px-6 rounded-full border border-amber-500/50 hover:border-amber-500 text-amber-400 hover:bg-amber-500/10 text-xs uppercase tracking-widest font-bold transition-all duration-200 text-center"
//                   >
//                     Add to Cart
//                   </button>
//                   <button 
//                     onClick={() => alert(`Proceeding to checkout for ${selectedProduct.name}`)}
//                     className="flex-1 py-4 px-6 rounded-full bg-amber-500 hover:bg-amber-400 text-studio-950 text-xs uppercase tracking-widest font-bold transition-all duration-200 text-center shadow-[0_0_20px_rgba(217,119,6,0.3)]"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>

//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//     </main>
//   );
// }






















'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

// Mock product data with full descriptions for the modal
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

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(item => item.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-studio-950 text-studio-100 selection:bg-amber-500/20 selection:text-amber-400 overflow-hidden">
      
    {/* BACKGROUND EFFECTS
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* --- DELETE OR REPLACE THESE TWO MOTION BLOBS THAT CAUSE THE FLASH --- */}
      
    {/* Soft, non-flashing ambient background wash */}
     {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-amber-600/[0.03] rounded-full blur-[150px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-studio-900/[0.1] rounded-full blur-[180px] z-0 pointer-events-none" /> */}
      
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
        
        {/* Cinematic Header Reveal with Rich Architectural Backdrop */}
        <div className="relative text-center mb-20 py-20 px-6 rounded-3xl overflow-hidden border border-studio-800/60 bg-gradient-to-b from-studio-900/80 via-studio-950/60 to-studio-950/20 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_60px_rgba(0,0,0,0.7)]">
          
          {/* Subtle Cyber/Studio Grid Pattern overlay inside header */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Dynamic Center Backlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[140px] bg-amber-500/15 blur-[100px] pointer-events-none rounded-full" />
          
          {/* Top Edge Accent Line */}
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
                {/* Image Container with Inner Zoom */}
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
                
                {/* Product Details */}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            
            {/* Backdrop Blur Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-studio-950/80 backdrop-blur-md"
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-5xl bg-studio-900 border border-studio-800 rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-studio-950/80 border border-studio-800 text-studio-100/70 hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all duration-200"
              >
                ✕
              </button>

              {/* Left Side: Product Image */}
              <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px] bg-studio-950 overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-950/60 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Right Side: Information & Action Buttons */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-black">
                <div>
                  <span className="text-xs text-amber-500 font-bold tracking-[0.25em] uppercase mb-3 block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">
                    {selectedProduct.name}
                  </h2>
                  <div className="text-2xl font-light text-amber-400 mb-6">
                    {selectedProduct.price}
                  </div>
                  <p className="text-studio-100/70 text-sm leading-relaxed mb-8">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-studio-800">
                  <button 
                    onClick={() => alert(`Added ${selectedProduct.name} to cart.`)}
                    className="flex-1 py-4 px-6 rounded-full border border-amber-500/50 hover:border-amber-500 text-amber-400 hover:bg-amber-500/10 text-xs uppercase tracking-widest font-bold transition-all duration-200 text-center"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => alert(`Proceeding to checkout for ${selectedProduct.name}`)}
                    className="flex-1 py-4 px-6 rounded-full bg-amber-500 hover:bg-amber-400 text-studio-950 text-xs uppercase tracking-widest font-bold transition-all duration-200 text-center shadow-[0_0_20px_rgba(217,119,6,0.3)]"
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