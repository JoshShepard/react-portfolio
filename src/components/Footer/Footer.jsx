import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer id="contact" className={styles.footerContainer}>
            <h2 className={styles.header}>Lets Connect!</h2>
            <div className={styles.contactContainer}>
                <div className={styles.emailContainer}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />  
                    <a href="mailto:joshua_shepard@yahoo.com" className={styles.emailLink}>
                        joshua_shepard@yahoo.com
                    </a>
                </div>
                <div className={styles.gitHubContainer}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                    <a href="https://github.com/JoshShepard" target="_blank" className={styles.githubLink}>
                        Visit My GitHub Profile!
                    </a>
                </div>
                <div className={styles.linkedinContainer}>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                    <a href="https://www.linkedin.com/in/joshua-shepard-66614b240" target="_blank" className={styles.linkedinLink}>
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;