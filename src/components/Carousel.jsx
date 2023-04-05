import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Carousel() {
  const [images, setImages] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function ProgressDots({ index }) {
    const dotStyle = "w-3 h-3 bg-main-1 rounded-lg";
    return (
      <div className="flex gap-4">
        {images.map((item, dotIndex) => (
          <div className={`${dotStyle} ${dotIndex === index ? "opacity-80" :  "opacity-40"}`}></div>
        ))}
      </div>
    );
  }
  function ImageCarousel({ src }) {
    return (
      <AnimatePresence className="w-screen h-full select-none">
        <motion.div
          className="w-full h-[300px] lg:h-[600px]"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <img className="w-full h-full object-cover object-top" src={src} />
        </motion.div>
      </AnimatePresence>
    );
  }

  const goNext = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev += 1));
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    }
  };

  const goBack = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev -= 1));
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    }
  };

  React.useState(() => {
    const controller = new AbortController();
    fetch(`https://skillkamp-api.com/v1/api/images/landing`)
      .then((res) => res.json())
      .then((data) => {
        data["detail"].forEach((img) => {
          setImages((prev) => [...prev, img]);
        });
      });
    return () => controller.abort();
  }, []);

  React.useEffect(() => {
    const imagesLength = images.length;
    const imagesInterval = setInterval(() => {
      if (currentIndex === imagesLength - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => (prev += 1));
      }
    }, 6000);
    return () => clearInterval(imagesInterval);
  }, [currentIndex]);

  return (
    <div className="relative w-screen">
      <button onClick={goBack} className="absolute left-[5%] top-1/2 z-10">
        Back
      </button>
      <ImageCarousel src={images[currentIndex]} />
      <div className="flex justify-center relative bottom-10">
        <ProgressDots index={currentIndex} />
      </div>
      <button onClick={goNext} className="absolute right-[5%] top-1/2">
        Next
      </button>
    </div>
  );
}
