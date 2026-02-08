import { useState, useEffect } from 'react'
import TechCarousel from '../TechCarousel'

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            icon: '🛡️',
            badge: 'Thesis',
            title: 'GraphSec-IaC',
            description: 'Infrastructure as Code security visualizer. Combines Terraform dependency graphs with vulnerability analysis.',
            details: 'This project addresses the complexity of securing modern infrastructure defined by code (IaC). GraphSec-IaC parses Terraform files, builds a resource dependency graph, and overlays vulnerabilities detected by leading tools like Checkov and Trivy. This allows security engineers to visualize the "blast radius" of a vulnerability and prioritize fixes based on real architecture, not just CVSS severity.',
            features: [
                'Custom HCL parsing engine',
                'Interactive graph visualization with React Flow',
                'Correlation of SARIF findings with infrastructure nodes',
                'Risk propagation algorithm in dependencies'
            ],
            tech: ['Python', 'Terraform', 'React', 'Checkov', 'Trivy', 'SARIF'],
            github: 'https://github.com/guillermop2002/GraphSec-IaC',
            demo: null
        },
        {
            icon: '🔐',
            badge: 'DevSecOps',
            title: 'Golden Pipeline',
            description: 'Secure CI/CD pipeline with GitHub Actions that automatically detects and blocks vulnerable code before reaching production.',
            details: 'Golden Pipeline demonstrates a "shift-left" security approach by integrating Gitleaks for secret detection and Semgrep for SAST analysis directly into GitHub Actions. The pipeline automatically fails when it detects hardcoded secrets, SQL injection vulnerabilities, insecure eval() usage, or disabled SSL verification—preventing vulnerable code from ever reaching production.',
            features: [
                'Gitleaks integration detecting 6+ types of secrets',
                'Semgrep SAST analysis for SQL Injection and vulnerabilities',
                'Automatic pipeline blocking on security issues',
                'Detailed security summary reports on each commit'
            ],
            tech: ['GitHub Actions', 'Gitleaks', 'Semgrep', 'Python', 'CI/CD', 'SAST'],
            github: 'https://github.com/guillermop2002/Golden-Pipeline',
            demo: null
        },
        {
            icon: '🤖',
            badge: 'AI + RAG',
            title: 'AI Chatbot Widget',
            description: 'Serverless infrastructure to create RAG chatbots. Just pass the URL and it automatically generates a trained chatbot.',
            details: 'A turnkey solution to integrate artificial intelligence into any website. The system performs automatic crawling of the provided URL content, generates vector embeddings of the text, and deploys a fully functional chat widget. Everything runs on the Edge (Cloudflare Workers) to ensure minimal latency and maximum scalability without traditional servers.',
            features: [
                'Automatic Website Crawling & Scrapping',
                'Embedding Generation & Vector Search (RAG)',
                '100% Serverless Edge Architecture',
                'Widget packaged as a universal Web Component'
            ],
            tech: ['Cloudflare Workers', 'React', 'Groq AI', 'KV Storage', 'RAG'],
            github: 'https://github.com/guillermop2002/chatbot',
            demo: 'https://chatbot-6h9.pages.dev'
        },
        {
            icon: '📜',
            badge: 'LegalTech',
            title: 'Patch-BOE',
            description: 'Platform that extracts legislative changes from BOE, generates AI summaries, and assigns relevance scores.',
            details: 'Patch-BOE transforms how legal professionals stay updated. Daily, the system downloads the Official State Gazette (BOE), processes complex legal text using Large Language Models (LLMs), and generates digestible executive summaries. Additionally, a scoring system predicts the national impact of each new regulation, allowing users to filter out regulatory "noise".',
            features: [
                'Daily automatic BOE ETL pipeline',
                'Legal summarization via GPT-4/Groq',
                'Normative relevance classification algorithm',
                'Optimized reading interface for lawyers'
            ],
            tech: ['Next.js', 'Python', 'OpenAI', 'Web Scraping', 'PostgreSQL'],
            github: 'https://github.com/guillermop2002/Patch-Boe',
            demo: null
        },
        {
            icon: '💪',
            badge: 'SEO + GEO',
            title: 'Dreizeer',
            description: 'Complete digitalization of a fitness business. Website with maximum SEO/Local optimization and management system.',
            details: 'More than a corporate website, Dreizeer is a client acquisition platform. An aggressive Local SEO (Google Business Profile) and technical SEO (perfect Core Web Vitals) strategy was implemented, positioning the business in the top 3 local searches in Madrid in less than 3 months. Includes lead management and integrated booking system.',
            features: [
                'Lighthouse Score 100/100 in Performance & SEO',
                'Transactional keyword strategy',
                'Google Maps & Business Profile integration',
                'Automated lead conversion system'
            ],
            tech: ['Next.js', 'Vercel', 'SEO', 'Google Business', 'Analytics'],
            github: 'https://github.com/guillermop2002/Dreizeer',
            demo: 'https://www.dreizeer.es'
        },
        {
            icon: '🔬',
            badge: 'Computer Vision',
            title: 'Cell Tracker',
            description: 'Cell tracking and analysis system using image processing and machine learning.',
            details: 'Scientific tool developed for biology labs. Uses advanced computer vision techniques to automate the tedious process of counting and tracking cell movement in microscopy videos. Implements Watershed segmentation algorithms and Kalman filters to predict trajectories even when cells overlap.',
            features: [
                'Advanced medical image segmentation',
                'Tracking algorithms (Kalman Filter)',
                'Statistical analysis of mobility and proliferation',
                'Real-time video processing'
            ],
            tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'Image Processing'],
            github: null,
            demo: null
        },
        {
            icon: '🌍',
            badge: 'In Development',
            title: 'NativeConnect',
            description: 'App to connect travelers with native locals. Matching system, real-time chat, and verification.',
            details: 'A social platform focused on genuine cultural exchange. NativeConnect uses geolocation and affinity algorithms to connect travelers seeking authentic experiences with locals willing to share them. Security is a priority, with identity verification systems and community reputation.',
            features: [
                'Real-time geolocation',
                'End-to-End (E2E) encrypted chat',
                'Matching algorithm by interests and availability',
                'Identity verification system (KYC light)'
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
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Projects</span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
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
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View code on GitHub">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View demo">
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
                                <span>View Details</span>
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
                                        Detailed Description
                                    </h4>
                                    <p className="modal-description">{selectedProject.details}</p>
                                </div>

                                <div className="modal-section">
                                    <h4 className="modal-section-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        Key Features
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
                                        Tech Stack
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
                                            View on GitHub
                                        </a>
                                    )}
                                    {selectedProject.demo && (
                                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            View Demo
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
