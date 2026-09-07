import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';
import { ProjectCover } from '@/components/work-card';
export function generateStaticParams() { return caseStudies.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}): Promise<Metadata> { const { slug } = await params; const p = caseStudies.find(p => p.slug === slug); return { title: p?.title ?? 'Project not found', description: p?.description }; }
export default async function Project({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const index = caseStudies.findIndex(p => p.slug === slug);
    if (index === -1)
        notFound();
    const p = caseStudies[index];
    const next = caseStudies[(index + 1) % caseStudies.length];
    return <main id="main" className="wrap case-page">
    <div className="case-top"><Link href="/portfolio" className="text-link"><ArrowLeft size={16}/>All work</Link><span className="mono">CASE STUDY {String(index + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}</span></div>
    <header className="case-header"><p className="eyebrow">{p.category} / {p.organization}</p><h1>{p.headline}</h1><p className="case-deck">{p.description}</p><dl className="case-meta"><div><dt>My role</dt><dd>{p.role}</dd></div><div><dt>Timeline</dt><dd>{p.dates}</dd></div><div><dt>Status</dt><dd>{p.status}</dd></div></dl></header>
    <ProjectCover project={p} index={index} large/>
    <div className="case-layout"><aside className="case-aside"><nav aria-label="Case study sections"><p className="eyebrow">In this project</p><a href="#overview">Overview</a>{p.chapters.map((c, i) => <a key={c.id} href={`#${c.id}`}><span className="mono">{String(i + 1).padStart(2, '0')}</span>{c.title}</a>)}<a href="#outcome">Outcome & status</a></nav><div className="aside-tools"><p className="eyebrow">Tools & disciplines</p><div className="work-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div>{p.links.length > 0 && <div className="aside-links">{p.links.map(l => <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noreferrer">{l.label}<ArrowUpRight size={15}/></a>)}</div>}</aside>
    <article className="case-article"><section id="overview" className="case-section"><p className="eyebrow">The short version</p><h2>{p.title}</h2><p className="article-lead">{p.overview}</p><dl className="facts">{p.facts.map(f => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl></section>
    <div className="decision reveal"><p className="eyebrow">A key design decision</p><h3>{p.decision.title}</h3><p>{p.decision.body}</p></div>
    {p.chapters.map((chapter, i) => <section id={chapter.id} className="case-section reveal" key={chapter.id}><p className="eyebrow">{String(i + 1).padStart(2, '0')} / The process</p><h2>{chapter.title}</h2>{chapter.paragraphs.map(text => <p key={text}>{text}</p>)}{chapter.points && <ul>{chapter.points.map(text => <li key={text}>{text}</li>)}</ul>}{p.media.filter(m => m.section === chapter.id).map(m => <figure className="inline-project-figure" key={m.src}><a href={m.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${m.alt}`}><img src={m.src} alt={m.alt} loading="lazy"/></a><figcaption>{m.caption} <a href={m.src} target="_blank" rel="noreferrer">View full size ↗</a></figcaption></figure>)}</section>)}
    <section id="outcome" className="case-section outcome"><p className="eyebrow">Outcome & current status</p><h2>Where the work stands.</h2><p>{p.outcome}</p><span className="status-label"><span />{p.status}</span></section>

    </article></div><Link className="next-project" href={`/portfolio/${next.slug}/`}><div><p className="eyebrow">Up next / {next.category}</p><h2>{next.title}</h2></div><ArrowRight size={36}/></Link></main>;
}
