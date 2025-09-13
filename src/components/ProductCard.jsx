import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <motion.div
        className="card p-4 cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <h3 className="font-heading font-semibold text-gray-800 mb-2 truncate">
          {product.title}
        </h3>
        <p className="text-primary-600 font-bold">
          ${product.price.toFixed(2)}
        </p>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <ProductModal
            product={product}
            onClose={() => setIsModalOpen(false)}
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={() => {
              addToCart(product, quantity);
              setIsModalOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}