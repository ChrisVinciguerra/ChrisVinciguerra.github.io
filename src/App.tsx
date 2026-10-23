import type { ReactNode } from 'react'
import type { Experience } from './data/portfolio'
import {
  personalInfo,
  education,
  skills,
  experience,
  projects,
  leadership,
} from './data/portfolio'

const links = [
  { label: 'Email', href: `mailto:${personalInfo.email}` },
  { label: 'GitHub', href: personalInfo.github },
  { label: 'LinkedIn', href: personalInfo.linkedin },
  { label: '☞ Résumé (PDF)', href: personalInfo.resume },
]

function Section({ title, children }: { title: string; children: ReactNode }) {
  const id = title.toLowerCase()
  return (
    <section className="mt-16">
      <div aria-hidden="true" className="select-none text-center font-serif text-lg text-faint">
        ⁂
      </div>
      <h2 id={id} className="group mt-10 scroll-mt-8 font-serif text-2xl text-ink">
        {title}{' '}
        <a
          href={`#${id}`}
          aria-label={`Link to ${title}`}
          className="text-base text-faint opacity-0 transition-opacity group-hover:opacity-100 hover:text-accent"
        >
          §
        </a>
      </h2>
      <div className="mt-6 space-y-10">{children}</div>
    </section>
  )
}

// Typeset the "&" in running text as an italic serif ampersand
function Amp({ text }: { text: string }) {
  const parts = text.split('&')
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span className="font-serif italic">&amp;</span>}
          {part}
        </span>
      ))}
    </>
  )
}

function Entry({
  heading,
  subheading,
  period,
  highlights,
  technologies,
  link,
}: {
  heading: string
  subheading: string
  period: string
  highlights?: string[]
  technologies?: string[]
  link?: string
}) {
  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-serif text-lg font-medium text-ink">
          {link ? (
            <a href={link} className="text-accent underline decoration-rule underline-offset-4 hover:decoration-accent hover:decoration-wavy">
              {heading}
            </a>
          ) : (
            heading
          )}
        </h3>
        <span className="font-mono text-xs text-faint">{period}</span>
      </div>
      <p className="mt-0.5 text-sm text-faint">{subheading}</p>
      {highlights && highlights.length > 0 && <Highlights items={highlights} />}
      {technologies && (
        <p className="mt-3 font-mono text-xs text-faint">{technologies.join(' · ')}</p>
      )}
    </article>
  )
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed">
      {items.map((h) => (
        <li key={h} className="relative pl-4 text-ink/90 before:absolute before:left-0 before:text-faint before:content-['–']">
          {h}
        </li>
      ))}
    </ul>
  )
}

// One company, possibly several roles held there in sequence
function CompanyEntry({ company, location, roles }: { company: string; location: string; roles: Experience[] }) {
  if (roles.length === 1) {
    const job = roles[0]
    return (
      <Entry
        heading={company}
        subheading={`${job.position} · ${location}`}
        period={job.period}
        highlights={job.highlights}
        technologies={job.technologies}
      />
    )
  }
  const start = roles[roles.length - 1].period.split(' - ')[0]
  const end = roles[0].period.split(' - ')[1]
  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-serif text-lg font-medium text-ink">{company}</h3>
        <span className="font-mono text-xs text-faint">{`${start} - ${end}`}</span>
      </div>
      <p className="mt-0.5 text-sm text-faint">{location}</p>
      {roles.map((job) => (
        <div key={job.position} className="mt-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h4 className="text-[0.95rem] font-medium text-ink">{job.position}</h4>
            <span className="font-mono text-xs text-faint">{job.period}</span>
          </div>
          {job.highlights.length > 0 && <Highlights items={job.highlights} />}
          <p className="mt-3 font-mono text-xs text-faint">{job.technologies.join(' · ')}</p>
        </div>
      ))}
    </article>
  )
}

function App() {
  const skillCategories = skills.reduce<Record<string, string[]>>((acc, s) => {
    ;(acc[s.category] ??= []).push(s.name)
    return acc
  }, {})

  const sections = ['Experience', 'Projects', 'Education', 'Skills', 'Leadership']

  // Group consecutive roles at the same company under one heading
  const jobGroups = experience.reduce<{ company: string; location: string; roles: Experience[] }[]>(
    (acc, job) => {
      const last = acc[acc.length - 1]
      if (last && last.company === job.company) last.roles.push(job)
      else acc.push({ company: job.company, location: job.location, roles: [job] })
      return acc
    },
    []
  )

  return (
    <div className="settle mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header>
        <h1 className="font-serif text-4xl text-ink sm:text-[2.75rem]">{personalInfo.name}</h1>
        {/* a hand-drawn stroke, because a ruler would have been easier */}
        <svg
          aria-hidden="true"
          className="mt-1 text-accent"
          width="150"
          height="8"
          viewBox="0 0 150 8"
          fill="none"
        >
          <path
            d="M2 5.5 C 25 3, 48 6.5, 74 4.5 S 124 3.5, 148 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <p className="mt-2 text-faint">
          <Amp text={personalInfo.title} /> · {personalInfo.location}
        </p>
        <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-accent underline decoration-rule underline-offset-4 hover:decoration-accent hover:decoration-wavy"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <nav
          aria-label="Sections"
          className="print-hidden mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-sm"
        >
          {sections.map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="text-faint hover:text-accent">
              {s}
            </a>
          ))}
        </nav>
        <p className="mt-8 text-[1.05rem] leading-relaxed text-ink/90">{personalInfo.about}</p>
      </header>

      <Section title="Experience">
        {jobGroups.map((group) => (
          <CompanyEntry key={group.company} {...group} />
        ))}
      </Section>

      <Section title="Projects">
        {projects.map((p) => (
          <Entry
            key={p.title}
            heading={p.title}
            subheading={`${p.role} · ${p.description}`}
            period={p.period}
            highlights={p.highlights}
            technologies={p.technologies}
            link={p.link}
          />
        ))}
      </Section>

      <Section title="Education">
        {education.map((edu) => (
          <Entry
            key={edu.degree}
            heading={edu.degree}
            subheading={`${edu.school} · GPA ${edu.gpa}${edu.concentration ? ` · ${edu.concentration}` : ''}`}
            period={edu.period}
          />
        ))}
      </Section>

      <Section title="Skills">
        <dl className="space-y-3">
          {Object.entries(skillCategories).map(([category, names]) => (
            <div key={category} className="text-[0.95rem] leading-relaxed">
              <dt className="inline font-medium text-ink">{category}: </dt>
              <dd className="inline text-ink/80">{names.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Leadership">
        {leadership.map((item) => (
          <Entry
            key={`${item.title}-${item.role}`}
            heading={item.role}
            subheading={item.title}
            period={item.period}
            highlights={[item.description]}
          />
        ))}
      </Section>

      <div aria-hidden="true" className="mt-16 select-none text-center font-serif text-xl text-faint">
        ❦
      </div>

      <footer className="mt-10 font-mono text-xs text-faint">
        <p>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-accent">
            {personalInfo.email}
          </a>{' '}
          · {personalInfo.phone} · {personalInfo.location}
        </p>
        <p className="mt-3">
          Hand-typeset in Newsreader on a paper-colored page. Built with React{' '}
          <span className="font-serif text-sm italic">&amp;</span> Tailwind.
        </p>
        <p className="mt-1">Last updated October 2026.</p>
        <p className="print-hidden mt-3">
          <a href="#" className="hover:text-accent">
            ↑ Back to top
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
