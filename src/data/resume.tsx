//import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Gabriel Duarte Rengifo",
    initials: "GDR",
    url: "https://a33studio.com",
    location: "Ft. Lauderdale, FL",
    locationLink: "https://www.google.com/maps/place/fort+lauderdale",
    description:
        "Student at Pine Crest School",
    summary:
        "[Click here to learn in more detail about my experinces](https://drive.google.com/file/d/1HSjKks6TZdULTEnQ_ZVaXXrqL3-E380b/view?usp=sharing)",
    avatarUrl: "/me.jpg",
    skills: [//add my skills here
        "React",
        "Next.js",
        "Typescript",
        "Node.js",
        "Python",
        "Fusion 360",
        "Unity",
        "Swift",
        "XCode",
        "Java",
        "Adobe Products",
    ],
    contact: {
        email: "gabriel@duarterengifo.com",
        tel: "+15616173956",
        social: {
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/gabrielduarter",
                icon: null,
            },
            email: {
                name: "Send Email",
                url: "gabriel@duarterengifo.com",
                //icon: Icons.email,
            },
        },
    },

    work: [
        {
            company: "Presidential Aviation",
            badges: [],
            href: "https://www.presidential-aviation.com",
            location: "Fort Lauderdale Executive Airport",
            title: "Intern",
            logoUrl: "/aviation.jpg",
            start: "June 2024",
            end: "July 2024",
            description:
                "Assited with auditing plane mainetnece logs for 19 clients as well as created the concept for software to further imoprve and streamline maintence workflow"
        },
        {
            company: "InQLab",
            href: "https://www.inqlab.co",
            badges: [],
            location: "Bogota, Colombia",
            title: "Intern",
            logoUrl: "/inqlab.png",
            start: "June 2023",
            end: "July 2023",
            description:
                "Conducted market research to create customer aquostion portofolio as well as researching new algorithms to allow for a more streamlined process."
        },
    ],
    education: [
        {
            school: "Pine Crest School",
            href: "https://pinecrest.edu",
            degree: "High School Diploma",
            logoUrl: "/pc.png",
            start: "2021",
            end: "2025",
        },
    ],
    projects: [
        {
            title: "PlayAR",
            href: "",
            dates: "Oct 2023 - Present",
            description:
                "Created and developed a american football training software that utilized augmented reality to improve player safety and preformance on the field",
            technologies: [
                "Unity",
                "Blender",
                "XCode",
                "Lens Studio",
                "Snapchat Spectacles",
                "Meta Quest Pro",
            ],
            links: [
                {
                    type: "Pitch Deck",
                    href: "https://docs.google.com/presentation/d/1pbsgbrwc9KYLjBC6ZxLTzBz8PtyZjXXFJ-c1P15T4ng/edit?usp=sharing",
                    //icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/playar.jpg",
        },
        {
            title: "Drip",
            href: "",
            dates: "Oct 2022 - March 2023",
            active: true,
            description:
                "Designed and prototyped a water filter that used a sawdust material as the body and simple water filtration materials in order to create a affordable fully bio degradable water filter",
            technologies: [
                "Fusion 360",
            ],
            links: [
                {
                    type: "Pitch Deck",
                    href: "https://docs.google.com/presentation/d/1sjB9RvOxtJzkoUPoDK-bpkYN6qxqmXUwVFXHsULh0xM/edit?usp=sharing",
                    //icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/drip.jpg",
        },
        {
            title: "Grief Lift",
            href: "https://grieflift.org",
            dates: "June 2024 - Present",
            active: true,
            description:
                "Helped a start up design and develop a website for them to outreach to customers more easiely and create a secure system for users to privately talk with other people in the community in similar situations",
            technologies: [
                "Next.js",
                "Supabase",
                "Cloudflare"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://grieflift.org",
                    //icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/grief.jpg",
        },
    ],
    acitvites: [
        {
            title: "Technology Student Association",
            dates: "Sep 2021- Jun 2025",
            location: "Nation Wide",
            description:
                "Co-President of a chapter of 120+ students who participate in STEM based competions with over 80 diffrent events and 350k+ students competing nationwide",
            image:
                "https://tsaweb.org/ResourcePackages/Bootstrap5/assets/dist/img/TSA_logo.png",
            links: [],
        },
        {
            title: "Computer Science Club",
            dates: "Sep 2021- Jun 2025",
            location: "Pine Crest School",
            description:
                "Participated in various Hackathons each year that are composed of multiple challenges ranging in difficulty, participated in the Bebras challenge as well as ACSL while in the club. Was 1 of 5 students chosen to work on the pepper AI robot to develop new applications for it.",
            image:
                "https://asset-cdn.schoology.com/system/files/imagecache/profile_reg/grouplogos/logo-322671471_561a9968647b4.gif?1536347591",
            links: [],
        },
    ],
} as const;
