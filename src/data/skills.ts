type Skill = {
    name: string;
    highlighted?: boolean;
};

export type SkillGroup = {
    category: string;
    skills: Skill[];
};

export const skills: SkillGroup[] = [
    {
        category: "api",
        skills: [
            { name: "JWT" },
            { name: "OAuth" },
            { name: "REST", highlighted: true },
            { name: "Swagger" },
            { name: "WebSockets", highlighted: true },
        ],
    },
    {
        category: "backend",
        skills: [
            { name: "Express", highlighted: true },
            { name: "Fastify" },
            { name: "NestJS", highlighted: true },
            { name: "Node.js", highlighted: true },
            { name: "Ruby on Rails" },
            { name: "Spring Boot" },
        ],
    },
    {
        category: "cloud",
        skills: [
            { name: "AWS CloudWatch" },
            { name: "AWS EC2" },
            { name: "AWS Lambda", highlighted: true },
            { name: "AWS RDS", highlighted: true },
            { name: "AWS S3", highlighted: true },
            { name: "Cloudflare" },
        ],
    },
    {
        category: "databases",
        skills: [
            { name: "MongoDB" },
            { name: "MySQL", highlighted: true },
            { name: "PostgreSQL", highlighted: true },
            { name: "Prisma" },
            { name: "Redis", highlighted: true },
            { name: "SQLite" },
            { name: "TypeORM", highlighted: true },
        ],
    },
    {
        category: "devops",
        skills: [
            { name: "Docker", highlighted: true },
            { name: "GitHub Actions" },
            { name: "GitLab CI/CD" },
            { name: "Kubernetes" },
            { name: "Linux", highlighted: true },
        ],
    },
    {
        category: "frontend",
        skills: [
            { name: "Astro" },
            { name: "CSS" },
            { name: "HTML" },
            { name: "React", highlighted: true },
            { name: "Tailwind CSS" },
        ],
    },
    {
        category: "languages",
        skills: [
            { name: "Bash" },
            { name: "Java" },
            { name: "JavaScript", highlighted: true },
            { name: "Python" },
            { name: "Ruby" },
            { name: "SQL" },
            { name: "TypeScript", highlighted: true },
        ],
    },
    {
        category: "practices",
        skills: [
            { name: "Kanban" },
            { name: "OOP", highlighted: true },
            { name: "Scrum" },
            { name: "Software Architecture", highlighted: true },
            { name: "TDD", highlighted: true },
        ],
    },
    {
        category: "testing",
        skills: [
            { name: "E2E Testing" },
            { name: "Integration Testing" },
            { name: "Jest", highlighted: true },
            { name: "RSpec" },
            { name: "Unit Testing" },
        ],
    },
    {
        category: "tools",
        skills: [
            { name: "ESLint" },
            { name: "Git", highlighted: true },
            { name: "GitHub", highlighted: true },
            { name: "GitLab", highlighted: true },
            { name: "npm", highlighted: true },
            { name: "Postman" },
            { name: "Prettier" },
            { name: "Zod" },
        ],
    },
];
