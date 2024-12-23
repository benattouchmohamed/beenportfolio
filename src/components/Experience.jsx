import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const icons = {
  React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  Laravel: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  WordPress: "data:image/png;base64,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",
};

const experiences = [
  {
    date: "2024 - 3 Months",
    title: "Web Developer (Laravel & React)",
    company_name: "ERTC Techno",
    icon: icons.React,
    iconBg: "#000000", // Black background for the icon
    points: [
      "Developed dynamic web applications using Laravel and React.",
      "Collaborated with a team to deliver client projects on time.",
      "Implemented features such as authentication, API integration, and responsive design.",
      "Gained experience in troubleshooting and debugging complex issues.",
    ],
  },
  {
    date: "2024 - Present",
    title: "Web Developer (Laravel & React)",
    company_name: "Personal Projects",
    icon: icons.Laravel,
    iconBg: "#000000", // Black background for the icon
    points: [
      "Built a responsive pharmaceutical website using Laravel and React.",
      "Developed features like user authentication and inventory management.",
      "Integrated payment gateways for smooth online transactions.",
    ],
  },
  {
    date: "2023 - 2024",
    title: "Web Developer (WordPress & SEO)",
    company_name: "Freelance",
    icon: icons.WordPress,
    iconBg: "#000000", // Black background for the icon
    points: [
      "Designed and developed customized WordPress websites.",
      "Optimized websites for SEO to improve search engine rankings.",
      "Integrated WooCommerce and payment systems for e-commerce sites.",
    ],
  },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold m-0">
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <motion.div>
    <motion.div className="text-center">
      <p className="text-gray-400 text-sm">My Journey</p>
      <h2 className="text-white text-3xl font-bold">Work Experience</h2>
    </motion.div>

    <div className="mt-10 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </motion.div>
);

export default Experience;
