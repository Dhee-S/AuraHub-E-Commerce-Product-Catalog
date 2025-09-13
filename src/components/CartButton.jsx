import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon, TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const CartButton = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = () => {
    if (quantity === 0) {
      setIsOpen(true);
    } else {
      onAddToCart(product, quantity);
    }
  };

  const updateQuantity = (newQuantity) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      if (newQuantity === 0) {
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
      >
        <ShoppingCartIcon className="w-5 h-5" />
        <span>{quantity === 0 ? 'Add to Cart' : `In Cart (${quantity})`}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute mt-2 p-4 bg-white rounded-lg shadow-lg z-50 w-64"
          >
            <div className="flex items-center justify-between">
              <button
                onClick={() => updateQuantity(0)}
                className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-3">
                {quantity > 1 && (
                  <button
                    onClick={() => updateQuantity(quantity - 1)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
                  >
                    <MinusIcon className="w-5 h-5" />
                  </button>
                )}
                <span className="font-medium text-lg">{quantity || 1}</span>
                <button
                  onClick={() => updateQuantity(quantity + 1)}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
                >
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartButton;