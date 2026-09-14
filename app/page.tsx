'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Cog, Cpu, ExternalLink, Factory, Gauge, GitBranch, Mail, Menu, MoveRight, Network, ScanLine, Settings2, ShieldCheck, X, Zap } from 'lucide-react';

const linkedin = 'https://www.linkedin.com/in/muhammad-arsalan-0a09b3200/';
const email = 'mailto:arsalanafridi356@gmail.com';

function MachineDiagram() {
  return (
    <div className="machine-wrap" aria-label="Condition monitoring system diagram">
      <div className="machine-grid" />
      <div className="machine-label label-a">ROTATING EQUIPMENT</div>
      <div className="machine-label label-b">CONDITION MONITORING</div>
      <div className="machine-label label-c">DECISION</div>
      <div className="machine-stage">
        <div className="gear gear-large"><Cog size={78} strokeWidth={1.1} /></div>
        <div className="gear gear-small"><Cog size={42} strokeWidth={1.1} /></div>
        <div className="sensor sensor-v"><span>V</span></div>
        <div className="sensor sensor-t"><span>T</span></div>
        <div className="pulse pulse-one" />
        <div className="pulse pulse-two" />
        <div className="signal-line" />
        <div className="diagnosis"><Gauge size={20} /><span>HEALTH INDEX</span><strong>OK / WATCH / ACT</strong></div>
      </div>
      <div className="machine-foot"><span>VIBRATION</span><span>THERMAL</span><span>RCM</span><span>ERP</span></div>
    </div>
  );
}

function Stat({ value, title, source, icon }: { value: string; title: string; source: string; icon: React.ReactNode }) {
  return <div className="stat-card">
    <div className="stat-icon">{icon}</div>
    <div className="stat-value">{value}</div>
    <div className="stat-title">{title}</div>
    <div className="stat-source">{source}</div>
  </div>;
}

const experiences = [
  { n: '01', role: 'HSK Planner', company: 'WGC · Braunlage, Germany', date: 'FEB 2026 — PRESENT', tag: 'OPERATIONS', points: ['Built weekly housekeeping rosters around room demand and shift coverage.', 'Adjusted schedules for absences, holidays and last-minute coverage gaps.', 'Tracked task completion and staff hours in ASANA for payroll and attendance accuracy.', 'Monitored room turnaround and task completion KPIs, escalating delays.'] },
  { n: '02', role: 'Management Trainee Engineer', company: 'Kohat Cement Company Ltd · Kohāt, Pakistan', date: 'APR 2024 — APR 2025', tag: 'RELIABILITY', metric: '70% UNPLANNED DOWNTIME REDUCTION', points: ['Implemented condition monitoring, vibration analysis and thermal diagnostics across plant equipment.', 'Improved asset prioritization accuracy by 30% through reliability-centered maintenance and critical equipment assessment.', 'Standardized inspection and maintenance documentation.', 'Managed maintenance workflows using Oracle ERP.'] },
  { n: '03', role: 'PM BNIP Intern', company: 'OGDCL · Kohāt, Pakistan', date: 'DEC 2023 — APR 2024', tag: 'SAP / PROCUREMENT', metric: '40% PROCUREMENT PROCESSING IMPROVEMENT', points: ['Optimized SAP-based maintenance planning and procurement workflows.', 'Created process flow diagrams and P&IDs for clearer technical communication.', 'Developed procurement documentation and spare-parts catalogues in SAP ERP.', 'Improved troubleshooting efficiency by 20% through technical analysis of critical equipment.'] },
  { n: '04', role: 'Forward learning', company: 'McKinsey & Company', date: 'NOV 2023 — APR 2024', tag: 'LEADERSHIP', points: ['McKinsey Forward learning program.'] },
  { n: '05', role: 'Project Intern', company: 'HBK Hypermarket · Peshawar, Pakistan', date: 'SEP 2022 — AUG 2023', tag: 'DATA / SIMULATION', metric: '77.5% PARKING SEARCH-TIME IMPROVEMENT', points: ['Developed an Arduino-based smart parking prototype.', 'Used Monte Carlo simulation to reduce average parking waiting time by up to 69%.'] },
  { n: '06', role: 'Internship Trainee', company: 'Solartech (Private) Limited · Peshawar, Pakistan', date: 'JUL 2022 — SEP 2022', tag: 'MANUFACTURING', points: ['Worked on takt-time and bottleneck reduction in solar panel production.', 'Optimized battery life using factorial design methods.', 'Applied micromotion analysis to improve manufacturing cycle time.'] },
  { n: '07', role: 'Internship Trainee', company: 'Kohat Textile Mills Limited · Kohat District, Pakistan', date: 'SEP 2021 — OCT 2021', tag: 'INDUSTRIAL ENGINEERING', points: ['Production scheduling using Finite Capacity Scheduling.', 'Standard time and SMV calculation using Work Study and Methods Engineering.', 'Process improvement using Six Sigma DMAIC concepts.'] },
];

