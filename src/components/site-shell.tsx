'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ArrowUpRight, Sun, Moon, MapPin } from 'lucide-react';
import { SITE } from '@/data/site';
import { DATA } from '@/data/resume';
export function SiteHeader() {
  const {resolvedTheme,setTheme}=useTheme();
  const [mounted,setMounted]=useState(false);
  useEffect(()=>setMounted(true),[]);
  const dark=mounted&&resolvedTheme==='dark';
  return <header className="site-header"><div className="header-inner wrap">
    <a href="/#intro" className="wordmark"><img className="brand-logo" src={SITE.identity.logo} alt={SITE.identity.logoAlt} width="36" height="42"/><span>{SITE.identity.name}</span></a>
    <nav className="nav" aria-label="Main navigation"><a href="/#intro">{SITE.navigation.home}</a><a href="/#work">{SITE.navigation.work}</a><a href="/#resume">{SITE.navigation.resume}</a><a className="contact-nav" href={`mailto:${DATA.contact.email}`}>{SITE.navigation.contact}<ArrowUpRight size={16}/></a></nav>
    <button type="button" className="theme-toggle" onClick={()=>setTheme(dark?'light':'dark')} aria-label={dark?SITE.navigation.themeLight:SITE.navigation.themeDark} title={dark?SITE.navigation.themeLight:SITE.navigation.themeDark}>{dark?<Sun size={19}/>:<Moon size={19}/>}</button>
  </div></header>;
}
export function SiteFooter(){return <footer id="contact" className="footer"><div className="wrap"><div className="footer-top"><div><p className="eyebrow">{SITE.footer.eyebrow}</p><h2>{SITE.footer.title}</h2></div><a className="text-link" href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}<ArrowUpRight size={20}/></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {SITE.identity.name}</p><div className="footer-socials"><span className="location"><MapPin size={14}/>{SITE.footer.locations}</span><a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer">{SITE.footer.linkedin} ↗</a><a href={DATA.resumeUrl}>{SITE.footer.resume} ↗</a></div></div></div></footer>}
