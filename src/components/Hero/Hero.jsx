import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import heroImage from '../../assets/HeroSection.png';

function Hero() {
    return (
        <section id="home" className={styles.heroContainer}>
            <motion.h2 
            initial={{x:-700, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{ type: "spring", stiffness: 70, damping: 12, duration: .7, delay: .2}}
            className={styles.intro}>Hello, I'm <span className={styles.name}>Josh</span>!</motion.h2>

            <motion.img 
            initial={{x: 700, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{ type: "spring", stiffness: 70, damping: 12, duration: .7, delay: .4 }}
            src={heroImage} className={styles.heroImage} alt="AI image of guy coding."/>

            <motion.h3 
            initial={{x:-700, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{ type: "spring", stiffness: 70, damping: 12, duration: .7, delay: .6 }}
            className={styles.title}>Computer Science Graduate <span className={styles.breakpoint}>|</span> Aspiring Software Engineer </motion.h3>


            <motion.p 
            initial={{x:700, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{ type: "spring", stiffness: 70, damping: 12, duration: .7, delay: .8 }}
            className={styles.description}>As a recent graduate of Franklin University with a degree in Computer Science, I built a strong foundation in software engineering and problem-solving. My passion lies in creating web and software applications that make a real impact. I am eager to start my career in software engineering, where I can contribute to meaningful projects while continuously learning and collaborating.</motion.p>
        </section>
    );
}

export default Hero;