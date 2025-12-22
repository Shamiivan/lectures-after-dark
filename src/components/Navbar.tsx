import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Mic } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <NavLink to="/" className={styles.logo}>
                    <Mic size={24} />
                    <span className={styles.highlightText}>Lectures</span>&nbsp;After Dark
                </NavLink>
                <div className={styles.links}>
                    <NavLink
                        to="/events"
                        className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
                    >
                        Events
                    </NavLink>
                    <NavLink
                        to="/speakers"
                        className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
                    >
                        Speakers
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? `${styles.contactBtn} ${styles.contactBtnActive}` : styles.contactBtn}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
