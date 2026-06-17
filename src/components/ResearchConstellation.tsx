import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Compass, MousePointer2 } from 'lucide-react'
import { publicationTypeLabels, type Project, type Publication } from '../data/profile'

type ResearchConstellationProps = {
  projects: Project[]
  publications: Publication[]
}

const coordinates = [
  { x: 15, y: 28 },
  { x: 36, y: 18 },
  { x: 62, y: 30 },
  { x: 82, y: 22 },
  { x: 28, y: 62 },
  { x: 54, y: 70 },
  { x: 76, y: 60 },
  { x: 42, y: 43 },
  { x: 67, y: 46 }
]

export function ResearchConstellation({ projects, publications }: ResearchConstellationProps) {
  const reduceMotion = useReducedMotion()
  const nodes = useMemo(
    () =>
      [
        ...projects.slice(0, 6).map((project, index) => ({
          id: project.id,
          label: project.title,
          kind: '项目',
          meta: project.keywords.join(' / '),
          description: project.description,
          ...coordinates[index]
        })),
        ...publications.slice(0, 3).map((publication, index) => ({
          id: publication.title,
          label: publication.title,
          kind: publicationTypeLabels[publication.type],
          meta: `${publication.year} / ${publication.venue}`,
          description: publication.note,
          ...coordinates[index + 6]
        }))
      ],
    [projects, publications]
  )
  const [activeId, setActiveId] = useState(nodes[0]?.id)
  const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[0]

  return (
    <div className="constellation">
      <div className="constellation__header">
        <div>
          <p className="section-kicker">研究星图</p>
          <h3>悬停查看档案地图。</h3>
        </div>
        <span>
          <MousePointer2 size={15} aria-hidden="true" />
          由方法、媒介与问题彼此连接
        </span>
      </div>

      <div className="constellation__map">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {nodes.slice(0, -1).map((node, index) => {
            const next = nodes[index + 1]
            return (
              <motion.line
                key={`${node.id}-${next.id}`}
                x1={node.x}
                y1={node.y}
                x2={next.x}
                y2={next.y}
                initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: index * 0.05 }}
              />
            )
          })}
          <line x1="15" y1="28" x2="54" y2="70" />
          <line x1="36" y1="18" x2="76" y2="60" />
          <line x1="28" y1="62" x2="82" y2="22" />
        </svg>

        {nodes.map((node, index) => (
          <motion.button
            key={node.id}
            type="button"
            className={`constellation__node ${activeId === node.id ? 'is-active' : ''}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onMouseEnter={() => setActiveId(node.id)}
            onFocus={() => setActiveId(node.id)}
            onClick={() => setActiveId(node.id)}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.4 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            aria-label={`${node.label}，${node.kind}`}
          >
            <span>{index + 1}</span>
          </motion.button>
        ))}
      </div>

      <motion.div
        className="constellation__note"
        key={activeNode.id}
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <Compass size={17} aria-hidden="true" />
        <p>{activeNode.kind}</p>
        <h4>{activeNode.label}</h4>
        <span>{activeNode.meta}</span>
        <small>{activeNode.description}</small>
      </motion.div>
    </div>
  )
}
