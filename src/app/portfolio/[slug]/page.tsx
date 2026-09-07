import {notFound} from 'next/navigation';
import {caseStudies} from '@/data/case-studies';
import {LegacyRedirect} from '@/components/legacy-redirect';
export function generateStaticParams(){return caseStudies.map(p=>({slug:p.slug}))}
export default async function Project({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!caseStudies.some(p=>p.slug===slug))notFound();return <LegacyRedirect anchor={slug}/>}
