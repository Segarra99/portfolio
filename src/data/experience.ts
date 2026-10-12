export type Experience = {
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
};

export const experiences: Experience[] = [
    {
        company: "Critical TechWorks (via Devoteam)",
        role: "Software Engineer",
        period: "Since 2025",
        location: "Lisbon",
        bullets: [
            "Joined the Connected Music project: a Spotify integration for BMW and Rolls-Royce in-vehicle infotainment systems.",
            "Release process and deployment pipelines, coordinating releases to production.",
            "TypeScript in a Kanban-based environment, working with teams and stakeholders across automotive and tech.",
        ],
    },
    {
        company: "PixBet",
        role: "Backend Team Lead",
        period: "2024 - 2025",
        location: "Lisbon",
        bullets: [
            "Led the backend team and planned sprints with the CTO.",
            "Fully responsible for production deployment and cloud infrastructure.",
            "Kept test coverage above 90%.",
        ],
    },
    {
        company: "PixBet",
        role: "Backend Engineer",
        period: "2023 - 2024",
        location: "Lisbon",
        bullets: [
            "Designed the Flabet backend with NestJS, PostgreSQL and AWS.",
            "Handled database migrations across environments.",
        ],
    },
    {
        company: "Ironhack",
        role: "Web Development Bootcamp",
        period: "2023",
        location: "Lisbon",
        bullets: ["Intensive full-stack JavaScript program."],
    },
];
