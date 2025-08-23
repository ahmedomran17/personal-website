import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';
import ImageCarousel from '../../components/ImageCarousel';

const CrosswalkModel = () => {
  const projectData = {
    title: "Crosswalk Model",
    subtitle: "Elevated Crosswalk Design for Safety & Accessibility",
    heroImage: "/personal-website/crosswalk_model.png",
    description: 
      "This project redesigned the Bahen-Galbraith crosswalk at the University of Toronto to improve safety, " +
      "accessibility, and pedestrian flow. Research highlighted issues with jaywalking, winter conditions, " +
      "and vehicle speeding. A 15 cm elevated crosswalk was proposed and validated through speed studies, " +
      "flow simulations, and accessibility testing, showing improvements across all key areas.",


    techSpecs: [
      {
        category: "Service Environment Research",
        items: [
          "33.6% of pedestrians jaywalk during peak times",
          "47% of cars exceed posted speed limit",
          "Observed snow, ice, and drainage issues at site"
        ]
      },
      {
        category: "Design Features",
        items: [
          "15 cm elevated crosswalk to calm traffic",
          "Tactile surface compliant with CSA accessibility standards",
          "71.1% colour contrast for improved visibility",
          "Proper ramp slope for wheelchair accessibility"
        ]
      },
      {
        category: "Testing & Analysis",
        items: [
          "Radar gun speed study: cars slowed by ~6 km/h at elevated crosswalks",
          "AnyLogic simulation: 37% fewer pedestrians per cycle with adjusted signal timing",
          "3D printed tactile surface model validated against CSA guidelines"
        ]
      }
    ],

    challenges: [
      {
        title: "Safety Risks",
        problem: "High rate of jaywalking and speeding vehicles posed serious hazards.",
        solution: "Introduced a raised crosswalk design to encourage drivers to reduce speed and improve pedestrian safety."
      },
      {
        title: "Accessibility Gaps",
        problem: "Lack of visual and mobility accommodations hindered safe use for all pedestrians.",
        solution: "Integrated tactile surfaces, high-contrast markings, and proper ramp slopes to meet accessibility standards."
      },
      {
        title: "Data Limitations",
        problem: "Speed tests used an existing 8 cm elevated crosswalk and simulations could not capture jaywalking behavior.",
        solution: "Proposed high-fidelity modular prototype for accurate testing with real users and vehicles."
      }
    ],

    gallery: [
      {
        src: "/personal-website/crosswalk_model.png",
        caption: "Proposed elevated crosswalk model"
      },
      {
        src: "/personal-website/crosswalk/crosswalk map.jpg",
        caption: "Crosswalk location map"
      },
      {
        src: "/personal-website/crosswalk/crosswalk.jpg",
        caption: "Current crosswalk condition"
      },
      {
        src: "/personal-website/crosswalk/alt1.jpg",
        caption: "Proposed Design concept"
      },
      {
        src: "/personal-website/crosswalk/alt2.jpg",
        caption: "Proposed Design concept"
      }
    ],

    videos: [
      {
        url: "/personal-website/crosswalk/traffic_sim.mp4",
        title: "Traffic Simulation",
        caption: "Traffic simulation demonstrating pedestrian flow improvements"
      }
    ],

    models: [
      {
        title: "Crosswalk Design Model",
        description: "3D model of the proposed elevated crosswalk design with tactile surfaces and accessibility features.",
        src: "/personal-website/crosswalk/crosswalk-part(4).glb",
        poster: "/personal-website/crosswalk_model.png"
      }
    ],

    outcomes: [
      "Validated elevated crosswalk as effective for slowing vehicles and reducing jaywalking",
      "Improved pedestrian flow with 37% fewer people per signal cycle",
      "Achieved 71.1% colour contrast and CSA-compliant tactile surfaces for accessibility",
      "Recommended modular prototype for further testing before full implementation"
    ],

    nextProject: {
      title: "Intro to Embedded Systems",
      slug: "embedded-systems"
    },
    
    prevProject: {
      title: "CNC Final CAD",
      slug: "cnc-final-cad"
    }
  };

  // Image carousel component for alternative design concepts
  const imageCarouselComponent = (
    <section className="px-6 mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 text-center`}>Alternative Design Concepts</h2>
        <div className="flex justify-center">
          <ImageCarousel
            images={[
              {
                src: "/personal-website/crosswalk/alt1.jpg",
                caption: "Interactive Crosswalk with energy generating tiles"
              },
              {
                src: "/personal-website/crosswalk/alt2.jpg",
                caption: "Wider crosswalk with two lanes"
              },
              {
                src: "/personal-website/crosswalk/alt3.png",
                caption: "Raised crosswalk and sensor bollards"
              }
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
    </section>
  );

  return <ProjectDetailTemplate {...projectData} imageCarousel={imageCarouselComponent} />;
};

export default CrosswalkModel;
