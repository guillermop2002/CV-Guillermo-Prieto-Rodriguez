function About() {
    const stats = [
        { value: '1+', label: 'Año Experiencia' },
        { value: '6+', label: 'Proyectos' },
        { value: '5', label: 'Años Formación' },
        { value: 'C1', label: 'Nivel Inglés' }
    ]

    return (
        <section className="about section" id="sobre-mi">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Sobre Mí</span>
                    <h2 className="section-title">
                        Apasionado por la <span className="gradient-text">Seguridad</span> y la Innovación
                    </h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Soy Ingeniero de Ciberseguridad graduado por la <strong>Universidad Rey Juan Carlos</strong>,
                            con una sólida formación en seguridad ofensiva, análisis de vulnerabilidades y desarrollo
                            de software seguro. Mi enfoque combina habilidades técnicas en <strong>pentesting</strong>,
                            <strong>hacking ético</strong> y <strong>DevSecOps</strong> con una mentalidad orientada
                            a la resolución creativa de problemas.
                        </p>
                        <p>
                            Durante mi experiencia profesional en el <strong>Centro de Servicios Avanzados (CSA)</strong>,
                            he trabajado con herramientas del ecosistema de ciberseguridad nacional, participando en
                            la gestión de incidentes y la implementación de controles de seguridad bajo el
                            <strong> Esquema Nacional de Seguridad (ENS)</strong> e <strong>ISO 27001</strong>.
                        </p>
                        <p>
                            Además de la seguridad, me apasiona desarrollar soluciones innovadoras que integran
                            <strong> Inteligencia Artificial</strong>, desde chatbots con RAG hasta herramientas
                            de análisis automatizado. Busco oportunidades donde pueda combinar mi conocimiento
                            en ciberseguridad con el desarrollo de software de alto impacto.
                        </p>

                        {/* Recommendation Quote */}
                        <div className="recommendation-quote glass-card" style={{
                            marginTop: 'var(--space-8)',
                            padding: 'var(--space-6)',
                            borderLeft: '3px solid var(--accent-1)',
                            position: 'relative'
                        }}>
                            <div style={{
                                fontSize: 'var(--font-size-3xl)',
                                color: 'var(--accent-1)',
                                position: 'absolute',
                                top: 'var(--space-2)',
                                left: 'var(--space-4)',
                                opacity: 0.5
                            }}>"</div>
                            <p style={{
                                fontStyle: 'italic',
                                color: 'var(--text-secondary)',
                                marginBottom: 'var(--space-4)',
                                paddingLeft: 'var(--space-4)'
                            }}>
                                Guillermo ha demostrado una excelente capacidad de aprendizaje y adaptación,
                                destacando por su proactividad, responsabilidad y habilidades técnicas
                                en el ámbito de la ciberseguridad.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: 'var(--space-4)'
                            }}>
                                <div>
                                    <strong style={{ color: 'var(--text-primary)' }}>Centro de Servicios Avanzados (CSA)</strong>
                                    <span style={{
                                        display: 'block',
                                        fontSize: 'var(--font-size-sm)',
                                        color: 'var(--text-tertiary)'
                                    }}>Carta de Recomendación</span>
                                </div>
                                <a
                                    href="/Carta de Recomendación CSA.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                    style={{ fontSize: 'var(--font-size-xs)' }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    Ver Carta
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card glass-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

