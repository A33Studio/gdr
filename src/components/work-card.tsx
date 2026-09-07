import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/data/case-studies';
export function ProjectCover({ project, index = 0, large = false }: {
    project: CaseStudy;
    index?: number;
    large?: boolean;
}) {
    return <div className={`work-cover cover-${project.theme} ${large ? 'large-cover' : ''}`}>
    <div className="cover-top"><span className="mono">{String(index + 1).padStart(2, '0')} / {project.coverLabel.toUpperCase()}</span>{!large && <span className="cover-arrow" aria-hidden="true"><ArrowUpRight size={17}/></span>}</div>
    {project.media[0] ? <img className="project-cover-photo" src={project.media[0].src} alt={project.media[0].alt} width={project.media[0].width} height={project.media[0].height} loading={large ? "eager" : "lazy"}/> : project.slug === 'purdue-space-program' ? <div><div className="cover-title">Tadpole</div><div className="cover-flow"><span>250+<small>mount candidates</small></span><ArrowRight aria-hidden="true" size={23}/><span>3<small>configurations</small></span><ArrowRight aria-hidden="true" size={23}/><span>1<small>selected design</small></span></div></div> : <div className={project.coverUnit ? 'cover-metric' : 'cover-title'}>{project.coverValue}{project.coverUnit && <> <small>{project.coverUnit}</small></>}</div>}
    <div className="cover-bottom mono"><span>{project.coverFoot}</span></div></div>;
}
export function WorkCard({ project, index }: {
    project: CaseStudy;
    index: number;
}) { return <Link href={`/portfolio/${project.slug}/`} className="work-card reveal" id={project.slug}><ProjectCover project={project} index={index}/><div className="work-card-info"><div><h3>{project.headline}</h3><p>{project.description}</p></div><span className="year mono">{project.year}</span></div><div className="work-tags">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div></Link>; }
