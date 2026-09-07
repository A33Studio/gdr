'use client';
import {useEffect} from 'react';
import {SITE} from '@/data/site';
export function LegacyRedirect({anchor}:{anchor:string}){useEffect(()=>{window.location.replace(`/#${anchor}`)},[anchor]);return <main id="main" className="wrap legacy-page"><p>{SITE.redirect.message}</p><a className="button-link" href={`/#${anchor}`}>{SITE.redirect.link}</a></main>}
