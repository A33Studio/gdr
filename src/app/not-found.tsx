import {SITE} from '@/data/site';
export default function NotFound(){return <main id="main" className="wrap legacy-page"><p className="eyebrow">404 / {SITE.notFound.eyebrow}</p><h1>{SITE.notFound.title}</h1><a href="/#intro" className="button-link">{SITE.notFound.link}</a></main>}
