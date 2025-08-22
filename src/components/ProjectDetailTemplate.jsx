import { Link } from 'react-router-dom';
import { ArrowLeftIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ModelViewer from './ModelViewer';
import VideoCarousel from './VideoCarousel';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

const ProjectDetailTemplate = ({
  title,
  subtitle,
  heroImage,
  description,
  techSpecs,
  gallery,
  videos,
  models,
  challenges,
  outcomes,
  nextProject,
  prevProject,
  imageCarousel
}) => {
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage || !gallery) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          navigateToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateToNext();
          break;
        case 'Escape':
          e.preventDefault();
          setSelectedImage(null);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, gallery, currentImageIndex]);

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const navigateToNext = () => {
    if (!gallery) return;
    const nextIndex = (currentImageIndex + 1) % gallery.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(gallery[nextIndex]);
  };

  const navigateToPrevious = () => {
    if (!gallery) return;
    const prevIndex = currentImageIndex === 0 ? gallery.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(gallery[prevIndex]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  return (
    <>
      {/* Full page background for dark mode */}
      {isDark && (
        <div 
          className="fixed inset-0 -z-10" 
          style={{ backgroundColor: 'rgb(6, 0, 16)' }}
        />
      )}
      
      <div className={`min-h-screen ${isDark ? 'bg-transparent' : 'bg-white'} transition-colors duration-200`}>
        {/* Navigation */}
        <div className="pt-24 pb-8 px-6">
          <Link 
            to="/projects" 
            className={`inline-flex items-center gap-2 hover:text-black transition-colors duration-200 mb-8 ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600'
            }`}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{title}</h1>
              {subtitle && <p className={`text-xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
            </div>
            
            {heroImage && (
              <div className="flex justify-center mb-8">
                <img 
                  src={heroImage} 
                  alt={title}
                  className="w-3/4 h-auto rounded-2xl shadow-2xl"
                />
              </div>
            )}
          </div>
        </section>

        {/* Project Overview */}
        <section className="px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{description}</p>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        {techSpecs && (
          <section className={`px-6 mb-16 py-16 ${isDark ? 'bg-gray-100/5' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Technical Specifications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {techSpecs.map((spec, index) => (
                  <div key={index} className={`p-6 rounded-xl shadow-sm ${
                    isDark 
                      ? 'bg-gray-100/10 border border-gray-600/30' 
                      : 'bg-white'
                  }`}>
                    <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{spec.category}</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      {spec.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={`${isDark ? 'text-gray-300' : 'text-gray-600'} marker:${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Challenges & Solutions */}
        {challenges && (
          <section className="px-6 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Challenges & Solutions</h2>
              <div className="space-y-8">
                {challenges.map((challenge, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{challenge.title}</h3>
                    <p className={`mb-3 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{challenge.problem}</p>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}><strong>Solution:</strong> {challenge.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Image Carousel Section - Right before 3D Models */}
        {imageCarousel && (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              {imageCarousel}
            </div>
          </section>
        )}

        {/* 3D Models Section */}
        {models && models.length > 0 && (
          <section className={`px-6 mb-16 py-16 ${isDark ? 'bg-gray-100/5' : 'bg-gray-50'}`}>
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>3D Models & CAD</h2>
              <div className="flex justify-center">
                {models.map((model, index) => (
                  <div key={index} className={`rounded-xl p-6 shadow-sm max-w-4xl w-full ${
                    isDark 
                      ? 'bg-gray-100/10 border border-gray-600/30' 
                      : 'bg-white'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 text-center ${isDark ? 'text-white' : 'text-black'}`}>{model.title}</h3>
                    <div className={`aspect-video rounded-lg mb-4 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`} style={{ minHeight: '350px' }}>
                      {model.src ? (
                        <ModelViewer
                          src={model.src}
                          alt={model.title}
                          poster={model.poster}
                          autoRotate={model.autoRotate !== false}
                          cameraControls={model.cameraControls !== false}
                          className="w-full h-full rounded-lg"
                          style={{ height: '100%', minHeight: '350px' }}
                        />
                      ) : model.embedUrl ? (
                        <iframe
                          src={model.embedUrl}
                          className="w-full h-full rounded-lg"
                          allowFullScreen
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            <div className="text-4xl mb-2">🏗️</div>
                            <p>3D Model Coming Soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {model.description && (
                      <p className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{model.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Videos Section - Right after 3D Models */}
        {videos && videos.length > 0 && (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Project Videos</h2>
              <VideoCarousel videos={videos} />
            </div>
          </section>
        )}

        {/* Outcomes & Results */}
        {outcomes && (
          <section className={`px-6 mb-16 py-16 ${
            isDark 
              ? 'bg-gradient-to-r from-gray-800/50 to-purple-900/50' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}>
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Outcomes & Results</h2>
              <div className={`rounded-2xl p-8 shadow-sm ${
                isDark 
                  ? 'bg-gray-100/10 border border-gray-600/30' 
                  : 'bg-white'
              }`}>
                <ul className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className={isDark ? 'text-gray-200' : 'text-gray-700'}>{outcome}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Image Gallery */}
        {gallery && gallery.length > 0 && (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => openImageModal(image, index)}
                  >
                    <img
                      src={image.src}
                      alt={image.caption || `Gallery image ${index + 1}`}
                      className="w-full h-64 object-contain rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-105 transition-transform duration-300"
                    />
                    {image.caption && (
                      <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl max-h-full flex items-center">
              {/* Navigation arrows */}
              {gallery && gallery.length > 1 && (
                <>
                  {/* Left arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToPrevious();
                    }}
                    className={`mr-4 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 ${
                      isDark 
                        ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white' 
                        : 'bg-white/80 hover:bg-white text-gray-800'
                    }`}
                    aria-label="Previous image"
                  >
                    <ChevronLeftIcon className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Main image container */}
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  className={`absolute -top-2 -right-2 p-2 rounded-full ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
                  } shadow-lg transition-colors duration-200 z-10`}
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>

                {/* Main image */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption || 'Enlarged image'}
                  className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />

                {/* Image info */}
                <div className={`mt-4 p-4 rounded-lg ${
                  isDark ? 'bg-gray-800/90 text-white' : 'bg-white/90 text-gray-800'
                } shadow-lg`}>
                  {selectedImage.caption && (
                    <p className="text-sm font-medium text-center mb-2">{selectedImage.caption}</p>
                  )}
                  {gallery && gallery.length > 1 && (
                    <p className="text-xs text-center opacity-70">
                      {currentImageIndex + 1} of {gallery.length}
                    </p>
                  )}
                </div>
              </div>

              {/* Navigation arrows */}
              {gallery && gallery.length > 1 && (
                <>
                  {/* Right arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToNext();
                    }}
                    className={`ml-4 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 ${
                      isDark 
                        ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white' 
                        : 'bg-white/80 hover:bg-white text-gray-800'
                    }`}
                    aria-label="Next image"
                  >
                    <ChevronRightIcon className="w-8 h-8" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Navigation to Other Projects */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className={`flex justify-between items-center border-t pt-8 ${
              isDark ? 'border-gray-600' : 'border-gray-200'
            }`}>
              {prevProject ? (
                <Link 
                  to={`/projects/${prevProject.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-3 transition-colors group ${
                    isDark 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Previous Project</p>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{prevProject.title}</p>
                  </div>
                </Link>
              ) : <div></div>}
              
              {nextProject ? (
                <Link 
                  to={`/projects/${nextProject.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-3 transition-colors group text-right ${
                    isDark 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Next Project</p>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{nextProject.title}</p>
                  </div>
                  <ArrowLeftIcon className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : <div></div>}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetailTemplate;