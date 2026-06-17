import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { publicationTypeLabels, type Publication } from '../data/profile'

type PublicationListProps = {
  publications: Publication[]
}

const filters = [
  { value: 'All', label: '全部' },
  { value: 'Paper', label: '论文' },
  { value: 'Essay', label: '随笔' },
  { value: 'Talk', label: '演讲' },
  { value: 'Project', label: '项目' }
] as const
type Filter = (typeof filters)[number]['value']

export function PublicationList({ publications }: PublicationListProps) {
  const [filter, setFilter] = useState<Filter>('All')
  const reduceMotion = useReducedMotion()
  const visiblePublications = useMemo(
    () => publications.filter((publication) => filter === 'All' || publication.type === filter),
    [filter, publications]
  )

  return (
    <div className="publication-panel">
      <div className="filter-row" aria-label="发表类型筛选">
        {filters.map((item) => (
          <button
            className={filter === item.value ? 'is-active' : ''}
            type="button"
            key={item.value}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="publication-list">
        {visiblePublications.map((publication, index) => (
          <motion.a
            className="publication-item"
            href={publication.href}
            key={publication.title}
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.035 }}
          >
            <span className="publication-item__type">{publicationTypeLabels[publication.type]}</span>
            <div>
              <h3>{publication.title}</h3>
              <p>{publication.authors}</p>
              <small>
                {publication.venue} / {publication.year}。{publication.note}
              </small>
            </div>
            <ArrowUpRight size={17} aria-hidden="true" />
          </motion.a>
        ))}
      </div>
    </div>
  )
}
