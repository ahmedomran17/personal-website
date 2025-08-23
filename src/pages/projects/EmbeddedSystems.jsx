import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';

const EmbeddedSystems = () => {
  const projectData = {
    title: "Intro to Embedded Systems",
    subtitle: "Arduino Starter Kit & ESP32 Games",
    heroImage: "/personal-website/Arduino/digital_thermometer.jpg",
    description: 
      "Hands-on introduction to embedded systems using Arduino and ESP32 microcontrollers. "
      + "The Arduino Starter Kit established core knowledge in sensors, actuators, displays, and digital interfaces. "
      + "Building on this foundation, the ESP32 project applied these concepts by implementing classic games with real-time input and display handling. "
      + "Together, these projects developed skills in microcontroller programming, hardware integration, and embedded system design.",

    techSpecs: [
      {
        category: "Core Hardware",
        items: [
          "Arduino Uno R3 & ESP32 DevKit",
          "Breadboard with jumper wires",
          "128x64 OLED and 16x2 LCD displays",
          "Analog joystick & multi-sensor kit"
        ]
      },
      {
        category: "Arduino Projects",
        items: [
          "Digital thermometer with LCD",
          "4-digit 7-segment display",
          "Infrared remote control",
          "Ultrasonic distance sensor",
          "Light sensing with photoresistors"
        ]
      },
      {
        category: "ESP32 Games",
        items: [
          "Snake with collision detection",
          "Two-player Pong",
          "2048 puzzle",
          "Menu system with score tracking"
        ]
      }
    ],

    challenges: [
      {
        title: "Circuit Design & Organization",
        problem: "Managing complex multi-component breadboard circuits with clear signal paths and minimal interference.",
        solution: "Used structured component placement, color-coded wiring, and modular sections for easier debugging and maintenance."
      },
      {
        title: "Sensor Integration & Calibration",
        problem: "Integrating sensors with different voltage levels, protocols, and environmental sensitivities.",
        solution: "Applied datasheet analysis, voltage dividers, and systematic calibration for consistent performance."
      },
      {
        title: "Embedded Software Architecture",
        problem: "Designing modular, efficient C++ code for real-time, resource-limited systems.",
        solution: "Adopted PlatformIO with object-oriented design, modularized each game, and built a lightweight menu to optimize memory and performance."
      }
    ],

    videos: [
      {
        title: "Digital Thermometer Demo",
        url: "/personal-website/Arduino/digital_thermometer.mp4",
        caption: "Real-time temperature monitoring with LCD display"
      },
      {
        title: "7-Segment Display Test",
        url: "/personal-website/Arduino/seven segment display.mp4",
        caption: "4-digit 7-segment display controlled via shift registers"
      },
      {
        title: "ESP32 Gaming System",
        url: "/personal-website/Arduino/esp_demo_vid.mp4",
        caption: "ESP32 gaming console running multiple classic games"
      }
    ],

    gallery: [
      {
        src: "/personal-website/Arduino/digital_thermometer.jpg",
        caption: "Arduino-based digital thermometer with LCD"
      },
      {
        src: "/personal-website/Arduino/ESP_GAMES.JPG",
        caption: "ESP32 gaming console with OLED display"
      }
    ],

    outcomes: [
      "Completed 15+ Arduino starter kit projects covering fundamental electronics and programming",
      "Gained proficiency in embedded C++ using Arduino IDE and PlatformIO",
      "Developed circuit design, breadboarding, and debugging expertise",
      "Implemented three functional ESP32 games with responsive real-time performance",
      "Built a strong foundation for advanced microcontroller and IoT development"
    ],

    nextProject: {
      title: "Gear Box",
      slug: "gear-box"
    },
    
    prevProject: {
      title: "Crosswalk Model",
      slug: "crosswalk-model"
    }
  };

  return <ProjectDetailTemplate {...projectData} />;
};

export default EmbeddedSystems;
