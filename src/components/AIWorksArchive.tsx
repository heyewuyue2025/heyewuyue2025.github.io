import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Layers3 } from 'lucide-react'
import type { AIWork } from '../data/profile'

type AIWorksArchiveProps = {
  works: AIWork[]
}

export function AIWorksArchive({ works }: AIWorksArchiveProps) {
  const reduceMotion = useReducedMotion()
  const [activeId, setActiveId] = useState(works[0]?.id)
  const activeWork = works.find((work) => work.id === activeId) ?? works[0]

  return (
    <div className="ai-archive">
      <div className="ai-archive__index" aria-label="AI 作品列表">
        {works.map((work, index) => (
          <motion.button
            type="button"
            className={activeId === work.id ? 'is-active' : ''}
            key={work.id}
            onClick={() => setActiveId(work.id)}
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.48, delay: index * 0.05 }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{work.title}</strong>
            <small>{work.medium}</small>
          </motion.button>
        ))}
      </div>

      <motion.article
        className="ai-archive__stage"
        key={activeWork.id}
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ai-archive__specimen" aria-hidden="true">
          <div className="specimen-grid">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>样片盒 / {activeWork.year}</p>
        </div>

        <div className="ai-archive__content">
          <p className="section-kicker">AI 作品档案</p>
          <div className="ai-archive__titleline">
            <h3>{activeWork.title}</h3>
            <span>{activeWork.status}</span>
          </div>
          <p className="ai-archive__description">{activeWork.description}</p>

          <div className="ai-archive__meta">
            <div>
              <span>媒介</span>
              <p>{activeWork.medium}</p>
            </div>
            <div>
              <span>工具</span>
              <p>{activeWork.tools.join(' / ')}</p>
            </div>
          </div>

          <div className="ai-archive__process">
            <div>
              <Layers3 size={17} aria-hidden="true" />
              <span>制作过程</span>
            </div>
            <p>{activeWork.process}</p>
          </div>

          <div className="ai-archive__process ai-archive__process--output">
            <div>
              <Layers3 size={17} aria-hidden="true" />
              <span>输出形式</span>
            </div>
            <p>{activeWork.output}</p>
          </div>

          <div className="ai-archive__links">
            {activeWork.links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  )
}
