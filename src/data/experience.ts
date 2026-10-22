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
            "Developed and maintained CMusic, a Spotify integration embedded in BMW and Rolls-Royce infotainment systems.",
            "Owned the software release process, managing deployment pipelines and coordinating production releases.",
            "Maintained a shared npm package used by multiple applications, ensuring functionality and compatibility across dependent projects.",
            "Developed Python automation scripts to streamline development workflows and routine operations.",
        ],
    },
    {
        company: "PixBet",
        role: "Backend Team Lead",
        period: "2024 - 2025",
        location: "Lisbon",
        bullets: [
            "Led a team of 4 developers, overseeing task allocation, code reviews, technical guidance, and sprint planning with the CTO.",
            "Owned AWS infrastructure and production delivery, from environment configuration to deployments.",
            "Led the transition from a monolithic backend towards a microservices architecture.",
            "Coordinated backend, frontend, design, and QA teams to launch the platform within 6 months.",
            "Developed a customizable website backed by a backoffice, allowing content and configuration changes without code deployments.",
        ],
    },
    {
        company: "PixBet",
        role: "Backend Engineer",
        period: "2023 - 2024",
        location: "Lisbon",
        bullets: [
            "Designed and built Flabet, Flamengo FC's iGaming platform backend from scratch using TypeScript, NestJS, PostgreSQL, and AWS.",
            "Integrated external providers for casino games, sportsbook, payments, and authentication, including facial recognition and two-factor authentication.",
            "Implemented idempotency and concurrency safeguards to prevent duplicate transactions and race conditions in account operations.",
            "Designed database schemas and managed migrations to support evolving platform requirements across development and production environments.",
            "Optimized PostgreSQL queries and database access patterns to improve endpoint performance and efficiency.",
        ],
    },
    {
        company: "Ironhack",
        role: "Web Development Bootcamp",
        period: "2023",
        location: "Lisbon",
        bullets: [
            "Completed an intensive full-stack JavaScript program covering frontend and backend development, databases, and software engineering practices.",
        ],
    },
];
