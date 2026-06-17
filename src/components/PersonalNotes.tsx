import { motion, useReducedMotion } from 'framer-motion'

type Note = {
  label: string
  text: string
}

export function PersonalNotes({ notes }: { notes: Note[] }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="personal-grid">
      {notes.map((note, index) => (
        <motion.article
          className="personal-note"
          key={note.label}
          initial={reduceMotion ? false : { opacity: 0, rotate: index % 2 === 0 ? -1.5 : 1.5, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, rotate: index % 2 === 0 ? -0.45 : 0.45, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -6, rotate: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: index * 0.045 }}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{note.label}</h3>
          <p>{note.text}</p>
        </motion.article>
      ))}
    </div>
  )
}
