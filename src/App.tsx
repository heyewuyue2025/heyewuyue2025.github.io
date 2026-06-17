import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { aiWorks, personalNotes, profile, publications, publicationTypeLabels } from './data/profile'
import type { Publication } from './data/profile'

const nav = profile.nav
const filters: Array<'All' | Publication['type']> = ['All', 'Journal', 'Conference', 'Report', 'Translation', 'Essay']

function SectionTitle({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div className="section-title">
      <a href={`#${id}`}>{label}</a>
      <h2>{title}</h2>
    </div>
  )
}

function HighlightedText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[\[.*?\]\])/g).map((part, index) => {
        if (part.startsWith('[[') && part.endsWith(']]')) {
          const value = part.slice(2, -2)
          const isCjk = /[\u3400-\u9fff]/.test(value)

          return (
            <mark className={`bio-highlight ${isCjk ? 'bio-highlight--cjk' : 'bio-highlight--latin'}`} key={`${part}-${index}`}>
              {value}
            </mark>
          )
        }

        return part
      })}
    </>
  )
}

function App() {
  const reduceMotion = useReducedMotion()
  const [publicationFilter, setPublicationFilter] = useState<(typeof filters)[number]>('All')
  const [showAllPublications, setShowAllPublications] = useState(false)

  const currentUpdates = [
    {
      date: 'Now 01',
      place: '天津大学 / 智能传播',
      title: '硕士阶段的研究主线',
      detail: profile.currently[0]
    },
    {
      date: 'Now 02',
      place: 'AI Works / Product Prototyping',
      title: 'vibecoding进行中，把 AI 项目做成可展示、可追问的作品',
      detail: '推进各类个人AI项目，探索任务自动化、决策辅助和智能体协同。'
    },
    {
      date: 'Now 03',
      place: '小红书 / 公共写作',
      title: '继续经营一个观察学术传播的平台现场',
      detail: profile.currently[2]
    }
  ]
  const filteredPublications = useMemo(
    () => (publicationFilter === 'All' ? publications : publications.filter((item) => item.type === publicationFilter)),
    [publicationFilter]
  )
  const visiblePublications = publicationFilter === 'All' && !showAllPublications ? filteredPublications.slice(0, 5) : filteredPublications

  const motionProps: HTMLMotionProps<'section'> = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.45, ease: 'easeOut' as const }
      }

  return (
    <div className="academic-page">
      <header className="topbar">
        <a className="site-name" href="#about">
          Ryan’s Field
        </a>
        <nav aria-label="页面导航">
          {nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-grid">
        <aside className="profile-column" aria-label="个人信息">
          <div className="portrait">
            {profile.avatar ? (
              <img src={`${import.meta.env.BASE_URL}${profile.avatar}`} alt={`${profile.name}头像`} />
            ) : (
              <span>{profile.initials}</span>
            )}
          </div>
          <h1>
            {profile.name}
            <small>{profile.englishName}</small>
          </h1>
          <p className="identity">{profile.identity}</p>
          <p className="manifesto">{profile.manifesto}</p>
          <dl className="contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
          <div className="side-links">
            {profile.contactLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </aside>

        <div className="content-column">
          <motion.section id="about" className="intro-section" {...motionProps}>
            <p className="kicker">Personal academic homepage / AI works archive</p>
            <div className="bio-copy">
              <div className="bio-language bio-language--zh">
                {profile.bio.zh.map((paragraph) => (
                  <p key={paragraph}>
                    <HighlightedText text={paragraph} />
                  </p>
                ))}
              </div>
              <div className="bio-language bio-language--en" lang="en">
                {profile.bio.en.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="tag-cloud" aria-label="研究兴趣">
              {profile.interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </motion.section>

          <motion.section id="ai-works" className="content-section" {...motionProps}>
            <SectionTitle id="ai-works" label="AI Works" title="AI 作品" />
            <p className="section-intro">
              这里是网站的主展区。每个条目都保留媒介、工具、制作过程与输出形态，方便之后替换为真实作品页面、视频、图像集或交互原型。
            </p>
            <div className="work-list">
              {aiWorks.map((work, index) => (
                <article
                  className="media-entry media-entry--large media-entry--backdrop"
                  key={work.id}
                  style={
                    {
                      '--work-image': `url(${import.meta.env.BASE_URL}${work.image})`,
                      '--work-opacity': String(work.imageOpacity ?? 0.48)
                    } as CSSProperties
                  }
                >
                  <span className="entry-index">{`AI-${index + 1}`}</span>
                  <div>
                    <p className="entry-meta">
                      {work.year} · {work.medium}
                      {work.status ? ` · ${work.status}` : ''}
                    </p>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                    <p className="process">
                      <strong>Process:</strong> {work.process}
                    </p>
                    <p className="process">
                      <strong>Output:</strong> {work.output}
                    </p>
                    <div className="mini-tags">
                      {work.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                    <div className="entry-links ai-entry-links">
                      {work.links.map((link) => (
                        <a href={link.href} key={link.label}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section id="publications" className="content-section publications-section" {...motionProps}>
            <SectionTitle id="publications" label="Publications / Writing" title="发表与写作" />
            <div className="filter-row" role="group" aria-label="筛选发表类型">
              {filters.map((filter) => (
                <button
                  className={publicationFilter === filter ? 'is-active' : ''}
                  type="button"
                  key={filter}
                  onClick={() => {
                    setPublicationFilter(filter)
                    setShowAllPublications(false)
                  }}
                >
                  {filter === 'All' ? 'All' : publicationTypeLabels[filter]}
                </button>
              ))}
            </div>
            <div className="publication-list">
              {visiblePublications.map((item) => (
                <article className="publication-item" key={`${item.year}-${item.title}`}>
                  <time>{item.year}</time>
                  <div>
                    <h3>
                      {item.href && item.href !== '#' ? <a href={item.href}>{item.title}</a> : <span>{item.title}</span>}
                    </h3>
                    {item.authors ? <p>{item.authors}</p> : null}
                    <p>
                      <em>{item.venue}</em> · {publicationTypeLabels[item.type]}
                    </p>
                    <small>{item.note}</small>
                  </div>
                </article>
              ))}
            </div>
            {publicationFilter === 'All' && filteredPublications.length > 5 ? (
              <button className="text-button publication-expand" type="button" onClick={() => setShowAllPublications((value) => !value)}>
                {showAllPublications ? '收起' : `展开全部 ${filteredPublications.length} 条`}
              </button>
            ) : null}
          </motion.section>

          <motion.section id="news" className="content-section" {...motionProps}>
            <SectionTitle id="news" label="Now / Focus" title="近期动态" />
            <div className="news-list">
              {currentUpdates.map((item) => (
                <article className="news-item" key={`${item.date}-${item.title}`}>
                  <time>{item.date}</time>
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      {item.place} · {item.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section id="personal" className="content-section personal-section" {...motionProps}>
            <SectionTitle id="personal" label="Personal" title="个人碎片" />
            <div className="personal-grid">
              {personalNotes.map((note) => (
                <article key={note.label}>
                  <h3>{note.label}</h3>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>
          </motion.section>

          <footer className="footer">
            <p>欢迎寄来一个问题、一份材料、一个作品合作，或一个值得研究的奇怪界面。</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
