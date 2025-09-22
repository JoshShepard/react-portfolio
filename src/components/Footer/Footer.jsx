import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

function Footer() {
    // Framer Motion Variants
    const containerVariant = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariant = {
        hidden: { y:20, opacity: 0 },
        visible: { 
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 70, damping: 12 }
        }
    };

    return (
        <footer id="contact" className={styles.footerContainer}>
            <motion.h2
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 1.25, stiffness: 70, damping: 25 }}
                viewport={{ once:true }}
                className={styles.header}>
                Lets Connect!
            </motion.h2>

            <motion.div
                className={styles.contactContainer}
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className={styles.emailContainer} variants={itemVariant}>
                    <FontAwesomeIcon icon={faEnvelope} className={`${styles.icon} ${styles.email}`} />
                    <a href="mailto:joshua_shepard@yahoo.com" className={styles.emailLink}>
                        joshua_shepard@yahoo.com
                    </a>
                </motion.div>

                <motion.div className={styles.gitHubContainer} variants={itemVariant}>
                    <FontAwesomeIcon icon={faGithub} className={`${styles.icon} ${styles.github}`} />
                    <a href="https://github.com/JoshShepard" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                        Visit My GitHub Profile!
                    </a>
                </motion.div>

                <motion.div className={styles.linkedinContainer} variants={itemVariant}>
                    <FontAwesomeIcon icon={faLinkedin} className={`${styles.icon} ${styles.linkedin}`} />
                    <a href="https://www.linkedin.com/in/joshua-shepard-66614b240" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                        LinkedIn
                    </a>
                </motion.div>
            </motion.div>
        </footer>
    );
}

export default Footer;
