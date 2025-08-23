import { Link } from 'react-router-dom';
import { ArrowLeftIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ModelViewer from '../../components/ModelViewer';
import VideoCarousel from '../../components/VideoCarousel';
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';

const RoboticHand = () => {
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectData = {
    title: "Robotic Hand",
    subtitle: "Bionic Prosthetic & Robotics Project",
    heroImage: "/personal-website/robotic_hand/Full Working setup.JPG",
    description:
      "A bionic robotic hand designed as a functional prosthetic prototype. This project integrates CAD-based mechanical design, embedded electronics, and AI-driven gesture recognition to achieve intuitive and natural control.",
    
    techSpecs: [
      {
        category: "Mechanical Design",
        items: [
          "Modular finger system with tendon-like actuation",
          "Elastic cords and micro servos for joint movement",
          "Resin 3D printed prototypes iterated through multiple designs",
          "Focus on reducing friction, tuning tolerances, and serviceability"
        ]
      },
      {
        category: "Electronics & Control",
        items: [
          "Arduino Uno R3 (initial prototype)",
          "ESP32-S3 microcontroller with PSRAM (final)",
          "5x SG90 Micro Servos powered via PCA9685 servo driver",
          "Single-channel surface EMG sensor for muscle signal input",
          "External power bank for portability"
        ]
      },
      {
        category: "Software & AI",
        items: [
          "Computer Vision teleoperation using Google Mediapipe Hands",
          "Custom EMG gesture recognition pipeline at 100 Hz sampling",
          "Sliding window segmentation (500 ms, 60% overlap)",
          "Initial GRU model adapted to CNN for TensorFlow Lite ESP32 deployment",
          "Four-class gesture recognition: rest, open hand, fist, and pinch"
        ]
      }
    ],

    challenges: [
      {
        title: "AI Deployment on Microcontroller",
        problem: "GRU-based models were not supported by TensorFlow Lite for ESP32.",
        solution: "Redesigned and retrained a CNN model with comparable accuracy for on-device inference."
      },
      {
        title: "Servo Power Management",
        problem: "Direct GPIO connections could not reliably drive five micro servos.",
        solution: "Integrated a PCA9685 servo driver board with external power distribution."
      },
      {
        title: "Mechanical Calibration",
        problem: "High joint friction and uneven tendon tension led to inconsistent finger actuation.",
        solution: "Refined joint tolerances, applied lubrication, and tuned elastic cord strengths for balance across fingers."
      }
    ],

    gallery: [
      {
        src: "/personal-website/robotic_hand(2).jpg",
        caption: "Robotic hand assembly"
      },
      {
        src: "/personal-website/robotic_hand/AAbattery_holders.JPG",
        caption: "AA Battery holders for dual 5V power supply for EMG sensor"
      },
      {
        src: "/personal-website/robotic_hand/EMG_sensor.JPG",
        caption: "Surface EMG sensor used for muscle signal acquisition"
      },
      {
        src: "/personal-website/robotic_hand/PCA9685_ServoSheild.jpg",
        caption: "PCA9685 servo driver shield"
      },
      {
        src: "/personal-website/robotic_hand/UnoR3_Clone.jpg",
        caption: "Arduino Uno R3"
      },
      {
        src: "/personal-website/robotic_hand/ESP32 S3 Microcontroller.jpg",
        caption: "ESP32-S3 microcontroller with PSRAM for AI inference"
      },
      {
        src: "/personal-website/robotic_hand/Threading fingers and pulleys.JPG",
        caption: "Threading fingers and pulleys with rope and elasstic cords"
      },
      {
        src: "/personal-website/robotic_hand/Curing with UV Light Printed Parts.JPG",
        caption: "3D printed parts being cured with UV light for strength"
      },
      {
        src: "/personal-website/robotic_hand/woodstand_drawing.jpg",
        caption: "Custom wooden stand drawing"
      }
    ],

    videos: [
      {
        title: "Initial Prototype",
        url: "/personal-website/robotic_hand/initial prototype.mov",
        caption: "Early prototype testing and development",
        type: "video"
      },
      {
        title: "Single Finger Prototype",
        url: "/personal-website/robotic_hand/single finger prototype.MOV",
        caption: "Testing individual finger mechanism and actuation",
        type: "video"
      },
      {
        title: "IR Control",
        url: "/personal-website/IR/IR-remote-control.MOV",
        caption: "Demonstration of robotic hand assembly and initial testing",
        type: "video"
      },
      {
        title: "Live Hand Tracking",
        url: "/personal-website/compv/computervision-handtracking.mp4",
        caption: "Real-time hand tracking using computer vision (Mediapipe)",
        type: "video"
      },
      {
        title: "EMG Inference on Laptop",
        url: "/personal-website/robotic_hand/EMG-infrence-on-laptop.mov",
        caption: "Real-time EMG signal processing and inference on laptop for robotic hand control",
        type: "video"
      }
    ],

    models: [
      {
        title: "Robotic Hand Assembly",
        description: "Interactive 3D model of the complete robotic hand assembly with detailed finger mechanisms and servo components.",
        src: "/personal-website/robotic_hand/hand-part.glb",
        poster: "/personal-website/robotic_hand/robotic_hand.JPG",
        autoRotate: true,
        interactionPrompt: "auto",
        autoPlay: false,
        maxCameraOrbit: "auto auto auto",
        minCameraOrbit: "auto auto auto",
        disableZoom: false,
        enableAnimations: false,
        showAnimationControls: false,
        animationName: ""
      }
    ],

    outcomes: [
      "Successfully demonstrated EMG-based gesture control with four hand gestures",
      "Achieved 83% test accuracy and smooth real-time inference (<200 ms latency)",
      "Developed a modular and serviceable finger mechanism suitable for prosthetic use",
      "Bridged mechanical, electronic, and AI systems into one functional prototype"
    ],

    nextProject: {
      title: "Skin Cancer Classification",
      slug: "skin-cancer-classification"
    },
    
    prevProject: {
      title: "Piston",
      slug: "piston"
    }
  };

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const navigateToNext = () => {
    if (!projectData.gallery) return;
    const nextIndex = (currentImageIndex + 1) % projectData.gallery.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(projectData.gallery[nextIndex]);
  };

  const navigateToPrevious = () => {
    if (!projectData.gallery) return;
    const prevIndex = currentImageIndex === 0 ? projectData.gallery.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(projectData.gallery[prevIndex]);
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
              <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{projectData.title}</h1>
              {projectData.subtitle && <p className={`text-xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{projectData.subtitle}</p>}
            </div>
            
            {projectData.heroImage && (
              <div className="flex justify-center mb-8">
                <img 
                  src={projectData.heroImage} 
                  alt={projectData.title}
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
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{projectData.description}</p>
            </div>
          </div>
        </section>

        {/* Project Videos - MOVED HERE */}
        {projectData.videos && projectData.videos.length > 0 && (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Project Videos</h2>
              <VideoCarousel videos={projectData.videos} />
            </div>
          </section>
        )}

        {/* Technical Specifications */}
        {projectData.techSpecs && (
          <section className={`px-6 mb-16 py-16 ${isDark ? 'bg-gray-100/5' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Technical Specifications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projectData.techSpecs.map((spec, index) => (
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

        {/* 3D Models Section */}
        {projectData.models && projectData.models.length > 0 && (
          <section className={`px-6 mb-16 py-16 ${isDark ? 'bg-gray-100/5' : 'bg-gray-50'}`}>
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>3D Models & CAD</h2>
              <div className="flex justify-center">
                {projectData.models.map((model, index) => (
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
                          className="w-full h-full rounded-lg"
                          style={{ height: '100%', minHeight: '350px' }}
                          interactionPrompt={model.interactionPrompt || "none"}
                          autoPlay={model.autoPlay || false}
                          maxCameraOrbit={model.maxCameraOrbit || "auto auto auto"}
                          minCameraOrbit={model.minCameraOrbit || "auto auto auto"}
                          disableZoom={model.disableZoom || false}
                          enableAnimations={model.enableAnimations || false}
                          showAnimationControls={model.showAnimationControls || false}
                          animationName={model.animationName || ""}
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

        {/* Challenges & Solutions */}
        {projectData.challenges && (
          <section className="px-6 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Challenges & Solutions</h2>
              <div className="space-y-8">
                {projectData.challenges.map((challenge, index) => (
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

        {/* Final Product Video */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-black'}`}>Final Product Demonstration</h2>
            <div className="flex justify-center">
              <div className="bg-gray-900 rounded-xl overflow-hidden mx-auto" style={{ maxWidth: '800px', aspectRatio: '16/9', minHeight: '450px' }}>
                <video
                  src="/personal-website/final-hand-demo.mov"
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  poster="/personal-website/robotic_hand/robotic_hand.JPG"
                  style={{ minHeight: '450px' }}
                />
              </div>
            </div>
                          <div className="mt-4 text-center">
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Complete Working Setup</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  EMG gesture recognition with Deep Learning Trained Model on ESP32-S3
                </p>
              </div>
          </div>
        </section>

        {/* Outcomes & Results */}
        {projectData.outcomes && (
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
                  {projectData.outcomes.map((outcome, index) => (
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
        {projectData.gallery && projectData.gallery.length > 0 && (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.gallery.map((image, index) => (
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
              {projectData.gallery && projectData.gallery.length > 1 && (
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
                  {projectData.gallery && projectData.gallery.length > 1 && (
                    <p className="text-xs text-center opacity-70">
                      {currentImageIndex + 1} of {projectData.gallery.length}
                    </p>
                  )}
                </div>
              </div>

              {/* Navigation arrows */}
              {projectData.gallery && projectData.gallery.length > 1 && (
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
              {projectData.prevProject ? (
                <Link 
                  to={`/projects/${projectData.prevProject.slug}`}
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
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{projectData.prevProject.title}</p>
                  </div>
                </Link>
              ) : <div></div>}
              
              {projectData.nextProject ? (
                <Link 
                  to={`/projects/${projectData.nextProject.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-3 transition-colors group text-right ${
                    isDark 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Next Project</p>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{projectData.nextProject.title}</p>
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

export default RoboticHand;