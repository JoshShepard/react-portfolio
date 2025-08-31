import styles from './Projects.module.css';
import ProjectCard from '../ProjectCards/ProjectCard';
import GitHubImg from '../../assets/GithubProject.png';
import WeatherImg from '../../assets/WeatherProject.png';
import AnimeImg from '../../assets/AnimeTrackerProject.png';
import ComingSoon from '../../assets/ComingSoon.jpg';
import { motion } from 'framer-motion';


function Projects() {
    // List of project objects -> TODO: maybe use useState to manage projects to make adding/editing project objects easier (after portfolio is done)
    const projects =[
        {
            title: "GitHub Profile Finder",
            description: "A React app that connects to the GitHub API to search for users and display profile details like avatar, bio, and repositories. Built with React hooks to practice API integration and state management.",
            image: GitHubImg,
            techStack: ["React", "JavaScript", "CSS", "GitHub API"],
            repoLink: "https://github.com/JoshShepard/github-profile-finder"
        },
        {
            title: "Weather Dashboard",
            description: "A JavaScript weather application that fetches live weather data from an API and displays current conditions. Focused on responsive design and working with real-time API data.", 
            image: WeatherImg,
            techStack: ["HTML", "CSS", "JavaScript", "WeatherAPI"],
            repoLink: "https://github.com/JoshShepard/WeatherApp"
        },
        {
            title: "Anime Tracker",
            description: "A simple app for tracking anime series using Jikan API and vanilla JavaScript. Strengthened DOM manipulation skills and improved understanding of interactive UI design.",
            image: AnimeImg,
            techStack: ["HTML", "CSS", "JavaScript", "Jikan API"],
            repoLink: "https://github.com/JoshShepard/AnimeTracker"
        }, 
        {
            title: "Above Par Golf",
            description: "Coming soon: A full-stack web application for organizing and signing up for events. Built with Next.js on the frontend and Node.js on the backend, with PostgreSQL as the database.",
            image: ComingSoon,
            techStack: ["Next.js", "Node.js", "PostgreSQL"],
            repoLink: "https://github.com/JoshShepard/Above-Par"    
        },
    ];

    return (
        <section id="projects" className={styles.projectContainer}>
            <motion.h2
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 1.25, stiffness: 70, damping: 25 }}
                viewport={{ once:true }}
                className={styles.heading}>
                PROJECTS
            </motion.h2>

            {/* TODO: Framer motion for the box of project cards */}
            <div className={styles.projects}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;