import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/data/case-studies';

export function ProjectCover({ project, index = 0, large = false }: { project: CaseStudy; index?: number; large?: boolean }) {
  const media = project.media[0];
  return (
    <div className={`work-cover cover-${project.theme}${large ? ' large-cover' : ''}${media ? ' has-media' : ''}`}>
      <div className="cover-top">
        <span className="cover-category">{project.coverLabel}</span>
        <span className="mono">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="cover-media">
        {media ? <img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" /> : <div className="cover-value">{project.coverValue}{project.coverUnit && <small>{project.coverUnit}</small>}</div>}
      </div>
      <div className="cover-bottom">{project.coverFoot}</div>
    </div>
  );
}

export function WorkCard({ project, index }: { project: CaseStudy; index: number }) {
  const media = project.media[0];
  return (
    <a href={`#${project.slug}`} className="directory-link">
      <span className={`directory-thumbnail${media ? '' : ' thumbnail-type'}`} aria-hidden="true">
        {media ? <img src={media.src} alt="" width={media.width} height={media.height} loading="lazy" /> : <span>{project.coverValue}</span>}
      </span>
      <span className="directory-copy"><span className="directory-category"><span className="mono">{String(index + 1).padStart(2, '0')}</span>{project.category}</span><strong>{project.title}</strong></span>
      <span className="directory-direction" aria-hidden="true"><ArrowUpRight size={18} strokeWidth={1.5} /></span>
    </a>
  );
}
