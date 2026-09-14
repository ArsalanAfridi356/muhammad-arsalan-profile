'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ExternalLink, Mail, Menu, X } from 'lucide-react';

const profile = {
  name: 'Muhammad Arsalan',
  role: 'Industrial Engineer · Operations & Process Optimization',
  location: 'Wernigerode, Germany',
  email: 'arsalanafridi356@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-arsalan-0a09b3200/',
  headline: 'I improve the systems behind operations.',
  intro: 'Industrial Engineer pursuing an M.Eng. in Technology and Innovation Management at Hochschule Harz. I work across reliability, maintenance, procurement, supply planning and data analysis to make operations faster, more reliable and easier to manage.',
};

const impact = [
  { value: '70%', label: 'reduction in unplanned downtime', context: 'Kohat Cement' },
  { value: '40%', label: 'faster procurement processing', context: 'OGDCL' },
  { value: '77.5%', label: 'parking search-time improvement', context: 'HBK Hypermarket' },
  { value: '69%', label: 'lower average parking waiting time', context: 'Monte Carlo simulation' },
];

const experience = [
  {
    company: 'WGC', role: 'HSK Planner', date: 'Feb 2026 — Present', location: 'Braunlage, Germany', discipline: 'OPERATIONS',
    bullets: ['Built weekly housekeeping rosters around room demand and shift coverage.', 'Adjusted schedules for absences, holidays and last-minute coverage gaps.', 'Tracked task completion and staff hours in ASANA for payroll and attendance accuracy.', 'Monitored room turnaround and task completion KPIs, escalating delays.', 'Supported supply and inventory checks to prevent schedule-disrupting stock-outs.']
  },
  {
    company: 'Kohat Cement Company Ltd', role: 'Management Trainee Engineer', date: 'Apr 2024 — Apr 2025', location: 'Kohāt, Pakistan', discipline: 'RELIABILITY', metric: '70%', metricLabel: 'unplanned downtime reduction',
    bullets: ['Implemented condition monitoring, vibration analysis and thermal diagnostics across plant equipment.', 'Improved asset prioritization accuracy by 30% through reliability-centered maintenance and critical equipment assessment.', 'Standardized inspection and maintenance documentation.', 'Managed maintenance workflows using Oracle ERP.', 'Coordinated corrective maintenance during plant shutdowns.']
  },
  {
    company: 'Oil and Gas Development Company Limited (OGDCL)', role: 'PM BNIP Intern', date: 'Dec 2023 — Apr 2024', location: 'Kohāt, Pakistan', discipline: 'SAP / PROCUREMENT', metric: '40%', metricLabel: 'procurement processing improvement',
    bullets: ['Optimized SAP-based maintenance planning and procurement workflows.', 'Created process flow diagrams and P&IDs for clearer technical communication.', 'Developed procurement documentation and spare-parts catalogues in SAP ERP.', 'Supported ISO piping and maintenance planning projects.', 'Improved troubleshooting efficiency by 20% through technical analysis of critical equipment.']
  },
  {
    company: 'McKinsey & Company', role: 'Forward learning', date: 'Nov 2023 — Apr 2024', location: '', discipline: 'LEADERSHIP'
  },
  {
    company: 'HBK Hypermarket', role: 'Project Intern', date: 'Sep 2022 — Aug 2023', location: 'Peshawar, Pakistan', discipline: 'DATA / SIMULATION', metric: '77.5%', metricLabel: 'parking search-time improvement',
    bullets: ['Developed an Arduino-based smart parking prototype.', 'Used Monte Carlo simulation to reduce average parking waiting time by up to 69%.', 'Designed and implemented the smart car parking system.']
  },
  {
    company: 'Solartech (Private) Limited', role: 'Internship Trainee', date: 'Jul 2022 — Sep 2022', location: 'Peshawar, Pakistan', discipline: 'MANUFACTURING',
    bullets: ['Worked on takt-time and bottleneck reduction in solar panel production.', 'Optimized battery life using factorial design methods.', 'Applied micromotion analysis to improve manufacturing cycle time.']
  },
  {
    company: 'Kohat Textile Mills Limited', role: 'Internship Trainee', date: 'Sep 2021 — Oct 2021', location: 'Kohat District, Pakistan', discipline: 'INDUSTRIAL ENGINEERING',
    bullets: ['Production scheduling using Finite Capacity Scheduling.', 'Standard time and SMV calculation using Work Study and Methods Engineering.', 'Process improvement using Six Sigma DMAIC concepts.']
  }
];

const projects = [
  { n: '01', title: 'Reliability under pressure', kicker: 'MAINTENANCE / RELIABILITY', body: 'A plant maintenance improvement program built around condition monitoring, vibration analysis, thermal diagnostics and reliability-centered maintenance.', result: '70% less unplanned downtime', tools: 'RCM · Vibration Analysis · Thermal Diagnostics · Oracle ERP' },
  { n: '02', title: 'Procurement without friction', kicker: 'SAP / WORKFLOW', body: 'Mapped and improved maintenance procurement workflows, while building clearer spare-parts documentation and technical process diagrams.', result: '40% faster procurement processing', tools: 'SAP ERP · Process Mapping · P&IDs' },
  { n: '03', title: 'Parking as a systems problem', kicker: 'DATA / PROTOTYPING', body: 'Combined an Arduino prototype with Monte Carlo simulation to reduce the time drivers spent searching and waiting for parking.', result: '77.5% better search time · 69% lower waiting time', tools: 'Arduino · Monte Carlo Simulation' },
];

