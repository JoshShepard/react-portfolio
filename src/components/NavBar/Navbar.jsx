import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

function Navbar() {
    return (
        <motion.nav className={styles.navbarContainer}
            initial={{ y: -300, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}>
            
            <ul className={styles.navbarList}>
                <motion.li whileHover={{scale: 1.2, transition: {duration: .3 },}} whileTap= {{ scale: 0.9 }}><a href="#home" className={styles.navbarItems}>HOME</a></motion.li>
                <motion.li whileHover={{scale: 1.2, transition: {duration: .3 },}} whileTap= {{ scale: 0.9 }}><a href="#projects" className={styles.navbarItems}>PROJECTS</a></motion.li>
                <motion.li whileHover={{scale: 1.2, transition: {duration: .3 },}} whileTap= {{ scale: 0.9 }}><a href="#skills" className={styles.navbarItems}>SKILLS</a></motion.li>
                <motion.li whileHover={{scale: 1.2, transition: {duration: .3 },}} whileTap= {{ scale: 0.9 }}><a href="#contact" className={styles.navbarItems}>CONTACT ME</a></motion.li>
            </ul>
            
        </motion.nav>
    );
}

export default Navbar;