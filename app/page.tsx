'use client';

import { BedDouble, Building2, Code2, Cog, Droplets, ExternalLink, Factory, Gauge, GraduationCap, Handshake, Mail, MoveRight, Network, ScanLine, Settings2, ShieldCheck, Shirt, Sun } from 'lucide-react';

const linkedin = 'https://www.linkedin.com/in/muhammad-arsalan-0a09b3200/';
const github = 'https://github.com/ArsalanAfridi356';
const email = 'muhammadarsalan.uet@gmail.com';
const mailto = `mailto:${email}`;

function MachineryVisual() {
  return <div className="icon-box icon-diagram">
    <div className="md-grid" />
    <Cog size={30} strokeWidth={1.2} className="md-gear md-gear-a" />
    <Cog size={18} strokeWidth={1.2} className="md-gear md-gear-b" />
    <span className="md-sensor">V</span>
    <span className="md-pulse md-pulse-a" /><span className="md-pulse md-pulse-b" />
  </div>;
}

function PipelineVisual() {
  return <div className="icon-box icon-diagram">
    <div className="pl-pipe" />
    <span className="pl-valve pl-valve-a" /><span className="pl-valve pl-valve-b" />
    <span className="pl-flow pl-flow-a" /><span className="pl-flow pl-flow-b" /><span className="pl-flow pl-flow-c" />
    <Droplets size={16} strokeWidth={1.3} className="pl-drop" />
  </div>;
}

function ParkingVisual() {
  return <div className="icon-box icon-diagram">
    <div className="pk-grid">{Array.from({ length: 9 }).map((_, i) => <span key={i} className={i === 2 || i === 5 ? 'car' : ''} />)}</div>
  </div>;
}

function IconGlyph({ icon }: { icon: React.ReactNode }) {
  return <div className="icon-box icon-glyph">{icon}</div>;
}

function RoleVisual({ type }: { type: string }) {
  if (type === 'machinery') return <MachineryVisual />;
  if (type === 'pipeline') return <PipelineVisual />;
  if (type === 'parking') return <ParkingVisual />;
  if (type === 'housekeeping') return <IconGlyph icon={<BedDouble size={26} strokeWidth={1.3} />} />;
  if (type === 'leadership') return <IconGlyph icon={<Handshake size={26} strokeWidth={1.3} />} />;
  if (type === 'solar') return <IconGlyph icon={<Sun size={26} strokeWidth={1.3} />} />;
  if (type === 'textile') return <IconGlyph icon={<Shirt size={26} strokeWidth={1.3} />} />;
  if (type === 'university') return <IconGlyph icon={<GraduationCap size={26} strokeWidth={1.3} />} />;
  return <IconGlyph icon={<Building2 size={26} strokeWidth={1.3} />} />;
}

const experiences = [
  { role: 'HSK Planner', company: 'WGC', place: 'Braunlage, Germany', date: 'Feb 2026 — Present', visual: 'housekeeping', points: ['Built weekly housekeeping rosters around room demand and shift coverage.', 'Tracked task completion and staff hours in Asana for payroll accuracy.'] },
  { role: 'Management Trainee Engineer', company: 'Kohat Cement Company', place: 'Kohāt, Pakistan', date: 'Apr 2024 — Apr 2025', visual: 'machinery', metric: '70% less unplanned downtime', points: ['Ran condition monitoring, vibration analysis and thermal diagnostics across plant equipment.', 'Improved asset prioritization by 30% through reliability-centered maintenance.', 'Managed maintenance workflows in Oracle ERP.'] },
  { role: 'PM BNIP Intern', company: 'OGDCL', place: 'Kohāt, Pakistan', date: 'Dec 2023 — Apr 2024', visual: 'pipeline', metric: '40% faster procurement', points: ['Optimized SAP-based maintenance planning and procurement workflows for oil & gas assets.', 'Built process flow diagrams and P&IDs for pipeline and equipment documentation.'] },
  { role: 'Forward Learning Program', company: 'McKinsey & Company', place: 'Remote', date: 'Nov 2023 — Apr 2024', visual: 'leadership', points: ['Completed McKinsey\u2019s Forward leadership and problem-solving program.'] },
  { role: 'Project Intern', company: 'HBK Hypermarket', place: 'Peshawar, Pakistan', date: 'Sep 2022 — Aug 2023', visual: 'parking', metric: '77.5% faster parking search', points: ['Built an Arduino-based smart parking prototype.', 'Used Monte Carlo simulation to cut average wait time by 69%.'] },
  { role: 'Internship Trainee', company: 'Solartech', place: 'Peshawar, Pakistan', date: 'Jul 2022 — Sep 2022', visual: 'solar', points: ['Reduced takt-time and bottlenecks in solar panel production.', 'Improved battery life using factorial design methods.'] },
  { role: 'Internship Trainee', company: 'Kohat Textile Mills', place: 'Kohat, Pakistan', date: 'Sep 2021 — Oct 2021', visual: 'textile', points: ['Ran production scheduling using Finite Capacity Scheduling.', 'Applied Six Sigma DMAIC to improve process flow.'] },
];

