import { NextPage } from "next";
import PersonalProfile from "../../components/PersonalProfile";
import Card from "../../components/Card";

interface Props {}

const Macharete: NextPage<Props> = ({}) => {
  const labels: Label[] = [
    {
      title: "Social Media",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
          href: "https://github.com/machareteL",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1377/1377213.png",
          href: "https://www.linkedin.com/in/lucas-macharete-337919219/",
        },
      ],
    },
    {
      title: "Tecnologias & Frameworks",
      icons: [
        {
          icon: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
          href: "#",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
          href: "#",
        },
        {
          icon: "https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg",
          href: "#",
        },
        {
          icon: "https://th.bing.com/th/id/OIP.EDJ9xoErBbZqK2tExVoJfAHaHY?pid=ImgDet&rs=1",
          href: "#",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          href: "#",
        },
        {
          icon: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg",
          href: "#",
        },
      ],
    },
    {
      title: "Side Projects",
      icons: [
        {
          href: "https://relly.vercel.app/",
          icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSo-5BGjfqxDjf4rjbbdpqD_3OQIgOJGPS957HROhM90U-O8Inm",
        },
        {
          href: "https://ekballo.vercel.app/",
          icon: "https://ekballo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.6b31cca2.png&w=96&q=75",
        },
        {
          href: "https://clearhtml.netlify.app/",
          icon: "https://clearhtml.netlify.app/img/empregados.png",
        },
      ],
    },
  ];

  const projects = [
    "[Hackaton] Smart Locker",
    "[Final Project] Organization AI Plataform",
    "[MED-CA] Medical Status Form",
    "[GS-OIS] Center of Expertise",
  ];
  const hobbies = [
    "Theology",
    "Old JDM Cars",
    "Music",
    "Chess",
    "Animes, Tv Series & Movies",
  ];
  const career = [
    "[ETEC] Administration Technician",
    "[SENAI] Software Development Technician",
    "[Instrutor Estágiario] English Teacher",
    "[UNIMETROCAMP] Computer Science",
  ];
  const about = ["I was born at 333° day of the year", "I got 8 birds", "I've already been a mechanic, carpenter and a teacher."];
  return (
    <PersonalProfile
      image="https://github.com/MachareteL.png"
      introduction="Lucas da Silva Macharete."
      description="I'm Macharete, 20 years old and I like web development in general."
      labels={labels}
    >
      <Card title="Projects" list={projects} />
      <Card title="Career" list={career} />
      <Card title="Hobbies" list={hobbies} />
      <Card title="About me" list={about} />
    </PersonalProfile>
  );
};

export default Macharete;
