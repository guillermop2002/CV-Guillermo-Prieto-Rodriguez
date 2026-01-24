import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [filter, setFilter] = useState('all')
    const [carouselIndex, setCarouselIndex] = useState(0)

    const projects = [
        {
            id: 'graphsec-iac',
            icon: '🛡️',
            category: 'security',
            badge: 'TFG',
            title: 'GraphSec-IaC',
            subtitle: 'Visualizador de Seguridad de Infraestructura',
            description: 'Visualizador de seguridad de infraestructura como código que combina grafos de dependencias de Terraform con análisis de vulnerabilidades de herramientas líderes.',
            image: '/portfolio/graphsec-iac.png',
            problem: 'La infraestructura cloud moderna definida por código (IaC) puede ser extremadamente compleja, con cientos de recursos interconectados. Cuando las herramientas de seguridad detectan vulnerabilidades, es difícil entender el impacto real sin ver el contexto arquitectónico.',
            solution: 'GraphSec-IaC analiza archivos de Terraform, construye un grafo completo de dependencias de recursos y superpone vulnerabilidades detectadas por Checkov y Trivy. Los ingenieros de seguridad ahora pueden visualizar el "radio de explosión" de cada vulnerabilidad y priorizar correcciones basándose en la arquitectura real, no solo en la severidad CVSS.',
            features: [
                'Motor de análisis HCL personalizado que entiende la sintaxis de Terraform',
                'Visualización de grafos interactivos con React Flow',
                'Correlación de hallazgos SARIF con nodos de infraestructura',
                'Algoritmo de propagación de riesgo que rastrea el impacto a través de dependencias',
                'Capacidades de filtrado y búsqueda para grandes infraestructuras',
                'Exportación de informes para auditorías de seguridad'
            ],
            tech: ['Python', 'Terraform', 'React', 'React Flow', 'Checkov', 'Trivy', 'SARIF', 'Docker'],
            metrics: [
                { label: 'Detección de Vulnerabilidades', value: '98%' },
                { label: 'Recursos Analizados', value: '1000+' },
                { label: 'Tiempo de Integración', value: '<5min' }
            ],
            github: 'https://github.com/guillermop2002/GraphSec-IaC',
            demo: null,
            year: '2024',
            duration: '6 meses',
            role: 'Desarrollador Full-stack & Investigador de Seguridad'
        },
        {
            id: 'golden-pipeline',
            icon: '🔐',
            category: 'security',
            badge: 'DevSecOps',
            title: 'Golden Pipeline',
            subtitle: 'Demo de Seguridad como Código',
            description: 'Implementación de pipeline CI/CD seguro usando GitHub Actions que detecta y bloquea automáticamente código vulnerable antes de llegar a producción.',
            image: '/portfolio/golden-pipeline.png',
            images: [
                '/portfolio/screenshots/01_pipeline_failed_overview.png',
                '/portfolio/screenshots/02_gitleaks_secrets_detected.png',
                '/portfolio/screenshots/03_semgrep_vulnerabilities.png',
                '/portfolio/screenshots/04_security_summary.png',
                '/portfolio/screenshots/05_gitleaks_logs_detail.png',
                '/portfolio/screenshots/06_semgrep_logs_detail.png',
                '/portfolio/screenshots/07_pipeline_success_overview.png',
                '/portfolio/screenshots/08_all_jobs_passed.png'
            ],
            problem: 'Los equipos de software a menudo publican código vulnerable en producción porque los escaneos de seguridad no están integrados en el flujo de desarrollo, se ejecutan demasiado tarde en el proceso, o producen demasiados falsos positivos que los desarrolladores ignoran.',
            solution: 'Golden Pipeline demuestra un enfoque de seguridad "shift-left" integrando Gitleaks para detección de secretos y Semgrep para análisis SAST directamente en GitHub Actions. El pipeline falla automáticamente cuando detecta secretos hardcodeados, vulnerabilidades de inyección SQL, uso inseguro de eval() o verificación SSL deshabilitada—previniendo que código vulnerable llegue a producción.',
            features: [
                'Integración de Gitleaks detectando 6+ tipos de secretos hardcodeados',
                'Análisis SAST con Semgrep para SQL Injection y vulnerabilidades de código',
                'Bloqueo automático del pipeline ante problemas de seguridad',
                'Reportes detallados de seguridad en cada commit',
                'Flujo de trabajo documentado de remediación de vulnerabilidades',
                'Demostración completa con vulnerabilidades intencionales y correcciones'
            ],
            tech: ['GitHub Actions', 'Gitleaks', 'Semgrep', 'Python', 'CI/CD', 'SAST', 'DevSecOps', 'YAML'],
            metrics: [
                { label: 'Secretos Detectados', value: '6+' },
                { label: 'Tipos de Vulns', value: '4' },
                { label: 'Velocidad Pipeline', value: '<2min' }
            ],
            github: 'https://github.com/guillermop2002/Golden-Pipeline',
            demo: null,
            year: '2025',
            duration: '1 semana',
            role: 'Ingeniero de Seguridad'
        },
        {
            id: 'ai-chatbot',
            icon: '🤖',
            category: 'ai',
            badge: 'AI + RAG',
            title: 'AI Chatbot Widget',
            subtitle: 'Asistente Serverless con RAG',
            description: 'Infraestructura serverless llave en mano para crear chatbots con RAG. Simplemente proporciona una URL y genera automáticamente un widget de chatbot completamente entrenado.',
            image: '/portfolio/chatbot-widget.png',
            problem: 'Las empresas quieren añadir soporte de chat con IA a sus sitios web, pero construir una solución personalizada requiere experiencia significativa en ML, gestión de infraestructura y costes de mantenimiento continuos.',
            solution: 'Una solución completamente serverless que corre en la red edge de Cloudflare Workers. El sistema automáticamente rastrea la URL proporcionada, genera embeddings vectoriales y despliega un widget de chat funcional—todo sin servidores tradicionales, asegurando mínima latencia y máxima escalabilidad.',
            features: [
                'Crawling automático de sitios web y scraping inteligente',
                'Generación de embeddings vectoriales y búsqueda semántica (RAG)',
                'Arquitectura Edge 100% serverless en Cloudflare Workers',
                'Widget empaquetado como Web Component universal',
                'Respuestas en streaming en tiempo real para mejor UX',
                'Apariencia y branding personalizables'
            ],
            tech: ['Cloudflare Workers', 'React', 'Groq AI', 'KV Storage', 'RAG', 'Web Components', 'Vite'],
            metrics: [
                { label: 'Tiempo de Respuesta', value: '<500ms' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Coste/Mes', value: '$0*' }
            ],
            github: 'https://github.com/guillermop2002/chatbot',
            demo: 'https://chatbot-6h9.pages.dev',
            year: '2024',
            duration: '3 meses',
            role: 'Desarrollador Full-stack'
        },
        {
            id: 'patch-boe',
            icon: '📜',
            category: 'ai',
            badge: 'LegalTech',
            title: 'Patch-BOE',
            subtitle: 'Inteligencia Legislativa con IA',
            description: 'Plataforma que extrae cambios legislativos del Boletín Oficial del Estado (BOE), genera resúmenes con IA y asigna puntuaciones de relevancia.',
            image: '/portfolio/patch-boe.png',
            problem: 'Los profesionales legales pasan horas diarias leyendo el Boletín Oficial del Estado para mantenerse actualizados sobre nuevas regulaciones. La mayoría del contenido es irrelevante para su práctica, pero no pueden arriesgarse a perderse cambios importantes.',
            solution: 'Patch-BOE automatiza todo el proceso. Diariamente, el sistema descarga el BOE, procesa texto legal complejo usando modelos de lenguaje (LLMs) y genera resúmenes ejecutivos digeribles. Un sistema de puntuación predice el impacto nacional de cada nueva regulación, permitiendo a los usuarios filtrar el "ruido" regulatorio.',
            features: [
                'Pipeline ETL diario automatizado del BOE',
                'Resumen legal mediante GPT-4 y Groq',
                'Algoritmo de clasificación de relevancia normativa',
                'Interfaz de lectura optimizada para profesionales legales',
                'Digest por email con filtros personalizados',
                'Búsqueda histórica y análisis de tendencias'
            ],
            tech: ['Next.js', 'Python', 'OpenAI', 'Groq', 'Web Scraping', 'PostgreSQL', 'Redis', 'Docker'],
            metrics: [
                { label: 'Publicaciones Diarias', value: '200+' },
                { label: 'Tiempo de Procesamiento', value: '<30min' },
                { label: 'Precisión', value: '94%' }
            ],
            github: 'https://github.com/guillermop2002/Patch-Boe',
            demo: null,
            year: '2024',
            duration: '4 meses',
            role: 'Desarrollador Full-stack & Ingeniero de IA'
        },
        {
            id: 'dreizeer',
            icon: '💪',
            category: 'web',
            badge: 'SEO + GEO',
            title: 'Dreizeer',
            subtitle: 'Digitalización de Negocio Fitness',
            description: 'Transformación digital completa de un negocio fitness. Sitio web con máxima optimización SEO/Local y sistema de gestión integrado.',
            image: '/portfolio/dreizeer.png',
            problem: 'Los negocios fitness locales luchan por competir online. Carecen de conocimiento técnico para implementar SEO adecuado, y la mayoría de soluciones web son plantillas genéricas que no convierten visitantes en clientes.',
            solution: 'Más que una web corporativa, Dreizeer es una plataforma de captación de clientes. Se implementó una estrategia agresiva de SEO Local (Google Business Profile) y SEO técnico (Core Web Vitals perfectos) que posicionó el negocio en el top 3 de búsquedas locales en Madrid en menos de 3 meses.',
            features: [
                'Puntuación Lighthouse perfecta: 100/100 en Performance y SEO',
                'Estrategia de palabras clave transaccionales orientadas a alta intención',
                'Integración profunda con Google Maps y Business Profile',
                'Sistema automatizado de conversión de leads con secuencias de seguimiento',
                'Diseño responsive mobile-first',
                'Dashboard de analytics para seguimiento de conversiones'
            ],
            tech: ['Next.js', 'Vercel', 'SEO', 'Google Business', 'Google Analytics', 'Schema.org', 'Tailwind CSS'],
            metrics: [
                { label: 'Lighthouse Score', value: '100/100' },
                { label: 'Ranking Local', value: 'Top 3' },
                { label: 'Conversión Leads', value: '+340%' }
            ],
            github: 'https://github.com/guillermop2002/Dreizeer',
            demo: 'https://www.dreizeer.es',
            year: '2024',
            duration: '2 meses',
            role: 'Desarrollador Full-stack & Especialista SEO'
        },
        {
            id: 'cell-tracker',
            icon: '🔬',
            category: 'ml',
            badge: 'Computer Vision',
            title: 'Cell Tracker',
            subtitle: 'Herramienta Científica de Análisis Celular',
            description: 'Sistema de rastreo y análisis de células usando procesamiento de imagen avanzado y machine learning para laboratorios de biología.',
            image: '/portfolio/cell-tracker.png',
            problem: 'Los biólogos pasan incontables horas contando células manualmente y rastreando su movimiento en videos de microscopía. Este proceso es tedioso, propenso a errores y crea un cuello de botella en los flujos de investigación.',
            solution: 'Una herramienta científica que usa técnicas avanzadas de visión por computador para automatizar el conteo de células y el seguimiento de movimiento. Implementa algoritmos de segmentación Watershed y filtros de Kalman para predecir trayectorias incluso cuando las células se superponen.',
            features: [
                'Segmentación de imagen médica avanzada usando Watershed',
                'Tracking multi-objeto con predicciones de Filtro de Kalman',
                'Análisis estadístico de movilidad y proliferación celular',
                'Procesamiento de video en tiempo real',
                'Exportación de datos a CSV/Excel para análisis posterior',
                'Procesamiento por lotes para múltiples experimentos'
            ],
            tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'SciPy', 'Matplotlib', 'scikit-image'],
            metrics: [
                { label: 'Precisión', value: '96%' },
                { label: 'Velocidad', value: '30 FPS' },
                { label: 'Tiempo Ahorrado', value: '85%' }
            ],
            github: null,
            demo: null,
            year: '2023',
            duration: '5 meses',
            role: 'Ingeniero ML'
        },
        {
            id: 'nativeconnect',
            icon: '🌍',
            category: 'mobile',
            badge: 'En Desarrollo',
            title: 'NativeConnect',
            subtitle: 'Plataforma de Intercambio Cultural',
            description: 'App móvil que conecta viajeros con locales nativos. Sistema de matching, chat en tiempo real y verificación de identidad.',
            image: '/portfolio/nativeconnect.png',
            problem: 'Los viajeros que buscan experiencias culturales auténticas no tienen una forma fácil de conectar con locales dispuestos a compartir su cultura. Las plataformas existentes son demasiado comerciales o carecen de medidas de seguridad adecuadas.',
            solution: 'Una plataforma social enfocada en el intercambio cultural genuino. NativeConnect usa geolocalización y algoritmos de afinidad para conectar viajeros que buscan experiencias auténticas con locales dispuestos a compartirlas. La seguridad es prioritaria, con verificación de identidad y sistemas de reputación comunitaria.',
            features: [
                'Geolocalización en tiempo real con controles de privacidad',
                'Mensajería encriptada punto a punto (E2E)',
                'Algoritmo de matching basado en intereses y disponibilidad',
                'Sistema de verificación de identidad KYC ligero',
                'Sistema de reseñas y reputación',
                'Traducción in-app para más de 50 idiomas'
            ],
            tech: ['React Native', 'Firebase', 'Node.js', 'Socket.io', 'PostgreSQL', 'AWS S3', 'Stripe'],
            metrics: [
                { label: 'Tasa de Match', value: '78%' },
                { label: 'Tiempo de Respuesta', value: '<2h' },
                { label: 'Puntuación Seguridad', value: '4.9/5' }
            ],
            github: null,
            demo: null,
            year: '2025',
            duration: 'En curso',
            role: 'Desarrollador Mobile Full-stack'
        }
    ]

    const categories = [
        { id: 'all', label: 'Todos', icon: '🎯' },
        { id: 'security', label: 'Seguridad', icon: '🛡️' },
        { id: 'ai', label: 'IA & ML', icon: '🤖' },
        { id: 'web', label: 'Web', icon: '🌐' },
        { id: 'mobile', label: 'Móvil', icon: '📱' },
        { id: 'ml', label: 'Computer Vision', icon: '🔬' }
    ]

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter)

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden'
            setCarouselIndex(0)
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [selectedProject])

    const nextImage = () => {
        if (selectedProject?.images) {
            setCarouselIndex((prev) => (prev + 1) % selectedProject.images.length)
        }
    }

    const prevImage = () => {
        if (selectedProject?.images) {
            setCarouselIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
        }
    }

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="container">
                    <Link to="/" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Volver al CV
                    </Link>

                    <div className="portfolio-hero-content">
                        <span className="section-label">Portfolio</span>
                        <h1 className="portfolio-title">
                            Mi <span className="gradient-text">Trabajo</span>
                        </h1>
                        <p className="portfolio-subtitle">
                            Una colección de proyectos que muestran mi experiencia en desarrollo full-stack,
                            ingeniería de seguridad e integración de IA. Cada proyecto representa un problema
                            real resuelto con tecnologías modernas.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="portfolio-filters">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                                onClick={() => setFilter(cat.id)}
                            >
                                <span className="filter-icon">{cat.icon}</span>
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="portfolio-projects">
                <div className="container">
                    <div className="portfolio-grid">
                        {filteredProjects.map((project, index) => (
                            <article
                                key={project.id}
                                className="portfolio-card glass-card"
                                onClick={() => setSelectedProject(project)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="portfolio-card-image">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        loading="lazy"
                                    />
                                    <div className="portfolio-card-overlay">
                                        <span className="view-project">Ver Caso de Estudio</span>
                                    </div>
                                </div>

                                <div className="portfolio-card-content">
                                    <div className="portfolio-card-header">
                                        <span className="portfolio-card-icon">{project.icon}</span>
                                        <span className="portfolio-card-badge">{project.badge}</span>
                                    </div>

                                    <h3 className="portfolio-card-title">{project.title}</h3>
                                    <p className="portfolio-card-subtitle">{project.subtitle}</p>
                                    <p className="portfolio-card-description">{project.description}</p>

                                    <div className="portfolio-card-tech">
                                        {project.tech.slice(0, 4).map((tech, i) => (
                                            <span key={i} className="tag">{tech}</span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="tag">+{project.tech.length - 4}</span>
                                        )}
                                    </div>

                                    <div className="portfolio-card-meta">
                                        <span className="meta-item">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                            {project.year}
                                        </span>
                                        <span className="meta-item">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                            {project.duration}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <div className="portfolio-modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="portfolio-modal glass-card" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedProject(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="portfolio-modal-content">
                            {/* Header */}
                            <div className="portfolio-modal-header">
                                <div className="portfolio-modal-title-group">
                                    <span className="portfolio-modal-icon">{selectedProject.icon}</span>
                                    <div>
                                        <h2>{selectedProject.title}</h2>
                                        <p className="portfolio-modal-subtitle">{selectedProject.subtitle}</p>
                                    </div>
                                </div>
                                <span className="portfolio-modal-badge">{selectedProject.badge}</span>
                            </div>

                            {/* Image / Carousel */}
                            <div className="portfolio-modal-image">
                                {selectedProject.images ? (
                                    <div className="image-carousel">
                                        <button className="carousel-btn carousel-prev" onClick={prevImage}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M15 18l-6-6 6-6" />
                                            </svg>
                                        </button>
                                        <img src={selectedProject.images[carouselIndex]} alt={`${selectedProject.title} - ${carouselIndex + 1}`} />
                                        <button className="carousel-btn carousel-next" onClick={nextImage}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 18l6-6-6-6" />
                                            </svg>
                                        </button>
                                        <div className="carousel-dots">
                                            {selectedProject.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    className={`carousel-dot ${idx === carouselIndex ? 'active' : ''}`}
                                                    onClick={() => setCarouselIndex(idx)}
                                                />
                                            ))}
                                        </div>
                                        <span className="carousel-counter">{carouselIndex + 1} / {selectedProject.images.length}</span>
                                    </div>
                                ) : (
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                )}
                            </div>

                            {/* Metrics */}
                            <div className="portfolio-modal-metrics">
                                {selectedProject.metrics.map((metric, i) => (
                                    <div key={i} className="metric-card glass-card">
                                        <span className="metric-value">{metric.value}</span>
                                        <span className="metric-label">{metric.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Project Info */}
                            <div className="portfolio-modal-info">
                                <div className="info-item">
                                    <span className="info-label">Año</span>
                                    <span className="info-value">{selectedProject.year}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Duración</span>
                                    <span className="info-value">{selectedProject.duration}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Rol</span>
                                    <span className="info-value">{selectedProject.role}</span>
                                </div>
                            </div>

                            {/* Problem & Solution */}
                            <div className="portfolio-modal-section">
                                <h3>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                    El Problema
                                </h3>
                                <p>{selectedProject.problem}</p>
                            </div>

                            <div className="portfolio-modal-section">
                                <h3>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    La Solución
                                </h3>
                                <p>{selectedProject.solution}</p>
                            </div>

                            {/* Features */}
                            <div className="portfolio-modal-section">
                                <h3>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    Características Clave
                                </h3>
                                <ul className="feature-list">
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="feature-bullet">▹</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="portfolio-modal-section">
                                <h3>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                    </svg>
                                    Stack Tecnológico
                                </h3>
                                <div className="tech-stack-grid">
                                    {selectedProject.tech.map((tech, i) => (
                                        <span key={i} className="tag tag-cyan">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="portfolio-modal-actions">
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Ver en GitHub
                                    </a>
                                )}
                                {selectedProject.demo && (
                                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        Demo en Vivo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Portfolio
