import { useTheme } from "../contexts/ThemeContext";

export default function About() {
  const { isDark } = useTheme();
  
  return (
    <>
      {/* Full page background for dark mode */}
      {isDark && (
        <div 
          className="fixed inset-0 -z-10" 
          style={{ backgroundColor: 'rgb(6, 0, 16)' }}
        />
      )}
      

      
      <div className="max-w-4xl mx-auto pt-24 px-6 relative z-10">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>About Me</h1>
        <div className="flex items-center justify-center gap-12">
          <div className="text-left max-w-2xl">
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Mechanical Engineering student at the University of Toronto, specializing in Mechatronics and Bioengineering, 
              with minors in Engineering Business and Robotics.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="/headshot.JPG" 
              alt="Ahmed Omran - Professional Headshot" 
              className="w-40 h-40 rounded-full object-cover border-2 border-white shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="text-center mb-16">
        <a
          href="/Ahmed_Omran_Resume.pdf"
          download
          className={`inline-block px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-200 hover:scale-105 ${
            isDark 
              ? 'bg-gray-700 text-white hover:bg-gray-600 shadow-gray-900/25' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Download Resume (PDF)
        </a>
      </div>

      {/* About Section */}
      <section className="mb-16">
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Background</h2>
        <div className={`rounded-lg p-8 ${
          isDark 
            ? 'bg-gray-100/10 border border-gray-600/30 shadow-lg' 
            : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed mb-4 ${
            isDark ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Experienced in mechanical design, control systems, and programming through coursework, lab work, and personal projects. 
            Skilled at integrating hardware and software to create functional prototypes.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Education</h2>
        <div className={`rounded-lg p-8 ${
          isDark 
            ? 'bg-gray-100/10 border border-gray-600/30 shadow-lg' 
            : 'bg-gray-50'
        }`}>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="flex-1">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>University of Toronto</h3>
                <p className={`text-lg ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Bachelor of Applied Science in Mechanical Engineering
                  <br /> + PEY
                </p>
              </div>
              <img 
                src="/Utoronto_coa.svg.png" 
                alt="University of Toronto Logo" 
                className="w-24 h-24 object-contain ml-1"
              />
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Expected Graduation: May 2028</p>
          </div>
          <div className="mb-6">
            <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Minors</h4>
            <ul className={`list-disc list-inside space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Engineering Business</li>
              <li>Robotics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Technical Skills</h2>
        <div className={`rounded-lg p-8 ${
          isDark 
            ? 'bg-gray-100/10 border border-gray-600/30 shadow-lg' 
            : 'bg-gray-50'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Programming</h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Python</li>
                <li>• Pytorch, Tensorflow</li>
                <li>• MATLAB</li>
                <li>• C, C++</li>
                <li>• JavaScript/React</li>
              </ul>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Design & Engineering</h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• SolidWorks</li>
                <li>• Machining</li>
                <li>• 3D Printing</li>
                <li>• CAD/CAM</li>
              </ul>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Mechanical Systems</h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Robotics</li>
                <li>• Control Systems</li>
                <li>• Fluid Dynamics</li>
                <li>• Thermodynamics</li>
              </ul>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Business & Soft Skills</h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Project Management</li>
                <li>• Team Leadership</li>
                <li>• Technical Writing</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Experience & Projects</h2>
        <div className={`rounded-lg p-8 ${
          isDark 
            ? 'bg-gray-100/10 border border-gray-600/30 shadow-lg' 
            : 'bg-gray-50'
        }`}>
          <div className="space-y-6">
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Academic Courses</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Mechanical Design, Mechanics of Solids, Thermodynamics, Computer Fundamentals (C),
              Applied Fundamentals of Deep Learning, Corporate Accounting and Finance.
              </p>
            </div>
            {/*<div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Internships</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                [Include any relevant work experience or internships]
              </p>
            </div>*/}
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Extracurricular Activities</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Mechanical Recruit: SuperMileage Team (Urban Concept)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Goals Section */}
      <section className="mb-16">
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Career Goals</h2>
        <div className={`rounded-lg p-8 ${
          isDark 
            ? 'bg-gray-100/10 border border-gray-600/30 shadow-lg' 
            : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            Open to diverse engineering opportunities, with a strong interest in robotics, 
            biomedical innovation, and mechanical design. I'm looking for roles that combine 
            technical problem-solving, hands-on development, and interdisciplinary collaboration.
          </p>
        </div>
      </section>
    </div>
    </>
  );
}