const projects = [
  { n: '01', type: 'MAINTENANCE / RELIABILITY', title: 'Reliability under pressure', result: '70% less unplanned downtime', desc: 'A maintenance improvement program built around condition monitoring, vibration analysis, thermal diagnostics and reliability-centered maintenance.', chips: ['RCM', 'VIBRATION', 'THERMAL', 'ORACLE ERP'], visual: 'machine' },
  { n: '02', type: 'SAP / WORKFLOW', title: 'Procurement without friction', result: '40% faster procurement processing', desc: 'Mapped and improved maintenance procurement workflows, with clearer spare-parts documentation and technical process diagrams.', chips: ['SAP ERP', 'PROCESS MAPPING', 'P&IDS'], visual: 'flow' },
  { n: '03', type: 'DATA / PROTOTYPING', title: 'Parking as a systems problem', result: '77.5% better search time · 69% lower waiting', desc: 'Combined an Arduino prototype with Monte Carlo simulation to reduce the time drivers spent searching and waiting for parking.', chips: ['ARDUINO', 'MONTE CARLO'], visual: 'simulation' },
  { n: '04', type: 'MANUFACTURING', title: 'Production efficiency', result: 'Cycle-time and bottleneck focus', desc: 'Applied takt-time analysis, bottleneck reduction, factorial design and micromotion analysis in solar-panel production.', chips: ['TAKT TIME', 'FACTORIAL DESIGN', 'MICROMOTION'], visual: 'production' },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === 'machine') return <MachineDiagram />;
  if (type === 'flow') return <div className="visual-card flow-visual"><div className="flow-node"><FileIcon type="request" /><span>REQUEST</span></div><MoveRight /><div className="flow-node active"><FileIcon type="sap" /><span>SAP</span></div><MoveRight /><div className="flow-node"><FileIcon type="parts" /><span>SPARES</span></div><div className="flow-caption">MAINTENANCE PROCUREMENT WORKFLOW</div></div>;
  if (type === 'simulation') return <div className="visual-card simulation-visual"><div className="parking-grid">{Array.from({length: 24}).map((_, i) => <span key={i} className={i % 7 === 0 ? 'car' : ''} />)}</div><div className="sim-panel"><span>MONTE CARLO</span><strong>69%</strong><small>WAITING TIME ↓</small><div className="bars"><i /><i /><i /><i /><i /></div></div></div>;
  return <div className="visual-card production-visual"><div className="line-machine"><span /><span /><span /><span /><span /></div><div className="production-readout"><div><small>TAKT</small><b>FLOW</b></div><div><small>BOTTLENECK</small><b>FOUND</b></div><div><small>CYCLE</small><b>IMPROVE</b></div></div></div>;
}

