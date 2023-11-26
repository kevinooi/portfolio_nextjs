import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    php,
    reactjs,
    nextjs,
    tailwind,
    laravel,
    vue,
    flutter,
    adonisjs,
    nodejs,
    mongodb,
    git,
    gaincue,
    visix,
    twitterclone,
    recipeapp,
    cryptoverse,
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
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Laravel",
        icon: laravel,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Adonis JS",
        icon: adonisjs,
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
        name: "git",
        icon: git,
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
        name: "Twitter Clone",
        description:
            "A Twitter clone, built using the T3 stack, featuring real-time updates and functionalities such as Discord login, follower interactions, and personalized timelines.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "trpc",
                color: "pink-text-gradient",
            },
            {
                name: "prisma",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "nextauth",
                color: "pink-text-gradient",
            },
        ],
        image: twitterclone,
        source_code_link: "https://github.com/kevinooi/twitter-clone",
    },
    {
        name: "Recipe App",
        description:
            "A flutter application accessible on both mobile and web platforms, providing a wide variety of food and drink recipes categorized along with detailed ingredient information.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "flutterweb",
                color: "green-text-gradient",
            },
            {
                name: "bloc",
                color: "pink-text-gradient",
            },
            {
                name: "unittest",
                color: "blue-text-gradient",
            },
            {
                name: "widgettest",
                color: "green-text-gradient",
            },
            {
                name: "integrationtest",
                color: "pink-text-gradient",
            },
        ],
        image: recipeapp,
        source_code_link: "https://github.com/kevinooi/recipe_app",
    },
    {
        name: "Cryptoverse",
        description:
            "Web application that delivers a comprehensive range of cryptocurrency statistics, including prices, trends, and in-depth news and information.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "hooks",
                color: "pink-text-gradient",
            },
            {
                name: "antdesign",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
        ],
        image: cryptoverse,
        source_code_link: "https://github.com/kevinooi/cryptoverse",
    },
    {
        name: "Cryptoverse",
        description:
            "Web application that delivers a comprehensive range of cryptocurrency statistics, including prices, trends, and in-depth news and information.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "hooks",
                color: "pink-text-gradient",
            },
            {
                name: "antdesign",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
        ],
        image: cryptoverse,
        source_code_link: "https://github.com/kevinooi/cryptoverse",
    },
    {
        name: "Cryptoverse",
        description:
            "Web application that delivers a comprehensive range of cryptocurrency statistics, including prices, trends, and in-depth news and information.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "hooks",
                color: "pink-text-gradient",
            },
            {
                name: "antdesign",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
        ],
        image: cryptoverse,
        source_code_link: "https://github.com/kevinooi/cryptoverse",
    },
];

export { services, technologies, experiences, projects };
