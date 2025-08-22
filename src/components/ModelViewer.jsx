import { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

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
  }, [onLoad, onError]);

  const defaultStyle = {
    width: '100%',
    height: '400px',
    backgroundColor: '#4a4a4a',
    borderRadius: '12px',
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
      shadow-intensity="0.4"
      exposure="0.75"
      tone-mapping="neutral"
      environment-image="neutral"
      skybox-image=""
      seamless-poster=""
      // Additional lighting controls for better visibility
      min-camera-orbit="auto auto auto"
      max-camera-orbit="auto auto auto"
      camera-orbit="0deg 75deg 105%"
      field-of-view="30deg"
      // Enhanced lighting for better material definition
      light-intensity="1.0"
      ambient-light-intensity="0.6"
      shadow-softness="0.7"
      // Material enhancement settings
      material-variant=""
      variant-name=""
      interaction-prompt={interactionPrompt}
      auto-play={autoPlay}
      max-camera-orbit={maxCameraOrbit}
      min-camera-orbit={minCameraOrbit}
      disable-zoom={disableZoom}
      // Quality and performance settings
      render-scale="0.8"
      max-hotspots="3"
      quick-look-browsers="safari chrome"
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
      
      {/* Animation Controls */}
      {showAnimationControls && availableAnimations.length > 0 && (
        <div slot="hotspot-1" className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="text-sm font-semibold mb-2">Animations</div>
          <div className="space-y-2">
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
                className={`block w-full text-left px-3 py-1 rounded text-sm transition-colors ${
                  currentAnimation === animName 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {animName}
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
              className="block w-full text-left px-3 py-1 rounded text-sm bg-gray-100 hover:bg-gray-200"
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
