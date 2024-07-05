import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  aws,
  liveSite,
  redis,
  kubernetes,
  reactjs,
  linux,
  nodejs,
  mongodb,
  git,
  pytorch,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  backEnd,
  cIcon,
  computerScience,
  carrent,
  jobify,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "3D Developer",
    icon: backend,
  },
  {
    title: "Computer Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Low-level C",
    icon: cIcon,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Personal Projects",
    icon: backEnd,
    iconBg: "#54c0da",
    date: "March 2020 - April 2021",
    points: [
      "Designed and developed several backend services and APIs using Node.js and Express.",
      "Collaborated with online communities and peers to refine project ideas and implementations.",
      "Implemented robust and scalable backend solutions, ensuring high performance and reliability.",
      "Engaged in self-directed learning to improve coding skills and stay updated with the latest trends.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Personal Projects",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Designed and developed several web applications using React.js and other frontend technologies.",
      "Collaborated with online communities and peers to refine project ideas and implementations.",
      "Implemented responsive design principles to ensure applications were usable across various devices.",
      "Engaged in self-directed learning to improve coding skills and stay updated with the latest trends.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance Work",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Built and maintained websites for small businesses and individuals, using modern web technologies.",
      "Collaborated with clients to understand their needs and deliver customized solutions.",
      "Implemented best practices for web development, focusing on performance, security, and accessibility.",
      "Received positive feedback from clients for delivering high-quality and user-friendly websites.",
    ],
  },
  {
    title: "Mathematics & Computer Science Student",
    company_name: "Kenyatta University",
    icon: computerScience,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Present",
    points: [
      "Pursuing a Bachelor's degree in Computer Science with a focus on software development.",
      "Completed coursework in data structures, algorithms, database management, and web development.",
      "Worked on academic projects including a web-based application for managing university resources.",
      "Participated in coding competitions and workshops to enhance programming skills.",
      "Collaborated with peers on group projects, demonstrating effective teamwork and communication.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kennedy's expertise and dedication helped us achieve our project goals faster than we imagined.",
    name: "John Doe",
    designation: "CEO",
    company: "XYZ Solutions",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Kennedy's innovative approach and problem-solving skills are unmatched in the industry.",
    name: "Jane Smith",
    designation: "Product Manager",
    company: "ABC Inc.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Working with Kennedy was a game-changer for our team. Their insights and expertise elevated our project to new heights.",
    name: "Michael Johnson",
    designation: "Marketing Director",
    company: "123 Tech Solutions",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Jobify",
    description:
      "Web application that allows users to manage, track their job applications online, application status, and important dates, ensuring they stay organized in their job search.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobify,
    source_code_link: "https://github.com/",
    live_demo_link: "https://jobify-live.onrender.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
