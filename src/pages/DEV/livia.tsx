import { NextPage } from "next";
import PersonalProfile from "../components/PersonalProfile";
import Card from "../components/Card";

interface Props {}

const Livia: NextPage<Props> = ({}) => {
  const labels: Label[] = [
    {
      title: "Contato",
      icons: [
        {
          // GitHub
          icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
          href: "https://github.com/liviapaliari",
        },
        {
          // LinkedIn
          icon: "https://cdn-icons-png.flaticon.com/512/1377/1377213.png",
          href: "https://www.linkedin.com/in/livia-paliari/",
        },
      ],
    },
    {
      title: "Linguagens de Programação",
      icons: [
        {
          // Python
          icon: "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
          href: "#",
        },
        {
          // Java
          icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          href: "#",
        },
        {
          // C Sharp
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/2048px-C_Sharp_wordmark.svg.png",
          href: "#",
        },
      ],
    },
    {
      title: "Tecnologias",
      icons: [
        {
          // Django
          icon: "https://imgtr.ee/images/2023/07/31/7ceb4c8b45f894c79165ec3cd97b87b5.png",
          href: "#",
        },
        {
          // React
          icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
          href: "#",
        },
        {
          // TailWind
          icon: "https://imgtr.ee/images/2023/07/31/2722926eb1fbb70db7b2c21a217f07a7.png",
          href: "#",
        },
        {
          // Banco de Dados
          icon: "https://cdn-icons-png.flaticon.com/512/5939/5939259.png",
          href: "#",
        },
        {
          // Unity
          icon: "https://i.redd.it/tu3gt6ysfxq71.png",
          href: "#",
        },
        {
          // RaspBerry
          icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/raspberry-2752090-2284907.png?f=avif&w=256",
          href: "#",
        },
      ],
    },
    {
      title: "Competições Externas",
      icons: [
        {
          // 1º Lugar
          icon: "https://cdn-icons-png.flaticon.com/512/625/625485.png",
          href: "https://feirabragantec.com.br/2021/projeto.php?numero=197807",
        },
        {
          // 2º Lugar
          icon: "https://cdn-icons-png.flaticon.com/512/625/625486.png",
          href: "https://easycertificates.lsitec.org.br/certificate/85e30c25-eb5d-4f0e-abcc-4f40a22c19c4/",
        },
      ],
    },
  ];

  const list1 = [
    "BioCycle | Hackathon",
    "Training Schedule | GS/PSC3",
    "Risk Management Virtual Reality | TCC",
  ];
  const list2 = [
    "Tocar piano",
    "Amo gatos",
    "Resident Evil",
    "Inglês avançado",
  ];
  const list3 = [
    "Técnico Informática | CPDB",
    "Técnico Desenvolvimento de Sistemas | SENAI",
  ];
  const list4 = ["Ler livros de fantasia", "Jogos", "Quebra-Cabeça"];

  return (
    <PersonalProfile
      image="https://github.com/liviapaliari.png"
      description="Olá! Eu tenho 19 anos e moro em Campinas"
      introduction="Livia Paliari Padovine"
      labels={labels}
    >
      <Card title="Projetos" list={list1} />
      <Card title="Curiosidades" list={list2} />
      <Card title="Formação Acadêmica" list={list3} />
      <Card title="Hobbies" list={list4} />
    </PersonalProfile>
  );
};

export default Livia;
