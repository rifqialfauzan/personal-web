import {
    BQ2,
    burgerQueen,
    chatbot, chatbotPreview,
    dashboard,
    github,
    homeImage,
    instagram,
    linkedin,
    webIcon, webPortfolio, webPortfolioPreview
} from "../assets/index.js";


export const socialLinks = [
    {
        name: `Github`,
        url: `https://github.com/rifqialfauzan`,
        icon: github
    },
    {
        name: `Instagram`,
        url: `https://www.instagram.com/rifqialfauzn/`,
        icon: instagram
    },
    {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/rifqialfauzan/`,
        icon: linkedin
    },

]



export const myPhotos = [
    homeImage, dashboard, chatbot
]

export const projects = [
    {
        projectName: 'BurgerQueen',
        projectThumbnail: burgerQueen,
        preview: BQ2,
        firstParagraph: `This is a web application inspired by the BurgerKing online ordering website, where users can view and browse available products and place orders for desired items. The main goal of this project is to enhance my understanding of the technologies I have learned and how to apply them to an application.`,
        secondParagraph: `In developing this application, I have learned many things, ranging from fundamental concepts such as building APIs, understanding and creating relational tables, and authentication, to the technologies used such as Spring Boot, React, Tailwind, integrating front-end and back-end, hosting, and more.`,
        stacks: [
            {
                name: `Java`,
                borderColor: `bg-red-400`
            },
            {
                name: `Javascript`,
                borderColor: `bg-yellow-400`
            },
            {
                name: `SpringBoot`,
                borderColor: `bg-green-600`
            },
            {
                name: `React`,
                borderColor: `bg-amber-200`
            },
            {
                name: `Tailwind`,
                borderColor: `bg-blue-100`
            },
            {
                name: `MySQL`,
                borderColor: `bg-blue-300`
            }
        ],
        links: [
            {
                name: `Github - Front End`,
                icon: github,
                href: `https://github.com/rifqialfauzan/BurgerQueen`
            },
            {
                name: `Github - Back End`,
                icon: github,
                href: "https://github.com/rifqialfauzan/BurgerQueen"
            },
            {
                name: 'Live demo',
                icon: webIcon,
                href: `https://google.com`
            }
        ]
    },
    {
        projectName: 'Web Portfolio',
        projectThumbnail: webPortfolio,
        preview: webPortfolioPreview,
        firstParagraph: 'first P',
        secondParagraph: 'sec P',
        stacks: [
            {
                name: 'Javascript',
                borderColor: 'text-yellow-600'
            },
            {
                name: 'React',
                borderColor: 'text-violet-200'
            },
            {
                name: 'Tailwind',
                borderColor: 'text-blue-600'
            }
        ],
        links: [
            {
                name: `Github - Front End`,
                icon: github,
                href: `https://github.com/rifqialfauzan/BurgerQueen`
            },
            {
                name: `Github - Back End`,
                icon: github,
                href: "https://github.com/rifqialfauzan/BurgerQueen"
            },
            {
                name: 'Live demo',
                icon: webIcon,
                href: `https://google.com`
            }
        ]
    },
    {
        projectName: 'InQuranBot',
        projectThumbnail: chatbot,
        preview: chatbotPreview,
        firstParagraph: 'first P',
        secondParagraph: 'sec P',
        stacks: [
            {
                name: 'Python',
                borderColor: 'text-blue-600'
            },
            {
                name: 'Scikit-Learn',
                borderColor: 'text-grey-200'
            },
            {
                name: 'Jupyter Notebook',
                borderColor: 'text-yellow-300'
            }
        ],
        links: [
            {
                name: `Github - Front End`,
                icon: github,
                href: `https://github.com/rifqialfauzan/BurgerQueen`
            },
            {
                name: `Github - Back End`,
                icon: github,
                href: "https://github.com/rifqialfauzan/BurgerQueen"
            },
            {
                name: 'Live demo',
                icon: webIcon,
                href: `https://google.com`
            }
        ]
    },
    {
        projectName: 'InQuranBot',
        projectThumbnail: chatbot,
        preview: chatbotPreview,
        firstParagraph: 'first P',
        secondParagraph: 'sec P',
        stacks: [
            {
                name: 'Python',
                borderColor: 'text-blue-600'
            },
            {
                name: 'Scikit-Learn',
                borderColor: 'text-grey-200'
            },
            {
                name: 'Jupyter Notebook',
                borderColor: 'text-yellow-300'
            }
        ],
        links: [
            {
                name: `Github - Front End`,
                icon: github,
                href: `https://github.com/rifqialfauzan/BurgerQueen`
            },
            {
                name: `Github - Back End`,
                icon: github,
                href: "https://github.com/rifqialfauzan/BurgerQueen"
            },
            {
                name: 'Live demo',
                icon: webIcon,
                href: `https://google.com`
            }
        ]
    }
];