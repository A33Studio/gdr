import { HomeIcon, NotebookIcon, FolderKanbanIcon } from "lucide-react";

export const DATA = {
    name: "Gabriel Duarte Rengifo",
    initials: "GDR",
    url: "https://gabriel.duarterengifo.com",
    location: "West Lafayette, IN",
    locationLink: "https://www.google.com/maps/place/west+lafayette+in",
    description:
        "Aerospace Engineering student at Purdue | Co-Founder of PlayAR | Private Pilot",
    navbar: [
        {
            href: "/",
            label: "Home",
            icon: HomeIcon,
        },
        {
            href: "/resume",
            label: "Resume",
            icon: NotebookIcon,
        },
        {
            href: "/portfolio",
            label: "Portfolio",
            icon: FolderKanbanIcon,
        },
    ],
    summary:
        "I'm Gabriel Duarte Rengifo, a sophomore at Purdue University studying Aeronautical and Astronautical Engineering with a Certificate in Entrepreneurship and Innovation. I'm passionate about aviation, aerospace, XR technology, and building things — from designing parts in CATIA to co-founding [PlayAR](https://www.playar.co). I hold a Private Pilot License and am actively involved in the Purdue Space Program and lead the Humanoid Robot Club.",
    avatarUrl: "/me.jpg",
    resumeUrl: "/resume.pdf",
    skills: [
        {
            category: "Software",
            items: ["Fusion 360", "AutoCAD", "SolidWorks", "OnShape", "Siemens NX", "CATIA", "MATLAB", "Teamcenter", "OpenRocket"],
        },
        {
            category: "Technical Skills",
            items: ["Additive Manufacturing", "SLA/SLS/FDM", "CNC", "CAD", "Mechanical Design", "Laser Cutting", "DFM/DFA"],
        },
        {
            category: "Programming Languages",
            items: ["JavaScript/TypeScript", "Python", "Java", "C"],
        },
        {
            category: "Web & Design",
            items: ["React", "Tailwind CSS", "Unity", "Blender", "Adobe Creative Cloud", "Figma", "Canva"],
        },
        {
            category: "Certifications",
            items: ["FAA Private Pilot Certificate"],
        },
        {
            category: "Languages",
            items: ["English", "Spanish"],
        },
    ],
    contact: {
        email: "gduarter@purdue.edu",
        tel: "+15616173956",
        social: {
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/gabrielduarter",
                icon: null,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:gduarter@purdue.edu",
                icon: null,
                navbar: true,
            },
        },
    },

    // Combined work + clubs, ordered by recency. type controls badge color.
    extracurriculars: [
        {
            org: "Gulfstream Aerospace",
            href: "https://www.gulfstream.com",
            type: "work" as const,
            typeLabel: "Internship",
            location: "Savannah, GA",
            role: "Additive Manufacturing Lab Test Intern",
            logoUrl: "/gulfstream.jpg",
            start: "May 2026",
            end: "July 2026",
            description:
                "Designed 7 custom tooling projects in CATIA applying DFM/DFA principles, owning each from concept through customer feedback to delivery — 2 were adopted into production, with one clearing a 2-month backlog and pulling a shipment roughly a month ahead of schedule. Operated SLA, FDM, and SLS additive manufacturing machines (Formlabs, Bambu, Markforged, Stratasys, EOS) to produce shop aids and training tools for internal production. Performed hands-on troubleshooting and preventive maintenance on AM equipment, and redesigned the lab floorplan to open dedicated space for composite layup work.",
        },
        {
            org: "Humanoid Robot Club",
            href: "",
            type: "club" as const,
            typeLabel: "Club · President",
            location: "Purdue University — West Lafayette, IN",
            role: "President",
            logoUrl: "/humanoid.jpg",
            start: "Aug 2025",
            end: null,
            description:
                "Leading a 1,500+ member organization across 3 technical subteams, setting club strategy, sponsor relationships, and technical project direction. As President of StarkHacks, an HRC program, ran operations for a 36-hour hardware hackathon with 750 attendees — the largest by attendance found in public records — owning venue contracting at the Purdue Armory, catering, AV/production, dedicated participant Wi-Fi, and parking logistics. Designed all 5 finger linkages, enclosure, and actuator/servo wiring for a fully articulated robotic hand, choosing linkage actuation over cable-driven for grip strength and field repairability; delivered 3 CAD iterations and 2 assembled prototypes, with the current prototype verified grasping 2 lb payloads in ongoing testing. Presented hand design research at Purdue's fall and spring undergraduate research conferences, recognized with \"Presentations with Distinction\" at both.",
        },
        {
            org: "Purdue Space Program",
            href: "",
            type: "club" as const,
            typeLabel: "Club",
            location: "Purdue University — West Lafayette, IN",
            role: "Active Controls Propulsion & High Power Rocketry Subteam Member",
            logoUrl: "",
            start: "Aug 2025",
            end: null,
            description:
                "Designing the actuator mounting scheme for a gimbaled thrust vector control system on PSP's Tadpole rocket; wrote a MATLAB tool evaluating 250+ candidate mount point sets against actuator stroke and torque constraints using engine geometry extracted from NX CAD, narrowing to 3 configurations now in final design and fabrication. Building a Level 1 and Level 2 high-power rocket (kit build, OpenRocket simulation, team mentorship) toward NAR/Tripoli certification as part of PSP's high-power rocketry subteam.",
        },
        {
            org: "PlayAR",
            href: "https://www.playar.co",
            type: "founder" as const,
            typeLabel: "Co-Founder",
            location: "Fort Lauderdale, FL",
            role: "Co-Founder",
            logoUrl: "/playar.jpg",
            start: "Oct 2023",
            end: "June 2026",
            description:
                "Co-founded PlayAR, an XR football training platform on Meta Quest Pro letting players run reps against virtual opponents in first-person; own product direction and work alongside the dev team on animation and movement UI, translating coach feedback into build requirements. Piloted the prototype with our high school football team, running live play-throws against virtual players — coaches responded positively, with several continuing to integrate AR tools into practice. Advanced to the Diamond Challenge semifinal round as a top-600 team (2024) and to the Limitless Global Summit as a top-50 team (2025).",
        },
        {
            org: "Presidential Aviation",
            href: "https://www.presidential-aviation.com",
            type: "work" as const,
            typeLabel: "Internship",
            location: "Fort Lauderdale, FL",
            role: "Summer Intern",
            logoUrl: "/aviation.jpg",
            start: "June 2024",
            end: "July 2024",
            description:
                "Audited and reconciled two years of maintenance records for 19 clients against FAA airworthiness requirements, identifying documentation errors across a 20+ aircraft fleet. Compiled findings into a report for the maintenance department recommending consolidation of overlapping maintenance events and automation of the manual record-entry process producing the errors.",
        },
        {
            org: "InQLab",
            href: "https://www.inqlab.co",
            type: "work" as const,
            typeLabel: "Internship",
            location: "Bogota, Colombia",
            role: "Summer Intern",
            logoUrl: "/inqlab.png",
            start: "June 2023",
            end: "July 2023",
            description:
                "Implemented AI algorithms to enhance verified media coverage for Colombian news. Analyzed websites and implemented user interface features to optimize the browsing experience. Generated market research reports and company acquisition profiles.",
        },
        {
            org: "Technology Student Association",
            href: "",
            type: "club" as const,
            typeLabel: "Club · President",
            location: "Fort Lauderdale, FL",
            role: "President",
            logoUrl: "https://tsaweb.org/ResourcePackages/Bootstrap5/assets/dist/img/TSA_logo.png",
            start: "Aug 2021",
            end: "May 2025",
            description:
                "Led a chapter of 120+ students that consecutively placed in the largest STEM academic competition in the world. Presided over 80 Middle & High School state and national competitive events against 350k+ students.",
        },
        {
            org: "Computer Science Club",
            href: "",
            type: "club" as const,
            typeLabel: "Club",
            location: "Pine Crest School — Fort Lauderdale, FL",
            role: "Member",
            logoUrl: "https://asset-cdn.schoology.com/system/files/imagecache/profile_reg/grouplogos/logo-322671471_561a9968647b4.gif?1536347591",
            start: "Sep 2021",
            end: "Jun 2025",
            description:
                "Participated in Hackathons, ACSL, and the Bebras challenge each year. Selected as 1 of 5 students to develop new applications for the school's Pepper AI robot.",
        },
    ],

    education: [
        {
            school: "Purdue University",
            href: "https://purdue.edu",
            degree: "B.S. Aeronautical & Astronautical Engineering | Certificate in Entrepreneurship & Innovation",
            logoUrl: "/purdue.jpeg",
            start: "Aug 2025",
            end: "Expected May 2029",
            description: "GPA: 3.44 / 4.0 · Humanoid Robot Club (President), Purdue Space Program · Private Pilot License via Purdue Aviation LLC & Savannah Aviation",
        },
        {
            school: "Pine Crest School",
            href: "https://pinecrest.edu",
            degree: "High School Diploma",
            logoUrl: "/pc.png",
            start: "Aug 2022",
            end: "May 2025",
            description: "GPA: 3.75 / 4.0 · Honor Roll · AP Scholar · National Beta Club · National Spanish Honor Society",
        },
    ],

    projects: [
        {
            title: "PlayAR",
            href: "https://www.playar.co",
            dates: "Oct 2023 - June 2026",
            description:
                "Co-founded and developed an XR football training platform on Meta Quest Pro letting players practice against virtual opponents in first-person. Advanced to the Limitless Global Summit (top 50 globally) in the Diamond Challenge 2025.",
            technologies: ["Unity", "Blender", "XCode", "Meta Quest Pro"],
            links: [
                {
                    type: "Pitch Deck",
                    href: "https://docs.google.com/presentation/d/1pbsgbrwc9KYLjBC6ZxLTzBz8PtyZjXXFJ-c1P15T4ng/edit?usp=sharing",
                },
                { type: "Website", href: "https://www.playar.co" },
            ],
            image: "/playar.jpg",
        },
        {
            title: "Grief Lift",
            href: "https://grieflift.org",
            dates: "June 2024 - June 2025",
            active: true,
            description:
                "Designed and developed a full-stack website for a grief support startup, enabling users to privately connect with others in similar situations through a secure community platform.",
            technologies: ["Next.js", "Supabase", "Cloudflare", "TypeScript"],
            links: [{ type: "Website", href: "https://grieflift.org" }],
            image: "/grief.jpg",
        },
        {
            title: "Drip",
            href: "",
            dates: "Oct 2022 - March 2023",
            active: true,
            description:
                "Designed and prototyped a fully biodegradable water filter using sawdust as the structural body and standard filtration materials, creating an affordable clean-water solution.",
            technologies: ["Fusion 360", "3D Printing"],
            links: [
                {
                    type: "Pitch Deck",
                    href: "https://docs.google.com/presentation/d/1sjB9RvOxtJzkoUPoDK-bpkYN6qxqmXUwVFXHsULh0xM/edit?usp=sharing",
                },
            ],
            image: "/drip.jpg",
        },
    ],

    coursework: [
        {
            code: "AAE 251",
            title: "Introduction to Aerospace Design",
            description:
                "Applied aerodynamics and orbital mechanics fundamentals through MATLAB problem sets and pitot tube analysis; collaborated in a 6-person team on the conceptual design of a full aerospace system.",
        },
        {
            code: "MFET 163",
            title: "Foundations in Geometric Modeling & Data Management",
            description:
                "Utilized Siemens NX and a PDM system (Teamcenter) to model parametric parts, manage variants via expressions and design tables, and support an Engineering Change Process (ECOs) through a simulated industry PLM workflow.",
        },
    ],
} as const;
