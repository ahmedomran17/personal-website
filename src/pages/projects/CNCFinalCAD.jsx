import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';
import ImageCarousel from '../../components/ImageCarousel';

const CNCFinalCAD = () => {
  const projectData = {
    title: "CNC Final CAD",
    subtitle: "3-Axis Desktop CNC Router for Beginner Hobbyists",
    heroImage: "/CNC_Final_CAD.png",
    description:
      "A compact 3-axis CNC router designed for garage/workshop use. The final architecture uses a timing belt on X for long travel, dual lead screws on Y for stiffness, and a lead screw with twin guide rails on Z for accuracy (travels: X 900 mm, Y 600 mm, Z 70 mm). Stepper motors (1.8°) drive all axes, and an emergency stop provides a controlled stop then power cut. SolidWorks mass properties report ~74.37 kg and the design meets key specs including ≥12,000 RPM spindle capability and a 100 IPM feed-rate target.",

    techSpecs: [
      {
        category: "Mechanical Architecture",
        items: [
          "X-axis: timing belt + pulleys; 900 mm travel",
          "Y-axis: dual lead screws + nuts; 600 mm travel",
          "Z-axis: lead screw + 2 guide rails; 70 mm travel"
        ]
      },
      {
        category: "Actuation & Motion",
        items: [
          "Stepper motors on all axes (1.8° step)",
          "Smaller NEMA motor on Z to reduce moving mass",
          "Belt on X for light, long-throw motion; lead screws for precision on Y/Z"
        ]
      },
      {
        category: "Structure & Materials",
        items: [
          "Aluminum base; oak spoilboard with clamp holes (900×600×10 mm)",
          "Total mass from CAD: ~74.37 kg",
          "Guide rail with linear carriage on Z to prevent rotation"
        ]
      },
      {
        category: "Workspace & Performance",
        items: [
          "Workspace ≥ 900 × 600 × 7 mm",
          "Spindle speed range: 0–14,400 RPM (≥12,000 RPM requirement)",
          "Meets 100 IPM feed-rate target (based on cutting-data calculation)"
        ]
      },
      {
        category: "Safety",
        items: [
          "Emergency stop: Category 1 (controlled stop, then power-off)"
        ]
      }
    ],

    challenges: [
      {
        title: "Precision vs. Cost",
        problem: "Belts on both X and Y were cost-effective but risked precision and alignment.",
        solution: "Kept a belt on X for long travel, switched Y to dual lead screws with guide rails to increase stiffness and accuracy."
      },
      {
        title: "Long-Travel X Reliability",
        problem: "Maintaining belt tension and avoiding slip over 900 mm of travel.",
        solution: "Used matching pulleys and a clamped belt anchor on the spindle block; reduced Z moving mass with a smaller stepper."
      },
      {
        title: "Workholding & Usability",
        problem: "T-slot beds raise cost and require frequent cleaning.",
        solution: "Adopted an oak work surface with a hole pattern for clamps—lower cost and easy to replace."
      }
    ],

    gallery: [
      {
        src: "/CNC_Final_CAD.png",
        caption: "Final CAD model of the 3-axis router"
      },
      {
        src: "/CNC/Exploded-ASSM.png",
        caption: "Exploded assembly view"
      },
      {
        src: "/CNC/spindle-exploded.png",
        caption: "Spindle sub-assembly exploded"
      },
      {
        src: "/CNC/orthg-view.png",
        caption: "Orthographic view of the final model"
      }
    ],

    models: [
      {
        title: "3D CAD Model",
        description:
          "Interactive SolidWorks assembly export (GLB). Optimized for browser performance; reduced rendering quality and auto-rotation disabled.",
        src: "/CNC/cnc(2).glb",
        poster: "/CNC_Final_CAD.png",
        autoRotate: false,
        interactionPrompt: "none",
        autoPlay: false,
        maxCameraOrbit: "auto auto auto",
        minCameraOrbit: "auto auto auto",
        disableZoom: false
      }
    ],

    outcomes: [
      "Finalized hybrid drive: X belt, Y dual lead screws, Z lead screw + rails with stated travels",
      "Spindle capability ≥12,000 RPM; 100 IPM target satisfied by calculation",
      "Workspace 900 × 600 × 7 mm; total mass ≈74.37 kg from CAD",
      "Designed to meet a ≤$5,000 CAD kit-style cost target and beginner-friendly constraints",
      "Emergency stop strategy defined (Category 1) and full assembly sequence documented"
    ],

    nextProject: {
      title: "Crosswalk Model",
      slug: "crosswalk-model"
    },
    
    prevProject: {
      title: "Steering Assembly",
      slug: "steering-assembly"
    }
  };

  // Create the ImageCarousel component
  const imageCarouselComponent = (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Alternative Design Concepts
          </h2>
          {//<p className="text-lg text-gray-600 max-w-2xl mx-auto">
            //Explore the detailed CAD designs and manufacturing process through interactive images showcasing the CNC project components.
          //</p> 
          }
        </div>
        
        <ImageCarousel 
          images={[
            { src: "/CNC/belt-drive.PNG", caption: "Belt drive mechanism design" },
            { src: "/CNC/guide-rails.png", caption: "Guide rails and linear motion system" },
            { src: "/CNC/moving-workspace.png", caption: "Moving workspace assembly" },
            { src: "/CNC/stable-frame.png", caption: "Stable frame structure" }
          ]}
          baseWidth={500}
          autoplay={true}
          autoplayDelay={5000}
          pauseOnHover={true}
          loop={true}
          showArrows={true}
          showDots={true}
        />
      </div>
    </div>
  );

  return (
    <ProjectDetailTemplate 
      {...projectData} 
      imageCarousel={imageCarouselComponent}
    />
  );
};

export default CNCFinalCAD;
