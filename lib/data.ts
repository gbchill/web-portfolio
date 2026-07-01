import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C#", "Java", "C/C++"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "ASP.NET Core", "FastAPI", "Express.js"],
  },
  {
    label: "ML & Data",
    items: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "pandas",
      "NumPy",
      "OpenCV",
      "Hugging Face",
      "Keras",
    ],
  },
  {
    label: "Infrastructure & Databases",
    items: [
      "AWS",
      "Docker",
      "Git",
      "GitHub Actions",
      "Linux",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
    ],
  },
] as const;

export type Certification = { name: string; issuer?: string; link?: string };

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect, Associate",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/e9049b68-2f21-43ad-a663-e24f2144bb8d/linked_in_profile",
  },
  {
    name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI",
    link: "https://www.coursera.org/account/accomplishments/verify/R2TF9E18LJKH",
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    link: "https://www.coursera.org/account/accomplishments/verify/12LSN10K0WVO",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    link: "https://www.coursera.org/account/accomplishments/verify/14LOLLGOEJDN",
  },
  {
    name: "AI Model Development (Expert)",
    issuer: "The GAME School at ASU",
    link: "https://credid.asu.edu/public/awards/2f60e036-9864-45cd-803d-0124e702e98b?email=gbadules%40asu.edu",
  },
];

export const education = {
  degree: "B.S. in Computer Science",
  school: "Arizona State University, Ira A. Fulton Schools of Engineering",
  detail: "Dean's List · GPA 3.85",
  time: "Aug 2022 – May 2026",
} as const;