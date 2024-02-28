import {BQ2, burgerQueen, chatbot, dashboard, github, homeImage, instagram, linkedin} from "../assets/index.js";


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
        firstParagraph: `dwdw`,
        secondParagraph: `dwdw`,
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
                name: `Github`,
                href: `https://github.com/rifqialfauzan/BurgerQueen`
            },
            {
                name: 'Live demo',
                href: `https://google.com`
            }
        ]
    }
];