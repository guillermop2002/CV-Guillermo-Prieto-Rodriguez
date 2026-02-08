import { useRef, useEffect } from 'react'

function About() {
    const stats = [
        { value: '1+', label: 'Year Experience' },
        { value: '6+', label: 'Projects' },
        { value: '5', label: 'Years Education' },
        { value: 'C1', label: 'English Level' }
    ]

    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Journey</span>
                    </h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a Cybersecurity Engineer graduated from <strong>Rey Juan Carlos University</strong>,
                            with a strong background in offensive security, vulnerability analysis, and secure software development.
                            My focus combines technical skills in <strong>pentesting</strong>, <strong>ethical hacking</strong>,
                            and <strong>DevSecOps</strong> with a mindset oriented towards creative problem solving.
                        </p>
                        <p>
                            During my professional experience at <strong>Centro de Servicios Avanzados (CSA)</strong>,
                            I worked with tools from the national cybersecurity ecosystem, participating in incident management
                            and the implementation of security controls under the <strong>National Security Scheme (ENS)</strong> and <strong>ISO 27001</strong>.
                        </p>
                        <p>
                            Beyond security, I am passionate about developing innovative solutions that integrate <strong>Artificial Intelligence</strong>,
                            from chatbots with RAG to automated analysis tools. I seek opportunities where I can combine my cybersecurity knowledge
                            with high-impact software development.
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
                                Guillermo has demonstrated excellent learning capability and adaptability,
                                standing out for his proactivity, responsibility, and technical skills
                                in the cybersecurity field.
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
                                    }}>Recommendation Letter</span>
                                </div>
                                <a
                                    href="/Carta Recomendacion CSA.pdf"
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
                                    View Letter
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
