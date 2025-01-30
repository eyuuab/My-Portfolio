import { Project } from './types';

export const projects: Project[] = [
  {
    title: "Comake",
    description: "Collaborative platform for developers to code and share projects.",
    detailedDescription: "A comprehensive development environment that enables real-time collaboration, code sharing, and project management for development teams of all sizes.",
    image: "/comake.png",
    github: "https://github.com/eyuuab/comake",
    demo: "https://comake-demo.com",
    tags: ["React", "Node.js", "MongoDB"],
    keyFeatures: [
      "Real-time collaborative code editing",
      "Integrated version control system",
      "Project sharing and access management",
      "Built-in code review system"
    ],
    technicalChallenges: [
      "Implementing real-time collaboration with minimal latency",
      "Managing concurrent edits and conflict resolution",
      "Scaling WebSocket connections for multiple users"
    ],
    techStack: [
      {
        name: "React",
        description: "Frontend framework for building the user interface with reusable components"
      },
      {
        name: "Node.js",
        description: "Backend runtime for handling real-time connections and API requests"
      },
      {
        name: "MongoDB",
        description: "NoSQL database for flexible data storage and quick retrieval"
      }
    ]
  },
  {
    title: "TaskFlow",
    description: "A task management application for teams and individuals.",
    detailedDescription: "A task management platform designed to help teams and individuals prioritize, organize, and track their tasks and projects, with features like Gantt charts, Kanban boards, and customizable workflows.",
    image: "/taskflow.png",
    github: "https://github.com/eyobedebreham/taskflow",
    demo: "https://taskflow-demo.com",
    tags: ["Next.js", "TypeScript", "Prisma"],
    keyFeatures: [
      "Customizable workflows and task management",
      "Gantt charts and Kanban boards for visualization",
      "Real-time collaboration and commenting",
      "Integrations with popular productivity tools"
    ],
    technicalChallenges: [
      "Implementing customizable workflows and task management",
      "Optimizing performance with large datasets",
      "Managing complex state with multiple users"
    ],
    techStack: [
      {
        name: "Next.js",
        description: "React-based framework for building server-rendered and statically generated websites"
      },
      {
        name: "TypeScript",
        description: "Superset of JavaScript for building scalable and maintainable applications"
      },
      {
        name: "Prisma",
        description: "ORM for building scalable and type-safe database applications"
      }
    ]
  },
  {
    title: "Moviefast",
    description: "A movie database app to discover and watch your favorite movies.",
    detailedDescription: "A feature-rich movie discovery platform that helps users find, track, and get recommendations for movies and TV shows, powered by advanced filtering and search capabilities.",
    image: "moviefast.jpg",
    github: "https://github.com/eyuuab/movie_site",
    demo: "https://edulearn-demo.com",
    tags: ["React", "Firebase", "Tailwind"],
    keyFeatures: [
      "Advanced search and filtering options",
      "Personalized movie recommendations",
      "User watchlist and favorites",
      "Detailed movie information and reviews"
    ],
    technicalChallenges: [
      "Optimizing performance with large datasets",
      "Implementing efficient search algorithms",
      "Managing complex state with multiple filters"
    ],
    techStack: [
      {
        name: "React",
        description: "Frontend library for building dynamic user interfaces"
      },
      {
        name: "Firebase",
        description: "Backend-as-a-Service for authentication and real-time data"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development"
      }
    ]
  },
  {
    title: "Habean",
    description: "Company portfolio website with animations and modern design.",
    detailedDescription: "A modern and responsive company portfolio website built with cutting-edge technologies, featuring animations, parallax scrolling, and a clean design to showcase the company's services and projects.",
    image: "habean.png",
    github: "https://github.com/eyobedebreham/portfolio",
    demo: "https://habeantech.vercel.app/",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    keyFeatures: [
      "Modern and responsive design",
      "Animations and parallax scrolling",
      "Clean and minimalistic layout",
      "Easy-to-use navigation and scrolling"
    ],
    technicalChallenges: [
      "Implementing animations and parallax scrolling",
      "Optimizing performance with large images",
      "Managing complex state with multiple animations"
    ],
    techStack: [
      {
        name: "Next.js",
        description: "React-based framework for building server-rendered and statically generated websites"
      },
      {
        name: "Framer Motion",
        description: "Animation library for building complex animations and interactions"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development"
      }
    ]
  },
  {
    title: "To Do List",
    description: "A simple to-do list app to manage your daily tasks.",
    detailedDescription: "A simple and intuitive to-do list app designed to help users manage their daily tasks and stay organized, with features like task prioritization, due dates, and reminders.",
    image: "/todo.webp",
    github: "https://github.com/eyobedebreham/fittrack",
    demo: "https://fittrack-demo.com",
    tags: ["React Native", "Firebase", "Redux"],
    keyFeatures: [
      "Simple and intuitive task management",
      "Task prioritization and due dates",
      "Reminders and notifications",
      "Easy-to-use navigation and scrolling"
    ],
    technicalChallenges: [
      "Implementing task prioritization and due dates",
      "Managing complex state with multiple tasks",
      "Optimizing performance with large datasets"
    ],
    techStack: [
      {
        name: "React Native",
        description: "Framework for building native mobile applications"
      },
      {
        name: "Firebase",
        description: "Backend-as-a-Service for authentication and real-time data"
      },
      {
        name: "Redux",
        description: "State management library for building predictable and scalable applications"
      }
    ]
  },
  {
    title: "News Entry Extractor",
    description: "A web scraper to extract news articles from websites.",
    detailedDescription: "A web scraping tool designed to extract news articles from websites, with features like article summarization, entity extraction, and sentiment analysis.",
    image: "/newsentry.png",
    github: "https://github.com/eyuuab/News-Entity-Extractor",
    demo: "https://shopease-demo.com",
    tags: ["Python", "FastAPI", "BeautifulSoup"],
    keyFeatures: [
      "Article summarization and entity extraction",
      "Sentiment analysis and topic modeling",
      "Easy-to-use API for data extraction",
      "Support for multiple news sources"
    ],
    technicalChallenges: [
      "Implementing article summarization and entity extraction",
      "Managing complex state with multiple news sources",
      "Optimizing performance with large datasets"
    ],
    techStack: [
      {
        name: "Python",
        description: "Programming language for building scalable and efficient applications"
      },
      {
        name: "FastAPI",
        description: "Modern web framework for building high-performance APIs"
      },
      {
        name: "BeautifulSoup",
        description: "HTML and XML parser for web scraping and data extraction"
      }
    ]
  }
];
