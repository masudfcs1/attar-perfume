"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const AttarShowcase = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const perfumebrands = [
    {
      id: 1,
      name: "Amira Luxe",
      tagline: "The Essence of Arabian Dreams",
      description: "Handcrafted attar blending precious oud, rose, and saffron with modern elegance.",
      price: "$185",
      notes: ["Oud", "Rose", "Saffron", "Musk"],
      image: "/luxury-golden-attar-perfume-bottle-oud-rose.jpg",
      color: "from-amber-900 to-yellow-600",
    },
    {
      id: 2,
      name: "Noor Night",
      tagline: "Mystique in Every Drop",
      description:
        "A mysterious blend of black oud, jasmine, and vanilla creating an intoxicating nocturnal fragrance.",
      price: "$175",
      notes: ["Black Oud", "Jasmine", "Vanilla", "Amber"],
      image: "/premium-attar-perfume-dark-glass-bottle-oud.jpg",
      color: "from-slate-900 to-blue-900",
    },
    {
      id: 3,
      name: "Raya Gold",
      tagline: "Heritage of Excellence",
      description: "Traditional attar recipe passed down for generations, featuring raw oud and natural florals.",
      price: "$220",
      notes: ["Raw Oud", "Jasmine", "Sandalwood", "Vetiver"],
      image: "/ornate-gold-attar-bottle-heritage-perfume.jpg",
      color: "from-yellow-700 to-orange-600",
    },
    {
      id: 4,
      name: "Zahra Bloom",
      tagline: "Floral Poetry",
      description: "Delicate balance of fresh florals with deep woody undertones, perfect for sophisticated moments.",
      price: "$165",
      notes: ["Tuberose", "Ylang Ylang", "Sandalwood", "Rose"],
      image: "/elegant-crystal-attar-bottle-flower-floral.jpg",
      color: "from-pink-600 to-purple-600",
    },
    {
      id: 5,
      name: "Sultan's Pride",
      tagline: "Royal Heritage",
      description: "A commanding presence with bold oud, tobacco leaf, and leather for the distinguished gentleman.",
      price: "$195",
      notes: ["Oud", "Tobacco", "Leather", "Cedarwood"],
      image: "/dark-attar-bottle-leather-tobacco-masculine.jpg",
      color: "from-amber-800 to-red-800",
    },
    {
      id: 6,
      name: "Jasmine Veil",
      tagline: "Whispered Elegance",
      description: "Pure jasmine essence layered with delicate spices and soft musk for timeless charm.",
      price: "$155",
      notes: ["Jasmine", "Cardamom", "Musk", "Benzoin"],
      image: "/frosted-glass-attar-bottle-jasmine-white.jpg",
      color: "from-white to-gray-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-accent/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-amber-300"></div>
            <h1 className="text-2xl font-serif font-bold text-white">Attar Collection</h1>
          </motion.div>
          <div className="flex gap-8 items-center text-sm">
            <motion.a
              href="#collection"
              whileHover={{ color: "#d4af37" }}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Collection
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ color: "#d4af37" }}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              About
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-black rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Shop
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              x: mousePosition.x / 10,
              y: mousePosition.y / 10,
            }}
            transition={{ type: "spring", damping: 30 }}
            className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              x: -mousePosition.x / 10,
              y: -mousePosition.y / 10,
            }}
            transition={{ type: "spring", damping: 30 }}
            className="absolute bottom-20 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center z-10"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-yellow-400 mb-4 font-semibold"
          >
            Luxury Fragrance Heritage
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold mb-6 text-white text-pretty leading-tight"
          >
            Timeless Attar Excellence
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Experience the ancient art of attar perfumery meets modern luxury. Handcrafted fragrances that transcend
            time.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(250, 204, 21, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-black rounded-full font-semibold text-lg"
            >
              Explore Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold text-lg hover:bg-yellow-400/10 transition-colors"
            >
              Discover Story
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="mt-16"
          >
            <svg className="w-8 h-8 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-24 px-4 sm:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-yellow-400 mb-4 font-semibold">Our Collection</p>
            <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-4">Premium Attar Selection</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our curated selection of luxury attars, each crafted with the finest ingredients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {perfumebrands.map((brand, idx) => (
              <motion.button
                key={brand.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === idx
                    ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-black shadow-lg"
                    : "bg-gray-900 border-2 border-gray-700 text-gray-300 hover:border-yellow-400/50"
                }`}
              >
                {brand.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Product Display */}
          <motion.div
            key={perfumebrands[activeTab].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 p-12 rounded-3xl border border-yellow-400/20`}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center h-96"
            >
              <img
                src={perfumebrands[activeTab].image || "/placeholder.svg"}
                alt={perfumebrands[activeTab].name}
                className="h-full w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <p className="text-sm uppercase tracking-widest text-yellow-400 mb-2 font-semibold">
                {perfumebrands[activeTab].tagline}
              </p>
              <h3 className="text-4xl sm:text-5xl font-serif font-bold mb-3 text-white text-pretty">
                {perfumebrands[activeTab].name}
              </h3>
              <p className="text-lg text-yellow-300/80 font-serif mb-4 italic">{perfumebrands[activeTab].tagline}</p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">{perfumebrands[activeTab].description}</p>

              <div className="mb-8">
                <p className="text-sm font-semibold mb-3 uppercase tracking-wide text-gray-200">Fragrance Notes:</p>
                <div className="flex flex-wrap gap-2">
                  {perfumebrands[activeTab].notes.map((note, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full text-sm font-medium text-yellow-300"
                    >
                      {note}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div>
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="text-3xl font-bold text-yellow-400">{perfumebrands[activeTab].price}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-black rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          </motion.div>

          {/* All Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {perfumebrands.map((brand, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(250, 204, 21, 0.1)" }}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-colors group"
              >
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    src={brand.image}
                    alt={brand.name}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-yellow-400/70 mb-2 font-semibold">
                    {brand.tagline}
                  </p>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">{brand.name}</h4>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{brand.description}</p>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-yellow-400">{brand.price}</p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition-colors"
                    >
                      View
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-8 lg:px-16 bg-background border-t border-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-96 rounded-3xl overflow-hidden"
            >
              <img
                src="/luxury-attar-bottles-collection-display.jpg"
                alt="Attar Collection"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-sm uppercase tracking-widest text-amber-600 mb-4 font-semibold">Our Heritage</p>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-pretty">
                Centuries of Fragrance Artistry
              </h2>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                Our attar collection honors ancient perfumery traditions while embracing contemporary luxury. Each
                fragrance is meticulously crafted using only the finest botanical essences and precious ingredients.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Pure Ingredients", desc: "100% natural oud and botanical extracts" },
                  { title: "Artisanal Process", desc: "Hand-blended by master perfumers" },
                  { title: "Lasting Elegance", desc: "Fragrance that lingers for 12+ hours" },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring" }}
                    >
                      <div className="w-3 h-3 rounded-full bg-amber-600"></div>
                    </motion.div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-secondary">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          >
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">Attar Collection</h3>
              <p className="text-gray-400">Luxury fragrance heritage meets modern elegance.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 text-center text-gray-500"
          >
            <p>&copy; 2025 Attar Collection. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default AttarShowcase
