import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function ImageCarousel({
  images = [],
  baseWidth = 500,
  autoplay = true,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
  round = false,
  showArrows = true,
  showDots = true,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...images, images[0]] : images;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === images.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    images.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(images.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      },
    };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      if (prev === carouselItems.length - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return loop ? carouselItems.length - 1 : prev;
      }
      return prev - 1;
    });
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full flex justify-center">
      <div
        ref={containerRef}
        className={`relative overflow-hidden p-4 ${
          round
            ? "rounded-full border border-white"
            : "rounded-[24px] border border-[#222]"
        }`}
        style={{
          width: `${baseWidth}px`,
          ...(round && { height: `${baseWidth}px` }),
        }}
      >
        <motion.div
          className="flex"
          drag="x"
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationComplete={handleAnimationComplete}
        >
          {carouselItems.map((image, index) => {
            const range = [
              -(index + 1) * trackItemOffset,
              -index * trackItemOffset,
              -(index - 1) * trackItemOffset,
            ];
            const outputRange = [90, 0, -90];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotateY = useTransform(x, range, outputRange, { clamp: false });
            return (
              <motion.div
                key={index}
                className={`relative shrink-0 flex flex-col ${
                  round
                    ? "items-center justify-center text-center bg-[#060010] border-0"
                    : "items-center justify-center bg-[#222] border border-[#222] rounded-[12px]"
                } overflow-hidden cursor-grab active:cursor-grabbing`}
                style={{
                  width: itemWidth,
                  height: round ? itemWidth : "auto",
                  minHeight: "350px",
                  rotateY: rotateY,
                  ...(round && { borderRadius: "50%" }),
                }}
                transition={effectiveTransition}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.caption || `Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <IoChevronBack className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <IoChevronForward className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {showDots && (
          <div
            className={`flex w-full justify-center ${
              round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
            }`}
          >
            <div className="mt-4 flex w-[150px] justify-between px-8">
              {images.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                    currentIndex % images.length === index
                      ? round
                        ? "bg-white"
                        : "bg-[#333333]"
                      : round
                      ? "bg-[#555]"
                      : "bg-[rgba(51,51,51,0.4)]"
                  }`}
                  animate={{
                    scale: currentIndex % images.length === index ? 1.2 : 1,
                  }}
                  onClick={() => setCurrentIndex(index)}
                  transition={{ duration: 0.15 }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Captions - Below the carousel, centered */}
      <div className="absolute top-full mt-6 w-full text-center">
        <p className="text-lg font-medium text-gray-800">
          {carouselItems[currentIndex % images.length]?.caption || `Image ${currentIndex % images.length + 1}`}
        </p>
      </div>

      {/* Image Counter - Centered */}
      <div className="absolute top-full mt-20 w-full text-center">
        <p className="text-sm text-gray-600">
          {currentIndex % images.length + 1} of {images.length}
        </p>
      </div>
    </div>
  );
}
