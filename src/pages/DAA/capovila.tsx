import { NextPage } from 'next'
import PersonalProfile from "../components/PersonalProfile";
import Card from "../components/Card";

interface Props { }

const Capovila: NextPage<Props> = ({ }) => {
  const labels: Label[] = [
    {
      title: "Social Media",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
          href: "https://www.linkedin.com/in/lucas-capovila/",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
          href: "https://github.com/Capovilaa",
        }
      ],
    },
    {
      title: "Linguagens de programação",
      icons: [
        {
          // Python
          icon: "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
          href: "",
        },
        // Java
        {
          icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          href: "",
        },
        // Js
        {
          icon: "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg",
          href: "",
        }
      ],
    },
    {
      title: "Tecnologias",
      icons: [
        {
          // Azure
          icon: "https://cdn.iconscout.com/icon/free/png-256/free-azure-1868965-1583129.png?f=avif&w=128",
          href: "",
        },
        {
          // React
          icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
          href: "",
        },
        {
          // Tailwind
          icon: "https://imgtr.ee/images/2023/07/31/2722926eb1fbb70db7b2c21a217f07a7.png",
          href: "",
        },
        {
          // Django
          icon: "https://imgtr.ee/images/2023/07/31/7ceb4c8b45f894c79165ec3cd97b87b5.png",
          href: "",
        },
        {
          // Blockchain
          icon: "https://media.licdn.com/dms/image/C560BAQEq2Us1NlytYw/company-logo_200_200/0/1566243720785?e=2147483647&v=beta&t=SxW6Xgq56z5srIkapy2M7IVuf1PBwn85Bos9qhRWMbo",
          href: "",
        }
      ],
    }
  ];

  const listProjetos = ["GreenBo", "Training Videos"];
  const listHobbies = ["Jogar com amigos", "Praticar esportes", "Acompanhar One Piece"];
  const listCursiosidades = ["Interclasse de Xadrez", "Gosto de fazer terrário", "Feiras de Ciências"];
  const listFormacao = ["Técnico em Informática | CPDB", "Desenvolvimento de Sistemas | SENAI", "Análise e Desenvolvimento de Sistemas | UNISAL", "Inglês Intermediário | Bright Language School"];
  return (
    <PersonalProfile
      image="https://github.com/Capovilaa.png"
      description="Olá! Aqui está uma pequena apresentação pessoal."
      introduction="Lucas Capovila"
      labels={labels}
    >
      <Card title="Projetos" list={listProjetos} />
      <Card title="Hobbies" list={listHobbies} />
      <Card title="Formação" list={listFormacao} />
      <Card title="Curiosidades" list={listCursiosidades} />
    </PersonalProfile>
  );
}

export default Capovila