const capabilities = [
  'Reliability-centered maintenance', 'Condition monitoring', 'SAP / ERP workflows', 'Oracle ERP', 'Lean Six Sigma / DMAIC', 'Supply planning', 'Order processing', 'Production scheduling', 'Capacity planning', 'Time & Motion Study', 'Power BI', 'Monte Carlo simulation', 'Data analysis', 'Lean manufacturing', 'Supply chain management'
];

const certifications = ['Six Sigma Green Belt Specialization', 'Data Science Bootcamp', 'Google Project Management: Specialization', 'Graduate Internship Program (GIP)', 'SAP S/4HANA Service'];

function Label({ children }: { children: React.ReactNode }) { return <div className="label">{children}</div>; }

export default function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="wordmark">ARSALAN<span>/</span></a>
          <nav className={open ? 'open' : ''}>
            <a href="#work" onClick={close}>Work</a><a href="#approach" onClick={close}>Approach</a><a href="#projects" onClick={close}>Projects</a><a href="#contact" onClick={close}>Contact</a>
          </nav>
          <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-top"><Label>INDUSTRIAL ENGINEERING · GERMANY</Label><span className="hero-index">01 / 05</span></div>
          <div className="hero-grid">
            <div className="hero-copy-wrap">
              <h1>{profile.headline}</h1>
              <p>{profile.intro}</p>
              <div className="hero-actions"><a className="solid" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={15}/></a><a className="outline" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={16}/></a></div>
            </div>
            <div className="hero-aside">
              <div className="aside-number">MA</div>
              <div><span>BASED IN</span><strong>{profile.location}</strong></div>
              <div><span>FOCUS</span><strong>Operations<br/>Reliability<br/>Process improvement</strong></div>
            </div>
          </div>
          <a className="scroll-cue" href="#impact"><span>Scroll to impact</span><ArrowDownRight size={17}/></a>
        </section>

        <section id="impact" className="impact section-pad">
          <div className="section-head"><Label>02 / IMPACT</Label><h2>Results first.<br/>Methods second.</h2></div>
          <div className="impact-grid">{impact.map((item) => <div className="impact-card" key={item.label}><strong>{item.value}</strong><p>{item.label}</p><span>{item.context}</span></div>)}</div>
        </section>

        <section id="approach" className="statement section-pad">
          <div><Label>03 / APPROACH</Label></div>
          <div><p className="big-statement">I do not improve processes to make them look better on paper. I find where a system is losing time, money or reliability, then work on the constraint that matters.</p><p className="statement-small">Industrial Engineering gives me the methods. ERP systems give me operational context. Data helps test whether an improvement actually worked.</p></div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-head row"><Label>04 / EXPERIENCE</Label><span>Selected career record</span></div>
          <div className="experience-list">{experience.map((e, i) => <article className="experience" key={e.company + e.role}><div className="experience-no">{String(i + 1).padStart(2, '0')}</div><div className="experience-main"><div className="experience-title"><div><h3>{e.role}</h3><p>{e.company}{e.location ? ` · ${e.location}` : ''}</p></div><span>{e.discipline}</span></div>{e.metric && <div className="inline-metric"><b>{e.metric}</b><span>{e.metricLabel}</span></div>}{e.bullets && <ul>{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}</div><div className="experience-date">{e.date}</div></article>)}</div>
        </section>

        <section id="projects" className="projects section-pad">
          <div className="section-head row"><Label>05 / SELECTED PROJECTS</Label><span>From plant floor to simulation</span></div>
          <div className="project-list">{projects.map((p) => <article className="project" key={p.n}><div className="project-top"><span>{p.n}</span><span>{p.kicker}</span></div><h3>{p.title}</h3><p>{p.body}</p><div className="project-bottom"><strong>{p.result}</strong><span>{p.tools}</span></div></article>)}</div>
        </section>

        <section className="capabilities section-pad">
          <div className="cap-copy"><Label>06 / CAPABILITIES</Label><h2>One system,<br/>multiple levers.</h2><p>My work crosses maintenance, operations, supply chain and data. The common thread is understanding how work flows through a system and where intervention creates the largest operational effect.</p></div>
          <div className="cap-list">{capabilities.map((s, i) => <div key={s}><span>{String(i + 1).padStart(2, '0')}</span>{s}</div>)}</div>
        </section>

        <section className="credentials section-pad"><div><Label>07 / CREDENTIALS</Label><h2>Education &<br/>certifications.</h2></div><div className="credentials-right"><div className="credential"><span>2025 —</span><div><h3>Hochschule Harz</h3><p>M.Eng. Technology and Innovation Management</p></div></div><div className="credential"><span>2019 — 2023</span><div><h3>University of Engineering & Technology Peshawar</h3><p>Bachelor's degree, Industrial Engineering</p></div></div><div className="certs">{certifications.map(c => <span key={c}>{c}</span>)}</div><p className="languages"><b>Languages</b> English, Full Professional · German, Elementary · Urdu, Native or Bilingual</p></div></section>

        <section id="contact" className="contact"><div><Label>08 / CONTACT</Label><h2>Let's improve<br/>something real.</h2><p>Currently looking for a Werkstudent or internship role in Germany across operations, supply chain, quality or maintenance.</p></div><div className="contact-side"><a href={`mailto:${profile.email}`}><span>{profile.email}</span><ArrowUpRight/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn profile</span><ArrowUpRight/></a><div className="contact-note">Open to practical problems, measurable outcomes and teams that care how the work actually gets done.</div></div></section>
      </main>
      <footer><span>Muhammad Arsalan · {new Date().getFullYear()}</span><span>Industrial Engineer · Wernigerode, Germany</span></footer>
    </>
  );
}
