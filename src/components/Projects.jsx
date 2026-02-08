import { useState, useEffect } from 'react'
import TechCarousel from './TechCarousel'

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            icon: '🛡️',
            badge: 'TFG',
            title: 'GraphSec-IaC',
            description: 'Visualizador de seguridad de infraestructura como código. Combina grafos de dependencias de Terraform con análisis de vulnerabilidades.',
            details: 'Este proyecto aborda la complejidad de asegurar infraestructuras modernas definidas por código (IaC). GraphSec-IaC analiza archivos de Terraform, construye un grafo de dependencias de recursos y superpone vulnerabilidades detectadas por herramientas líderes como Checkov y Trivy. Esto permite a los ingenieros de seguridad visualizar el "radio de explosión" de una vulnerabilidad y priorizar las correcciones basándose en la arquitectura real, no solo en la severidad CVSS.',
            features: [
                'Motor de análisis sintáctico HCL propio',
                'Visualización de grafos interactivos con React Flow',
                'Correlación de hallazgos SARIF con nodos de infraestructura',
                'Algoritmo de propagación de riesgo en dependencias'
            ],
            tech: ['Python', 'Terraform', 'React', 'Checkov', 'Trivy', 'SARIF'],
            github: 'https://github.com/guillermop2002/GraphSec-IaC',
            demo: null
        },
        {
            icon: '🔐',
            badge: 'DevSecOps',
            title: 'Golden Pipeline',
            description: 'Pipeline CI/CD seguro con GitHub Actions que detecta y bloquea automáticamente código vulnerable antes de llegar a producción.',
            details: 'Golden Pipeline demuestra un enfoque de seguridad "shift-left" integrando Gitleaks para detección de secretos y Semgrep para análisis SAST directamente en GitHub Actions. El pipeline falla automáticamente cuando detecta secretos hardcodeados, vulnerabilidades de inyección SQL, uso inseguro de eval() o verificación SSL deshabilitada, previniendo que código vulnerable llegue a producción.',
            features: [
                'Integración de Gitleaks detectando 6+ tipos de secretos',
                'Análisis SAST con Semgrep para SQL Injection y vulnerabilidades',
                'Bloqueo automático del pipeline ante problemas de seguridad',
                'Reportes detallados de seguridad en cada commit'
            ],
            tech: ['GitHub Actions', 'Gitleaks', 'Semgrep', 'Python', 'CI/CD', 'SAST'],
            github: 'https://github.com/guillermop2002/Golden-Pipeline',
            demo: null
        },
        {
            icon: '🤖',
            badge: 'AI + RAG',
            title: 'AI Chatbot Widget',
            description: 'Infraestructura serverless para crear chatbots con RAG. Solo pasas la URL y genera automáticamente un chatbot entrenado.',
            details: 'Una solución "llave en mano" para integrar inteligencia artificial en cualquier sitio web. El sistema realiza un crawling automático del contenido de la URL proporcionada, genera embeddings vectoriales del texto y despliega un widget de chat totalmente funcional. Todo corre en el Edge (Cloudflare Workers) para garantizar mínima latencia y máxima escalabilidad sin servidores tradicionales.',
            features: [
                'Crawling y Scrapping automático de sitios web',
                'Generación de Embeddings y Búsqueda Vectorial (RAG)',
                'Arquitectura 100% Serverless en el Edge',
                'Widget empaquetado como Web Component universal'
            ],
            tech: ['Cloudflare Workers', 'React', 'Groq AI', 'KV Storage', 'RAG'],
            github: 'https://github.com/guillermop2002/chatbot',
            demo: 'https://chatbot-6h9.pages.dev'
        },
        {
            icon: '📜',
            badge: 'LegalTech',
            title: 'Patch-BOE',
            description: 'Plataforma que extrae cambios legislativos del BOE, genera resúmenes con IA y asigna puntuaciones de relevancia.',
            details: 'Patch-BOE transforma la manera en que los profesionales legales se mantienen actualizados. Diariamente, el sistema descarga el Boletín Oficial del Estado, procesa texto jurídico complejo utilizando modelos de lenguaje (LLMs) y genera resúmenes ejecutivos digeribles. Además, un sistema de scoring predice el impacto nacional de cada nueva norma, permitiendo filtrar el "ruido" regulatorio.',
            features: [
                'Pipeline ETL diario automático del BOE',
                'Resumen jurídico mediante GPT-4/Groq',
                'Algoritmo de clasificación de relevancia normativa',
                'Interfaz de lectura optimizada para abogados'
            ],
            tech: ['Next.js', 'Python', 'OpenAI', 'Web Scraping', 'PostgreSQL'],
            github: 'https://github.com/guillermop2002/Patch-Boe',
            demo: null
        },
        {
            icon: '💪',
            badge: 'SEO + GEO',
            title: 'Dreizeer',
            description: 'Digitalización completa de negocio fitness. Sitio web con máxima optimización SEO/Local y sistema de gestión.',
            details: 'Más que una web corporativa, Dreizeer es una plataforma de captación de clientes. Se implementó una estrategia agresiva de SEO Local (Google Business Profile) y SEO técnico (Core Web Vitals perfectos) que posicionó el negocio en el top 3 de búsquedas locales en Madrid en menos de 3 meses. Incluye gestión de leads y sistema de reservas integrado.',
            features: [
                'Puntuación Lighthouse 100/100 en Performance y SEO',
                'Estrategia de palabras clave transaccionales',
                'Integración con Google Maps y Business Profile',
                'Sistema de conversión de leads automatizado'
            ],
            tech: ['Next.js', 'Vercel', 'SEO', 'Google Business', 'Analytics'],
            github: 'https://github.com/guillermop2002/Dreizeer',
            demo: 'https://www.dreizeer.es'
        },
        {
            icon: '🔬',
            badge: 'Computer Vision',
            title: 'Cell Tracker',
            description: 'Sistema de rastreo y análisis de células mediante procesamiento de imágenes y machine learning.',
            details: 'Herramienta científica desarrollada para laboratorios de biología. Utiliza técnicas avanzadas de visión por computador para automatizar el tedioso proceso de contar y seguir el movimiento celular en videos de microscopía. Implementa algoritmos de segmentación Watershed y filtros de Kalman para predecir trayectorias incluso cuando las células se superponen.',
            features: [
                'Segmentación de imágenes médica avanzada',
                'Algoritmos de tracking (Kalman Filter)',
                'Análisis estadístico de movilidad y proliferación',
                'Procesamiento de video en tiempo real'
            ],
            tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'Image Processing'],
            github: null,
            demo: null
        },
        {
            icon: '🌍',
            badge: 'En Desarrollo',
            title: 'NativeConnect',
            description: 'App para conectar viajeros con locales nativos. Sistema de matching, chat en tiempo real y verificación.',
            details: 'Una plataforma social enfocada en el intercambio cultural genuino. NativeConnect utiliza geolocalización y algoritmos de afinidad para conectar viajeros que buscan experiencias auténticas con locales dispuestos a compartirlas. La seguridad es prioritaria, con sistemas de verificación de identidad y reputación comunitaria.',
            features: [
                'Geolocalización en tiempo real',
                'Chat encriptado punto a punto (E2E)',
                'Algoritmo de matching por intereses y disponibilidad',
                'Sistema de verificación de identidad (KYC light)'
            ],
            tech: ['React Native', 'Firebase', 'Node.js', 'Real-time Chat'],
            github: null,
            demo: null
        }
    ]

    // Disable scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [selectedProject])

    return (
        <section className="projects section" id="proyectos">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Proyectos</span>
                    <h2 className="section-title">
                        <span className="gradient-text">Proyectos</span> Destacados
                    </h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="project-card glass-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-header">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Ver código en GitHub">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Ver demo">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <span className="project-badge">{project.badge}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.slice(0, 3).map((tech, i) => (
                                    <span key={i} className="tag">{tech}</span>
                                ))}
                                {project.tech.length > 3 && <span className="tag">+{project.tech.length - 3}</span>}
                            </div>

                            <div className="click-hint">
                                <span>Ver detalles</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Project Details Modal */}
                {selectedProject && (
                    <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                        <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={() => setSelectedProject(null)}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </button>

                            <div className="modal-header">
                                <div className="modal-header-icon">{selectedProject.icon}</div>
                                <div className="modal-title-group">
                                    <h3>{selectedProject.title}</h3>
                                    <span className="modal-subtitle-text">{selectedProject.badge}</span>
                                </div>
                            </div>

                            <div className="modal-body">
                                <div className="modal-section">
                                    <h4 className="modal-section-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                                        Descripción Detallada
                                    </h4>
                                    <p className="modal-description">{selectedProject.details}</p>
                                </div>

                                <div className="modal-section">
                                    <h4 className="modal-section-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        Características Clave
                                    </h4>
                                    <div className="feature-list">
                                        {selectedProject.features.map((feature, idx) => (
                                            <div key={idx} className="feature-item">
                                                <span className="feature-icon-bullet">▹</span>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-section">
                                    <h4 className="modal-section-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                        Stack Tecnológico
                                    </h4>
                                    <TechCarousel
                                        technologies={selectedProject.tech}
                                        autoPlay={true}
                                        interval={2500}
                                    />
                                </div>

                                <div className="modal-section" style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
                                    {selectedProject.github && (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            Ver en GitHub
                                        </a>
                                    )}
                                    {selectedProject.demo && (
                                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            Ver Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects
