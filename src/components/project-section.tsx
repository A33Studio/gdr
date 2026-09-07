import {ArrowUp,ArrowUpRight} from 'lucide-react';
import type {CaseStudy} from '@/data/case-studies';
import {SITE} from '@/data/site';
import {ProjectCover} from '@/components/work-card';
import {ProjectIcon} from '@/components/project-icon';
export function ProjectSection({project:p,index}:{project:CaseStudy;index:number}){
 const L=SITE.projectLabels;
 return <article id={p.slug} className="project-section" data-nav-section>
  <header className="project-heading"><p className="eyebrow"><ProjectIcon name={p.icon} size={18}/>{p.category}<span className="project-number">{String(index+1).padStart(2,'0')}</span></p><h2>{p.title}</h2><p className="project-deck">{p.description}</p></header>
  <div className="project-opening"><div className="project-summary"><dl className="case-meta"><div><dt>{L.role}</dt><dd>{p.role}</dd></div><div><dt>{L.timeline}</dt><dd>{p.dates}</dd></div><div><dt>{L.status}</dt><dd>{p.status}</dd></div></dl><p className="overview">{p.overview}</p><div className="work-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>{p.links.length>0&&<div className="project-links">{p.links.map(l=><a href={l.href} key={l.href} className="text-link" target="_blank" rel="noreferrer">{l.label}<ArrowUpRight size={15}/></a>)}</div>}</div><figure className="opening-figure"><ProjectCover project={p} index={index} large/>{p.media[0]&&<figcaption>{p.media[0].caption} <a href={p.media[0].src} target="_blank" rel="noreferrer">{L.fullImage} ↗</a></figcaption>}</figure></div>
  <dl className="facts">{p.facts.map(f=><div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl>
  <div className="project-story"><div className="decision"><p className="eyebrow">{L.decision}</p><h3>{p.decision.title}</h3><p>{p.decision.body}</p></div>
  {p.chapters.map((chapter,i)=><section id={`${p.slug}-${chapter.id}`} key={chapter.id} className="case-section"><div className="chapter-heading"><span className="mono">{String(i+1).padStart(2,'0')}</span><h3>{chapter.title}</h3></div>{chapter.paragraphs.map(text=><p key={text}>{text}</p>)}{chapter.points&&<ul>{chapter.points.map(text=><li key={text}>{text}</li>)}</ul>}<div className={`chapter-gallery ${p.media.filter(m=>m.section===chapter.id).length>1?'gallery-pair':''}`}>{p.media.filter(m=>m.section===chapter.id).map(m=><figure className="inline-project-figure" key={m.src}><a href={m.src} target="_blank" rel="noreferrer"><img src={m.src} alt={m.alt} width={m.width} height={m.height} loading="lazy"/></a><figcaption>{m.caption} <a href={m.src} target="_blank" rel="noreferrer">{L.fullImage} ↗</a></figcaption></figure>)}</div></section>)}
  <section className="outcome"><p className="eyebrow">{L.outcome}</p><p>{p.outcome}</p><span className="status-label"><span/>{p.status}</span></section></div><a className="back-index text-link" href="#work"><ArrowUp size={15}/>{SITE.work.backToIndex}</a>
 </article>;
}
