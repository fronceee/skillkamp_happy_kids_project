import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Carousel() {
  const [images, setImages] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  function ImageCarousel({ src }) {
    return (
      <AnimatePresence className="w-screen h-full">
        <motion.div
          className="w-full h-96 lg:h-[600px]"
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

  function goNext() {
    setCurrentIndex(prev => prev += 1);

    if (currentIndex === images.length - 1) {
        setCurrentIndex(0)
    }
  }

  function goBack() {
    setCurrentIndex(prev => prev -= 1);
    if (currentIndex === 0) {
        setCurrentIndex(images.length - 1)
    }
  }


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
    <div>
      <button onClick={() => goBack()}>Back</button>
      <ImageCarousel src={images[currentIndex]} />
      <button onClick={() => goNext()}>Next</button>
    </div>
  );
}
