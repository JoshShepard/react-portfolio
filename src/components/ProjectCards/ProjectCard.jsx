import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, image, techStack, repoLink }) {
  return (
    <div className={styles.card}>
    	<img src={image} alt={title} className={styles.projectImage} />
      	<h3 className={styles.projectTitle}>{title}</h3>
      	<p className={styles.projectDescription}>{description}</p>
      	<div className={styles.techStack}>
        	{techStack.map((tech, i) => (
          	<span key={i}>{tech}</span>))}
      	</div>
      	<a href={repoLink} target="_blank" className={styles.projectLink}>
        	GitHub Repo
      	</a>
    </div>
  );
}

export default ProjectCard;
