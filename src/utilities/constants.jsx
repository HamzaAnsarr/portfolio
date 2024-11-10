import { LuLinkedin, LuGithub } from "react-icons/lu";
import { SiGeeksforgeeks, SiCodewars } from "react-icons/si";
import lyca from "../assets/engagement.png";
import plexaar from "../assets/plex.jpg";
import traddooImg from "../assets/trado.png";

export const navLinks = [
  {
    url: "/#",
    name: "Home",
  },
  {
    url: "/#about",
    name: "About",
  },

  {
    url: "/#projects",
    name: "Projects",
  },
  {
    url: "/#contact",
    name: "Contact",
  },
];

export const skills = [
  "JavaScript",
  "React Js",
  "Next Js",
  "NodeJS",
  "Redux Toolkit",
  "RTK Query",
  "React Storybook",
  "Tailwind",
];

export const social_links = [
  {
    url: "https://github.com/HamzaAnsarr",
    icon: <LuGithub className="w-[22px] h-[22px]" />,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/muhammad-hamza2906/",
    icon: <LuLinkedin className="w-[22px] h-[22px]" />,
    name: "Linkedin",
  }
];

export const mainProjects = [
  // {
  //   title: "LYCA Audit Tool",
  //   description:
  //     "This is a audit firm which manages and audit different companies through registering them as a client and doing their audit",
  //   tags: ["React", "Redux", "RTK Query", "Mui", "Microfrontend Architecture"],
  //   demo: "https://devapp-sso.lyca.sa/",
  //   image: lyca,
  // },
  {
    title: "Plexaar CRM",
    description:
      "Plexaar is a CRM Application, where different businesses register themself and manage their clients and staff.",
    tags: ["React", "Redux", "Scss", "Mui", "React Storybook"],
    demo: "https://plexaar.com/",
    image: plexaar,
  },
  {
    title: "Traddoo Trading App",
    description:
      "Traddoo is a prop trading firm offering real capital for traders, allowing them to grow their trading edge with transparent funding programs. Traders can benefit from tight spreads, multi-platform trading, and the ability to use custom EAs.",
    tags: ["React", "Mui", "API", "SCSS", "Live poll and events"],
    demo: "https://trado-user-ui.vercel.app/",
    image: traddooImg,
  },
];

export const otherProjects = [
  {
    title: "Github Profile Previewer",
    description:
      "Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.",
    tags: ["HTML", "CSS", "JavaScript", "Github API"],
    // github: "https://github.com/HamzaAnsarr/GithubProfileData",
    demo: "https://github-profile-data.vercel.app/",
  },
];
