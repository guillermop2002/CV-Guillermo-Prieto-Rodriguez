import { useEffect, useRef, useState } from 'react'

/**
 * MatrixRain - Efecto de lluvia de caracteres estilo Matrix
 * 
 * Crea un fondo animado con números, letras y símbolos cayendo
 * de forma continua, dando una estética tecnológica/hacker.
 */
function MatrixRain() {
    const canvasRef = useRef(null)
    const animationRef = useRef(null)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        // Detectar preferencia de movimiento reducido
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReducedMotion(mediaQuery.matches)

        const handleChange = (e) => setPrefersReducedMotion(e.matches)
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        if (prefersReducedMotion) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')

        // Caracteres: números, letras, símbolos de código, katakana
        const chars = '01アイウエオカキクケコサシスセソタチツテト{}[]<>/=+*&%$#@!ABCDEFabcdef0123456789'
        const charArray = chars.split('')

        // Configuración
        const fontSize = 14
        let columns = 0
        let drops = []

        // Función para redimensionar el canvas
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            columns = Math.floor(canvas.width / fontSize)
            drops = Array(columns).fill(1).map(() => Math.floor(Math.random() * -30)) // Inicio aleatorio fuera de pantalla
        }

        // Colores del tema (púrpura y cyan)
        const colors = [
            'rgba(139, 92, 246, 0.9)',   // Púrpura principal
            'rgba(139, 92, 246, 0.7)',   // Púrpura medio
            'rgba(6, 182, 212, 0.8)',    // Cyan
            'rgba(139, 92, 246, 0.5)',   // Púrpura suave
        ]

        // Función de dibujo
        const draw = () => {
            // Fade trail - crea el efecto de estela
            ctx.fillStyle = 'rgba(10, 10, 20, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.font = `${fontSize}px 'Courier New', monospace`

            for (let i = 0; i < drops.length; i++) {
                // Seleccionar carácter aleatorio
                const char = charArray[Math.floor(Math.random() * charArray.length)]

                // Seleccionar color aleatorio
                const color = colors[Math.floor(Math.random() * colors.length)]
                ctx.fillStyle = color

                // Dibujar carácter
                const x = i * fontSize
                const y = drops[i] * fontSize

                ctx.fillText(char, x, y)

                // Carácter brillante en la cabeza de la columna
                if (Math.random() > 0.95) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
                    ctx.fillText(char, x, y)
                }

                // Resetear cuando sale de la pantalla
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = Math.floor(Math.random() * -10)
                }

                drops[i]++
            }
        }

        // Inicializar
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Loop de animación (~30fps para rendimiento)
        const animate = () => {
            draw()
            animationRef.current = setTimeout(() => {
                requestAnimationFrame(animate)
            }, 33) // ~30fps
        }

        animate()

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas)
            if (animationRef.current) {
                clearTimeout(animationRef.current)
            }
        }
    }, [prefersReducedMotion])

    // No renderizar si prefiere movimiento reducido
    if (prefersReducedMotion) {
        return null
    }

    return (
        <canvas
            ref={canvasRef}
            className="matrix-rain-canvas"
            aria-hidden="true"
        />
    )
}

export default MatrixRain