const education = [
  { school: 'Hochschule Harz', degree: 'M.Eng. Technology and Innovation Management', date: '2025 —', visual: 'university' },
  { school: 'University of Engineering & Technology Peshawar', degree: 'B.Sc. Industrial Engineering', date: '2019 — 2023', visual: 'university' },
];

const toolkit = [
  { group: 'Maintenance & reliability', items: ['RCM', 'Condition monitoring', 'Vibration analysis', 'Thermal diagnostics'] },
  { group: 'ERP & systems', items: ['SAP', 'Oracle ERP', 'Asana'] },
  { group: 'Process & data', items: ['Lean Six Sigma / DMAIC', 'Time & Motion Study', 'Capacity planning', 'Power BI', 'Monte Carlo simulation'] },
  { group: 'Supply & operations', items: ['Supply planning', 'Order processing', 'Production scheduling'] },
];

const certifications = ['Six Sigma Green Belt Specialization', 'Data Science Bootcamp', 'Google Project Management Specialization', 'Graduate Internship Program (GIP)', 'SAP S/4HANA Service'];

const languages = [{ lang: 'English', level: 'Full Professional' }, { lang: 'German', level: 'Elementary' }, { lang: 'Urdu', level: 'Native' }];

const projects = [
  { n: '01', type: 'Maintenance / Reliability', title: 'Reliability under pressure', result: '70% less unplanned downtime', desc: 'Condition monitoring, vibration analysis and thermal diagnostics across plant equipment.', chips: ['RCM', 'Vibration', 'Thermal'], visual: 'machine' },
  { n: '02', type: 'SAP / Workflow', title: 'Procurement without friction', result: '40% faster procurement', desc: 'Mapped and improved maintenance procurement workflows and spare-parts documentation.', chips: ['SAP', 'Process mapping'], visual: 'flow' },
  { n: '03', type: 'Data / Prototyping', title: 'Parking as a systems problem', result: '77.5% better search time', desc: 'Arduino prototype plus Monte Carlo simulation to cut parking search and wait time.', chips: ['Arduino', 'Monte Carlo'], visual: 'simulation' },
  { n: '04', type: 'Manufacturing', title: 'Production efficiency', result: 'Cycle-time & bottleneck focus', desc: 'Takt-time analysis, factorial design and micromotion analysis in solar-panel production.', chips: ['Takt time', 'Factorial design'], visual: 'production' },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === 'machine') return <div className="visual-card"><MachineryVisual /></div>;
  if (type === 'flow') return <div className="visual-card flow-visual"><div className="flow-node"><ScanLine size={20} /><span>REQUEST</span></div><MoveRight size={16} /><div className="flow-node active"><Network size={20} /><span>SAP</span></div><MoveRight size={16} /><div className="flow-node"><Settings2 size={20} /><span>SPARES</span></div></div>;
  if (type === 'simulation') return <div className="visual-card"><ParkingVisual /></div>;
  return <div className="visual-card production-visual"><div className="line-machine"><span /><span /><span /><span /></div></div>;
}

