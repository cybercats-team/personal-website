const allSections = [
    {
      id: "expertise",
      title: "EXPERTISE",
      items: [
        "21 years of experience as a software engineer",
        "16 years as full-stack developer at Web",
        "11 years as team lead/architect",
        "9 years as mobile developer (hybrid/RN/native)",
        "3.5 years as blockchain developer (Ethereum)",
      ],
    },
    {
      id: "tech-stacks",
      title: "TECH STACKS",
      items: [
        "Full-stack: MEAN / MERN => since 2015",
        "Frontend: Angular => since 2015",
        "Frontend: React + ReactRouter/NextJS/Tanstack + Redux/Zustand/Jotai + Axios/Fetch/SWR => since 2016",
        "Backend: NodeJS + MongoDB/MySQL/PgSQL + ExpressJS/AdonisJS => since 2015",
        "Mobile: ReactNative + ReactNavigation + Undux/Jotai + Axios/Fetch => since 2017",
        "Blockchain: React + EthersJS + Tor.US/WalletConnect + LiFi + Textile/Ceramic/IPFS => since 2020",
      ],
    },
    {
      id: "tech-skills",
      title: "TECH SKILLS",
      items: [
        "Languages: C/C++, JavaScript/TypeScript, Java, Swift, Bash/PowerShell/Python scripting",
        "Methodology: OOP, FP, DRY/KISS, GOF patterns, MVC, MVP, BDD, TDD",
        "Architecture: SOLID",
        "SQL DBMS: MySQL, PgSQL, Oracle",
        "noSQL DBMS: MongoDB, Redis, IndexedDB (Dexie/ThreadDB)",
        "Testing: Jest, GTest, Cypress",
        "DevOPS, CI/CI: Heroku, Netlify, Vercel, Github Actions",
      ],
    },
    {
      id: "architecture",
      title: "ARCHITECTURE",
      items: [
        "Best practices suggested by certain framework/library/technology stack",
        "For OOP-based frameworks: SOLID at design, GoF patterns at implementation",
        "Stick to Thinking in React/Rules of Hooks/Advanced Hooks for React projects",
        "Modular/extensible architecture",
        "Highload optimization (UI / server side)",
        "Business objectives analysis & optimal solutions research",
      ],
    },
    {
      id: "leadership",
      title: "LEADERSHIP",
      items: [
        "Small teams (up to 5-6 people) management experience",
        "Up to 3 projects in rotation (at same time).",
        "Communication, aligning responsibilities with different teams (e.g. QA, design, protocol, DevOps)",
        "Describing & delegating tasks over the team",
        "Code review & suggestions",
        "Mentorship: lectures & standups, presenting new approaches/new technologies, team training",
        "Team growth is my main goal as a leader",
      ],
    },
    {
      id: "expectations",
      title: "EXPECTATIONS",
      items: [
        "Team lead/architect/senior developer role at full-time job",
        "Tech consultant/auditor/senior developer role at part-time job",
        "Remote job only",
        "$4K minimal gross revenue monthly",
      ],
    },
  ];

  export type SectionPoint = {
    id: number;
    content: string;
  };

  export type SectionType = {
    id: string;
    title: string;
    points: SectionPoint[];
  };

  export const getSections = (): SectionType[] => allSections.map(({ id, title, items }) => ({
    id, 
    title,
    points: items.map((item, index) => ({ id: index + 1, content: item }))
  }));