import { motion, useReducedMotion } from 'framer-motion'

type TimelineItem = {
  date: string
  place: string
  title: string
  detail: string
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <motion.article
          className="timeline__item"
          key={`${item.date}-${item.title}`}
          initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.58, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="timeline__pin" aria-hidden="true" />
          <time>{item.date}</time>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
          <span>{item.place}</span>
        </motion.article>
      ))}
    </div>
  )
}
