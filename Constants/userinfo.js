//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Sharad Patel", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'sharadpatel.main@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '647-895-5349', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+1' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/SharadPatel1703', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/sharadpatel1703/', icon: faLinkedinIn },
    ],
    greeting: {
        title: "Hey there, I am Sharad.",
        subtitle: "Detail-oriented Software Developer and data analyst with experience in working on full-stack web applications and data analytics."
    },
    capabilities: [
        {
            category: "Data Analysis",
            skills: ["Microsoft Excel", "SQL", "Power BI"]
        },
        {
            category: "Programming Languages",
            skills: ["Python", "Java", "JavaScript/TypeScript, C++, C#"]
        },
        {
            category: "Web Development",
            skills: ["React.js/Next.JS", "Flask/FastAPI", "Node.js"]
        },
        {
            category: "Technical Skills",
            skills: ["Git", "AWS/Azure/GCP", "SQL/NoSQL"]
        }
    ],
    about: {
        content: "Recent Computer Programming Diploma graduate with a strong foundation in software development and data analysis. Passionate about creating efficient solutions through code and working with data to drive business decisions. Quick learner who stays current with emerging technologies and best practices in software development. Seeking opportunities in software development or data analysis roles where I can apply my technical skills and contribute to meaningful projects while continuing to grow professionally.",
        resume: "https://github.com/SharadPatel1703/Resume/blob/main/Resume_Sharad.pdf"
    },
    education: {
        visible: true,
        educationList: [
            {
                time: 'April 2023 - December 2024',
                title: 'Computer Programming Diploma',
                organization: 'Georgian College (ILAC), Toronto, ON',
                description: 'Relevant Coursework: Data Analysis, Database Management, Software Development : Focus on Python, Java, and JavaScript/TypeScript.'
            }
        ]
    },
    experience: {
        visible: true,
        experienceList: [
            {
                company: 'Devxchange International',
                // companylogo: DevExchange,
                position: 'Data Analyst (Volunteer)',
                time: 'June 2024 - July 2024',
                description: 'Managed and maintained data integrity through comprehensive validation procedures. Created automated data collection processes reducing manual entry time by 75%.'
            },
            {
                company: 'Toronto Transit Commission (TTC)',
                // companylogo: 'https://cdn.ttc.ca/-/media/Project/TTC/DevProto/Icons/TTC-LOGO.svg?h=80&iar=0&w=130&rev=70dfaadb771a4a7486ae723e174fa823&hash=94FBEA98380BF40A67DA1D1C9E2FFB73',
                position: 'Customer Service Representative PT',
                time: 'July 2023 - Present',
                description: 'Handled real-time data reporting with 98% accuracy in a public sector environment. Maintained detailed logs of service disruptions and resolutions.'
            }
        ]
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}