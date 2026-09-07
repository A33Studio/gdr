'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
/** Content remains visible without JavaScript and with reduced motion enabled. */
export function SiteMotion() { const path = usePathname(); useEffect(() => { const preference = window.matchMedia('(prefers-reduced-motion: reduce)'); const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal')); if (preference.matches || !('IntersectionObserver' in window))
    return; const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) {
    (entry.target as HTMLElement).removeAttribute('data-pending');
    observer.unobserve(entry.target);
} }); }, { threshold: 0.06, rootMargin: '0px 0px 30px 0px' }); nodes.forEach(node => { if (node.getBoundingClientRect().top > window.innerHeight) {
    node.dataset.pending = 'true';
    observer.observe(node);
} }); const showAll = () => { if (preference.matches) {
    observer.disconnect();
    nodes.forEach(n => n.removeAttribute('data-pending'));
} }; preference.addEventListener('change', showAll); return () => { observer.disconnect(); preference.removeEventListener('change', showAll); nodes.forEach(n => n.removeAttribute('data-pending')); }; }, [path]); return null; }
