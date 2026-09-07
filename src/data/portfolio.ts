// Legacy source content retained from the previous portfolio.
// The redesigned routes use case-studies.ts and project-media.json.
export interface RoadmapStage {
	id: string;
	title: string;
	summary: string;
}

export interface DiagramItem {
	src: string;
	alt: string;
	caption: string;
	placement: "inline" | "full-bleed";
}

export interface SimulationAsset {
	type: "video";
	src: string | null;
	poster?: string;
	caption: string;
}

export interface PortfolioProject {
	slug: string;
	title: string;
	tagline: string;
	heroImage: string | null;
	dates: string;
	tags: readonly string[];
	links: readonly { type: string; href: string }[];
	overview: string;
	stages: readonly [RoadmapStage, RoadmapStage, RoadmapStage, RoadmapStage, RoadmapStage];
	diagrams: readonly DiagramItem[];
	simulation?: SimulationAsset;
}

export const portfolioProjects: readonly PortfolioProject[] = [
	{
		slug: "playar",
		title: "PlayAR",
		tagline: "XR football training on Meta Quest Pro",
		heroImage: "/playar.jpg",
		dates: "Oct 2023 – June 2026",
		tags: ["Unity", "Blender", "XCode", "Meta Quest Pro"],
		links: [
			{ type: "Website", href: "https://www.playar.co" },
			{
				type: "Pitch Deck",
				href: "https://docs.google.com/presentation/d/1pbsgbrwc9KYLjBC6ZxLTzBz8PtyZjXXFJ-c1P15T4ng/edit?usp=sharing",
			},
		],
		overview:
			"Co-founded PlayAR, an XR football training platform on Meta Quest Pro letting players run reps against virtual opponents in first-person. Owned product direction and worked alongside the dev team on animation and movement UI, translating coach feedback directly into build requirements.",
		stages: [
			{
				id: "concept",
				title: "Concept & Coach Research",
				summary:
					"Started from a simple problem: full-contact reps are limited by injury risk. Talked through practice workflows with our high school football coaches to define a contactless XR training concept players would actually use.",
			},
			{
				id: "unity-prototype",
				title: "Unity Prototype",
				summary:
					"Built the first-person reps engine in Unity for Meta Quest Pro — player positioning, opponent behavior, and the core practice loop players run drills against.",
			},
			{
				id: "asset-pipeline",
				title: "Blender Asset Pipeline",
				summary:
					"Modeled and animated the virtual opponents and practice environments in Blender, building a pipeline to get new plays and formations into Unity quickly.",
			},
			{
				id: "movement-ui",
				title: "XCode & Movement UI",
				summary:
					"Worked alongside the dev team on animation and movement UI, translating coach feedback into concrete build requirements and iterating through Xcode-side integration work.",
			},
			{
				id: "pilot",
				title: "Pilot Testing & Competition",
				summary:
					"Piloted the prototype with our high school football team, running live play-throws against virtual players — coaches responded positively, with several continuing to integrate AR tools into practice. Advanced to the Diamond Challenge semifinal round as a top-600 team (2024) and the Limitless Global Summit as a top-50 team (2025).",
			},
		],
		diagrams: [
			{
				src: "/playar.jpg",
				alt: "PlayAR XR training platform on Meta Quest Pro",
				caption: "Players run first-person reps against virtual opponents on Meta Quest Pro.",
				placement: "inline",
			},
		],
	},
	{
		slug: "grief-lift",
		title: "Grief Lift",
		tagline: "A private community platform for grief support",
		heroImage: "/grief.jpg",
		dates: "June 2024 – June 2025",
		tags: ["Next.js", "Supabase", "Cloudflare", "TypeScript"],
		links: [{ type: "Website", href: "https://grieflift.org" }],
		overview:
			"Designed and developed a full-stack website for a grief support startup, enabling users to privately connect with others in similar situations through a secure community platform.",
		stages: [
			{
				id: "research",
				title: "Spec & User Research",
				summary:
					"Defined the core need: people in grief wanted to connect privately, without the exposure of a typical public social platform. That shaped every architecture decision that followed.",
			},
			{
				id: "schema-auth",
				title: "Supabase Schema & Auth",
				summary:
					"Designed the database schema and secure authentication flow in Supabase, keeping user identity and sensitive conversations protected by default.",
			},
			{
				id: "frontend",
				title: "Frontend Build",
				summary:
					"Built the full Next.js/TypeScript frontend — onboarding, matching, and messaging flows — end to end.",
			},
			{
				id: "privacy-architecture",
				title: "Privacy & Security Architecture",
				summary:
					"Designed the private-connection system so users could find and message others in similar situations without exposing personal information.",
			},
			{
				id: "deployment",
				title: "Cloudflare Deployment",
				summary:
					"Deployed and hardened the site on Cloudflare for production traffic, with monitoring in place for uptime and abuse prevention.",
			},
		],
		diagrams: [
			{
				src: "/grief.jpg",
				alt: "Grief Lift community platform",
				caption: "A secure, private community platform for grief support.",
				placement: "inline",
			},
		],
	},
	{
		slug: "drip",
		title: "Drip",
		tagline: "A biodegradable water filter built from sawdust",
		heroImage: "/drip.jpg",
		dates: "Oct 2022 – March 2023",
		tags: ["Fusion 360", "3D Printing"],
		links: [
			{
				type: "Pitch Deck",
				href: "https://docs.google.com/presentation/d/1sjB9RvOxtJzkoUPoDK-bpkYN6qxqmXUwVFXHsULh0xM/edit?usp=sharing",
			},
		],
		overview:
			"Designed and prototyped a fully biodegradable water filter using sawdust as the structural body and standard filtration materials, creating an affordable clean-water solution.",
		stages: [
			{
				id: "material-research",
				title: "Material Research",
				summary:
					"Investigated sawdust as a structural body material — cheap, biodegradable, and available almost anywhere a filter like this would actually be needed.",
			},
			{
				id: "cad",
				title: "Fusion 360 CAD",
				summary:
					"Designed the filter housing and internal flow geometry in Fusion 360, working within the constraints of a compressed sawdust structural body.",
			},
			{
				id: "prototyping",
				title: "Prototyping & 3D Printing",
				summary:
					"3D printed housing prototypes and hand-assembled test units to validate fit and flow before committing to the sawdust-body version.",
			},
			{
				id: "filtration-testing",
				title: "Filtration Testing",
				summary:
					"Tested standard filtration materials housed inside the prototype body to validate clean-water output.",
			},
			{
				id: "iteration",
				title: "Iteration",
				summary:
					"Refined housing geometry and material ratios based on test results to improve flow rate and structural durability.",
			},
		],
		diagrams: [
			{
				src: "/drip.jpg",
				alt: "Drip biodegradable water filter prototype",
				caption: "Sawdust-body water filter prototype.",
				placement: "inline",
			},
		],
	},
	{
		slug: "humanoid-robot-club",
		title: "Humanoid Robot Club",
		tagline: "Designing a fully articulated robotic hand",
		heroImage: "/humanoid.jpg",
		dates: "Aug 2025 – Present",
		tags: ["CAD", "Mechanical Design", "Actuators", "Robotics"],
		links: [],
		overview:
			"As President of Purdue's Humanoid Robot Club, leading a 1,500+ member organization across 3 technical subteams while personally designing the mechanical systems for a fully articulated robotic hand.",
		stages: [
			{
				id: "requirements",
				title: "Grip Requirements",
				summary:
					"Defined target grip strength and payload requirements, with field repairability as a hard constraint given the hand would see repeated hands-on testing.",
			},
			{
				id: "actuation-method",
				title: "Actuation Method",
				summary:
					"Chose linkage actuation over cable-driven for grip strength and field repairability — a deliberate tradeoff against the lighter weight cable-driven designs offer.",
			},
			{
				id: "linkage-design",
				title: "Finger Linkage & Enclosure Design",
				summary:
					"Designed all 5 finger linkages, the enclosure, and actuator/servo wiring for the fully articulated hand.",
			},
			{
				id: "cad-iteration",
				title: "CAD Iteration",
				summary:
					"Carried the design through 3 CAD iterations, refining linkage geometry and enclosure fit with each pass.",
			},
			{
				id: "prototype-testing",
				title: "Prototype & Payload Testing",
				summary:
					"Delivered 2 assembled prototypes; the current prototype is verified grasping 2 lb payloads in ongoing testing.",
			},
		],
		diagrams: [
			{
				src: "/humanoid.jpg",
				alt: "Humanoid Robot Club robotic hand project",
				caption: "Fully articulated robotic hand — linkage-actuated for grip strength and field repairability.",
				placement: "inline",
			},
		],
	},
	{
		slug: "purdue-space-program",
		title: "Purdue Space Program",
		tagline: "Actuator mounting for a gimbaled TVC system",
		heroImage: null,
		dates: "Aug 2025 – Present",
		tags: ["MATLAB", "NX CAD", "Thrust Vector Control", "OpenRocket"],
		links: [],
		overview:
			"Designing the actuator mounting scheme for a gimbaled thrust vector control system on PSP's Tadpole rocket, as part of the Active Controls Propulsion & High Power Rocketry subteam.",
		stages: [
			{
				id: "requirements",
				title: "Requirements",
				summary:
					"Defined actuator stroke and max torque constraints for Tadpole's gimbaled thrust vector control system before any mount candidates were generated.",
			},
			{
				id: "geometry-extraction",
				title: "Geometry Extraction",
				summary:
					"Extracted engine profile geometry from the NX CAD model to ground every candidate mount point set in the real envelope available.",
			},
			{
				id: "matlab-tool",
				title: "MATLAB Optimization Tool",
				summary:
					"Wrote a MATLAB tool evaluating 250+ candidate mount point sets against the actuator stroke and torque constraints using the extracted engine geometry.",
			},
			{
				id: "downselect",
				title: "Configuration Down-select",
				summary:
					"Narrowed 250+ candidates to 3 viable configurations based on the tool's constraint evaluation.",
			},
			{
				id: "final-design",
				title: "Final Design & Fabrication",
				summary:
					"The selected configuration is now in final design and fabrication ahead of integration with the Tadpole rocket.",
			},
		],
		diagrams: [],
		simulation: {
			type: "video",
			src: null,
			caption: "MATLAB mount-point optimization tool — evaluating 250+ candidate configurations against actuator stroke and torque constraints.",
		},
	},
	{
		slug: "gulfstream-aerospace",
		title: "Gulfstream Aerospace",
		tagline: "Custom tooling design in the Additive Manufacturing Lab",
		heroImage: "/gulfstream.jpg",
		dates: "May 2026 – July 2026",
		tags: ["CATIA", "DFM/DFA", "Additive Manufacturing"],
		links: [],
		overview:
			"As an Additive Manufacturing Lab Test Intern, designed 7 custom tooling projects in CATIA applying DFM/DFA principles, owning each from concept through customer feedback to delivery.",
		stages: [
			{
				id: "intake",
				title: "Concept & Customer Intake",
				summary:
					"Scoped internal tooling requests from shop-floor customers, applying design-for-manufacturing and design-for-assembly (DFM/DFA) principles from the first sketch.",
			},
			{
				id: "catia-design",
				title: "CATIA Design",
				summary:
					"Designed 7 custom tooling projects in CATIA, owning each from concept through to final delivery.",
			},
			{
				id: "am-production",
				title: "Additive Manufacturing Production",
				summary:
					"Operated SLA, FDM, and SLS additive manufacturing machines (Formlabs, Bambu, Markforged, Stratasys, EOS) to produce shop aids and training tools for internal production.",
			},
			{
				id: "feedback",
				title: "Feedback & Iteration",
				summary:
					"Iterated each design based on on-site customer feedback, closing the loop between shop-floor use and the next design revision.",
			},
			{
				id: "delivery",
				title: "Delivery & Impact",
				summary:
					"2 of the 7 tooling designs were adopted into production on delivery — one cleared a 2-month work backlog and pulled a shipment roughly a month ahead of schedule. Also performed preventive maintenance on AM equipment and redesigned the lab floorplan to open dedicated space for composite layup work.",
			},
		],
		diagrams: [
			{
				src: "/gulfstream.jpg",
				alt: "Gulfstream Aerospace Additive Manufacturing Lab",
				caption: "Custom tooling designed in CATIA, produced in the Additive Manufacturing Lab.",
				placement: "inline",
			},
		],
	},
] as const;
