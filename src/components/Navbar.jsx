import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ theme, toggleTheme }) {
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
                <a href="#" className="navbar-logo">
                    G<span>.</span>Prieto
                </a>

                <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <li onClick={closeMenu}><a href="#sobre-mi">Sobre Mí</a></li>
                    <li onClick={closeMenu}><a href="#experiencia">Experiencia</a></li>
                    <li onClick={closeMenu}><a href="#proyectos">Proyectos</a></li>
                    <li onClick={closeMenu}><Link to="/portfolio-es" className="portfolio-nav-link">Portfolio</Link></li>
                    <li onClick={closeMenu}><a href="#habilidades">Habilidades</a></li>
                    <li onClick={closeMenu}><a href="#educacion">Educación</a></li>
                    <li onClick={closeMenu}><a href="#contacto">Contacto</a></li>

                    {/* Actions Container inside Menu for Mobile, inline for Desktop */}
                    <li className="navbar-actions-item">
                        <div className="navbar-actions">
                            <a href="/english" className="lang-toggle" aria-label="Cambiar a Inglés">
                                EN
                            </a>
                            <button
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
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

export default Navbar

