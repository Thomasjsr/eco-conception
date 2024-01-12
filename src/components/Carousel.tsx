import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FunctionComponent<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-full transition-transform duration-700">
      <img
        src={images[currentImageIndex]}
        srcSet={`${images[currentImageIndex]} 1x, ${images[currentImageIndex]} 2x`}
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
        className="object-cover h-full w-screen"
        alt={`Image ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default Carousel;
