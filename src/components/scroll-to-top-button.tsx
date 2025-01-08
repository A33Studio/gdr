'use client';

import { type ButtonHTMLAttributes } from 'react';

export function ScrollToTopButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 p-4 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
            aria-label="Back to top"
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-labelledby="scrollTopTitle"
            >
                <title id="scrollTopTitle">Scroll to top</title>
                <path d="m18 15-6-6-6 6" />
            </svg>
        </button>
    );
} 