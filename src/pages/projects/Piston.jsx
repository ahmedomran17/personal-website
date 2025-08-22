import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';

const Piston = () => {
  const projectData = {
    title: "Piston Assembly",
    subtitle: "Machining Fundamentals Project",
    heroImage: "/piston.JPG",
    description:
      "As part of a machining course at George Brown College, I manufactured a piston, cylinder, and flywheel assembly using traditional machining techniques. The moving components were machined from aluminum, while the supporting stand was fabricated from steel. This project emphasized precision, accuracy, and foundational skills in manual machining and assembly.",

    techSpecs: [
      {
        category: "Machining Processes",
        items: [
          "Lathe turning: created piston ridges, shafts, and cylindrical profiles",
          "Drill press: machined hollow cylinders and screw holes",
          "3-axis milling: reduced component thickness and refined features",
          "Assembly: integrated piston and cylinder with a flywheel to form a crankshaft mechanism"
        ]
      },
      {
        category: "Materials",
        items: [
          "Aluminum (piston, cylinder, flywheel components)",
          "Steel (supporting stand)"
        ]
      }
    ],

    challenges: [
      {
        title: "Precision Machining",
        problem: "Maintaining tight tolerances when machining aluminum components by hand.",
        solution: "Carefully calibrated lathe operations and iterative checks with measurement tools to ensure fit and smooth operation."
      },
      {
        title: "Assembly Fit",
        problem: "Aligning piston, cylinder, and flywheel components into a working crankshaft mechanism.",
        solution: "Iteratively adjusted tolerances and fastenings to achieve smooth motion without binding."
      }
    ],

    gallery: [
      {
        src: "/piston.JPG",
        caption: "Machined piston, cylinder, and flywheel assembly on steel stand"
      }
    ],

    outcomes: [
      "Completed piston, cylinder, and flywheel assembly to specification",
      "Gained hands-on experience with lathe, drill press, and milling machine operations",
      "Developed understanding of tolerances and mechanical fit in machining",
      "Strengthened practical skills in precision manufacturing and assembly"
    ],

    nextProject: {
      title: "Robotic Hand",
      slug: "robotic-hand"
    },

    prevProject: {
      title: "Gear Box",
      slug: "gear-box"
    }
  };

  return <ProjectDetailTemplate {...projectData} />;
};

export default Piston;
