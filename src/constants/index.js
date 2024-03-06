import {
    burgerQueenPreview,
    burgerQueenThumb,
    chatbotThumb, chatbotPreview,
    github,
    instagram,
    linkedin, myPhoto1, myPhoto2, myPhoto3, myPhoto4,
    webIcon, webPortfolioThumb, webPortfolioPreview, nikeThumb, nikePreview
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
    myPhoto1, myPhoto2, myPhoto3, myPhoto4
]

export const projects = [
    {
        projectName: 'BurgerQueen',
        projectThumbnail: burgerQueenThumb,
        preview: burgerQueenPreview,
        firstParagraph: `This is a web application inspired by the BurgerKing online ordering website, where users can view and browse available products and place orders for desired items. The main goal of this project is to enhance my understanding of the technologies I have learned and how to apply them to an application.`,
        secondParagraph: `In developing this application, I have learned many things, ranging from fundamental concepts such as building APIs, understanding and creating relational tables, and authentication, to the technologies used such as Spring Boot, integrating front-end and back-end, hosting, and more.`,
        stacks: [
            {
                name: `Java`,
                borderColor: `border-java`
            },
            {
                name: `JavaScript`,
                borderColor: `border-javaScript`
            },
            {
                name: `SpringBoot`,
                borderColor: `border-springBoot`
            },
            {
                name: `HTML`,
                borderColor: `border-react`
            },
            {
                name: `CSS`,
                borderColor: `border-tailwind`
            },
            {
                name: `MySQL`,
                borderColor: `border-mySql`
            }
        ],
        links: [
            {
                name: `Github - Front End`,
                icon: github,
                href: `https://github.com/rifqialfauzan/BurgerQueen-FrontEnd`
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
        projectThumbnail: webPortfolioThumb,
        preview: webPortfolioPreview,
        firstParagraph: 'This project is the website you are currently visiting. It is my personal website designed to display information about myself, and most importantly, to showcase the projects I have worked on.',
        secondParagraph: '',
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
                name: `Github`,
                icon: github,
                href: `https://github.com/rifqialfauzan/personal-web`
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
        projectThumbnail: chatbotThumb,
        preview: chatbotPreview,
        firstParagraph: 'This is my final project during my college. This chatbot can provide information about verses from the Quran based on the input given by the user, so users don\'t need to search on Google or in the Quran itself, but can ask this chatbot and the chatbot will find and provide the desired information.',
        secondParagraph: 'In this project, I learned many things. I collected Quranic data from the Ministry of Religious Affairs\' digital Quran and processed it to be used for training the artificial intelligence model that will be built. Additionally, I also learned Python language and technologies related to artificial intelligence such as Scikit-Learn, TensorFlow, numpy, etc.',
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
                name: `Github`,
                icon: github,
                href: `https://github.com/rifqialfauzan/InQuran-chatbot-alquran`
            },
            {
                name: `Telegram`,
                icon: github,
                href: "https://t.me/InQuran_bot"
            },
            {
                name: 'Live demo',
                icon: webIcon,
                href: `https://google.com`
            }
        ]
    },
    {
        projectName: 'Nike (LP)',
        projectThumbnail: nikeThumb,
        preview: nikePreview,
        firstParagraph: 'This is a simple landing page project about Nike products. In this project, I followed a tutorial video on \'How to use Tailwind\' that I found on YouTube.',
        secondParagraph: 'The purpose of this project is to learn Tailwind, familiarize myself with it, and analyze which classes are most commonly used when building a website.',
        stacks: [
            {
                name: `JavaScript`,
                borderColor: `border-springBoot`
            },
            {
                name: 'React',
                borderColor: 'text-blue-600'
            },
            {
                name: 'Tailwind',
                borderColor: 'text-grey-200'
            }
        ],
        links: [
            {
                name: `Github`,
                icon: github,
                href: `https://github.com/rifqialfauzan/nike-landing-page`
            },
            {
                name: 'Live demo',
                icon: webIcon,
                href: `https://google.com`
            }
        ]
    }
];