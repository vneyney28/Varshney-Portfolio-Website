import { FaPython } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { HiCode } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglecolab } from "react-icons/si";
import { VscSymbolNamespace } from "react-icons/vsc";
const data = [
  {
    id: 1,
    icon: <FaReact />,
    title: "React",
    dsc: "Skilled at using hooks such as useState, React Routing and Animations",
  },
  {
    id: 2,
    icon: <SiFlutter />,
    title: "Flutter",
    dsc: "Fundamental skills in Dart and Flutter. Can build native-quality Android apps",
  },
  {
    id: 10,
    icon: <SiGooglecolab />,
    title: "Colab",
    dsc: "Skilled at using Colab for data analysis. Have previously worked with PCA, time-series & K-means clustering",
  },
  {
    id: 9,
    icon: <AiFillGithub />,
    title: "Git",
    dsc: "Skilled with git commands. Have previously worked in an open source setup which required its extensive use",
  },
  {
    id: 8,
    icon: <HiCode />,
    title: "Data Structure  and Algorithms",
    dsc: "Well versed in DSA (had the highest grade for this subject in my class). Have solved 100+ LeetCode questions",
  },
  {
    id: 3,
    icon: <VscSymbolNamespace />,
    title: "Programming languages",
    dsc: "Skilled in Python, C++ & JavaScript",
  },

  {
    id: 5,
    icon: <IoLogoCss3 />,
    title: "CSS",
    dsc: "Capable of designing beautiful UIs using CSS-3",
  },
  { id: 6, icon: <AiFillHtml5 />, title: "HTML", dsc: "Well versed in HTML5" },
];

export default data;
