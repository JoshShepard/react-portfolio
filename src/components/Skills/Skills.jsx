import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3Alt, faJs, faGit, faReact } from '@fortawesome/free-brands-svg-icons';

// Icon Variant Object
const skillIconVariant = {
    hidden: { x: -200, opacity: 0, rotate: 0 },
    visible: { x: 0, scale: 1, opacity: 1, rotate: 360 },
};

function Skills() {
    return (
        <section id="skills" className={styles.skillsContainer}>
            <motion.h2
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 1.25, stiffness: 70, damping: 25 }}
                viewport={{ once:true }}
                className={styles.skillTitle}>
                SKILLS
            </motion.h2>

            <motion.div className={styles.skillList}>
                <motion.div 
                    style={{ display: "inline-block"}}
                    variants={skillIconVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ type: 'spring', duration: 1.5, stiffness: 70, damping: 25, delay: 0.25 }}
                    viewport={{ once:true }}>
                    <FontAwesomeIcon icon={faJava} className={styles.skillIcon} />  
                </motion.div>

                <motion.div 
                    style={{ display: "inline-block"}}
                    variants={skillIconVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ type: 'spring', duration: 1.5, stiffness: 70, damping: 25, delay: 0.4 }}
                    viewport={{ once:true }}>
                    <FontAwesomeIcon icon={faHtml5} className={styles.skillIcon} /> 
                </motion.div>

                <motion.div 
                    style={{ display: "inline-block"}}
                    variants={skillIconVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ type: 'spring', duration: 1.5, stiffness: 70, damping: 25, delay: 0.6 }}
                    viewport={{ once:true }}>
                    <FontAwesomeIcon icon={faCss3Alt} className={styles.skillIcon} />
                </motion.div>

                <motion.div 
                    style={{ display: "inline-block"}}
                    variants={skillIconVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ type: 'spring', duration: 1.5, stiffness: 70, damping: 25, delay: 0.8 }}
                    viewport={{ once:true }}>
                    <FontAwesomeIcon icon={faJs} className={styles.skillIcon} />
                </motion.div>

                <motion.div 
                    style={{ display: "inline-block"}}
                    variants={skillIconVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ type: 'spring', duration: 1.5, stiffness: 70, damping: 25, delay: 1.0 }}
                    viewport={{ once:true }}>
                    <FontAwesomeIcon icon={faReact} className={styles.skillIcon} />
                </motion.div>

                <motion.div 
                    style={{ display: "inline-block"}}
                    variants={skillIconVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ type: 'spring', duration: 1.5, stiffness: 70, damping: 25, delay: 1.2 }}
                    viewport={{ once:true }}>
                    <FontAwesomeIcon icon={faGit} className={styles.skillIcon} />
                </motion.div>
            </motion.div>        
        </section>
    );
}

export default Skills;