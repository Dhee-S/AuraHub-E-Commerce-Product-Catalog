import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DealsCarousel = () => {
  const deals = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Get 50% off on selected items",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Flash Deal",
      description: "24 Hour Deal - 30% Off Electronics",
      bgColor: "bg-purple-500",
    },
    {
      id: 3,
      title: "New Arrival",
      description: "Check out our latest collection",
      bgColor: "bg-green-500",
    },
    {
      id: 4,
      title: "Special Offer",
      description: "Buy 1 Get 1 Free on Accessories",
      bgColor: "bg-red-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-48 overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-r from-white via-transparent to-white z-10" />
      <div className="relative w-full h-full flex">
        {deals.map((deal, index) => {
          const position = index - currentIndex;
          return (
            <motion.div
              key={deal.id}
              className={`absolute w-64 h-32 p-4 rounded-lg ${deal.bgColor} text-white flex flex-col justify-center items-center text-center`}
              animate={{
                x: `${position * 100}%`,
                scale: position === 0 ? 1 : 0.8,
                opacity: Math.abs(position) < 2 ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
              <p className="text-sm">{deal.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DealsCarousel;