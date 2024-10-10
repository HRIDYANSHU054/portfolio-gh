import {
  docker,
  git,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  nextjs,
  cpp,
  router,
  reactquery,
  authjs,
  expressjs,
  sass,
  html,
  nextjsLight,
} from "../assets/skills";

export const navLinks = [
  {
    id: 1,
    name: "About",
    href: "#about",
  },
  {
    id: 2,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const skills = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const myProjects = [
  {
    title: "WorldWise - Travel Journal Platform",
    desc: "WorldWise is a dynamic platform for travel enthusiasts to document and cherish their journeys. Built with React, it allows users to easily save and manage a personalized list of cities they've visited, while recording their observations and experiences for each location.",
    subdesc:
      "Created with React, Context API, Redux, and React Router, WorldWise is optimized for seamless user experiences. The app helps users organize and relive their travel memories through a highly intuitive interface.",
    href: "https://world-wise-nine-ecru.vercel.app/",
    texture: "textures/project/WorldWiseProjectDisplay.mp4",
    logo: "assets/WorldWise.png",

    logoStyle: {
      backgroundColor: "rgb(1 36 17)",

      border: "0.2px solid rgb(1 63 30)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "assets/react.svg",
      },
      {
        id: 2,
        name: "Redux",
        path: redux,
      },
      {
        id: 3,
        name: "React Router",
        path: router,
      },
    ],
  },
  {
    title: "GitHub Profiler - User and Repo Explorer",
    desc: "GitHub Profiler is a simple yet powerful web app that enables users to explore GitHub profiles effortlessly. By searching for any GitHub username, users can view repositories, contributions, and activity in one place.",
    subdesc:
      "Built with a focus on simplicity and functionality, GitHub Profiler allows users to discover top repositories in popular languages like Python and JavaScript. It's designed to help developers easily navigate and explore the work of others on GitHub.",
    href: "https://github-profiler-b1n1.onrender.com/",
    texture: "textures/project/GithubProfilerProjectDisplay.mp4",
    logo: "assets/Github_Profiler.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: reactjs,
      },
      {
        id: 2,
        name: "Mongo Db",
        path: mongodb,
      },
      {
        id: 3,
        name: "Node js",
        path: nodejs,
      },
      {
        id: 4,
        name: "Express js",
        path: expressjs,
      },
    ],
  },
  {
    title: "The Wild Oasis - Internal Hotel Management System",
    desc: "Wild Oasis is a streamlined internal management platform designed to optimize hotel operations. It provides an intuitive solution for managing bookings, cabins, staff, and customer information, ensuring hotel staff can efficiently handle day-to-day operations.",
    subdesc:
      "Developed with React, React Query, React Router, Styled Components, and React Hook Form, this platform offers a clean and easy-to-use interface. It empowers hotel staff to navigate seamlessly through various sections, promoting organized and smooth operational workflows.",
    href: "https://the-wild-oasis-pi-self.vercel.app/",
    texture: "textures/project/thewildoasisprojectdisplay.mp4",
    logo: "assets/The_Wild_Oasis.png",
    logoStyle: {
      backgroundColor: "rgb(1 36 17)",
      border: "0.2px solid rgb(1 63 30)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "assets/react.svg",
      },
      {
        id: 2,
        name: "React Router",
        path: router,
      },
      {
        id: 3,
        name: "React Query",
        path: reactquery,
      },
    ],
  },
  {
    title: "The Wild Oasis - Customer Website",
    desc: "The Wild Oasis is a modern and user-friendly website built for customers to explore, book, and experience all that the hotel has to offer. With an intuitive interface, customers can browse cabin options, check availability, and make secure reservations with ease.",
    subdesc:
      "Developed using Next.js, Auth.js, Tailwind CSS, and advanced React hooks such as `useFormStatus`, `useOptimistic`, and `useTransition`, this platform delivers a seamless and dynamic user experience, ensuring fast, secure, and optimized booking and account management for guests.",
    href: "https://the--wild-oasis-website.vercel.app/",
    texture: "textures/project/thewildoasiswebsiteprojectdisplay.mp4",
    logo: "assets/The_Wild_Oasis_Website.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: nextjsLight,
      },
      {
        id: 2,
        name: "React.js",
        path: reactjs,
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: tailwind,
      },
      {
        id: 4,
        name: "Auth JS",
        path: authjs,
      },
    ],
  },
  {
    title: "X-Ide - Web-Based IDE",
    desc: "X-Ide is a web-based IDE designed to deliver a streamlined and responsive coding experience directly in the browser. It provides users with a feature-rich, intuitive environment to write, edit, and manage code efficiently.",
    subdesc:
      "Built using modern technologies like React JS, TypeScript, and Codemirror2.js, X-Ide offers a highly responsive and user-friendly interface, making it an ideal tool for developers seeking a flexible and accessible coding environment.",
    href: "https://hridyanshu-xide-3f3160.netlify.app/",
    texture: "textures/project/X-IdeProjectDisplay.mp4",
    logo: "assets/X-IDE.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: reactjs,
      },
      {
        id: 2,
        name: "TypeScript",
        path: typescript,
      },
    ],
  },
  {
    title: "Fast React Pizza - Pizza Ordering App",
    desc: "Fast React Pizza is a responsive website for a fictional pizza restaurant, designed to provide users with an easy and enjoyable pizza-ordering experience. Users can browse a menu of delicious pizzas and place their orders quickly and effortlessly.",
    subdesc:
      "Built with React, React Router, Tailwind CSS, and React Hook Form, Fast React Pizza allows users to track their orders in real-time using a unique order ID, offering detailed status updates to ensure a seamless and transparent experience from order to delivery.",
    href: "https://fast-react-pizza-inky.vercel.app/",
    texture: "textures/project/FastReactPizzaProjectDisplay.mp4",
    logo: "assets/Fast_React_Pizza.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: reactjs,
      },
      {
        id: 2,
        name: "React Router",
        path: router,
      },
      {
        id: 3,
        name: "Tailwind",
        path: tailwind,
      },
    ],
  },
  {
    title: "Natours - Travel Agency Landing Page",
    desc: "Natours is a simple yet visually captivating landing page for a travel agency. The design focuses on animations created purely with SCSS, showcasing the power of CSS without relying on JavaScript, Flexbox, or Grid.",
    subdesc:
      "This project was built to test the limits of bare-bones CSS and demonstrate what can be achieved with SCSS alone. The result is a fully responsive and animated landing page that enhances user engagement through creative styling techniques.",
    href: "https://hridyanshu-natours-159c16.netlify.app/",
    texture: "textures/project/NatoursProjectDisplay.mp4",
    logo: "assets/Natours.png",
    logoStyle: {
      backgroundColor: "rgb(1 36 17)",

      border: "0.2px solid rgb(1 63 30)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Sass",
        path: sass,
      },
      {
        id: 1,
        name: "HTML",
        path: html,
      },
    ],
  },
  {
    title: "Nexter - Real Estate Landing Page",
    desc: "Nexter is a functional and visually appealing landing page designed for a real estate company. It provides a clean and modern interface to showcase properties and company information in an elegant manner.",
    subdesc:
      "Built using SCSS with a focus on testing and demonstrating advanced Grid layout skills, Nexter highlights the power of CSS Grid in creating responsive, structured, and engaging layouts without compromising on design or functionality.",
    href: "https://hridyanshu-nexter-d9923f.netlify.app/",
    texture: "textures/project/NexterProjectDisplay.mp4",
    logo: "assets/Nexter.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Sass",
        path: sass,
      },
      {
        id: 2,
        name: "HTML",
        path: html,
      },
    ],
  },
];
