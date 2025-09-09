import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <h2 className={styles.header}>Lets Connect!</h2>
            <div className={styles.emailContainer}>
                <a href="mailto:joshua_shepard@yahoo.com" className={styles.emailLink}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />  
                    joshua_shepard@yahoo.com
                </a>
            </div>
            <div className={styles.gitHubContainer}>
                <a href="https://github.com/JoshShepard" target="_blank" className={styles.githubLink}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                    Visit My GitHub Profile!
                </a>
            </div>
            <div className={styles.linkedinContainer}>
                <a href="https://www.linkedin.com/in/joshua-shepard-66614b240" target="_blank" className={styles.linkedinLink}>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;