import { NextPage } from "next";
import PersonalProfile from "../../components/PersonalProfile";
import Card from "../../components/Card";

interface Props {}

const Batista: NextPage<Props> = ({}) => {
  const labels: Label[] = [
    {
      title: "Social Media",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
          href: "https://github.com/GabrielBatista0",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1377/1377213.png",
          href: "https://www.linkedin.com/in/gabriel-batista-2004oliveira/",
        },
      ],
    },
    {
      title: "Linguagens Utilizadas",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
          href: "",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          href: "",
        },
        {
          icon: "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg",
          href: "",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/5939/5939259.png",
          href: "",
        },
      ],
    },
    {
      title: "Tecnologias:",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
          href: "",
        },
        {
          icon: "https://imgtr.ee/images/2023/07/31/2722926eb1fbb70db7b2c21a217f07a7.png",
          href: "",
        },
        {
          icon: "https://imgtr.ee/images/2023/07/31/7ceb4c8b45f894c79165ec3cd97b87b5.png",
          href: "",
        },
        {
          icon: "https://imgtr.ee/images/2023/07/31/d364e8cf3496585eb9922b7298d05b22.png",
          href: "",
        },
        {
          icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/raspberry-2752090-2284907.png?f=avif&w=256",
          href: "",
        },
        {
          icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/arduino_logo_icon_170518.png",
          href: "",
        },
      ],
    },
  ];

  const list = [
    "Hackaton - FRETOSH",
    "GS/PUI5 - BOT E-mails",
    "TCC - ETS JOURNEY",
  ];
  const list2 = [
    "Assistir filmes/séries de heróis",
    "Jogar com os Amigos",
    "Escutar todo tipo de música",
  ];
  const list3 = [
    "Morei minha vida toda em Monte Mor",
    "Já me fantasiei de Homem-aranha e Pica-Pau",
    "Gosto de Churrasco",
  ];
  const list4 = [
    "Téc. Desenvolvimento de Sistemas | ETEC Monte Mor",
    "Desenvolvimento de Sistemas | SENAI",
    "Ciência da Computação | Unimetrocamp",
  ];
  return (
    <PersonalProfile
      introduction={"Gabriel de Oliveira Batista"}
      description={"Olá, tenho 18 anos e moro em Monte Mor"}
      image={"https://github.com/GabrielBatista0.png"}
      labels={labels}
    >
      <Card title="Projetos" list={list} />
      <Card title="Hobbies" list={list2} />
      <Card title="Curiosidades" list={list3} />
      <Card title="Formação" list={list4} />
    </PersonalProfile>
  );
};

export default Batista;
