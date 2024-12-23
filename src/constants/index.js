import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Kunt kanfeker bali ma kaynch tariqa bach n3mlu website jmil b7al l'product dyalna, walakin Rick fhamtni w bda ykhli lih t9dir.",
    name: "Ahmad", // Nom en darija
    designation: "CFO",
    company: "Morocan Tecno Atlas", // Entreprise en darija
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Remplacer par une vraie image
  },
  {
    testimonial:
      "Ma3mrni l9it web developer li kayhtermo b7al Rick li kaymshi 3la mrahal l'client w kaym3khohom.",
    name: "Sara", // Nom en darija
    designation: "COO",
    company: "Vid Casa", // Entreprise en darija
    image: "https://randomuser.me/api/portraits/women/2.jpg", // Remplacer par une vraie image
  },
  {
    testimonial:
      "M3a Rick li optimized l'website dyalna, l'traffic zed b 50%. Ma n9dru nshkrouh bzaf!",
    name: "Ali", // Nom en darija
    designation: "CTO",
    company: "For", // Entreprise en darija
    image: "https://randomuser.me/api/portraits/men/3.jpg", // Remplacer par une vraie image
  },
];


const projects = [
  {
    name: "Movie & Series Discovery",
    description:
      "Discover a curated selection of trending movies and series. Each title is presented with genres, overviews, and key details to help users find their next favorite show or movie. Dive into a world of entertainment with top-rated content available now.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TMDb API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],image: tripguide,
    // image: movieSeriesImage, // Replace with the actual image variable or URL
    source_code_link: "https://github.com/your-movie-project", // Replace with your repository link
  },
  {
    name: "Books Search",
    description:
      "A platform where users can search and explore books by genre, author, or popularity. Get detailed overviews, reviews, and recommendations to find your next great read.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Google Books API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    // image: booksSearchImage, // Replace with the actual image variable or URL
    source_code_link: "https://github.com/your-books-project", // Replace with your repository link
  },
  {
    name: "Gym Management",
    description:
      "A web-based gym management platform to handle member registrations, track progress, schedule classes, and manage memberships efficiently.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    // image: gymManagementImage, // Replace with the actual image variable or URL
    source_code_link: "https://github.com/your-gym-management-project", // Replace with your repository link
  },
];

export { services, technologies, experiences, testimonials, projects };
