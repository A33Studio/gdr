import {Plane,GraduationCap} from '@/components/site-icons';
import {SITE} from '@/data/site';
import {caseStudies} from '@/data/case-studies';
import {WorkCard} from '@/components/work-card';
import {ProjectSection} from '@/components/project-section';
import {FullResume} from '@/components/full-resume';
import {ActionLink} from '@/components/action-link';
export default function Home(){return <><main id="main" className="page-wrap">
<section id="intro" className="hero" data-nav-section><div><p className="hero-name">{SITE.identity.name}</p><p className="eyebrow">{SITE.hero.eyebrow}</p><h1>{SITE.hero.title}<br/><span className="hero-accent">{SITE.hero.accent}</span></h1><p className="hero-copy">{SITE.hero.description}</p><div className="hero-links"><ActionLink href="#work" direction="down">{SITE.hero.workLink}</ActionLink><ActionLink href="#resume" variant="secondary">{SITE.hero.resumeLink}</ActionLink></div></div><figure className="portrait"><img src={SITE.identity.portrait} width="552" height="690" alt={SITE.identity.portraitAlt} fetchPriority="high"/></figure></section>
<div className="credentials-line"><span><GraduationCap size={18}/><span><strong>{SITE.hero.degree}</strong><small>{SITE.hero.school} · {SITE.hero.graduation} · {SITE.hero.citizenship}</small></span></span><span><Plane size={18}/><span><strong>{SITE.hero.pilot}</strong><small>{SITE.hero.instrument}</small></span></span></div>
<section id="work" className="work-index" data-nav-section><header className="section-heading"><div><p className="eyebrow">{SITE.work.eyebrow}</p><h2>{SITE.work.title}</h2><p className="section-description">{SITE.work.intro}</p></div></header><div className="project-directory">{caseStudies.map(p=><WorkCard project={p} key={p.slug}/>)}</div></section>
{caseStudies.map(p=><ProjectSection project={p} key={p.slug}/>)}
<FullResume/>
<section id="about" className="about-strip"><div><p className="eyebrow">{SITE.about.eyebrow}</p><h2>{SITE.about.title}</h2></div><p>{SITE.about.description}</p></section>
</main></>}
