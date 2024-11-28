// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    {
        name: 'Market Research Analyzer', //project name
        description: 'Market Research Analyzer is a sophisticated full-stack application that leverages AI to transform competitive analysis and market intelligence. Built with Next.js, TypeScript, and FastAPI, the platform offers real-time competitor tracking, sentiment analysis, and automated reporting capabilities. The application combines advanced data analytics with an intuitive interface, helping businesses make data-driven decisions while demonstrating expertise in modern web technologies, AI integration, and scalable architecture.', //project description
        githubLink: 'https://github.com/SharadPatel1703/market-analyzer-app', //github repo link
        projectLink: '/', //deployed project link
        tech: ['Next.JS', 'FastAPI', 'Scikit'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: ["/images/MA1.png", "/images/MA2.png", "/images/MA3.png"], //list of names of images from above imports.
    },
    {
        name: 'Banking Management System',
        description: 'Implemented a secure and functional Banking Management System using Java, Java Swing, and MySQL. The system\n' +
            'includes robust user authentication, various account operations, bank statement viewing, and PIN change functionalities.',
        githubLink: 'https://github.com/SharadPatel1703/Bank-Management-Java-/tree/main/Bank%20Managemenet%20System',
        projectLink: '/',
        tech: ['Java Swing', 'JDBC', 'MySQL'],
        photo: ["/images/BM1.png", "/images/BM2.png", "/images/BM3.png"],
    },
    {
        name: 'SQL Data analysis (World Layoffs)',
        description: 'This SQL script analyzes layoffs data, highlighting trends such as top layoffs by company, location, industry, and year, while also calculating rolling totals and ranking layoffs by year.',
        githubLink: 'https://github.com/SharadPatel1703/Data-Analysis/blob/main/ExploratoryDataAnalysis.sql',
        projectLink: '/',
        tech: ['SQL', 'Data Cleaning', 'Data analysis'],
        photo: ["/images/wl3.jpg", "/images/WorldLayoffs.jpg"],
    },
    {
        name : "World Time App",
        description : "A dynamic web application that provides real-time global time information using coordinates. Features include instant time lookup for major cities, custom coordinate search, and a clean, responsive interface built with Next.js and Tailwind CSS. The app integrates with the World Time API to deliver accurate time data across different timezones.",
        githubLink : "https://github.com/SharadPatel1703/WorldTime",
        projectLink: "https://world-time-eta.vercel.app/",
        tech: ["Next.js", "Tailwind CSS", "JavaScript"],
        photo: ["/images/worldtime1.png", "/images/worldtime2.png"]
    },
]
