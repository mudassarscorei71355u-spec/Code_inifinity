// Milestone data with learning paths
const milestones = [
    {
        title: "Web Foundations: HTML, CSS & JavaScript Basics",
        topics: [
            "HTML5 semantic elements and structure",
            "CSS3 fundamentals, Flexbox, and Grid",
            "JavaScript basics: variables, functions, loops",
            "DOM manipulation and events",
            "Responsive design principles",
            "Basic form validation"
        ],
        icon: "html5",
        path: {
            title: "Learning Path",
            items: ["MDN Web Docs", "FreeCodeCamp", "Codecademy"]
        }
    },
    {
        title: "Modern JavaScript (ES6+) Mastery",
        topics: [
            "Arrow functions, template literals",
            "Destructuring and spread operator",
            "Modules and imports/exports",
            "Promises and async/await",
            "Fetch API and error handling",
            "Modern array methods"
        ],
        icon: "javascript",
        path: {
            title: "Resources",
            items: ["JavaScript.info", "ES6 Features", "MDN JavaScript"]
        }
    },
    {
        title: "Advanced JavaScript Concepts",
        topics: [
            "Closures and scope chain",
            "Prototypes and inheritance",
            "Event loop and concurrency",
            "Memory management",
            "Design patterns",
            "Performance optimization"
        ],
        icon: "javascript",
        path: {
            title: "Advanced Topics",
            items: ["You Don't Know JS", "Patterns.dev", "JavaScript Design Patterns"]
        }
    },
    {
        title: "TypeScript Fundamentals",
        topics: [
            "Type annotations and inference",
            "Interfaces and types",
            "Generics and utility types",
            "Type guards and narrowing",
            "TSConfig configuration",
            "Integration with JavaScript"
        ],
        icon: "typescript",
        path: {
            title: "TypeScript Path",
            items: ["TypeScript Handbook", "Total TypeScript", "TypeScript Exercises"]
        }
    },
    {
        title: "React.js with TypeScript",
        topics: [
            "Components and JSX/TSX",
            "Props and state management",
            "Hooks (useState, useEffect, custom)",
            "Event handling",
            "Conditional rendering",
            "Component lifecycle"
        ],
        icon: "react",
        path: {
            title: "React Learning",
            items: ["React Docs", "React TypeScript Cheatsheet", "React Patterns"]
        }
    },
    {
        title: "Advanced React Patterns",
        topics: [
            "Context API and providers",
            "Higher-order components",
            "Render props pattern",
            "Custom hooks",
            "Performance optimization",
            "Error boundaries"
        ],
        icon: "react",
        path: {
            title: "Advanced React",
            items: ["React Beta Docs", "Advanced React Patterns", "React Testing"]
        }
    },
    {
        title: "Next.js 14 App Router",
        topics: [
            "App Router architecture",
            "Server and Client Components",
            "File-based routing",
            "Data fetching patterns",
            "API routes",
            "Middleware and authentication"
        ],
        icon: "nextjs",
        path: {
            title: "Next.js Resources",
            items: ["Next.js Docs", "Next.js Learn", "Vercel Examples"]
        }
    },
    {
        title: "State Management (Redux/Zustand)",
        topics: [
            "Redux toolkit setup",
            "Actions and reducers",
            "Middleware configuration",
            "Zustand for simple state",
            "Context vs Redux",
            "State normalization"
        ],
        icon: "redux",
        path: {
            title: "State Management",
            items: ["Redux Toolkit", "Zustand", "React Query"]
        }
    },
    {
        title: "Node.js & Express Backend",
        topics: [
            "Node.js runtime environment",
            "Express.js framework",
            "RESTful API design",
            "Middleware implementation",
            "Error handling",
            "Security best practices"
        ],
        icon: "nodejs",
        path: {
            title: "Backend Path",
            items: ["Node.js Docs", "Express Guide", "REST API Tutorial"]
        }
    },
    {
        title: "Database Fundamentals",
        topics: [
            "SQL vs NoSQL databases",
            "MongoDB with Mongoose",
            "PostgreSQL with Prisma",
            "Database design",
            "Relationships and queries",
            "Indexing and optimization"
        ],
        icon: "database",
        path: {
            title: "Database Learning",
            items: ["MongoDB University", "PostgreSQL Tutorial", "Prisma Docs"]
        }
    },
    {
        title: "Authentication & Authorization",
        topics: [
            "JWT tokens",
            "OAuth 2.0 and OpenID Connect",
            "Session management",
            "Password hashing",
            "Role-based access control",
            "Social authentication"
        ],
        icon: "auth",
        path: {
            title: "Security Path",
            items: ["OAuth.net", "JWT.io", "Auth0 Docs"]
        }
    },
    {
        title: "API Development & Documentation",
        topics: [
            "REST API best practices",
            "GraphQL with Apollo",
            "API versioning",
            "Rate limiting",
            "OpenAPI/Swagger",
            "API testing"
        ],
        icon: "api",
        path: {
            title: "API Resources",
            items: ["REST API Tutorial", "GraphQL.org", "OpenAPI Specification"]
        }
    },
    {
        title: "Testing Strategies",
        topics: [
            "Unit testing with Jest",
            "Integration testing",
            "E2E testing with Cypress",
            "Test-driven development",
            "Mocking and fixtures",
            "Testing best practices"
        ],
        icon: "testing",
        path: {
            title: "Testing Tools",
            items: ["Jest Docs", "Cypress.io", "Testing Library"]
        }
    },
    {
        title: "DevOps & Deployment",
        topics: [
            "Docker containerization",
            "CI/CD pipelines",
            "Cloud deployment (Vercel, AWS)",
            "Environment management",
            "Monitoring and logging",
            "Performance optimization"
        ],
        icon: "devops",
        path: {
            title: "DevOps Path",
            items: ["Docker Docs", "GitHub Actions", "Vercel Deployment"]
        }
    },
    {
        title: "Advanced CSS & Styling",
        topics: [
            "CSS-in-JS (Styled-components)",
            "Tailwind CSS advanced",
            "CSS architecture (BEM, SMACSS)",
            "Animation and transitions",
            "CSS custom properties",
            "Design systems"
        ],
        icon: "css",
        path: {
            title: "CSS Resources",
            items: ["CSS-Tricks", "Tailwind CSS", "Styled Components"]
        }
    },
    {
        title: "Performance Optimization",
        topics: [
            "Bundle analysis and optimization",
            "Lazy loading and code splitting",
            "Caching strategies",
            "Image optimization",
            "Core Web Vitals",
            "Performance monitoring"
        ],
        icon: "performance",
        path: {
            title: "Performance Tools",
            items: ["WebPageTest", "Lighthouse", "Core Web Vitals"]
        }
    },
    {
        title: "Web Security",
        topics: [
            "OWASP Top 10",
            "XSS and CSRF protection",
            "Content Security Policy",
            "HTTPS and SSL/TLS",
            "Security headers",
            "Vulnerability assessment"
        ],
        icon: "security",
        path: {
            title: "Security Resources",
            items: ["OWASP", "Security Headers", "Web Security Basics"]
        }
    },
    {
        title: "Progressive Web Apps (PWA)",
        topics: [
            "Service workers",
            "Web app manifests",
            "Offline functionality",
            "Push notifications",
            "App-like experience",
            "PWA deployment"
        ],
        icon: "pwa",
        path: {
            title: "PWA Learning",
            items: ["PWA Basics", "Workbox", "Web Dev PWA"]
        }
    },
    {
        title: "Mobile Development",
        topics: [
            "React Native fundamentals",
            "Cross-platform development",
            "Mobile-specific UI/UX",
            "Native modules",
            "App store deployment",
            "Mobile performance"
        ],
        icon: "mobile",
        path: {
            title: "Mobile Path",
            items: ["React Native", "Expo", "Mobile Patterns"]
        }
    },
    {
        title: "Advanced Architecture",
        topics: [
            "Microservices architecture",
            "Monorepo setup",
            "Serverless functions",
            "Event-driven architecture",
            "Message queues",
            "System design principles"
        ],
        icon: "architecture",
        path: {
            title: "Architecture Resources",
            items: ["Microservices.io", "Monorepo Tools", "System Design Primer"]
        }
    },
    {
        title: "Soft Skills & Career",
        topics: [
            "Agile methodologies",
            "Code review practices",
            "Technical communication",
            "Project management",
            "Interview preparation",
            "Continuous learning"
        ],
        icon: "career",
        path: {
            title: "Career Development",
            items: ["Tech Interviews", "Agile Manifesto", "Career Growth"]
        }
    },
    {
        title: "Real-world Projects",
        topics: [
            "Portfolio development",
            "Open source contributions",
            "Side projects",
            "Code documentation",
            "Team collaboration",
            "Production deployment"
        ],
        icon: "projects",
        path: {
            title: "Project Ideas",
            items: ["Full-stack Apps", "Open Source", "Portfolio Projects"]
        }
    }
];

