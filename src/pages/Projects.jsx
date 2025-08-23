import RollingGallery from '../components/RollingGallery';
import Masonry from '../components/Masonry';
import { useTheme } from '../contexts/ThemeContext';

const items = [
    {
      id: "1",
      img: "/personal-website/CNC_Final_CAD.png",
      url: "/projects/cnc-final-cad",
      height: 420,
      title: "CNC Machine Design",
      description: "Designing a beginner friendly CNC machine to fit various constraints"
    },
    {
      id: "2",
      img: "/personal-website/crosswalk_model.png",
      url: "/projects/crosswalk-model",
      height: 320,
      title: "Walkable Cities",
      description: "Redesigning UofT Crosswalk for safety and accessibility"
    },
    {
      id: "3",
      img: "/personal-website/Arduino/digital_thermometer.jpg",
      url: "/projects/embedded-systems",
      height: 600,
      title: "Intro to Embedded Systems",
      description: "Comprehensive Arduino starter kit projects and ESP32 gaming console development"
    },
    {
      id: "4",
      img: "/personal-website/gear_box.jpg",
      url: "/projects/gear-box",
      height: 450,
      title: "Gear Box",
      description: "Mechanical transmission system design & analysis"
    },
    {
      id: "5",
      img: "/personal-website/piston.JPG",
      url: "/projects/piston",
      height: 720,
      title: "Piston Assembly",
      description: "Machining and assembly of a piston and flywheel"
    },
    {
      id: "6",
      img: "/personal-website/robotic_hand/Full Working setup.JPG",
      url: "/projects/robotic-hand",
      height: 680,
      title: "Robotic Hand",
      description: "Robotic hand with Computer Vision and EMG control"
    },
    {
      id: "7",
      img: "/personal-website/steering_assm.PNG",
      url: "/projects/steering-assembly",
      height: 480,
      title: "Steering Assembly",
      description: "Designing and machining Kingpin steering for fuel efficient concept car"
    },
    {
      id: "8",
      img: "/personal-website/skin-classifier-images/Primary model Architecture.jpg",
      url: "/projects/skin-cancer-classification",
      height: 520,
      title: "Skin Cancer Classification",
      description: "Deep learning model for early melanoma detection using CNNs and transfer learning"
    },
];

export default function Projects() {
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
      
      <section className={`pt-24 pb-16 px-6 min-h-screen ${isDark ? 'bg-transparent' : 'bg-white'} transition-colors duration-200`}>
        <h2 className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-black'}`}>Projects Gallery</h2>
        <div className="w-full h-[800px] max-w-7xl mx-auto">
                <Masonry
  items={items}
  ease="power3.out"
  duration={0.6}
  stagger={0.05}
  animateFrom="bottom"
  scaleOnHover={true}
  hoverScale={0.95}
  blurToFocus={true}
  colorShiftOnHover={false}
/>
        </div>
      </section>
    </>
  );
}
