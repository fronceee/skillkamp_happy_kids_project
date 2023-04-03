import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PromoCodeBar() {
  const promoTexts = [
    "Get 10% Off - Use Coupon Code HAPPY123",
    "Free Shipping Over $50",
  ];
  const [textIndex, setTextIndex] = React.useState(0);

  function PromoText({ index }) {
    console.log(index);
    React.useState(() => {
      return () => {
        console.log("unmounted");
      };
    }, []);
    return (
      <AnimatePresence>
        <motion.div
          className="py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs opacity-1 tracking-[0.25em] md:tracking-[0.3em] font-light md:text-base">
            {promoTexts[index]}
          </p>
        </motion.div>
      </AnimatePresence>
    );
  }

  React.useEffect(() => {
    const promoTextslength = promoTexts.length;
    const textInterval = setInterval(() => {
      if (textIndex === promoTextslength - 1) {
        setTextIndex(0);
      } else {
        setTextIndex((prev) => (prev += 1));
      }
    }, 6000);
    return () => clearInterval(textInterval);
  }, [textIndex]);

  return (
    <div className="w-screen flex item-center justify-center bg-main-1 text-main-2 ">
      <PromoText index={textIndex} />
    </div>
  );
}
