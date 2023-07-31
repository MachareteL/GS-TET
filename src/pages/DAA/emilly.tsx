import { NextPage } from "next";
import PersonalProfile from "../components/PersonalProfile";
import Card from "../components/Card";

interface Props {}

const Emilly: NextPage<Props> = ({}) => {
  const labels: Label[] = [
    {
      title: "Contato",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1384/1384014.png",
          href: "https://www.linkedin.com/in/emillysug/",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
          href: "https://github.com/Emillyzinha",
        },
        {
          icon: "https://storage.googleapis.com/kaggle-organizations/4/thumbnail.png",
          href: "https://www.kaggle.com/emillysantos",
        },
      ],
    },
    {
      title: "Linguagens de Programação",
      icons: [
        {
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
          href: "https://www.python.org/",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          href: "https://github.com/MachareteL",
        },
      ],
    },
    {
      title: "Bibliotecas",
      icons: [
        {
          icon: "https://img2.gratispng.com/20180817/ysc/kisspng-logo-scikit-learn-python-github-portable-network-g-go-to-image-page-5b77997b36f4f5.3677823415345647312251.jpg",
          href: "https://scikit-learn.org/stable/",
        },
        {
          icon: "https://a.fsdn.com/allura/s/openpyxl/icon?8d3a8249a75894ec1de16e02aa088b0d72d299d84940f1b5d53689e918ed25a7?&w=148",
          href: "https://openpyxl.readthedocs.io/en/stable/",
        },
        {
          icon: "https://me315-unicamp.github.io/aulas/imgs_aula11/pandas.png",
          href: "https://pandas.pydata.org/",
        },
      ],
    },
  ];

  const projetos = [
    "Apprentice Management",
    "CorporateWiki",
    "Bancada Móvel para Eventos Híbridos",
  ];
  const curiosities = ["Já tentei escrever um livro", "Psicóloga infantil"];
  const formation = [
    "E.E. Carlos Gomes",
    "SENAI",
    "Unimetrocamp - Ciência da Computação",
  ];
  const hobbies = ["Ler", "Assistir sitcom", "Cozinhar"];

  return (
    <PersonalProfile
      image="https://github.com/Emillyzinha.png"
      description="Tenho 18 anos e moro em Campinas"
      introduction="Oi! Sou a Emilly Santos"
      labels={labels}
    >
      <Card title="Projetos" list={projetos} />
      <Card title="Curiosidades" list={curiosities} />
      <Card title="Formação" list={formation} />
      <Card title="Hobbies" list={hobbies} />
    </PersonalProfile>
  );
};

export default Emilly;
