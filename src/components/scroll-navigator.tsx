'use client';
import {useEffect,useRef,useState} from 'react';
import {ListTree,ArrowUp} from 'lucide-react';
import {SITE} from '@/data/site';
import {caseStudies} from '@/data/case-studies';
import {ProjectIcon} from '@/components/project-icon';
const items=[{id:'intro',title:SITE.navigation.home,icon:'orbit'},{id:'work',title:SITE.work.indexLink,icon:'folder'},...caseStudies.map(p=>({id:p.slug,title:p.title,icon:p.icon})),{id:'resume',title:SITE.navigation.resume,icon:'folder'}];
export function ScrollNavigator(){
 const [active,setActive]=useState('intro');const [progress,setProgress]=useState(0);const details=useRef<HTMLDetailsElement>(null);
 useEffect(()=>{let frame=0;const update=()=>{frame=0;const maximum=document.documentElement.scrollHeight-window.innerHeight;setProgress(maximum>0?Math.min(100,Math.max(0,Math.round(window.scrollY/maximum*100))):0);let current='intro';for(const item of items){const node=document.getElementById(item.id);if(node&&node.getBoundingClientRect().top<=150)current=item.id;}setActive(current)};const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);const observer=new ResizeObserver(schedule);observer.observe(document.body);update();return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);observer.disconnect()}},[]);
 const links=<nav aria-label={SITE.navigation.outline}>{items.map(item=><a href={`#${item.id}`} key={item.id} aria-current={active===item.id?'location':undefined} onClick={()=>{if(details.current)details.current.open=false}}><ProjectIcon name={item.icon} size={16}/><span>{item.title}</span></a>)}</nav>;
 return <><div className="edge-progress" role="progressbar" aria-label={SITE.navigation.progress} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><span style={{transform:`scaleY(${progress/100})`}}/></div><aside className="desktop-outline"><p className="eyebrow">{SITE.navigation.outline}</p><div className="outline-meter"><span style={{width:`${progress}%`}}/></div>{links}<a className="back-top" href="#intro"><ArrowUp size={14}/>{SITE.navigation.home}<span className="mono">{progress}%</span></a></aside><details className="mobile-outline" ref={details}><summary><ListTree size={17}/>{SITE.navigation.outline}<span className="mono">{progress}%</span></summary>{links}</details></>;
}
