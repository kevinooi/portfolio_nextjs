import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    gaincue,
    visix,
    carrent,
    jobit,
    recipeapp,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
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
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const darkGrey = "#383E56";
const lightGrey = "#E6DEDD";
const experiences = [
    {
        title: "Full Stack Flutter Developer",
        company_name: "Gaincue",
        icon: gaincue,
        iconBg: darkGrey,
        date: "January 2021 - July 2022",
        points: [
            "Designing and implementing code solutions, collaborating with designers and conducting testing and troubleshooting.",
            "Engaging in Agile development and enhancing application performance.",
            "Skilled in mobile development using Flutter(dart) with provider, riverpod & flutter_bloc state management library.",
            "Participating in full stack development using Node.js framework - AdonisJS(typescript) and ReactJS.",
            "Experienced in performing unit testing for code logic validation.",
            "Experienced with relational databases, including MySQL and PostgreSQL.",
            "Integrating RESTful/GraphQL API.",
        ],
    },
    {
        title: "Full Stack Web Developer",
        company_name: "V6 Technology",
        icon: visix,
        iconBg: lightGrey,
        date: "August 2022 - Present",
        points: [
            "Writing, testing, and maintaining code, collaborating with team members, conducting code reviews, and documenting functionalities.",
            "Practice Agile development process, guiding interns and optimizing web application performance.",
            "Engaged in full stack web development utilizing Vue.js 2.0 & 3.0 and Laravel (PHP).",
            "Familliar in back-end queues, web sockets, InertiaJS and Vuetify.",
            "Familiar with Next.js, typescript, tRPC, Prisma, MongoDB (NoSQL), and ExpressJS(Node.js).",
            "Experienced in web3/blockchain technology.",
        ],
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Recipe App",
        description:
            "A versatile application available on both mobile and web platforms, offering an extensive range of food and drink recipes categorized along with detailed ingredient information.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "flutter_bloc",
                color: "green-text-gradient",
            },
            {
                name: "unit test",
                color: "pink-text-gradient",
            },
            {
                name: "widget test",
                color: "pink-text-gradient",
            },
            {
                name: "integration test",
                color: "pink-text-gradient",
            },
        ],
        image: recipeapp,
        source_code_link: "https://github.com/kevinooi/recipe_app",
    },
];

export { services, technologies, experiences, projects };
