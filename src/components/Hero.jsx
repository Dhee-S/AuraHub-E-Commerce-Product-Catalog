import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <div className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 1000 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8 opacity-20"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-primary-500 rounded-lg p-6 w-64 h-32"
              >
                <h3 className="text-white font-bold">Special Offer #{i + 1}</h3>
                <p className="text-white/80">Up to 50% off!</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
        >
          Discover Amazing Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 mb-8"
        >
          Shop the latest trends with our curated collection of premium products.
          Enjoy fast shipping and exceptional customer service.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="btn btn-primary text-lg px-8 py-3"
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
}