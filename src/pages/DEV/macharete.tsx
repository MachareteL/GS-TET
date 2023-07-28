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
          href: "https://github.com/MachareteL",
        },
      ],
    },
    {
      title: "Label Exemplo 2",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
          href: "https://github.com/MachareteL",
        },
      ],
    },
  ];

  const list = ["Hackaton", "TCC"];
  const list2 = ["Jogar Xadrez", "Dormir", "Codar no tempo livre"];
  return (
    <PersonalProfile
      image="https://github.com/MachareteL.png"
      description="Por favor, façam a de vocês e mandem lá no teams. Sucesso! :D"
      introduction="Olá, colegas. Essa minha pagina é apenas um exemplo."
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
