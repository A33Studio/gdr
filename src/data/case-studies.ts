import project0 from '../../content/projects/purdue-space-program.json';
import project1 from '../../content/projects/humanoid-robot-club.json';
import project2 from '../../content/projects/gulfstream-aerospace.json';
import project3 from '../../content/projects/playar.json';
import project4 from '../../content/projects/starkhacks.json';
import project5 from '../../content/projects/drip.json';
import project6 from '../../content/projects/high-power-rocketry.json';

export type CaseChapter = {
    id: string;
    title: string;
    paragraphs: string[];
    points?: string[];
};
export type CaseStudy = {
    slug: string;
    icon: string;
    title: string;
    headline: string;
    description: string;
    category: string;
    organization: string;
    dates: string;
    year: string;
    role: string;
    status: string;
    theme: string;
    coverLabel: string;
    coverValue: string;
    coverUnit?: string;
    coverFoot: string;
    tags: string[];
    facts: {
        value: string;
        label: string;
    }[];
    overview: string;
    decision: {
        title: string;
        body: string;
    };
    chapters: CaseChapter[];
    outcome: string;
    links: {
        label: string;
        href: string;
    }[];
    media: {
        src: string;
        alt: string;
        caption: string;
        section?: string | null;
        width?: number;
        height?: number;
    }[];
};

export const caseStudies: CaseStudy[] = [project0, project1, project2, project3, project4, project5, project6];
