import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";
import { useTheme } from "../contexts/ThemeContext";

const PROJECTS = [
  {
    id: "1",
    img: "/personal-website/CNC_Final_CAD.png",
    url: "/projects/cnc-final-cad",
    title: "CNC Machine Design"
  },
  {
    id: "2",
    img: "/personal-website/crosswalk_model.png",
    url: "/projects/crosswalk-model",
    title: "Walkable Cities"
  },
  {
    id: "3",
    img: "/personal-website/Arduino/digital_thermometer.jpg",
    url: "/projects/embedded-systems",
    title: "Intro to Embedded Systems"
  },
  {
    id: "4",
    img: "/personal-website/gear_box.jpg",
    url: "/projects/gear-box",
    title: "Gear Box"
  },
  {
    id: "5",
    img: "/personal-website/piston(2).png",
    url: "/projects/piston",
    title: "Piston Assembly"
  },
  {
    id: "6",
    img: "/personal-website/robotic_hand/Full Working setup.JPG",
    url: "/projects/robotic-hand",
    title: "Robotic Hand"
  },
  {
    id: "7",
    img: "/personal-website/steering_assm.PNG",
    url: "/projects/steering-assembly",
    title: "Steering Assembly"
  },
  {
    id: "8",
    img: "/personal-website/skin-classifier-images/Primary model Architecture.jpg",
    url: "/projects/skin-cancer-classification",
    title: "Skin Cancer Classification"
  }
];

const RollingGallery = ({
  autoplay = true, // Set default to true
  pauseOnHover = true, // Enable pause on hover by default
  projects = [],
}) => {
  const { isDark } = useTheme();
  const displayProjects = projects.length > 0 ? projects : PROJECTS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjusted cylinder dimensions for better spacing
  const cylinderWidth = isScreenSizeSm ? 1400 : 2200; // Increased width
  const faceCount = displayProjects.length;
  const faceWidth = (cylinderWidth / faceCount) * 0.8; // Reduced multiplier for better spacing
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  const handlePrevious = () => {
    controls.stop();
    const currentAngle = rotation.get();
    const newAngle = currentAngle + (360 / faceCount);
    rotation.set(newAngle);
    
    if (autoplay) {
      startInfiniteSpin(newAngle);
    }
  };

  const handleNext = () => {
    controls.stop();
    const currentAngle = rotation.get();
    const newAngle = currentAngle - (360 / faceCount);
    rotation.set(newAngle);
    
    if (autoplay) {
      startInfiniteSpin(newAngle);
    }
  };

  return (
    <div className="relative w-full">
      {/* Previous button */}
      <button
        onClick={handlePrevious}
        className={`absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm ${
          isDark 
            ? 'bg-white hover:bg-gray-100 text-black' 
            : 'bg-black/80 hover:bg-black text-white'
        }`}
        aria-label="Previous image"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className={`absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm ${
          isDark 
            ? 'bg-white hover:bg-gray-100 text-black' 
            : 'bg-black/80 hover:bg-black text-white'
        }`}
        aria-label="Next image"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Main gallery container */}
      <div className="relative h-[200px] w-full overflow-hidden">
        {/* Left gradient overlay - adaptive to theme */}
        <div
          className="absolute top-0 left-0 h-full w-[24px] z-10 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
              : "linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)",
          }}
        />
        
        {/* Right gradient overlay - adaptive to theme */}
        <div
          className="absolute top-0 right-0 h-full w-[24px] z-10 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
              : "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)",
          }}
        />

        <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
          <motion.div
            drag="x"
            dragElastic={0.1}
            dragConstraints={false}
            whileDrag={{ cursor: "grabbing" }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={controls}
            onUpdate={handleUpdate}
            style={{
              transform: transform,
              rotateY: rotation,
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            className="flex min-h-[160px] cursor-grab items-center justify-center [transform-style:preserve-3d] active:cursor-grabbing"
          >
            {displayProjects.map((project, i) => (
              <div
                key={project.id}
                className="group absolute flex h-fit items-center justify-center p-[2%] [backface-visibility:hidden] md:p-[1.5%]"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${(360 / faceCount) * i
                    }deg) translateZ(${radius}px)`,
                }}
              >
                <Link 
                  to={project.url}
                  className="block transition-transform duration-300 ease-out group-hover:scale-105"
                  onClick={() => {
                    // Stop the rotation when clicking on a project
                    controls.stop();
                    // Scroll to top of the page
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-[110px] w-[280px] rounded-[12px] border-[2px] border-white object-cover
                               sm:h-[120px] sm:w-[280px]"
                  />
                  {/* Optional: Add project title overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px] flex items-center justify-center">
                    <span className="text-white text-sm font-medium text-center px-2">
                      {project.title}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RollingGallery;
