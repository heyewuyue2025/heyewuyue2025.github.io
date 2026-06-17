import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type MagneticLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function MagneticLink({ href, children, variant = 'secondary' }: MagneticLinkProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      className={`magnetic-link magnetic-link--${variant}`}
      href={href}
      whileHover={reduceMotion ? undefined : { x: 3, y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 360, damping: 24 }}
    >
      {children}
    </motion.a>
  )
}
