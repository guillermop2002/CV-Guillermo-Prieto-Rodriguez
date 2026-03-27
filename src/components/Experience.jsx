function Experience() {
    const experiences = [
        {
            date: 'Marzo 2026 - Presente',
            role: 'Security Engineer',
            company: 'Edpuzzle',
            location: 'Remoto',
            description: [
                'Gestión integral de la seguridad en la nube (AWS/GCP), asegurando la protección de datos en el entorno EdTech (GDPR, FERPA).',
                'Implementación de DevSecOps, integrando automatización de controles de seguridad (SAST, DAST, SCA) en los pipelines CI/CD.',
                'Gestión técnica de vulnerabilidades y triaje de reportes en plataformas de Bug Bounty para mitigar riesgos críticos rápidamente.',
                'Desarrollo de estrategias "Policy-as-Code" para mantener el cumplimiento normativo y endurecer la infraestructura.'
            ],
            skills: ['Cloud Security', 'DevSecOps', 'AWS/GCP', 'Bug Bounty', 'GDPR/FERPA', 'Policy-as-Code']
        },
        {
            date: 'Enero 2025 - Febrero 2026',
            role: 'Ingeniero de Ciberseguridad',
            company: 'Centro de Servicios Avanzados (CSA)',
            location: 'Madrid, España',
            description: [
                'Trabajo con herramientas del ecosistema CCN-CERT como LUCIA (Listado Unificado de Coordinación de Incidentes y Amenazas) para la gestión centralizada de ciberincidentes',
                'Participación activa en el SOC (Security Operations Center) realizando monitorización 24/7 y análisis de eventos de seguridad mediante SIEM',
                'Ejecución de análisis de vulnerabilidades y pruebas de penetración en infraestructuras críticas siguiendo metodologías OWASP y PTES',
                'Desarrollo de scripts de automatización en Python para la detección y respuesta ante incidentes de seguridad',
                'Implementación y auditoría de controles de seguridad según Esquema Nacional de Seguridad (ENS) e ISO 27001/27002',
                'Elaboración de informes técnicos de seguridad y documentación de procedimientos para respuesta ante incidentes',
                'Colaboración en la configuración y hardening de sistemas según guías CCN-STIC'
            ],
            skills: ['LUCIA', 'SOC', 'SIEM', 'Pentesting', 'ISO 27001', 'ENS', 'Python', 'OWASP', 'CCN-STIC']
        },
        {
            date: 'Septiembre 2020 - Julio 2025',
            role: 'Formación Especializada en Ciberseguridad',
            company: 'Universidad Rey Juan Carlos',
            location: 'Madrid, España',
            description: [
                'Especialización en Técnicas de Hacking: Explotación de vulnerabilidades, reconocimiento y escaneo con Burp Suite, Metasploit y Nmap',
                'Pentesting avanzado: Etapas completas de un pentest, desarrollo de exploits y entornos web',
                'Seguridad en Redes: Wireshark, Firewalls, IDS/IPS, seguridad en capa de red (IPSec)',
                'Inteligencia Artificial aplicada a la seguridad: Machine Learning, Deep Learning y sistemas de decisión',
                'Desarrollo Web Seguro: Buenas prácticas OWASP, prevención de inyecciones SQL, XSS y CSRF'
            ],
            skills: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'IDS/IPS', 'Machine Learning', 'OWASP Top 10']
        }
    ]

    return (
        <section className="experience section" id="experiencia">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Experiencia</span>
                    <h2 className="section-title">
                        Mi <span className="gradient-text">Trayectoria</span> Profesional
                    </h2>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-dot"></div>
                            <div className="experience-card glass-card">
                                <span className="experience-date">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {exp.date}
                                </span>
                                <h3 className="experience-role">{exp.role}</h3>
                                <p className="experience-company">
                                    {exp.company} • {exp.location}
                                </p>
                                <div className="experience-description">
                                    <ul>
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="experience-skills">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
