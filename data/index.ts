export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export type WorkExperience = {
  id: number;
  role: string;
  company: string;
  location: string;
  time: string;
  summary: string;
  stack: string[];
  link?: string; // optional "learn more" link; company name becomes clickable when set
  points: string[];
};

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    role: "Founder",
    company: "Racket Vision",
    location: "Chandler, AZ",
    time: "Mar 2026 – Present",
    summary:
      "Founded a B2B SaaS that replaces pen and paper demo tracking at tennis and pickleball shops. Live in production with 230+ customers, 700+ rackets tracked, and $18K+ in demo deposits and racket sales.",
    stack: ["Next.js", "TypeScript", "Supabase", "AWS", "Stripe"],
    link: "https://racket-vision.com",
    points: [
      "Founded a B2B SaaS that replaces pen and paper demo tracking at tennis and pickleball pro shops, running in production with 230+ customers and $18K+ in demo deposits and racket sales through Stripe checkout.",
      "Architected and shipped the full stack platform with Next.js, TypeScript, Supabase, and AWS Amplify, cutting demo check in from multi minute paper logging to a 12 second flow and tracking 700+ rackets and paddles on a traffic light dashboard.",
      "Automated overdue demo recovery with AWS EventBridge schedulers, SNS text reminders, and Stripe late fee billing, removing manual front desk chase work and enabling 5 minute staff onboarding with no customer app required.",
    ],
  },
  {
    id: 2,
    role: "Technical Officer",
    company: "The AI Society at ASU",
    location: "Tempe, AZ",
    time: "Aug 2025 – May 2026",
    summary:
      "Led AI and machine learning workshops and technical lectures for 100+ students, mentoring members on AI projects and initiatives.",
    stack: ["React", "Node.js"],
    points: [
      "Designed and led AI workshops on machine learning and neural networks for 300+ students.",
      "Built internal React and Node.js tools that automated event registration and workshop coordination, scaling the club's capacity by 3x.",
    ],
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "Medtronic",
    location: "Tempe, AZ",
    time: "Jun 2025 – Aug 2025",
    summary:
      "Built a manufacturing analytics dashboard across five facilities with sub 2 second traceability search over 1M+ records.",
    stack: ["Next.js", "TypeScript", "C#", "Oracle"],
    points: [
      "Built a full stack manufacturing analytics and quality control dashboard for five international facilities using Next.js, TypeScript, C#, and Oracle, cutting manual error investigation effort by over 90 percent.",
      "Implemented traceability search across 1M+ Oracle test and log records with sub 2 second lookups, cutting investigation time by 70 percent.",
      "Automated monitoring of 10,000+ daily test files with alert thresholds for load failures, improving incident response to data load issues by 85 percent.",
    ],
  },
  {
    id: 4,
    role: "Volunteer Software Developer",
    company: "Opportunity Hack",
    location: "Remote",
    time: "Jul 2025",
    summary:
      "Engineered a scholarship platform for 1,200+ students across 15 nonprofits, processing $70K+ in scholarships.",
    stack: ["Next.js", "React", "MongoDB"],
    points: [
      "Engineered a scholarship management platform serving 1,200+ students across 15 nonprofits using Next.js, React, and MongoDB, processing over $70,000 in scholarships.",
      "Built an admin dashboard with role based access control, CRUD workflows, and analytics exports that cut admin effort by 5 hours per week.",
    ],
  },
  {
    id: 5,
    role: "Full Stack Engineer",
    company: "DevX Solutions",
    location: "Tempe, AZ",
    time: "Jan 2025 – Jun 2025",
    summary:
      "Founding engineer building custom software solutions for small businesses, from prototyping to shipping web and mobile apps for 5+ clients on React, Node, and Supabase.",
    stack: ["React", "Node.js", "Supabase", "AWS"],
    points: [
      "Worked as one of four founding engineers, running client discovery and weekly feedback sessions, then building and deploying web and mobile apps for 5+ clients using React, Node.js, TypeScript, Supabase, and AWS, including a booking platform with 50+ active users.",
      "Designed PostgreSQL and Supabase schemas with row level security and JWT based access control for a SmartMoving integrated moving quote calculator.",
    ],
  },
  {
    id: 6,
    role: "Software Developer Intern",
    company: "GBCS Group",
    location: "Remote",
    time: "Jan 2024 – May 2024",
    summary:
      "Built an HR onboarding dashboard and tuned PostgreSQL queries down to 10 ms.",
    stack: ["React", "Next.js", "PostgreSQL", "Docker"],
    points: [
      "Built an HR onboarding dashboard with React, Next.js, and Tailwind CSS, and set up automated testing and deployment with GitHub Actions and Docker.",
      "Tuned PostgreSQL performance with Prisma ORM through schema refinement, query tuning, and indexing, bringing key query time down to 10 ms.",
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  img?: string;
};

export const projects: Project[] = [
  {
    id: 4,
    title: "ChessMate Bot",
    description:
      "An autonomous chess playing robot on a 6 DOF arm using Python, ikpy inverse kinematics, and Stockfish, with an ArUco and OpenCV vision pipeline that detects moves and plays them at under 5 second latency and over 98 percent pick and place success.",
    tags: ["Python", "OpenCV", "Stockfish", "Robotics"],
    img: "/chessmate.jpeg",
    link: "https://github.com/anshulv12/chess_bot",
  },
  {
    id: 1,
    title: "PhishGuard 360",
    description:
      "A three layer AI phishing defense built in 24 hours that won $1,000 at the Cyber 360° Spark Challenge. Detects malicious URLs with 94 percent accuracy across 50,000+ samples using a fine tuned DistilBERT classifier at 92 percent F1, plus a RAG based LLM investigator that writes threat reports.",
    tags: ["Next.js", "Python", "Flask", "DistilBERT"],
    img: "/phishguard.png",
    link: "https://github.com/ashworks1706/PhisGuard-360",
  },
  {
    id: 2,
    title: "Ask the CPA Guy",
    description:
      "A web app where anyone can submit accounting and QuickBooks questions and get clear answers from a certified CPA, no account needed. Every question is personally reviewed and the answer is sent to your inbox, with AI assisted drafting to speed up the turnaround.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    img: "/cpa-guy.png",
    link: "https://github.com/gbchill/ask-the-cpa-guy",
  },
  {
    id: 3,
    title: "RISC-V Emulator",
    description:
      "Worked on a 5 person Agile capstone team with ASU's School of Computing building a web based RISC-V emulator inside the VIPLE environment, plus a MIPS to RISC-V conversion service that lets students compare the two architectures side by side to learn computer architecture.",
    tags: ["C#", ".NET", "Compilers", "Education"],
    img: "/riscv.jpg",
    link: "https://showcase.asucapstone.com/survey/10635",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/gbchill",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://linkedin.com/in/george-badu",
  },
];
