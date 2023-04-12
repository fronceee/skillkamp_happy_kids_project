import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import { v4 as id } from "uuid";
import Button from "./Button";

export default function MyCarousel() {
  const [images, setImages] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function ProgressDots({ index }) {
    const dotStyle = "w-3 h-3 bg-main-1 rounded-lg";
    return (
      <div className="flex gap-4">
        {images.map((item, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => goTo(dotIndex)}
            className={`${dotStyle} ${
              dotIndex === index ? "opacity-80" : "opacity-40"
            }`}
          ></button>
        ))}
      </div>
    );
  }
  function ImageCarousel({ src, index }) {
    return (
      <AnimatePresence key={id()} className="w-full h-full">
        <motion.div
          className="w-full  md:h-[300px] lg:h-[600px]"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          key={id()}
        >
          <img
            className="w-screen h-full object-cover object-top"
            src={src}
            key={id()}
          />
          {index === 2 ? (
            <div className="absolute w-full h-full -top-6 md:top-0 flex items-center justify-center text-main-1">
              <div className="flex items-center flex-col">
                <h1 className="font-thin text-3xl md:text-5xl mb-2 md:mb-8 lg:text-7xl lg:mb-12 tracking-wider">
                  NEW COLLECTION
                </h1>
                <Button>Shop Now</Button>
              </div>
            </div>
          ) : (
            ""
          )}
        </motion.div>
        <div></div>
      </AnimatePresence>
    );
  }

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  const goNext = (e) => {
    setCurrentIndex((prev) => (prev += 1));
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    }
  };

  const goBack = (e) => {
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
    <div className="relative w-screen overflow-hidden">
      <button
        onClick={goBack}
        className="absolute left-[5%] top-[40%] md:top-[45%] z-10"
      >
        <img
          className="opacity-40 hover:opacity-100 focus:opacity-100"
          alt="back button"
          src="/assets/back_arrow.svg"
        />
      </button>
      <ImageCarousel src={images[currentIndex]} index={currentIndex} />
      <div className="flex justify-center relative bottom-7 md:bottom-8 lg:bottom-10">
        <ProgressDots index={currentIndex} />
      </div>
      <button
        onClick={goNext}
        className="absolute right-[5%] top-[40%] md:top-[45%]"
      >
        <img
          className="opacity-40 hover:opacity-100 focus:opacity-100"
          alt="next button"
          src="/assets/next_arrow.svg"
        />
      </button>
    </div>
  );
}
