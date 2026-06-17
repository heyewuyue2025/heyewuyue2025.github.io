import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ExternalLink, Plus } from 'lucide-react'
import type { Project } from '../data/profile'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(index === 0)
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className={`project-card project-card--${project.accent} project-card--${project.scale}`}
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.62, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card__plate" aria-hidden="true">
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-card__meta">
        <span>{project.role}</span>
        <span>{project.year}</span>
      </div>
      <button className="project-card__toggle" type="button" onClick={() => setExpanded((value) => !value)}>
        <span>{project.title}</span>
        <Plus aria-hidden="true" size={18} />
      </button>
      <p>{project.description}</p>
      <div className="tag-row">
        {project.keywords.map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="project-card__links"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1, height: 'auto' }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            {project.links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
