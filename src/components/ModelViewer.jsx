import { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const ModelViewer = ({
  src,
  alt = "A 3D model",
  autoRotate = true,
  cameraControls = true,
  loading = "lazy",
  arModes = "webxr scene-viewer quick-look",
  poster,
  className = "w-full h-full",
  style = {},
  onLoad,
  onError,
  // Performance optimization props
  disableZoom = false,
  maxCameraOrbit = "auto auto auto",
  minCameraOrbit = "auto auto auto", 
  autoPlay = false,
  interactionPrompt = "none",
  // Animation props
  animationName = "",
  enableAnimations = true,
  showAnimationControls = false,
  ...props
}) => {
  const modelViewerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [availableAnimations, setAvailableAnimations] = useState([]);
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useIsMobile();

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const currentRef = modelViewerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasLoaded]);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    
    if (modelViewer) {
      // Add event listeners
      const handleLoad = (event) => {
        console.log('Model loaded successfully');
        // Hide progress bar after model loads
        const progressBar = modelViewer.querySelector('[slot="progress-bar"]');
        if (progressBar) {
          progressBar.style.display = 'none';
        }
        
        // Check for available animations
        if (enableAnimations && modelViewer.availableAnimations) {
          setAvailableAnimations(modelViewer.availableAnimations);
          console.log('Available animations:', modelViewer.availableAnimations);
        }
        
        // Mobile-specific enhancements
        if (isMobile) {
          // Enable better touch interactions
          modelViewer.style.touchAction = 'manipulation';
          modelViewer.style.cursor = 'grab';
          
          // Add touch event listeners for better mobile experience
          const handleTouchStart = () => {
            modelViewer.style.cursor = 'grabbing';
          };
          
          const handleTouchEnd = () => {
            modelViewer.style.cursor = 'grab';
          };
          
          modelViewer.addEventListener('touchstart', handleTouchStart);
          modelViewer.addEventListener('touchend', handleTouchEnd);
          
          return () => {
            modelViewer.removeEventListener('touchstart', handleTouchStart);
            modelViewer.removeEventListener('touchend', handleTouchEnd);
          };
        }
        
        if (onLoad) onLoad(event);
      };

      const handleError = (event) => {
        console.error('Model failed to load:', event);
        if (onError) onError(event);
      };

      modelViewer.addEventListener('load', handleLoad);
      modelViewer.addEventListener('error', handleError);

      return () => {
        modelViewer.removeEventListener('load', handleLoad);
        modelViewer.removeEventListener('error', handleError);
      };
    }
  }, [onLoad, onError, isMobile]);

  // Mobile-optimized styling
  const defaultStyle = {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: '#4a4a4a',
    borderRadius: isMobile ? '8px' : '12px',
    overflow: 'hidden',
    ...style
  };

  return (
    <model-viewer
      ref={modelViewerRef}
      src={isVisible ? src : undefined}
      alt={alt}
      auto-rotate={autoRotate && isVisible}
      camera-controls={cameraControls}
      loading={loading}
      ar-modes={arModes}
      poster={poster}
      className={className}
      style={defaultStyle}
      // Lighting and material settings - enhanced color vibrancy and contrast
      shadow-intensity={isMobile ? "0.3" : "0.4"}
      exposure={isMobile ? "0.8" : "0.75"}
      tone-mapping="neutral"
      environment-image="neutral"
      skybox-image=""
      seamless-poster=""
      // Additional lighting controls for better visibility
      min-camera-orbit={isMobile ? "auto 0deg auto" : "auto auto auto"}
      max-camera-orbit={isMobile ? "auto 180deg auto" : "auto auto auto"}
      camera-orbit={isMobile ? "0deg 60deg 120%" : "0deg 75deg 105%"}
      field-of-view={isMobile ? "35deg" : "30deg"}
      // Enhanced lighting for better material definition
      light-intensity={isMobile ? "1.2" : "1.0"}
      ambient-light-intensity={isMobile ? "0.8" : "0.6"}
      shadow-softness={isMobile ? "0.5" : "0.7"}
      // Material enhancement settings
      material-variant=""
      variant-name=""
      interaction-prompt={isMobile ? "auto" : interactionPrompt}
      auto-play={autoPlay}
      max-camera-orbit={maxCameraOrbit}
      min-camera-orbit={minCameraOrbit}
      disable-zoom={false}
      // Quality and performance settings - optimized for mobile
      render-scale={isMobile ? "0.6" : "0.8"}
      max-hotspots={isMobile ? "2" : "3"}
      quick-look-browsers="safari chrome"
      // Mobile-specific touch settings
      touch-action={isMobile ? "manipulation" : "auto"}
      camera-controls={cameraControls}
      // Animation settings
      animation-name={enableAnimations ? (animationName || currentAnimation) : ""}
      variant-name=""
      {...props}
    >
      {/* Loading indicator */}
      <div slot="progress-bar" className="progress-bar">
        <div className="update-bar"></div>
      </div>
      
      {/* Error fallback */}
      <div slot="poster" className="flex items-center justify-center h-full">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🏗️</div>
          <p>3D Model Loading...</p>
        </div>
      </div>
      
      {/* Animation Controls - Mobile optimized */}
      {showAnimationControls && availableAnimations.length > 0 && (
        <div slot="hotspot-1" className={`absolute ${isMobile ? 'bottom-2 left-2 right-2' : 'bottom-4 left-4'} bg-white/90 backdrop-blur-sm rounded-lg ${isMobile ? 'p-2' : 'p-3'} shadow-lg`}>
          <div className={`${isMobile ? 'text-xs' : 'text-sm'} font-semibold mb-2`}>Animations</div>
          <div className={`space-y-1 ${isMobile ? 'grid grid-cols-2 gap-1' : 'space-y-2'}`}>
            {availableAnimations.map((animName) => (
              <button
                key={animName}
                onClick={() => {
                  setCurrentAnimation(animName);
                  const mv = modelViewerRef.current;
                  if (mv) {
                    mv.animationName = animName;
                    mv.play();
                    setIsPlaying(true);
                  }
                }}
                className={`block w-full text-left ${isMobile ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'} rounded transition-colors ${
                  currentAnimation === animName 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isMobile ? animName.substring(0, 8) + '...' : animName}
              </button>
            ))}
            <button
              onClick={() => {
                const mv = modelViewerRef.current;
                if (mv) {
                  if (isPlaying) {
                    mv.pause();
                    setIsPlaying(false);
                  } else {
                    mv.play();
                    setIsPlaying(true);
                  }
                }
              }}
              className={`block w-full text-left ${isMobile ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'} rounded bg-gray-100 hover:bg-gray-200 ${isMobile ? 'col-span-2' : ''}`}
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>
      )}
    </model-viewer>
  );
};

export default ModelViewer;
