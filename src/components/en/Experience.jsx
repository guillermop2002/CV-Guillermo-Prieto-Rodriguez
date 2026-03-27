function Experience() {
    const experiences = [
        {
            date: 'Mar 2026 - Present',
            role: 'Security Engineer',
            company: 'Edpuzzle',
            location: 'Remote',
            description: [
                'Comprehensive management of cloud security (AWS/GCP), ensuring data protection for millions of users in the EdTech ecosystem (GDPR, FERPA).',
                'Driving SecOps and DevSecOps practices by integrating automated security gates (SAST, DAST, SCA) into CI/CD pipelines.',
                'Vulnerability management and Bug Bounty platform administration, effectively triaging and mitigating critical security reports.',
                'Implementing "Policy-as-Code" strategies to maintain strict regulatory compliance and harden cloud infrastructure.'
            ],
            skills: ['Cloud Security', 'DevSecOps', 'AWS/GCP', 'Bug Bounty', 'GDPR/FERPA', 'Policy-as-Code']
        },
        {
            date: 'Oct 2024 - Feb 2026',
            role: 'Cybersecurity Engineer',
            company: 'Cloud Security Alliance (CSA)',
            location: 'Madrid, Spain',
            description: [
                'Analyze IoT security certification schemes (Matter, RED, CSA IoT) to harmonize requirements.',
                'Collaborate on the "OWASP Top 10 for LLM" research group, developing security guidelines for AI.',
                'Assist in technical maintenance of the C STAR repository and Cloud Controls Matrix (CCM).',
                'Develop Python scripts to automate security control mapping.'
            ],
            skills: ['IoT Security', 'LLM Security', 'Python', 'Compliance', 'Research']
        },
        {
            date: 'Sep 2020 - Jun 2024',
            role: 'BSc in Cybersecurity Engineering',
            company: 'Rey Juan Carlos University',
            location: 'Madrid, Spain',
            description: [
                'Specialized in Offensive Security: Vulnerability exploitation, reconnaissance and scanning with Burp Suite, Metasploit and Nmap.',
                'Advanced Pentesting: Full pentest stages, exploit development and web environments.',
                'Network Security: Wireshark, Firewalls, IDS/IPS, network layer security (IPSec).',
                'AI applied to Security: Machine Learning, Deep Learning and decision systems.',
                'Secure Web Development: OWASP best practices, SQL injection prevention, XSS and CSRF.'
            ],
            skills: ['Pentesting', 'Cryptography', 'Network Security', 'Secure Coding']
        }
    ]

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Career</span>
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Experience</span>
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
