import { useState } from 'react';

const VideoCarousel = ({ videos, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setVideoError(false);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setVideoError(false);
  };

  const goToVideo = (index) => {
    setCurrentIndex(index);
    setVideoError(false);
  };

  const currentVideo = videos[currentIndex];

  return (
    <div className={`${className}`}>
      {/* Main Video Player */}
      <div className="text-center mb-6">
        <div className="bg-gray-900 rounded-xl overflow-hidden mx-auto" style={{ maxWidth: '800px', aspectRatio: '16/9' }}>
          {!videoError ? (
            <video
              src={currentVideo.url}
              className="w-full h-full object-contain"
              controls
              preload="metadata"
              key={currentIndex}
              onError={(e) => {
                console.error('Video error:', e.target.error);
                console.error('Video URL:', currentVideo.url);
                console.error('Video element:', e.target);
                setVideoError(true);
              }}
              onLoadStart={() => {
                console.log('Loading video:', currentVideo.url);
                setVideoError(false);
              }}
              onLoadedData={() => console.log('Video data loaded successfully:', currentVideo.title)}
              onCanPlay={() => console.log('Video can play:', currentVideo.title)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-2">⚠️</div>
                <p className="text-lg font-semibold mb-2">Video Failed to Load</p>
                <p className="text-sm opacity-80 mb-4">Unable to load: {currentVideo.title}</p>
                <button 
                  onClick={() => setVideoError(false)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">{currentVideo.title}</h3>
          {currentVideo.caption && (
            <p className="text-sm text-gray-600">{currentVideo.caption}</p>
          )}
        </div>
      </div>

      {/* Navigation Controls - Only show if multiple videos */}
      {videos.length > 1 && (
        <div className="flex justify-center items-center gap-6 mt-4">
          {/* Previous Button */}
          <button
            onClick={prevVideo}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors"
          >
            ←
          </button>
          
          {/* Navigation Dots */}
          <div className="flex space-x-3">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={nextVideo}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
