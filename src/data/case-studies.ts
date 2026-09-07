/**
 * Editorial content for the redesigned portfolio.
 * Sources: supplied September 2026 résumé and existing src/data/portfolio.ts.
 * Never infer test data or use organization logos as project photography.
 */
import mediaCatalog from './project-media.json';
export type CaseChapter = {
    id: string;
    title: string;
    paragraphs: string[];
    points?: string[];
};
export type CaseStudy = {
    slug: string;
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
export const caseStudies: CaseStudy[] = [
    {
        slug: 'purdue-space-program', title: 'Tadpole · Thrust vector control', headline: 'Making thrust steerable.',
        description: 'Actuator mounting design and constraint evaluation for Purdue Space Program’s Tadpole rocket.',
        category: 'Aerospace', organization: 'Purdue Space Program', dates: 'Aug 2025 — Present', year: '2025–present', role: 'Active Controls Propulsion subteam member', status: 'Final design & fabrication', theme: 'dark', coverLabel: 'Thrust vector control', coverValue: 'Tadpole', coverFoot: 'NX + MATLAB / Mount configuration study',
        tags: ['Siemens NX', 'MATLAB', 'Mechanical design', 'Thrust vector control'], facts: [{ value: '250+', label: 'Candidate mount sets evaluated' }, { value: '3', label: 'Configurations shortlisted' }, { value: '1', label: 'Selected configuration' }],
        overview: 'On Tadpole, a gimbaled engine changes the direction of thrust. My contribution is the actuator mounting scheme: choosing where the actuators connect so the system works within its available geometry, actuator stroke, and maximum torque constraints. I developed a MATLAB evaluation tool to compare candidate mounting arrangements using engine profile geometry extracted from NX CAD.',
        decision: { title: 'Start with the actual engine envelope.', body: 'I used profile geometry extracted from the NX model to evaluate mount locations against the available geometry and actuator constraints. The mounting decision could then be made from a comparison of candidate configurations.' },
        chapters: [
            { id: 'challenge', title: 'The mounting problem', paragraphs: ['A thrust vector control system relies on a mechanical relationship between the engine, gimbal, and actuators. Changing a mount position changes that relationship. The mounting arrangement therefore needed to be evaluated alongside the actuator stroke and torque constraints.', 'My scope was the actuator mounting scheme and the tool used to compare mount point sets within the team’s existing engine geometry.'], points: ['Use the engine profile geometry from Siemens NX.', 'Evaluate candidate mount point sets against actuator stroke constraints.', 'Check maximum torque constraints before narrowing the configuration set.'] },
            { id: 'method', title: 'From CAD geometry to a comparison tool', paragraphs: ['I extracted the engine profile from NX CAD and brought that geometry into a MATLAB tool. The tool evaluated more than 250 candidate mount point sets against the actuator constraints.', 'This connected the geometry work and the configuration search in one workflow: extract the profile, evaluate the candidate set, then narrow the arrangements for final design.'] },
            { id: 'selection', title: 'Narrowing the design space', paragraphs: ['The evaluation narrowed more than 250 candidate mount point sets to three configurations. From that shortlist, one configuration was selected for final design and fabrication.', 'The selection is a design milestone. Fabrication and integration are the next stages of the project; flight performance is not yet a reported result.'] }
        ],
        outcome: 'A MATLAB evaluation of 250+ candidate mount point sets produced a three-configuration shortlist. The selected arrangement is in final design and fabrication.', links: [], media: []
    },
    {
        slug: 'humanoid-robot-club', title: 'Articulated robotic hand', headline: 'A stronger grasp.', description: 'A linkage-actuated hand designed around grip strength and field repairability.', category: 'Robotics', organization: 'Humanoid Robot Club · Purdue', dates: 'Aug 2025 — Present', year: '2025–present', role: 'Mechanical designer · Club President', status: 'Prototype testing', theme: 'blue', coverLabel: 'Robotic hand', coverValue: '2', coverUnit: 'lb', coverFoot: 'Verified payload / Ongoing prototype testing',
        tags: ['Mechanical design', 'CAD', 'Linkages', 'Actuators', 'Prototyping'], facts: [{ value: '3', label: 'CAD iterations' }, { value: '2', label: 'Assembled prototypes' }, { value: '2 lb', label: 'Verified lifting payload' }],
        overview: 'I designed the finger linkages, enclosure, and actuator/servo wiring for a fully articulated robotic hand. The work spans three CAD iterations and two assembled prototypes. The current prototype has been verified lifting a 2 lb payload during ongoing testing. Alongside the technical work, I lead Purdue’s Humanoid Robot Club as President.',
        decision: { title: 'Linkages over cables.', body: 'I selected linkage actuation over a cable-driven approach to prioritize grip strength and field repairability. That choice shaped the finger mechanisms, enclosure, and physical integration of the actuators.' },
        chapters: [
            { id: 'challenge', title: 'Designing for strength and repair', paragraphs: ['The hand needed an actuation approach suited to grip strength and hands-on repair. I chose a linkage-based mechanism to address those priorities.', 'This decision drove the mechanical layout. My work included the finger linkages, the enclosure that houses the assembly, and actuator/servo wiring. These parts had to be considered together as an assembled hand.'] },
            { id: 'iteration', title: 'Three CAD iterations, two physical prototypes', paragraphs: ['I took the design through three CAD iterations and built two assembled prototypes. Moving between CAD and assembly gave the project a physical basis for further revision.', 'The design work covered the mechanisms and their integration: finger linkage geometry, the enclosure, and the actuator/servo wiring. The current prototype remains part of an ongoing test-and-iteration cycle.'] },
            { id: 'testing', title: 'A measured result, with testing still underway', paragraphs: ['The current prototype has been verified lifting a 2 lb payload. This is the demonstrated result for the assembled prototype; it is not a claim about maximum grip force or a completed endurance qualification.', 'I presented research at Purdue’s fall and spring undergraduate research conferences. Both presentations were listed under “Presentations with Distinction.”'] },
            { id: 'leadership', title: 'Building the team around the hardware', paragraphs: ['As President, I lead a 1,500+ member organization across three technical subteams. My responsibilities include club strategy, sponsor relationships, and technical project direction.', 'The role combines hands-on mechanical work with the organizational work that helps a large student engineering community build together. StarkHacks, an HRC program, is documented separately in this portfolio.'] }
        ], outcome: 'Three CAD iterations and two assembled prototypes, with the current hand verified lifting 2 lb. Prototype testing is ongoing.', links: [], media: []
    },
    {
        slug: 'gulfstream-aerospace', title: 'Gulfstream · Production tooling', headline: 'Designed for the shop floor.', description: 'Seven custom tooling projects, from CATIA concepts through internal customer review and delivery.', category: 'Manufacturing', organization: 'Gulfstream Aerospace', dates: 'May 2026 — July 2026', year: '2026', role: 'Additive Manufacturing Lab Test Intern', status: 'Internship completed', theme: 'light', coverLabel: 'Additive manufacturing', coverValue: '7', coverUnit: 'tools', coverFoot: 'CATIA / Concept to delivery',
        tags: ['CATIA V5', 'DFM/DFA', 'SLA', 'FDM', 'SLS'], facts: [{ value: '7', label: 'Custom tooling projects' }, { value: '2', label: 'Adopted into production on delivery' }, { value: '~1 month', label: 'Shipment pulled ahead by one tool' }],
        overview: 'During my internship in Gulfstream’s Additive Manufacturing Lab, I designed seven custom tooling projects in CATIA. I owned each from concept through internal customer review to delivery, applying design-for-manufacturing and design-for-assembly principles. Two tools were adopted into production on delivery; one cleared a two-month work backlog and helped pull a shipment roughly one month ahead of schedule.',
        decision: { title: 'Design around how the tool will be used.', body: 'The workflow included internal customer review between concept and delivery. DFM/DFA principles and direct feedback connected each CATIA design to its manufacturing and assembly context.' },
        chapters: [
            { id: 'scope', title: 'Ownership from concept through delivery', paragraphs: ['The internship involved seven custom tooling projects for internal production. I designed each in CATIA and carried the work through internal customer review to delivery.', 'Design-for-manufacturing and design-for-assembly principles guided this work. Customer feedback was part of the design process, connecting the model to the people and workflows that would use the finished tool.'] },
            { id: 'manufacturing', title: 'Hands-on additive manufacturing', paragraphs: ['I operated SLA, FDM, and SLS additive manufacturing machines to produce shop aids and training tools for internal production. The equipment included Formlabs, Bambu, Markforged, Stratasys, and EOS machines.', 'The role also involved preventive maintenance on additive manufacturing equipment. Alongside the tooling projects, I redesigned the lab floor plan to open dedicated space for composite layup work.'], points: ['CATIA tooling design with DFM/DFA principles.', 'SLA, FDM, and SLS machine operation.', 'Internal customer review, iteration, and delivery.', 'Lab layout improvement and equipment preventive maintenance.'] },
            { id: 'impact', title: 'The result on the production floor', paragraphs: ['Two of the seven tooling designs were adopted into production on delivery. One cleared a two-month work backlog and pulled a shipment roughly one month ahead of schedule.', 'These results connect the design work to a concrete operational outcome: a tool that enabled work to move forward.'] }
        ], outcome: 'Delivered seven custom tooling projects. Two entered production on delivery, with one clearing a two-month backlog and advancing a shipment by roughly one month.', links: [], media: []
    },
    {
        slug: 'playar', title: 'PlayAR', headline: 'A new perspective on practice.', description: 'First-person XR football training on Meta Quest Pro, shaped with feedback from real coaches.', category: 'Product & software', organization: 'PlayAR', dates: 'Oct 2023 — June 2026', year: '2023–26', role: 'Co-Founder · Product direction', status: 'Prototype piloted', theme: 'green', coverLabel: 'Extended reality / Football', coverValue: 'PlayAR', coverFoot: 'Meta Quest Pro / First-person practice',
        tags: ['Product design', 'Unity', 'Blender', 'XR', 'Meta Quest Pro'], facts: [{ value: 'Quest Pro', label: 'Prototype platform' }, { value: 'Top 600', label: 'Diamond Challenge team · 2024' }, { value: 'Top 50', label: 'Limitless Global Summit team · 2025' }],
        overview: 'I co-founded PlayAR, an XR football training platform that lets players run first-person reps against virtual opponents on Meta Quest Pro. I owned product direction and worked alongside the development team on animation and movement UI, translating coach feedback into build requirements.',
        decision: { title: 'Let practice inform the product.', body: 'We piloted the prototype with our high school football team. Coach feedback became build requirements, keeping product direction grounded in the way players and coaches actually practice.' },
        chapters: [
            { id: 'concept', title: 'Football reps from the player’s perspective', paragraphs: ['PlayAR’s concept was a first-person training experience: use a headset to run reps against virtual opponents. The platform was developed for Meta Quest Pro.', 'My role centered on product direction. I worked alongside the development team on the animation and movement interface, connecting the experience we wanted players to have with the requirements needed to build it.'] },
            { id: 'development', title: 'From coach feedback to build requirements', paragraphs: ['The project combined XR development with animation and movement UI work. The project workflow used Unity and Blender.', 'I translated coach feedback into concrete build requirements and worked with the team on the interface and motion. This connected the product work to the experience of running a play from a player’s point of view.'] },
            { id: 'pilot', title: 'Taking the prototype to the field', paragraphs: ['We piloted the prototype with our high school football team, running live play-throws against virtual players. Coaches responded positively, and several continued integrating AR tools into practice afterward.', 'The pilot provided qualitative feedback about the experience. Coach feedback informed further product requirements.'] },
            { id: 'recognition', title: 'Developing the venture', paragraphs: ['PlayAR advanced to the Diamond Challenge semifinal round as a top-600 team in 2024 and to the Limitless Global Summit as a top-50 team in 2025.', 'My co-founder work spanned October 2023 through June 2026, bringing together product direction, development collaboration, and real-world prototype feedback.'] }
        ], outcome: 'An XR training prototype piloted with a high school football team, positive coach feedback, and recognition in two entrepreneurship competitions.', links: [{ label: 'PlayAR website', href: 'https://www.playar.co' }, { label: 'Pitch deck', href: 'https://docs.google.com/presentation/d/1pbsgbrwc9KYLjBC6ZxLTzBz8PtyZjXXFJ-c1P15T4ng/edit?usp=sharing' }], media: []
    },
    {
        slug: 'starkhacks', title: 'StarkHacks', headline: 'Making room for 750 builders.', description: 'The operations behind a 36-hour in-person hardware hackathon at Purdue.', category: 'Leadership', organization: 'Humanoid Robot Club · Purdue', dates: 'During HRC presidency · Aug 2025 — Present', year: '2025–present', role: 'President · Event operations', status: 'Event delivered', theme: 'violet', coverLabel: 'Hardware hackathon', coverValue: '750', coverUnit: 'builders', coverFoot: '36 hours / Purdue Armory',
        tags: ['Operations', 'Event production', 'Leadership', 'Infrastructure'], facts: [{ value: '750', label: 'Attendees' }, { value: '36 hours', label: 'In-person hardware hackathon' }, { value: 'Armory', label: 'Purdue event venue' }],
        overview: 'As President of StarkHacks, a Humanoid Robot Club program, I ran operations for a 36-hour in-person hardware hackathon with 750 attendees. I owned venue contracting at the Purdue Armory, catering, AV/production, dedicated participant Wi-Fi infrastructure, and parking logistics.',
        decision: { title: 'Treat the event’s support systems as part of the experience.', body: 'Venue, food, production, connectivity, and arrival logistics all sat within my operational scope. Dedicated participant Wi-Fi infrastructure was one of the systems needed to support the event.' },
        chapters: [
            { id: 'scope', title: 'A hardware event at scale', paragraphs: ['StarkHacks brought 750 attendees together for a 36-hour in-person hardware hackathon. As President, I owned the operational work that enabled the event to take place at the Purdue Armory.', 'The responsibility spanned contracting, production, infrastructure, and participant logistics.'] },
            { id: 'operations', title: 'The systems behind the event', paragraphs: ['I handled venue contracting at the Purdue Armory and coordinated catering, AV/production, dedicated participant Wi-Fi infrastructure, and parking logistics.', 'This work sat alongside my wider role leading the Humanoid Robot Club, including club strategy, sponsor relationships, and technical project direction.'], points: ['Purdue Armory venue contracting.', 'Catering and attendee support.', 'AV and event production.', 'Dedicated participant Wi-Fi infrastructure.', 'Parking logistics.'] }
        ], outcome: 'Delivered operations for a 36-hour hardware hackathon attended by 750 people.', links: [], media: []
    },
    {
        slug: 'grief-lift', title: 'Grief Lift', headline: 'A more private place to connect.', description: 'A full-stack community platform for people navigating grief.', category: 'Product & software', organization: 'Grief Lift', dates: 'June 2024 — June 2025', year: '2024–25', role: 'Designer & full-stack developer', status: 'Website delivered', theme: 'light', coverLabel: 'Community platform', coverValue: 'Grief Lift', coverFoot: 'Next.js + Supabase / Product design',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'Cloudflare'], facts: [{ value: 'Full-stack', label: 'Design and development' }, { value: 'Supabase', label: 'Data and authentication' }, { value: 'Cloudflare', label: 'Deployment platform' }],
        overview: 'I designed and developed a full-stack website for a grief support startup. The platform was built around private connections between people in similar situations, with Next.js and TypeScript on the frontend, Supabase for data and authentication, and Cloudflare for deployment.',
        decision: { title: 'Make private connection the organizing idea.', body: 'The platform focused on people connecting with others in similar circumstances. That emphasis shaped the user flows and the underlying data and authentication work.' },
        chapters: [
            { id: 'purpose', title: 'Designing around a sensitive context', paragraphs: ['Grief Lift’s purpose was to help people privately connect with others in similar situations. I designed and developed the website around this community experience.', 'The project included onboarding, matching, and messaging flows. The frontend work used Next.js and TypeScript.'] },
            { id: 'implementation', title: 'Connecting the interface and application', paragraphs: ['I developed the Supabase database schema and authentication flow alongside the frontend. The project combined interface design with the application work needed to support private connections.', 'Cloudflare was used for deployment. The work brought interface design, database modeling, and deployment together in one project.'] }
        ], outcome: 'A delivered full-stack community website combining interface design, authentication, data modeling, and deployment.', links: [{ label: 'Grief Lift website', href: 'https://grieflift.org' }], media: []
    },
    {
        slug: 'drip', title: 'Drip', headline: 'Rethinking the filter body.', description: 'A water-filter concept exploring sawdust as a biodegradable structural material.', category: 'Product design', organization: 'Independent project', dates: 'Oct 2022 — March 2023', year: '2022–23', role: 'Designer & prototyper', status: 'Concept & prototype', theme: 'cream', coverLabel: 'Materials / Product design', coverValue: 'Drip', coverFoot: 'Fusion 360 / Prototyping',
        tags: ['Fusion 360', '3D printing', 'Material exploration', 'Product design'], facts: [{ value: 'Sawdust', label: 'Structural material explored' }, { value: 'Fusion 360', label: 'Housing design' }, { value: 'Prototype', label: 'Project stage' }],
        overview: 'Drip explored a water-filter concept using sawdust as a biodegradable structural body alongside standard filtration materials. I designed and prototyped the concept using Fusion 360 and 3D printing, with the aim of developing an affordable clean-water product.',
        decision: { title: 'Explore a different structural material.', body: 'The concept centered on sawdust for the filter body. This made the relationship between the housing geometry, material choice, and filtration components the central design problem.' },
        chapters: [
            { id: 'materials', title: 'A material-led product concept', paragraphs: ['I investigated sawdust as the structural body material for a water filter. The project explored how a biodegradable body could be paired with standard filtration materials.', 'The goal was an affordable clean-water concept. That goal is distinct from a demonstrated drinking-water safety result.'] },
            { id: 'prototype', title: 'From housing geometry to prototype', paragraphs: ['I used Fusion 360 to design the filter housing and explored the concept through 3D-printed prototypes and assembled test units.', 'The work explored housing, flow, and material iteration. Drip remained a design and prototyping project; validating the filtration performance would be a separate stage of development.'] }
        ], outcome: 'A designed and prototyped filter concept exploring a sawdust-based structural body. No potable-water certification is claimed.', links: [{ label: 'Pitch deck', href: 'https://docs.google.com/presentation/d/1sjB9RvOxtJzkoUPoDK-bpkYN6qxqmXUwVFXHsULh0xM/edit?usp=sharing' }], media: []
    },
    {
        slug: 'high-power-rocketry', title: 'High-power rocketry', headline: 'Learning through the build.', description: 'Kit building and OpenRocket simulation toward Level 1 and Level 2 high-power rocketry certification.', category: 'Aerospace', organization: 'Purdue Space Program', dates: 'Aug 2025 — Present', year: '2025–present', role: 'High Power Rocketry subteam member', status: 'Builds in progress · Certification in progress', theme: 'dark', coverLabel: 'High-power rocketry', coverValue: 'L1 / L2', coverFoot: 'OpenRocket / Kit build / Team mentorship',
        tags: ['OpenRocket', 'Rocket assembly', 'Simulation', 'High-power rocketry'], facts: [{ value: 'L1 / L2', label: 'Certification goals' }, { value: 'OpenRocket', label: 'Simulation workflow' }, { value: 'PSP', label: 'Team mentorship' }],
        overview: 'As part of Purdue Space Program’s High Power Rocketry subteam, I’m building Level 1 and Level 2 high-power rockets through kit building, OpenRocket simulation, and team mentorship. The work is toward NAR/Tripoli certification.',
        decision: { title: 'Connect simulation with hands-on construction.', body: 'The project brings together an OpenRocket simulation workflow, physical kit building, and mentorship from the high-power rocketry team.' },
        chapters: [
            { id: 'approach', title: 'Building a practical foundation', paragraphs: ['The certification pathway combines kit building with OpenRocket simulation and team mentorship. I’m using this work to develop hands-on experience alongside my thrust vector control design work on Tadpole.', 'Level 1 and Level 2 are current certification goals. They are not completed certifications, and this portfolio does not yet report a certification flight result.'] }
        ], outcome: 'Rocket builds and simulation work are in progress toward NAR/Tripoli certification.', links: [], media: []
    }
];
for (const project of caseStudies) {
    const media = mediaCatalog[project.slug as keyof typeof mediaCatalog];
    if (media)
        project.media = media;
}
