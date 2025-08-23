import React from 'react';
import { Link } from 'react-router-dom';
import DotGrid from '../components/DotGrid';
import DecryptedText from '../components/DecryptedText';
import RollingGallery from '../components/RollingGallery';

export default function Home() {

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-200">
      {/* DotGrid Background */}
      <div style={{ width: '100%', height: '600px', position: 'relative', backgroundColor: 'var(--bg-color)' }} className="bg-white dark:bg-black">
        <DotGrid 
          dotSize={5} 
          gap={15} 
          baseColor="#8a898c" 
          activeColor="#0260f7"
          proximity={100}
          shockRadius={200}
          shockStrength={5}
          resistance={750}
          returnDuration={1}
          className="opacity-80"
        />
        
        {/* Main Content - Centered within the background area */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <div className="text-center px-35">
            <DecryptedText 
              text="Welcome to my design portfolio"
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-black dark:text-white tracking-tight leading-tight transition-colors duration-200"
              speed={40}
              revealDuration={1800}
              revealSpeed={25}
            />
          </div>
        </div>
      </div>

      {/* New Section - Two Columns */}
      <div className="px-6 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 min-h-96">
            <h2 className="text-5xl font-bold text-black dark:text-white tracking-tight transition-colors duration-200">
              AHMED OMRAN
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-200">
              Mechanical Engineering @ University of Toronto
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-200">
              Mechanical engineering student specializing in mechatronics and bioengineering, with a minor in engineering business and robotics. Skilled in programming and mechanical design, passionate about robotics, biomedical innovation, and creating solutions that make a real-world impact.
            </p>
          </div>
          
          {/* Right Column - Image Container */}
          <div className="flex justify-center">
            <div className="w-96 h-96 rounded-lg overflow-hidden">
              <img 
                src="/personal-website/public/homepage_photo(1).jpg" 
                alt="Ahmed Omran" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Jump to Projects Section */}
      <div className="text-center px-6 max-w-7xl mx-auto py-0">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4 transition-colors duration-200">
          Check Out My Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto transition-colors duration-200">
          {/* Explore my latest work in mechanical engineering, robotics, and innovative design solutions. */}
        </p>
        <RollingGallery />
        <div className="mt-6">
          <Link 
            to="/projects" 
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center px-6 max-w-7xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-6 transition-colors duration-200">
          Contact
        </h2>
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-200">
            <span className="font-bold">Email:</span> a.omran@mail.utoronto.ca <br /> a.moh.omran@gmail.com
          </p>
          <a 
            href="https://www.linkedin.com/in/ahmed-omran-04amo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

