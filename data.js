const SITE_DATA = {
    bio: "Motivated IT professional with experience in software development and infrastructure. Passionate about learning and building impactful projects.",
    projects: [
        {
            id: "1",
            name: "Agro Website 🐐",
            active: true,
            visible: false,
            description: "Full-stack web application using Angular and Spring Boot for agricultural trading of harvested products and farming equipment.",
            link: "",
            date: "2023.05.15. 10:00" 
        },
        {
            id: "2",
            name: "Numerology App 🌠",
            active: true,
            visible: false,
            description: "Standalone Python application that generates detailed numerology reports based on a client's name and date of birth.",
            link: "",
            date: "2020.12.03. 13:39"
        }
    ],
    experiences: [
        {
        id: "1",
        name: "Web Developer & Configurator – Gemma Rendszerház",
        active: true,
        description: "Working on a web-based management system using VBScript and complex SQL queries, and contributing to its redevelopment focusing on front-end development with Alpine.js and JavaScript.",
        link: "",
        startYear: "2024",
        endYear: "Present"
        },
        {
        id: "2",
        name: "Web Developer Intern – Rackhost",
        active: false,
        description: "Developed a web-based prototype bug-tracking application using the Yii2 framework during my internship.",
        link: "",
        startYear: "2022",
        endYear: "2023"
        },
        {
        id: "3",
        name: "CTO / Lead Developer – Adventures Guide Startup",
        active: false,
        description: "Led the technical direction of an online city travel guide startup, selecting technologies like Angular and Firebase, and delivering a functional prototype in an agile team.",
        link: "",
        startYear: "2022",
        endYear: "2023"
        },
        {
        id: "4",
        name: "Business Owner – GamingFoxTech",
        active: true,
        description: "Founded and managed a business specializing in servicing, repairing, testing, and refurbishing used laptops for online resale.",
        link: "",
        startYear: "2020",
        endYear: "Present"
        }
    ],
    challenges: [
        {
            id: 1,
            name: 'Can You Hack My Page? ',
            description: 'You can find out my age by hacking my client side code. But the question is, can You exploit my superSecret stuff? 😏',
            active: true,
            completed: undefined,
            textInput: ''
        },
        {
            id: 2,
            name: 'Guess Game',
            description: 'Which tools do you think I used to create the page? Choose your guesses. 🧐',
            content: [
            { id: '1', name: 'Python', correct: false, disabled: false, state: null },
            { id: '2', name: 'JavaScript', correct: true, disabled: false, state: null },
            { id: '3', name: "SQL", correct: false, disabled: false, state: null },
            { id: '4', name: 'Ai Tools', correct: true, disabled: false, state: null },
            { id: '5', name: 'Alpine.js', correct: true, disabled: false, state: null },
            { id: '6', name: 'React', correct: false, disabled: false, state: null }            
            ],
            active: true,
            completed: undefined
        },
        {
            id: 3,
            name: 'Two Truths & Three Lies',
            description: 'Can you catch the lie that no one has managed to spot so far?',
            content: [
                { id: '1', name: 'human beings only use 10% of their brain capacity, leaving the rest completely dormant.', correct: false, disabled: false, state: null },
                { id: '2', name: 'The "5-second rule" for dropped food was actually scientifically proven by the FDA, but only for dry snacks.', correct: false, disabled: false, state: null },
                { id: '3', name: "Stubbing your little toe generates enough kinetic energy to momentarily power a small LED bulb.", correct: false, disabled: false, state: null },
                { id: '4', name: 'Your fingers get wrinkly in the bath not because they absorb water, but because your nervous system actively changes their shape to give you a better grip on wet objects.', correct: true, disabled: false, state: null },
                { id: '5', name: 'Pressing the TV remote buttons harder when the batteries are dying generates micro-electricity to send the signal.', correct: false, disabled: false, state: null },
                { id: '6', name: 'The overwhelming urge to squeeze or playfully bite something ridiculously cute is a real brain mechanism called "Cute Aggression".', correct: true, disabled: false, state: null }            
            ],
            active: true,
            completed: undefined
        }
    ],
}