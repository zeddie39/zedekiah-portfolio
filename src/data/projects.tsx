import { Rocket, Bot, Code, ShoppingCart, Tv, Wrench } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  description: string;
  long_description: string;
  challenges: string;
  tech: string[];
  image: string;
  images?: string[];
  featured?: boolean;
  status: string;
  github?: string;
  live?: string;
  icon?: React.ReactNode;
}

export const projects: Project[] = [
  {
    slug: "ztech-electronics",
    title: "Ztech Electronics",
    description: "Full repair + e-commerce platform with AI support, FixMate system, and buyer/seller integration. Built for East Africa's electronics market.",
    long_description: "Ztech Electronics is a comprehensive platform designed to streamline the electronics repair and sales process in East Africa. It features an AI-powered diagnostic tool, FixMate, to help users identify issues with their devices. The platform also includes a full e-commerce system for buying and selling new and refurbished electronics, a secure payment gateway, and a robust user management system for both buyers and sellers.",
    challenges: "One of the main challenges was creating an AI model that could accurately diagnose a wide range of electronic issues based on user-provided descriptions. Another significant hurdle was integrating multiple local payment methods to cater to the diverse East African market.",
    tech: ["React", "Node.js", "MongoDB", "AI/NLP", "JWT", "Stripe API"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
    ],
    featured: true,
    status: "Live Platform",
    icon: <ShoppingCart />,
    live: "http://ztechelectronics.netlify.app",
  },
  {
    slug: "esp32-wifi-control",
    title: "ESP32 WiFi Control",
    description: "IoT dashboard for home automation with real-time control and monitoring capabilities.",
    long_description: "This project provides a web-based dashboard to control and monitor home appliances connected to an ESP32 microcontroller. It uses WebSockets for real-time, low-latency communication between the user interface and the device. Users can switch devices on/off and view sensor data as it updates live.",
    challenges: "Establishing a stable and secure WebSocket connection with the ESP32 was a key challenge. Optimizing the data transmission for real-time feedback without overloading the microcontroller required careful firmware and backend design.",
    tech: ["Arduino C++", "React", "WebSockets", "ESP32", "Node.js"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/vincentzedekiah/esp32-control",
    status: "Open Source",
    icon: <Wrench />,
  },
  {
    slug: "wakilisha-band-website",
    title: "Wakilisha Band Website",
    description: "Music portfolio site with events management, media gallery, and fan engagement features.",
    long_description: "A dynamic website for the Wakilisha Band, showcasing their music, upcoming events, and photo galleries. The site is designed to be easily updatable by the band members and serves as a central hub for their fans. It includes an integrated music player and a calendar for their tour dates.",
    challenges: "The main challenge was creating an engaging and visually appealing design that captures the band's energetic style. Integrating various media APIs for music and videos while ensuring fast load times was also a priority.",
    tech: ["React", "Styled Components", "Media APIs", "Contentful CMS"],
    image: "/placeholder.svg",
    live: "https://wakilisha.vercel.app/",
    status: "Live Site",
    icon: <Tv />,
  },
  {
    slug: "ai-ar-tutor",
    title: "AI & AR Tutor",
    description: "Educational platform powered by AI and AR for immersive learning experiences in computer science.",
    long_description: "This cutting-edge educational platform uses Artificial Intelligence to create personalized learning paths and Augmented Reality to visualize complex computer science concepts. For example, students can see data structures and algorithms come to life in their own room through their device's camera.",
    challenges: "Developing stable and accurate AR visualizations that work across a range of devices was a major technical hurdle. The AI component required a large dataset to effectively personalize the learning content for each student.",
    tech: ["TensorFlow.js", "Three.js", "React", "WebXR", "Python"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
    status: "In Development",
    icon: <Bot />,
  },
  {
    slug: "cs-quiz-app",
    title: "Computer Science Quiz App",
    description: "Gamified web application for interactive learning with progress tracking and adaptive difficulty.",
    long_description: "A fun and interactive quiz application designed to help computer science students test their knowledge. The app features a large question bank, different difficulty levels, and tracks user progress over time. The gamified elements, such as scoring and leaderboards, are designed to make learning more engaging.",
    challenges: "Creating an adaptive algorithm that adjusts the quiz difficulty based on the user's performance was a key challenge. Ensuring the question database was comprehensive and accurate required significant effort in content creation and validation.",
    tech: ["React", "Node.js", "REST API", "MongoDB", "Auth0"],
    image: "/placeholder.svg",
    github: "https://github.com/vincentzedekiah/cs-quiz",
    status: "Beta",
    icon: <Code />,
  },
  {
    slug: "robotics-projects",
    title: "Robotics Projects",
    description: "Collection of DIY robots with sensors, movement, and IoT capabilities using Arduino and ESP32.",
    long_description: "This is a collection of various robotics projects I've built, ranging from simple line-following robots to more complex creations with IoT capabilities. Each project in the portfolio includes schematics, code, and a description of its functionality. They serve as a practical demonstration of my skills in electronics, programming, and mechanical design.",
    challenges: "The primary challenge across these projects is integrating various sensors and actuators and writing reliable code to control them. Power management is also a recurring challenge in mobile robotics.",
    tech: ["Arduino C++", "Sensors", "IoT", "React Dashboard", "PlatformIO"],
    image: "/placeholder.svg",
    status: "Portfolio",
    icon: <Rocket />,
  }
];