function FileIcon({ type }: { type: string }) { return type === 'sap' ? <Network size={24} /> : type === 'parts' ? <Settings2 size={24} /> : <ScanLine size={24} />; }

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return <main>
    <header className="nav shell">
      <a className="brand" href="#top">ARSALAN<span>/</span></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'}>
        <a href="#impact" onClick={() => setMenu(false)}>IMPACT</a>
        <a href="#approach" onClick={() => setMenu(false)}>APPROACH</a>
        <a href="#experience" onClick={() => setMenu(false)}>EXPERIENCE</a>
        <a href="#projects" onClick={() => setMenu(false)}>PROJECTS</a>
        <a href="#contact" onClick={() => setMenu(false)}>CONTACT</a>
      </nav>
      <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button>
    </header>

    <section id="top" className="hero shell section-grid">
      <div className="hero-copy">
        <div className="eyebrow">INDUSTRIAL ENGINEERING · RELIABILITY · GERMANY <span>01 / 08</span></div>
        <h1>I improve the<br /><em>systems</em> behind<br />operations.</h1>
        <p className="lead">Industrial Engineer pursuing an M.Eng. in Technology and Innovation Management at Hochschule Harz. I work across reliability, maintenance, procurement, supply planning and data analysis to make operations faster, more reliable and easier to manage.</p>
        <div className="actions"><a className="btn dark" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={15} /></a><a className="btn light" href={email}>Start a conversation <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="hero-visual"><MachineDiagram /><div className="hero-aside"><div><small>BASED IN</small><strong>Wernigerode, Germany</strong></div><div><small>FOCUS</small><strong>Maintenance<br />Reliability<br />Process improvement</strong></div></div></div>
      <a className="scroll-cue" href="#impact">SCROLL TO IMPACT <ArrowDownRight size={14} /></a>
    </section>

    <section id="impact" className="shell impact section-grid">
      <div className="section-head"><div className="eyebrow">02 / IMPACT</div><h2>Results first.<br /><span>Methods second.</span></h2><p>Measured outcomes from maintenance, procurement, simulation and operational improvement.</p></div>
      <div className="stats"><Stat value="70%" title="reduction in unplanned downtime" source="KOHAT CEMENT" icon={<Cog />} /><Stat value="40%" title="faster procurement processing" source="OGDCL" icon={<GitBranch />} /><Stat value="77.5%" title="parking search-time improvement" source="HBK HYPERMARKET" icon={<Factory />} /><Stat value="69%" title="lower average parking waiting time" source="MONTE CARLO SIMULATION" icon={<Gauge />} /></div>
    </section>

    <section id="approach" className="shell approach section-grid">
      <div className="approach-copy"><div className="eyebrow">03 / APPROACH</div><h2>I do not improve processes to make them look better on paper. I find where a system is losing time, money or reliability, then work on the constraint that matters.</h2><p>Industrial Engineering gives me the methods. ERP systems give me operational context. Data helps test whether an improvement actually worked.</p><div className="method-row"><div><Cog /><span>MAINTENANCE</span></div><div><Network /><span>SYSTEMS</span></div><div><Cpu /><span>DATA</span></div><div><ShieldCheck /><span>RELIABILITY</span></div></div></div>
      <div className="approach-panel"><div className="panel-tag">THE OPERATING LOOP</div><div className="loop"><div className="loop-center"><Zap size={30}/><span>IMPROVE</span></div><div className="loop-node n1">01<br /><b>OBSERVE</b></div><div className="loop-node n2">02<br /><b>ANALYSE</b></div><div className="loop-node n3">03<br /><b>INTERVENE</b></div><div className="loop-node n4">04<br /><b>VERIFY</b></div><div className="loop-line l1"/><div className="loop-line l2"/><div className="loop-line l3"/><div className="loop-line l4"/></div><div className="panel-note">FIELD DATA → ROOT CAUSE → PRACTICAL CHANGE → MEASURABLE RESULT</div></div>
    </section>

    <section id="experience" className="shell experience"><div className="eyebrow">04 / EXPERIENCE · SELECTED CAREER RECORD</div><div className="experience-list">{experiences.map((x) => <article className="experience-row" key={x.n}><div className="exp-num">{x.n}</div><div className="exp-main"><div className="exp-top"><div><h3>{x.role}</h3><p>{x.company}</p></div><time>{x.date}</time></div><div className="tag">{x.tag}</div>{x.metric && <div className="metric-line">{x.metric}</div>}<ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul></div></article>)}</div><button className="more-btn" onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse career record' : 'View complete career record'} <ArrowDownRight size={15}/></button>{expanded && <div className="expanded-note">Earlier industrial engineering work included production scheduling, work study, Six Sigma DMAIC, solar-panel takt-time and bottleneck analysis, factorial design and micromotion analysis. These roles are already represented in the project and capability sections.</div>}</section>

    <section id="projects" className="shell projects"><div className="project-intro"><div className="eyebrow">05 / SELECTED PROJECTS</div><h2>From plant floor<br />to simulation.</h2><p>Four problems, four different levers, one operating principle: improve the part of the system that creates the greatest effect.</p></div><div className="project-grid">{projects.map((p) => <article className="project-card" key={p.n}><div className="project-meta"><span>{p.n}</span><small>{p.type}</small></div><ProjectVisual type={p.visual}/><h3>{p.title}</h3><p>{p.desc}</p><div className="project-result">{p.result}</div><div className="chips">{p.chips.map(c => <span key={c}>{c}</span>)}</div></article>)}</div></section>

    <section className="shell capabilities section-grid"><div><div className="eyebrow">06 / CAPABILITIES</div><h2>One system,<br /><span>multiple levers.</span></h2><p>My work crosses maintenance, operations, supply chain and data. The common thread is understanding how work flows through a system and where intervention creates the largest operational effect.</p></div><div className="cap-grid">{['Reliability-centered maintenance','Condition monitoring','SAP / ERP workflows','Oracle ERP','Lean Six Sigma / DMAIC','Supply planning','Order processing','Production scheduling','Capacity planning','Time & Motion Study','Power BI','Monte Carlo simulation','Data analysis','Lean manufacturing','Supply chain management'].map((x, i) => <div key={x}><span>{String(i+1).padStart(2,'0')}</span>{x}</div>)}</div></section>

    <section className="shell credentials section-grid"><div><div className="eyebrow">07 / CREDENTIALS</div><h2>Education &<br /><span>certifications.</span></h2></div><div className="cred-content"><div className="cred-block"><small>EDUCATION</small><h3>M.Eng. Technology and Innovation Management</h3><p>Hochschule Harz · 2025</p><h3>Bachelor’s degree, Industrial Engineering</h3><p>University of Engineering & Technology Peshawar · 2019 — 2023</p></div><div className="cred-block"><small>CERTIFICATIONS</small><p>Six Sigma Green Belt Specialization</p><p>Data Science Bootcamp</p><p>Google Project Management Specialization</p><p>Graduate Internship Program (GIP)</p><p>SAP S/4HANA Service</p></div><div className="cred-block languages"><small>LANGUAGES</small><p><b>English</b> · Full Professional</p><p><b>German</b> · Elementary</p><p><b>Urdu</b> · Native or Bilingual</p></div></div></section>

    <section id="contact" className="shell contact"><div className="contact-dark"><div className="eyebrow">08 / CONTACT</div><h2>Let’s improve<br /><span>something real.</span></h2><p>Currently looking for a Werkstudent or internship role in Germany across operations, supply chain, quality or maintenance.</p><a className="btn light" href={email}>Email me <Mail size={15}/></a></div><div className="contact-light"><div className="contact-line"><Mail size={18}/><div><small>EMAIL</small><a href={email}>arsalanafridi356@gmail.com</a></div></div><div className="contact-line"><ExternalLink size={18}/><div><small>LINKEDIN</small><a href={linkedin} target="_blank" rel="noreferrer">Connect with me</a></div></div><div className="contact-line"><Factory size={18}/><div><small>LOCATION</small><span>Wernigerode, Germany</span></div></div><div className="footer-mark">ARSALAN/</div></div></section>

    <footer className="shell footer"><span>OPEN TO PRACTICAL PROBLEMS, MEASURABLE OUTCOMES AND TEAMS THAT CARE HOW THE WORK ACTUALLY GETS DONE.</span><span>MUHAMMAD ARSALAN · 2026</span></footer>
  </main>;
}
