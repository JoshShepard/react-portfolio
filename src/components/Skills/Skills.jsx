import styles from './Skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3Alt, faJs, faGit, faReact } from '@fortawesome/free-brands-svg-icons';

function Skills() {
    return (
        <section id="skills" className={styles.skillsContainer}>
            <h2 className={styles.skillTitle}>SKILLS</h2>
            <div className={styles.skillList}>
                <FontAwesomeIcon icon={faJava} className={styles.skillIcon} />
                <FontAwesomeIcon icon={faHtml5} className={styles.skillIcon} />
                <FontAwesomeIcon icon={faCss3Alt} className={styles.skillIcon} />
                <FontAwesomeIcon icon={faJs} className={styles.skillIcon} />
                <FontAwesomeIcon icon={faReact} className={styles.skillIcon} />
                <FontAwesomeIcon icon={faGit} className={styles.skillIcon} />
            </div>
        
        </section>
    );
}

export default Skills;