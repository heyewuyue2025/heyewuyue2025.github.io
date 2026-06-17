import { motion, useReducedMotion } from 'framer-motion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  text: string
}

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="section-heading"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="section-kicker">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  )
}
