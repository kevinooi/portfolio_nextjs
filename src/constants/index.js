import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  php,
  java,
  vue,
  laravel,
  flutter,
  nextjs,
  adonisjs,
  nodejs,
  gaincue,
  rcc,
  twitterclone,
  recipeapp,
  cryptoverse,
  animehub,
  pathfinder,
  notes
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "Flutter Developer",
    icon: mobile
  },
  {
    title: "Backend Developer",
    icon: backend
  }
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter
  },
  {
    name: "NextJS",
    icon: nextjs
  },
  {
    name: "Laravel",
    icon: laravel
  },
  {
    name: "Vue JS",
    icon: vue
  },
  {
    name: "Adonis JS",
    icon: adonisjs
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "PHP",
    icon: php
  },
  {
    name: "Java",
    icon: java
  }
];

const white = "#FFFFFF";
const experiences = [
  {
    title: "Full Stack Flutter Developer",
    company_name: "Gaincue",
    icon: gaincue,
    iconBg: white,
    date: "January 2021 - July 2022",
    points: [
      "Agile Development: I work in an Agile environment, designing and implementing code solutions, collaborating with designers, and troubleshooting to boost app performance.",
      "Mobile Development: I specialize in mobile app development using Flutter with state management libraries like Provider, Riverpod, and Flutter Bloc.",
      "Full Stack Web Development: I participate in full stack web projects using Node.js frameworks like AdonisJS (TypeScript) and ReactJS.",
      "Unit Testing: I'm experienced in writing unit tests to validate code logic and ensure everything runs smoothly.",
      "Database Management: I've worked with relational databases like MySQL and PostgreSQL to keep data organized and accessible.",
      "API Integration: I integrate RESTful and GraphQL APIs to connect different parts of applications seamlessly."
    ]
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Right Click Consulting",
    icon: rcc,
    iconBg: white,
    date: "August 2022 - Present",
    points: [
      "Agile Development: I follow Agile practices to write, test, and maintain code, always looking for ways to optimize web app performance.",
      "Leadership: I supervise and mentor intern, conduct code reviews, and work closely with the team to ensure everyone's on the same page.",
      "Full Stack Web Development: I build full stack web applications using Vue.js (versions 2.0 & 3.0), Laravel (PHP), and Node.js.",
      "Tech Skills: I'm comfortable with a range of technologies including HTML, CSS, JavaScript, PHP, Java, jQuery, Bootstrap, and TailwindCSS.",
      "Additional Tools: I'm familiar with backend queues, web sockets, InertiaJS, Vuetify, NuxtJS, NextJS, and Prisma—these help me build more robust and efficient applications.",
      "Web3 & Blockchain: I've got experience with web3 and blockchain technology, which is really exciting for building decentralized solutions."
    ]
  }
];

const projects = [
  {
    name: "Twitter Clone",
    description:
      "A Twitter clone, built using the T3 stack, featuring real-time updates and functionalities such as Discord login, follower interactions, and personalized timelines.",
    tags: [
      {
        name: "nextjs",
        color: "violet-text-gradient"
      },
      {
        name: "typescript",
        color: "blue-text-gradient"
      },
      {
        name: "trpc",
        color: "pink-text-gradient"
      },
      {
        name: "prisma",
        color: "violet-text-gradient"
      },
      {
        name: "tailwind",
        color: "blue-text-gradient"
      },
      {
        name: "nextauth",
        color: "pink-text-gradient"
      }
    ],
    image: twitterclone,
    source_code_link: "https://github.com/kevinooi/twitter-clone"
    // preview_url: "https://twitter-clone-beta-steel.vercel.app/",
  },
  {
    name: "Recipe App",
    description:
      "A flutter application accessible on both mobile and web platforms, providing a wide variety of food and drink recipes categorized along with detailed ingredient information.",
    tags: [
      {
        name: "flutter",
        color: "violet-text-gradient"
      },
      {
        name: "flutterweb",
        color: "blue-text-gradient"
      },
      {
        name: "flutterbloc",
        color: "pink-text-gradient"
      },
      {
        name: "unittest",
        color: "violet-text-gradient"
      },
      {
        name: "widgettest",
        color: "blue-text-gradient"
      },
      {
        name: "integrationtest",
        color: "pink-text-gradient"
      }
    ],
    image: recipeapp,
    source_code_link: "https://github.com/kevinooi/recipe_app"
  },
  {
    name: "Notes",
    description:
      "Discover a simple web app for note management, featuring CRUD functionalities. With its intuitive interface, users can effortlessly organize their notes.",
    tags: [
      {
        name: "nextjs14",
        color: "violet-text-gradient"
      },
      {
        name: "prisma",
        color: "blue-text-gradient"
      },
      {
        name: "reactquery",
        color: "pink-text-gradient"
      },
      {
        name: "serveraction",
        color: "violet-text-gradient"
      },
      {
        name: "tailwind",
        color: "blue-text-gradient"
      }
    ],
    image: notes,
    source_code_link: "https://github.com/kevinooi/note_nextjs"
  },
  {
    name: "AnimeHub",
    description:
      "An anime website using Next.js 14 that comes with server actions. It features infinite scrolling and visual appealing card animation.",
    tags: [
      {
        name: "nextjs14",
        color: "violet-text-gradient"
      },
      {
        name: "typescript",
        color: "blue-text-gradient"
      },
      {
        name: "serveraction",
        color: "pink-text-gradient"
      },
      {
        name: "tailwind",
        color: "violet-text-gradient"
      },
      {
        name: "framermotion",
        color: "blue-text-gradient"
      }
    ],
    image: animehub,
    source_code_link: "https://github.com/kevinooi/anime_hub"
  },
  {
    name: "Pathfinder Visualization",
    description:
      "A mobile app demonstrating Dijkstra algorithm. Users input start and end points on a grid, the algorithm then highlights the shortest route while avoiding obstacles.",
    tags: [
      {
        name: "flutter",
        color: "violet-text-gradient"
      },
      {
        name: "dijikstra",
        color: "blue-text-gradient"
      },
      {
        name: "algorithm",
        color: "pink-text-gradient"
      },
      {
        name: "riverpod",
        color: "violet-text-gradient"
      },
      {
        name: "animation",
        color: "blue-text-gradient"
      }
    ],
    image: pathfinder,
    source_code_link: "https://github.com/kevinooi/pathfinder_visualization_flutter"
  },
  {
    name: "Cryptoverse",
    description:
      "Web application that delivers a comprehensive range of cryptocurrency statistics, including prices, trends, and in-depth news and information.",
    tags: [
      {
        name: "react",
        color: "violet-text-gradient"
      },
      {
        name: "redux",
        color: "blue-text-gradient"
      },
      {
        name: "hooks",
        color: "pink-text-gradient"
      },
      {
        name: "antdesign",
        color: "violet-text-gradient"
      },
      {
        name: "restapi",
        color: "blue-text-gradient"
      }
    ],
    image: cryptoverse,
    source_code_link: "https://github.com/kevinooi/cryptoverse"
  }
];

export { services, technologies, experiences, projects };
