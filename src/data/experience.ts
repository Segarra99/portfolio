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
            "Worked in a TypeScript codebase within a Kanban workflow, collaborating with cross-functional teams across the automotive domain.",
            "Managed an npm package consumed by multiple applications, maintaining its functionality and compatibility across dependent projects.",
            "Developed Python automation scripts to simplify development workflows and routine operations.",
        ],
    },
    {
        company: "PixBet",
        role: "Backend Team Lead",
        period: "2024 - 2025",
        location: "Lisbon",
        bullets: [
            "Led a team of 4 developers, coordinating task allocation, code reviews, technical guidance, and sprint planning with the CTO.",
            "Owned the platform's AWS infrastructure and production delivery, from environment configuration to deployments.",
            "Led the transition from a monolithic backend towards a microservices architecture.",
            "Coordinated delivery across backend, frontend, design, and QA to launch the platform within 6 months.",
            "Implemented idempotency and concurrency safeguards to prevent duplicate transactions and race conditions in account operations.",
            "Implemented scheduled jobs for government compliance reporting and automated casino game catalogue synchronization with external providers.",
            "Configured PostgreSQL read replicas to offload read traffic from the primary database, covering user-facing queries and scheduled workloads.",
        ],
    },
    {
        company: "PixBet",
        role: "Backend Engineer",
        period: "2023 - 2024",
        location: "Lisbon",
        bullets: [
            "Designed and built Flabet, Flamengo FC's iGaming platform backend from scratch using TypeScript, NestJS, PostgreSQL, and AWS.",
            "Designed database schemas, entity models, and REST APIs to support the platform's core functionality.",
            "Integrated external providers for casino games, sportsbook, payments, and authentication, including facial recognition and two-factor authentication.",
            "Developed a customizable website backed by a backoffice, enabling site content and configuration to be managed without code changes.",
            "Managed database schema evolution and migrations across environments, including production releases.",
            "Optimized PostgreSQL queries and database access patterns to improve endpoint performance.",
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
