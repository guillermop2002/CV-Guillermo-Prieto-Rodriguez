import { useState, useEffect } from 'react'
import Portfolio from './components/es/Portfolio'

function PortfolioPageES() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            return savedTheme
        }
        return 'dark'
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className="app">
            {/* Background Effects */}
            <div className="bg-gradient-mesh"></div>
            <div className="noise-overlay"></div>

            <Portfolio />
        </div>
    )
}

export default PortfolioPageES