// SVG icons for all technologies
const icons = {
    html5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 361"><path fill="#e44d26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"/><path fill="#f16529" d="m128 337.95l84.417-23.403l19.86-222.49H128z"/><path fill="#ebebeb" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"/><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"/><path fill="#fff" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"/></svg>`,
    javascript: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#f7df1e" d="M0 0h256v256H0z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg>`,
    typescript: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#3178c6" d="M128 0c70.692 0 128 57.308 128 128s-57.308 128-128 128S0 198.692 0 128S57.308 0 128 0"/><path fill="#fff" d="M140.463 160.712v25.03q6.025 3.13 14.25 4.694q8.226 1.564 17.34 1.564q8.882 0 16.876-1.721q7.994-1.72 14.018-5.671q6.024-3.95 9.539-10.325T216 158.522q0-6.805-2.008-11.929a27.9 27.9 0 0 0-5.793-9.112q-3.785-3.99-9.075-7.157q-5.29-3.168-11.933-5.984q-4.866-2.034-8.728-3.95q-3.86-1.916-6.565-3.911q-2.703-1.995-4.17-4.224t-1.468-5.045q0-2.581 1.313-4.654q1.314-2.073 3.707-3.56q2.395-1.486 5.87-2.307q3.476-.82 7.724-.821q3.09 0 6.526.47q3.438.468 6.913 1.446a48 48 0 0 1 6.758 2.464a37 37 0 0 1 6.063 3.442V80.302q-5.638-2.19-12.319-3.246Q192.135 76 183.484 76q-8.805 0-16.683 1.916q-7.878 1.917-13.864 5.984t-9.461 10.364T140 109.322q0 11.185 6.372 19.085t19.348 13.376a260 260 0 0 1 9.5 4.146q4.401 2.033 7.607 4.223q3.205 2.191 5.059 4.772t1.854 5.866a9.06 9.06 0 0 1-1.159 4.498q-1.158 2.073-3.514 3.598t-5.87 2.386q-3.515.86-8.225.86q-8.033 0-15.911-2.855t-14.598-8.565m-42.752-62.17H130V78H40v20.541h32.132V190H97.71z"/></svg>`,
    react: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 228"><path fill="#00d8ff" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.920 6.314c21.758 18.722 43.246 26.282 56.540 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.520c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.140m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.150a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.940M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.760-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.180M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.290c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.970-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.520c-7.422 1.694-15.436 3.058-23.880 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.890-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.310-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.540a330 330 0 0 1-11 20.722m22.560-122.124c8.572 4.944 11.906 24.881 6.520 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.230-5.408c-7.034-10.017-14.323-19.124-21.640-27.008a161 161 0 0 1 5.888-5.400c18.900-16.447 36.564-22.941 44.612-18.300M128 90.808c12.625 0 22.860 10.235 22.860 22.860s-10.235 22.860-22.860 22.860s-22.860-10.235-22.860-22.860s10.235-22.860 22.860-22.860"/></svg>`,
    nextjs: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="a" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><circle id="c" cx="128" cy="128" r="128"/></defs><mask id="d" fill="#fff"><use href="#c"/></mask><g mask="url(#d)"><circle cx="128" cy="128" r="128"/><path fill="url(#a)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"/><path fill="url(#b)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg>`,
    nodejs: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 289"><path fill="#539e43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.310c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571"/></svg>`,
    redux: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 205"><path fill="#764abc" d="M166.667 135.989c-14.933 0-27.04-12.107-27.04-27.04s12.107-27.04 27.04-27.04s27.04 12.107 27.04 27.04s-12.107 27.04-27.04 27.04m0-64.747c-20.821 0-37.707 16.886-37.707 37.707s16.886 37.707 37.707 37.707s37.707-16.886 37.707-37.707s-16.886-37.707-37.707-37.707"/><path fill="#764abc" d="M213.333 0H42.667C19.093 0 0 19.093 0 42.667v119.466C0 185.907 19.093 205 42.667 205h170.666C236.907 205 256 185.907 256 162.333V42.667C256 19.093 236.907 0 213.333 0m-46.666 176.013c-32.32 0-58.56-26.24-58.56-58.56s26.24-58.56 58.56-58.56s58.56 26.24 58.56 58.56s-26.24 58.56-58.56 58.56"/></svg>`,
    database: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm6 14c0 .55-2.69 2-6 2s-6-1.45-6-2v-3.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-5.55c-1.61.78-3.72 1.23-6 1.23s-4.39-.45-6-1.23V9.64c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23v1.81zM12 9c-4.42 0-8-1.79-8-4s3.58-4 8-4 8 1.79 8 4-3.58 4-8 4z"/></svg>`,
    auth: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8b5cf6"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`,
    api: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10b981"><path d="M13 13h-2V7h2v6zm0 4h-2v-2h2v2zm0 4h-2v-2h2v2z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>`,
    testing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
    devops: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
    css: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 361"><path fill="#264de4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z"/><path fill="#2965f1" d="m212.417 314.547l19.86-222.49H128V337.95z"/><path fill="#ebebeb" d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z"/><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z"/><path fill="#fff" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z"/></svg>`,
    performance: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#06b6d4"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`,
    security: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc2626"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`,
    pwa: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7c3aed"><path d="M19 1H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H5V4h14v16z"/><circle cx="12" cy="18" r="2"/></svg>`,
    mobile: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#059669"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/></svg>`,
    architecture: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d97706"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
    career: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8b5cf6"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    projects: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const roadmapContainer = document.querySelector('.roadmap-container');
    const timelineDots = document.getElementById('timelineDots');
    let currentMilestone = 0;
    let autoPlayInterval;

    // Create milestones and timeline dots
    milestones.forEach((milestone, index) => {
        // Create milestone element
        const milestoneEl = document.createElement('div');
        milestoneEl.className = 'milestone';
        milestoneEl.innerHTML = `
            <div class="milestone-content">
                <div class="milestone-header">
                    <div class="milestone-number">${index + 1}</div>
                    <h3 class="milestone-title">${milestone.title}</h3>
                </div>
                <ul class="milestone-topics">
                    ${milestone.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
                ${milestone.path ? `
                <div class="milestone-path">
                    <div class="path-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        ${milestone.path.title}
                    </div>
                    <div class="path-items">
                        ${milestone.path.items.map(item => `<span class="path-item">${item}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
            <div class="milestone-icon">
                ${icons[milestone.icon]}
            </div>
        `;
        roadmapContainer.appendChild(milestoneEl);
        
        // Create timeline dot
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        dot.dataset.index = index;
        timelineDots.appendChild(dot);
        
        // Add click event to dots
        dot.addEventListener('click', () => {
            currentMilestone = index;
            showMilestone(currentMilestone);
            updateDots();
        });
    });

    // Function to update progress
    function updateProgress() {
        const progress = document.getElementById('progress');
        const progressText = document.getElementById('progressText');
        const percentage = (currentMilestone / (milestones.length - 1)) * 100;
        progress.style.width = `${percentage}%`;
        progressText.textContent = `${currentMilestone + 1}/${milestones.length} Milestones`;
    }

    // Function to update timeline dots
    function updateDots() {
        const dots = document.querySelectorAll('.timeline-dot');
        dots.forEach((dot, index) => {
            if (index <= currentMilestone) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Position dots
        const milestonesEl = document.querySelectorAll('.milestone');
        milestonesEl.forEach((milestone, index) => {
            const dot = document.querySelector(`.timeline-dot[data-index="${index}"]`);
            const milestoneTop = milestone.offsetTop;
            const milestoneHeight = milestone.offsetHeight;
            const dotTop = milestoneTop + (milestoneHeight / 2);
            dot.style.top = `${dotTop}px`;
        });
    }

    // Function to show milestone
    function showMilestone(index) {
        const milestonesEl = document.querySelectorAll('.milestone');
        milestonesEl.forEach((milestone, i) => {
            if (i <= index) {
                milestone.classList.add('visible');
            } else {
                milestone.classList.remove('visible');
            }
        });
        updateProgress();
        updateDots();
        
        // Scroll to current milestone
        if (milestonesEl[index]) {
            milestonesEl[index].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    // Next milestone
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentMilestone < milestones.length - 1) {
            currentMilestone++;
            showMilestone(currentMilestone);
        }
    });

    // Previous milestone
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentMilestone > 0) {
            currentMilestone--;
            showMilestone(currentMilestone);
        }
    });

    // Auto play
    document.getElementById('autoBtn').addEventListener('click', () => {
        const autoIcon = document.getElementById('autoIcon');
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
            document.getElementById('autoBtn').textContent = 'Auto Play';
            autoIcon.textContent = '▶';
        } else {
            autoPlayInterval = setInterval(() => {
                if (currentMilestone < milestones.length - 1) {
                    currentMilestone++;
                    showMilestone(currentMilestone);
                } else {
                    clearInterval(autoPlayInterval);
                    autoPlayInterval = null;
                    document.getElementById('autoBtn').textContent = 'Auto Play';
                    autoIcon.textContent = '▶';
                }
            }, 2000);
            document.getElementById('autoBtn').textContent = 'Stop';
            autoIcon.textContent = '⏸';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (currentMilestone < milestones.length - 1) {
                currentMilestone++;
                showMilestone(currentMilestone);
            }
            e.preventDefault();
        } else if (e.key === 'ArrowLeft') {
            if (currentMilestone > 0) {
                currentMilestone--;
                showMilestone(currentMilestone);
            }
            e.preventDefault();
        }
    });

    // Initialize
    showMilestone(currentMilestone);
    
    // Update dots position after page load
    window.addEventListener('load', updateDots);
    window.addEventListener('resize', updateDots);

    // Scroll animation
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.milestone').forEach(milestone => {
        observer.observe(milestone);
    });
});