import { ArrowUpRight } from '@/components/site-icons';
import type { CaseStudy } from '@/data/case-studies';

export function ProjectCover({ project }: { project: CaseStudy }) {
  const media = project.media[0];
  return (
    <div className="work-cover">
      <div className="cover-top">{project.coverLabel}</div>
      <div className="cover-media">
        {media ? <img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" /> : <div className="cover-value">{project.coverValue}{project.coverUnit && <small>{project.coverUnit}</small>}</div>}
      </div>
      <div className="cover-bottom">{project.coverFoot}</div>
    </div>
  );
}

export function WorkCard({ project }: { project: CaseStudy }) {
  const media = project.media[0];
  return (
    <a href={`#${project.slug}`} className="directory-link">
      <div className={`directory-image${media ? '' : ' image-type'}`}>
        {media ? <img src={media.src} alt="" width={media.width} height={media.height} loading="lazy" /> : <span>{project.coverValue}</span>}
      </div>
      <div className="directory-caption">
        <div className="directory-copy"><span className="directory-category">{project.category}</span><h3>{project.title}</h3></div>
        <ArrowUpRight size={22} aria-hidden="true"/>
      </div>
    </a>
  );
}
