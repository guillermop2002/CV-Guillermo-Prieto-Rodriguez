import { useState, useEffect, useRef } from 'react'

/**
 * TechCarousel - Carrusel interactivo de tecnologías
 * 
 * @param {string[]} technologies - Array de tecnologías a mostrar
 * @param {boolean} autoPlay - Si debe reproducirse automáticamente (default: true)
 * @param {number} interval - Intervalo de auto-scroll en ms (default: 2000)
 * @param {string} variant - 'inline' para tags, 'card' para cards más grandes
 */
function TechCarousel({ technologies, autoPlay = true, interval = 2000, variant = 'inline' }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef(null)

    // Número de items visibles según el ancho
    const visibleItems = variant === 'card' ? 3 : 4

    // Auto-scroll effect
    useEffect(() => {
        if (!autoPlay || isPaused || isHovered) return

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % technologies.length)
        }, interval)

        return () => clearInterval(timer)
    }, [autoPlay, isPaused, isHovered, technologies.length, interval])

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % technologies.length)
    }

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + technologies.length) % technologies.length)
    }

    const togglePause = () => {
        setIsPaused(!isPaused)
    }

    // Calcular items visibles con wrap-around
    const getVisibleTech = () => {
        const items = []
        for (let i = 0; i < visibleItems; i++) {
            const index = (currentIndex + i) % technologies.length
            items.push({ tech: technologies[index], index })
        }
        return items
    }

    return (
        <div
            className={`tech-carousel tech-carousel-${variant}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={containerRef}
        >
            <div className="tech-carousel-track">
                {getVisibleTech().map(({ tech, index }) => (
                    <span
                        key={`${tech}-${index}`}
                        className="tag tag-cyan tech-carousel-item"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="tech-carousel-controls">
                <button
                    className="tech-carousel-btn"
                    onClick={goPrev}
                    aria-label="Anterior"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <button
                    className="tech-carousel-btn tech-carousel-pause"
                    onClick={togglePause}
                    aria-label={isPaused ? "Reproducir" : "Pausar"}
                >
                    {isPaused ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                        </svg>
                    )}
                </button>

                <button
                    className="tech-carousel-btn"
                    onClick={goToNext}
                    aria-label="Siguiente"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* Indicadores de posición */}
            <div className="tech-carousel-indicators">
                {technologies.map((_, idx) => (
                    <button
                        key={idx}
                        className={`tech-carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Ir a tecnología ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default TechCarousel
