import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';

const SteeringAssembly = () => {
  const projectData = {
    title: "USTM Mechanical Systems",
    subtitle: "University of Toronto Supermileage Team",
    heroImage: "/steering_assm.PNG",
    description:
      "As a member of the University of Toronto Supermileage Team, I contributed to the design and fabrication of mechanical systems for the Urban Concept Car. My work spanned CAD modeling, machining, and hands-on assembly, focusing on improving steering performance, braking integration, and component manufacturability.",

    techSpecs: [
      {
        category: "Key Contributions",
        items: [
          "Developed SolidWorks CAD skills through team tutorials and applied them in designing/modifying vehicle components",
          "Installed braking system: shaped brake-fluid delivery pipes and mounted friction pads onto wheel hub",
          "Redesigned kingpin steering mechanism in SolidWorks to reduce scrub radius, lower steering effort, and introduce self-adjusting geometry",
          "Machined front axle on lathe: precision chamfers, diameter reductions, and threaded sections for assembly compatibility"
        ]
      },
      {
        category: "Skills Applied",
        items: [
          "SolidWorks CAD design and simulation",
          "Lathe machining and part finishing",
          "Hands-on assembly with hand tools",
          "System integration: steering, braking, and axle components"
        ]
      }
    ],

    challenges: [
      {
        title: "Steering Optimization",
        problem: "Original steering geometry produced high scrub radius and steering effort, reducing handling efficiency.",
        solution: "Redesigned the kingpin mechanism in CAD to lower scrub radius and incorporated a self-adjusting geometry for improved vehicle handling."
      },
      {
        title: "Machining Tolerances",
        problem: "Ensuring precision while machining axle components manually on a lathe.",
        solution: "Used iterative measurement checks, precision chamfering, and threading techniques to guarantee fit in final assembly."
      }
    ],

    gallery: [
      {
        src: "/steering_assm.PNG",
        caption: "CAD model of full steering assembly"
      },
      {
        src: "/UTSM/close_up.PNG",
        caption: "Close-up detail of the previous (vertical) steering mechanism"
      },
      {
        src: "/UTSM/King-pin-assembly-cross-section.PNG",
        caption: "Cross-sectional view of the kingpin steering mechanism showing internal geometry"
      },
      {
        src: "/UTSM/stock-alumnium-rods.JPG",
        caption: "Stock aluminum rods used as raw material for front wheel axles"
      },
      {
        src: "/UTSM/reduced axle.JPG",
        caption: "Machined front axle with precision chamfers and diameter reductions"
      },
      {
        src: "/UTSM/Lathe-Machined-thread.JPG",
        caption: "Precision lathe machining of threaded axle"
      }
    ],

    // models: [
    //   {
    //     title: "Steering Geometry",
    //     description: "3D CAD model highlighting the reduced scrub radius and self-adjusting steering mechanism.",
    //     embedUrl: null
    //   }
    // ],

    outcomes: [
      "Improved steering responsiveness and reduced driver effort",
      "Gained hands-on experience machining and assembling automotive components",
      "Developed practical CAD-to-manufacturing workflow skills",
      "Contributed to the successful integration of steering and braking subsystems into the Urban Concept Car"
    ],

    nextProject: {
      title: "CNC Final CAD",
      slug: "cnc-final-cad"
    },

    prevProject: {
      title: "Robotic Hand",
      slug: "robotic-hand"
    }
  };

  return <ProjectDetailTemplate {...projectData} />;
};

export default SteeringAssembly;
