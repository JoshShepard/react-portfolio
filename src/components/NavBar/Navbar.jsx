import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    // Hamburger Menu -> initialize to false
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.nav className={styles.navbarContainer}
            initial={{ y: -300, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}>

            <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            
            <ul className={`${styles.navbarList} ${isOpen ? styles.showMenu : ""}`}>
                <motion.li whileHover={{scale: 1.2, transition: {duration: .3 },}} whileTap= {{ scale: 0.9 }}><a href="#home" className={styles.navbarItems} onClick={() => setIsOpen(false)}>HOME</a></motion.li>

                <motion.li whileHover={{scale: 1.2, transition: {duration: .3 },}} whileTap= {{ scale: 0.9 }}><a href="#projects" className={styles.navbarItems} onClick={() => setIsOpen(false)}>PROJECTS</a></motion.li>

                <motion.li whileHover={{scale: 1.2, transition: {duration: .3 },}} whileTap= {{ scale: 0.9 }}><a href="#skills" className={styles.navbarItems} onClick={() => setIsOpen(false)}>SKILLS</a></motion.li>

                <motion.li whileHover={{scale: 1.2, transition: {duration: .3 },}} whileTap= {{ scale: 0.9 }}><a href="#contact" className={styles.navbarItems} onClick={() => setIsOpen(false)}>CONTACT ME</a></motion.li>
            </ul>
            
        </motion.nav>
    );
}

export default Navbar;