export default function Home() {
  return <main>
    <header className="topbar shell">
      <a className="mark" href="#top">ARSALAN<span>.</span></a>
      <div className="topmeta">PROFESSIONAL RECORD · VOL. 01</div>
      <a className="talk-link" href={mailto}>Let&apos;s talk</a>
    </header>

    <section id="top" className="hero-profile shell">
      <div className="hero-kicker">INDUSTRIAL ENGINEER · WERNIGERODE, GERMANY</div>
      <h1>Muhammad <em>Arsalan.</em></h1>
      <p className="role-line">Maintenance · Reliability · Process improvement</p>
      <div className="avatar-row">
        <div className="avatar">MA</div>
        <p className="bio">I work across reliability, maintenance, procurement and data to make operations faster and easier to manage. Currently pursuing an M.Eng. in Technology and Innovation Management.</p>
      </div>
      <div className="contact-row">
        <a href={mailto}><Mail size={15} />{email}</a>
        <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a>
        <a href={github} target="_blank" rel="noreferrer">GitHub <Code2 size={13} /></a>
      </div>
      <a className="jump-link" href="#education">Hochschule Harz · M.Eng. Technology and Innovation Management <MoveRight size={14} /></a>
    </section>

    <section id="experience" className="shell block">
      <h2>Experience</h2>
      <div className="row-list">
        {experiences.map((x) => <article className="row" key={x.company}>
          <RoleVisual type={x.visual} />
          <div className="row-body">
            <div className="row-head"><h3>{x.company}</h3><time>{x.date}</time></div>
            <p className="row-sub">{x.role} · {x.place}</p>
            {x.metric && <div className="row-metric"><Gauge size={13} />{x.metric}</div>}
            <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </article>)}
      </div>
    </section>

    <section id="education" className="shell block">
      <h2>Education</h2>
      <div className="row-list">
        {education.map((x) => <article className="row" key={x.school}>
          <RoleVisual type={x.visual} />
          <div className="row-body">
            <div className="row-head"><h3>{x.school}</h3><time>{x.date}</time></div>
            <p className="row-sub">{x.degree}</p>
          </div>
        </article>)}
      </div>
      <div className="lang-row">{languages.map((l) => <div key={l.lang}><b>{l.lang}</b><span>{l.level}</span></div>)}</div>
    </section>

    <section id="toolkit" className="shell block">
      <h2>The toolkit</h2>
      <div className="toolkit-grid">
        {toolkit.map((t) => <div key={t.group} className="toolkit-group">
          <h4>{t.group}</h4>
          <div className="chip-row">{t.items.map((i) => <span key={i}>{i}</span>)}</div>
        </div>)}
      </div>
    </section>

    <section id="projects" className="shell block">
      <h2>Selected projects</h2>
      <div className="project-grid">
        {projects.map((p) => <article className="project-card" key={p.n}>
          <div className="project-meta"><span>{p.n}</span><small>{p.type}</small></div>
          <ProjectVisual type={p.visual} />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="project-result"><ShieldCheck size={14} />{p.result}</div>
          <div className="chips">{p.chips.map((c) => <span key={c}>{c}</span>)}</div>
        </article>)}
      </div>
    </section>

    <section className="shell block">
      <h2>Certifications</h2>
      <ul className="cert-list">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
    </section>

    <section id="contact" className="contact-band">
      <div className="shell contact-inner">
        <h2>Let&apos;s improve<br /><em>something real.</em></h2>
        <p>Currently looking for a Werkstudent or internship role in Germany across operations, supply chain, quality or maintenance.</p>
        <div className="contact-row light">
          <a href={mailto}><Mail size={15} />{email}</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a>
          <a href={github} target="_blank" rel="noreferrer">GitHub <Code2 size={13} /></a>
          <span><Factory size={15} />Wernigerode, Germany</span>
        </div>
      </div>
    </section>

    <footer className="shell footer">
      <span>Built with curiosity, in Germany.</span>
      <span>Muhammad Arsalan · 2026</span>
    </footer>
  </main>;
}
