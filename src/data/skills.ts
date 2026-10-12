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
        category: "languages",
        skills: [
            { name: "TypeScript", highlighted: true },
            { name: "JavaScript", highlighted: true },
            { name: "Python" },
            { name: "Java" },
            { name: "Ruby" },
            { name: "SQL" },
        ],
    },
    {
        category: "frontend",
        skills: [
            { name: "React", highlighted: true },
            { name: "Astro" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "Tailwind CSS" },
        ],
    },
    {
        category: "backend",
        skills: [
            { name: "Node.js", highlighted: true },
            { name: "NestJS", highlighted: true },
            { name: "Express", highlighted: true },
            { name: "Fastify" },
            { name: "Ruby on Rails" },
            { name: "Spring Boot" },
        ],
    },
    {
        category: "databases",
        skills: [
            { name: "PostgreSQL", highlighted: true },
            { name: "MySQL", highlighted: true },
            { name: "MongoDB" },
            { name: "Redis", highlighted: true },
            { name: "TypeORM", highlighted: true },
            { name: "Prisma" },
        ],
    },
    {
        category: "api",
        skills: [
            { name: "REST", highlighted: true },
            { name: "WebSockets", highlighted: true },
            { name: "Swagger" },
            { name: "OAuth" },
            { name: "JWT" },
        ],
    },
    {
        category: "cloud",
        skills: [
            { name: "AWS Lambda", highlighted: true },
            { name: "AWS EC2" },
            { name: "AWS S3", highlighted: true },
            { name: "AWS CloudWatch" },
            { name: "AWS RDS", highlighted: true },
            { name: "Cloudflare" },
        ],
    },
    {
        category: "devops",
        skills: [
            { name: "Docker", highlighted: true },
            { name: "Linux", highlighted: true },
            { name: "GitHub Actions" },
            { name: "Gitlab CI/CD" },
            { name: "Kubernetes" },
        ],
    },
    {
        category: "tools",
        skills: [
            { name: "GitHub", highlighted: true },
            { name: "GitLab", highlighted: true },
            { name: "Postman" },
            { name: "npm", highlighted: true },
            { name: "ESLint" },
            { name: "Prettier" },
        ],
    },
    {
        category: "testing",
        skills: [
            { name: "Jest", highlighted: true },
            { name: "RSpec" },
            { name: "Unit Testing" },
            { name: "Integration Testing" },
            { name: "E2E Testing" },
        ],
    },
    {
        category: "practices",
        skills: [
            { name: "OOP", highlighted: true },
            { name: "TDD", highlighted: true },
            { name: "Software Architecture", highlighted: true },
            { name: "Scrum" },
            { name: "Kanban" },
        ],
    },
];
