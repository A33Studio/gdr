import {ArrowUpRight} from 'lucide-react';
import type {CaseStudy} from '@/data/case-studies';
import {ProjectIcon} from '@/components/project-icon';
export function ProjectCover({project,index=0,large=false}:{project:CaseStudy;index?:number;large?:boolean}){
 const media=project.media[0];
 return <div className={`work-cover cover-${project.theme}${large?' large-cover':''}${media?' has-media':''}`}>
   <div className="cover-top"><span className="cover-category"><ProjectIcon name={project.icon} size={17}/>{project.coverLabel}</span><span className="mono">{String(index+1).padStart(2,'0')}</span></div>
   <div className="cover-media">{media?<img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy"/>:<div className="cover-value">{project.coverValue}{project.coverUnit&&<small>{project.coverUnit}</small>}</div>}</div>
   <div className="cover-bottom">{project.coverFoot}</div>
 </div>;
}
export function WorkCard({project,index}:{project:CaseStudy;index:number}){return <a href={`#${project.slug}`} className="directory-link"><span className="directory-icon"><ProjectIcon name={project.icon}/></span><span><strong>{project.title}</strong><small>{project.category}</small></span><ArrowUpRight size={16} aria-hidden="true"/></a>}
