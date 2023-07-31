import { NextPage } from "next";
import PersonalProfile from "../components/PersonalProfile";
import Card from "../components/Card";

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
          icon: "https://imgtr.ee/images/2023/07/31/7ceb4c8b45f894c79165ec3cd97b87b5.png",
          href: "",
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
          icon: "https://scontent.fgru11-1.fna.fbcdn.net/v/t39.30808-1/306159071_614516866768965_399123862009775387_n.png?stp=dst-png_p120x120&_nc_cat=107&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=O8dlGe5AHGwAX_QhbCB&_nc_ht=scontent.fgru11-1.fna&oh=00_AfDZh6tAnapFJtkk-oxuqal1di1hBXQibf53ELJPnFuS0A&oe=64CD5366",
        },
        {
          href: "https://clearhtml.netlify.app/",
          icon: "https://clearhtml.netlify.app/img/empregados.png",
        },
      ],
    },
  ];

  const list = ["Hackaton", "TCC"];
  const list2 = ["Jogar Xadrez", "Dormir", "Codar no tempo livre"];
  return (
    <PersonalProfile
      image="https://github.com/MachareteL.png"
      introduction="Lucas da Silva Macharete."
      description="Sou o macharete, tenho 19 anos e gosto de desenvolvimento web em geral."
      labels={labels}
    >
      <Card title="Projetos" list={list} />
      <Card title="Hobbies" list={list2} />
      <Card title="Projetos" list={list} />
      <Card title="Hobbies" list={list2} />
      <Card title="Projetos" list={list} />
      <Card title="Hobbies" list={list2} />
    </PersonalProfile>
  );
};

export default Macharete;
