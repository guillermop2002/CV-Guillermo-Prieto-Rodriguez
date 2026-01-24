import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppEN from './AppEN.jsx'
import PortfolioPage from './PortfolioPage.jsx'
import PortfolioPageES from './PortfolioPageES.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/english" element={<AppEN />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/portfolio-es" element={<PortfolioPageES />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)

