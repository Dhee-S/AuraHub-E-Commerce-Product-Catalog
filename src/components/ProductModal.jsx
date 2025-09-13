import { motion } from 'framer-motion';
import { XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function ProductModal({
  product,
  onClose,
  quantity,
  setQuantity,
  onAddToCart,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl p-6 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Product image */}
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product details */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="text-3xl font-bold text-primary-600 mb-6">
            ${product.price.toFixed(2)}
          </div>

          {/* Quantity selector */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-gray-600">Quantity:</span>
            <div className="flex items-center">
              {quantity === 1 ? (
                <button
                  onClick={() => setQuantity(0)}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setQuantity(q => q - 1)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <MinusIcon className="h-5 w-5" />
                </button>
              )}
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Add to cart button */}
          <button
            onClick={onAddToCart}
            disabled={quantity === 0}
            className="btn btn-primary mt-auto"
          >
            Add to Cart
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}