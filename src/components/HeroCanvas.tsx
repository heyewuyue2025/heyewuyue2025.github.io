import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  r: number
  label?: string
}

const fragments = ['样片', '剪辑', '证据', '界面', '数据', '旁白', '草图', '误差']

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const pointer = { x: -9999, y: -9999 }
    const reduceMotion = prefersReducedMotion()
    let frame = 0
    let animationId = 0
    let particles: Particle[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = rect.width < 700 ? 46 : 72
      particles = Array.from({ length: count }, (_, index) => {
        const angle = index * 2.399963
        const radius = Math.sqrt(index / count) * Math.min(rect.width, rect.height) * 0.42
        const baseX = rect.width * 0.5 + Math.cos(angle) * radius + (Math.random() - 0.5) * 42
        const baseY = rect.height * 0.52 + Math.sin(angle) * radius * 0.78 + (Math.random() - 0.5) * 34
        return {
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: index % 9 === 0 ? 2.8 : 1.55,
          label: index % 10 === 0 ? fragments[(index / 10) % fragments.length] : undefined
        }
      })
    }

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      context.clearRect(0, 0, width, height)
      context.fillStyle = 'rgba(248, 242, 229, 0.18)'
      context.fillRect(0, 0, width, height)

      context.strokeStyle = 'rgba(10, 21, 21, 0.09)'
      context.lineWidth = 1
      for (let x = 24; x < width; x += 52) {
        context.beginPath()
        context.moveTo(x, 0)
        context.lineTo(x, height)
        context.stroke()
      }
      for (let y = 18; y < height; y += 48) {
        context.beginPath()
        context.moveTo(0, y)
        context.lineTo(width, y)
        context.stroke()
      }

      particles.forEach((particle, index) => {
        if (!reduceMotion) {
          const dx = particle.x - pointer.x
          const dy = particle.y - pointer.y
          const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1)
          const pull = Math.min(92 / distance, 2.2)
          particle.vx += (particle.baseX - particle.x) * 0.004 + (dx / distance) * pull * 0.055
          particle.vy += (particle.baseY - particle.y) * 0.004 + (dy / distance) * pull * 0.055
          particle.vx *= 0.88
          particle.vy *= 0.88
          particle.x += particle.vx
          particle.y += particle.vy
        }

        for (let j = index + 1; j < particles.length; j += 1) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 105) {
            context.strokeStyle = `rgba(22, 88, 86, ${0.14 - distance / 900})`
            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(other.x, other.y)
            context.stroke()
          }
        }
      })

      particles.forEach((particle, index) => {
        const pulse = reduceMotion ? 0 : Math.sin(frame * 0.018 + index) * 0.45
        context.beginPath()
        context.fillStyle = index % 7 === 0 ? '#a24f35' : index % 5 === 0 ? '#315c91' : '#145653'
        context.arc(particle.x, particle.y, Math.max(1, particle.r + pulse), 0, Math.PI * 2)
        context.fill()

        if (particle.label) {
          context.font = '12px IBM Plex Mono, monospace'
          context.fillStyle = 'rgba(10, 21, 21, 0.62)'
          context.fillText(particle.label, particle.x + 8, particle.y - 8)
          context.strokeStyle = 'rgba(162, 79, 53, 0.42)'
          context.beginPath()
          context.moveTo(particle.x + 3, particle.y - 3)
          context.lineTo(particle.x + 34, particle.y - 18)
          context.stroke()
        }
      })

      frame += 1
      if (!reduceMotion) animationId = requestAnimationFrame(draw)
    }

    const handlePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', handlePointer)
    canvas.addEventListener('pointerleave', () => {
      pointer.x = -9999
      pointer.y = -9999
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', handlePointer)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
