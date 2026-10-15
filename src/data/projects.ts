export type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    demo?: string;
};

export const projects: Project[] = [
    {
        title: "Flabet",
        description:
            "Backend for Flamengo FC's iGaming platform. Payments, sportsbook, casino games, facial-recognition auth and 2FA. Shipped in 6 months.",
        image: "images/projects/flabet.png",
        technologies: [
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "AWS",
            "Docker",
            "Redis",
            "GitLab",
            "Scrum",
            "Swagger",
        ],
    },
    {
        title: "Connected Music",
        description:
            "Spotify integration inside BMW and Rolls-Royce infotainment systems. Owned releases and deployment pipelines.",
        image: "images/projects/connected-music.png",
        technologies: ["TypeScript", "GitHub", "Python", "Linux", "Kanban"],
    },
    {
        title: "Trip Planner",
        description:
            "A web app to plan trips. It generates a route based on the trip's origin and destination, as well as types and number of points of interest in the way.",
        image: "images/projects/trip-planner.png",
        technologies: [
            "Ruby",
            "Ruby on Rails",
            "Swagger",
            "PostgreSQL",
            "PostGIS",
        ],
        github: "https://www.github.com/segarra99/trip-planner.git",
    },
];
