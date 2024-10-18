export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },

];

export const gridItems = [
  {
    id: 1,
    title: "Committed to Delivering Impactful Solutions ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about Technology and Development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building Full-Stack Applications",
    description: "In development",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Looking to Connect on an Exciting Project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Pediatric Office Automation System",
    des: "Developed a Java application for streamlining patient check-ins, health record management, and prescription tracking using Java, SQL, and Spring.",
    img: "p1.png", // Replace with the relevant image
    iconLists: ["java.svg","sqlite.svg"],
    link: "https://github.com/IWantToHelp/CSE360-Group-Project",
  },
  {
    id: 2,
    title: "Automated Email Responder for Collaboration Requests",
    des: "Created a Python script using spaCy to automate email responses for collaboration requests, enhancing communication efficiency.",
    img: "p2.png", // Replace with the relevant image
    iconLists: ["python.svg", "spacy.svg"],
    link: "https://github.com/gbchill/Automated-Email-Responder-for-Collaboration-Requests",
  },
  {
    id: 3,
    title: "Hash and Graph Algorithm Toolkit",
    des: "Developed a toolkit that combines custom hash functions with Dijkstra's shortest path algorithm, implemented in C++.",
    img: "p3.png", // Replace with the relevant image
    iconLists: ["isocpp.svg"],
    link: "https://github.com/gbchill/Hash-and-Graph-Algorithm-Toolkit",
  },
  {
      "id": 4,
      "title": "Devils Unite",
      "des": "Developing a mobile application that serves as a social media platform for Arizona State University students, allowing them to connect through various events, meetups, and clubs. The app facilitates community building by enabling students to discover, join, and organize activities, fostering a more engaging and connected campus experience.",
      "img": "/p4.png", // Replace with the relevant image
      iconLists: ["/react-native.svg", "/firebase.svg", "/figma.svg"],
      "link": "https://github.com/gbchill/Devils-Unite"
    }    
];



// data.js or your relevant data file

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    time: "January 2024 - May 2024",
    desc: "Built an interactive HR onboarding dashboard using React, Tailwind CSS, Next.js, and integrated backend data retrieval with API Fetch.",
    className: "md:col-span-2",
    thumbnail: "/gbcsgroup.jpeg",
},
  {
    id: 2,
    title: "Freelance Full-Stack Developer",
    time: "September 2022 - Present",
    desc: "Designed and developed full-stack web applications using React, Node.js, and MongoDB, delivering scalable and robust solutions for clients.",
    className: "md:col-span-2",
    thumbnail: "/upwork.png",
  },
];




export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/gbchill" // Your GitHub profile URL
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://linkedin.com/in/george-badu" // Your LinkedIn profile URL
  },
];
