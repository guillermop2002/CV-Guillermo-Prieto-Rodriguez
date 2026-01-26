import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NavbarEN({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#home" className="navbar-logo">
                    G<span>.</span>Prieto
                </a>

                <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <li onClick={closeMenu}><a href="#about">About</a></li>
                    <li onClick={closeMenu}><a href="#experience">Experience</a></li>
                    <li onClick={closeMenu}><a href="#projects">Projects</a></li>
                    <li onClick={closeMenu}><Link to="/portfolio" className="portfolio-nav-link">Portfolio</Link></li>
                    <li onClick={closeMenu}><a href="#skills">Skills</a></li>
                    <li onClick={closeMenu}><a href="#education">Education</a></li>
                    <li onClick={closeMenu}><a href="#contact">Contact</a></li>

                    <li className="navbar-actions-item">
                        <div className="navbar-actions">
                            <a href="/" className="lang-toggle" aria-label="Switch to Spanish">
                                ES
                            </a>
                            <button
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            >
                                {theme === 'dark' ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </li>
                </ul>

                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default NavbarEN
