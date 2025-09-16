import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

function ProjectCard({ title, description, image, techStack, repoLink }) {
  return (
	<motion.div 
	initial={{ opacity: 0, scale: 0.6 }}
  	whileInView={{ opacity: 1, scale: 1 }}
  	transition={{ type: "spring", damping: 30, stiffness: 70 }}
  	viewport={{ once: true }}
	className={styles.card}>
    	<img src={image} alt={title} className={styles.projectImage} />
      	<h3 className={styles.projectTitle}>{title}</h3>
      	<p className={styles.projectDescription}>{description}</p>
      	<div className={styles.techStack}>
        	{techStack.map((tech, i) => (
          	<span key={i}>{tech}</span>))}
      	</div>
      	<a href={repoLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
        	GitHub Repo
      	</a>
    </motion.div>
  );
}

export default ProjectCard;
