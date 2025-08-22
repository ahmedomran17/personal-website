import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';

const GearBox = () => {
  const projectData = {
    title: "Gear Box",
    subtitle: "Mechanical Design Course Project",
    heroImage: "/gear_box.jpg",
    description: "A team-based mechanical design lab project focused on creating a functional gearbox prototype using 3D-printed components. The project emphasized design feasibility, reliability, assembly efficiency, and material optimization rather than production performance.",
    
    techSpecs: [
      {
        category: "Design Parameters",
        items: [
          "Right-angle gearbox with offset shafts",
          "4:1 reduction ratio",
          "Two-stage design (bevel + spur gears)",
          "Lock-and-key assembly method (avoiding press fits)"
        ]
      },
      {
        category: "Fabrication",
        items: [
          "3D-printed PLA components",
          "Open-frame casing for reduced print time",
          "Tolerance adjustments for fit and backlash control",
          "Designed for ease of assembly/disassembly"
        ]
      }
    ],

    challenges: [
      {
        title: "Tolerance & Backlash",
        problem: "Achieving reliable gear meshing with 3D-printed parts where tolerances vary.",
        solution: "Iterated fits in CAD, adjusted clearances, and validated with hand drill testing."
      },
      {
        title: "Assembly & Printing Constraints",
        problem: "Minimizing material usage and print time while keeping components strong enough.",
        solution: "Used an open-frame casing and modular components, while documenting clear assembly instructions."
      }
    ],

    gallery: [
      {
        src: "/gear_box.jpg",
        caption: "3D-printed gearbox prototype assembled and tested with a hand drill"
      },
      {
        src: "/gear-box/Gearbox Assembly Drawing.jpg",
        caption: "Detailed assembly drawing showing component layout and dimensions"
      },
      {
        src: "/gear-box/printed.jpg",
        caption: "Top view of printed components"
      },
      {
        src: "/gear-box/Gearbox Instructions_page_1.jpg",
        caption: "Page 1: Assembly instructions and technical specifications"
      },
      {
        src: "/gear-box/Gearbox Instructions_page_2.jpg",
        caption: "Page 2: Continued assembly instructions and technical details"
      }
    ],

    models: [
      {
        title: "Gear Box CAD Model",
        description: "Interactive 3D model of the gearbox showing the gear train and open-frame casing design.",
        src: "/gear-box/gear_box.glb",
        poster: "/gear_box.jpg",
        autoRotate: false,
        interactionPrompt: "none",
        autoPlay: false,
        disableZoom: false,
        enableAnimations: true,
        showAnimationControls: true
      }
    ],

    outcomes: [
      "Successfully demonstrated a working gearbox prototype",
      "Achieved reliable operation under hand-drill testing",
      "Minimized print time and material waste through design optimization",
      "Produced detailed assembly documentation for evaluation"
    ],

    nextProject: {
      title: "Piston",
      slug: "piston"
    },
    
    prevProject: {
      title: "Intro to Embedded Systems",
      slug: "embedded-systems"
    }
  };

  return <ProjectDetailTemplate {...projectData} />;
};

export default GearBox;
