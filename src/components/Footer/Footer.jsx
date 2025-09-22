import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

function Footer() {
    // Framer Motion Variants
    const headerVariant = {
        hidden: { x: 500, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 40, damping: 12 }
        }
    };

    const containerVariant = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariant = {
        hidden: { x: -300, opacity: 0 },
        visible: { 
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 40, damping: 12 }
        }
    };

    return (
        <footer id="contact" className={styles.footerContainer}>
            <motion.h2
                className={styles.header}
                variants={headerVariant}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
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
