import { NextPage } from "next";
import PersonalProfile from "../components/PersonalProfile";
import Card from "../components/Card";
import artstationIcon from "../../../public/artstation-1.svg";

interface Props {}

const Gustavo: NextPage<Props> = ({}) => {
  const badges: Label[] = [
    {
      title: "Social Media",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
          href: "https://github.com/Honkato",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1377/1377213.png",
          href: "https://www.linkedin.com/in/gustavo-miguel-roncada-meira-087b29223/",
        },
        {
          icon: "",
          href: "",
        },
        {
          icon: "https://imagepng.org/wp-content/uploads/2018/08/twitter-icone.png",
          href: "https://twitter.com/HonkatoAsug",
        },
        {
          icon: "https://pngimg.com/uploads/instagram/instagram_PNG10.png",
          href: "https://www.instagram.com/honkato.asug/",
        },
        {
          icon: "https://play-lh.googleusercontent.com/RUkxkpZLufZ_cVXdaEVm61g_F4YBwhED3N9POkVt7lMw0tU5ZB62XYeW42WFvJvM0Jg",
          href: "https://www.artstation.com/honkato",
        },
      ],
    },

    {
      title: "Linguagens de Programação",
      icons: [
        {
          icon: "https://th.bing.com/th/id/OIP.EDJ9xoErBbZqK2tExVoJfAHaHY?pid=ImgDet&rs=1",
          href: "https://www.python.org/",
        },
        {
          icon: "https://th.bing.com/th/id/OIP.qUsonnBsHnioyl78SFCZfQHaGa?pid=ImgDet&rs=1",
          href: "https://www.java.com/pt-BR/",
        },
        {
          icon: "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg",
          href: "",
        },
        {
          icon: "https://th.bing.com/th/id/OIP.BHlcTiQIJ_tHUbEh2-GWEwHaHa?pid=ImgDet&rs=1",
          href: "https://www.ni.com/pt-br/shop/labview.html",
        },
        {
          icon: "https://logodix.com/logo/542135.jpg",
          href: "",
        },
      ],
    },
    {
      title: "Tecnologias",
      icons: [
        {
          icon: "https://th.bing.com/th/id/R.2bee11a830bacc5ae9006df56b20c33a?rik=nXUBy4boCTrW8w&pid=ImgRaw&r=0",
          href: "https://pt-br.legacy.reactjs.org/",
        },
        {
          icon: "https://imgtr.ee/images/2023/07/31/7ceb4c8b45f894c79165ec3cd97b87b5.png",
          href: "https://www.djangoproject.com/",
        },
        {
          icon: "https://imgtr.ee/images/2023/07/31/2722926eb1fbb70db7b2c21a217f07a7.png",
          href: "https://tailwindcss.com/",
        },
      ],
    },

    {
      title: "Times",
      icons: [
        {
          icon: "https://yt3.googleusercontent.com/yWEz8iaQV31huKVN93wRZvmyD6zqa-048k8TO4kK-fSC6rDxfN0oi5KnPaByof8c7aJBcqQMKg=s176-c-k-c0x00ffffff-no-rj",
          href: "https://www.instagram.com/teamniobio/",
        },
      ],
    },

    {
      title: "Competições Externas",
      icons: [
        {
          icon: "https://th.bing.com/th/id/R.6e7d8c8297071b26b5d7b49998938793?rik=9qWnoAu4tyk6Jg&pid=ImgRaw&r=0",
          href: "https://www.firstinspires.org/robotics/frc",
        },
      ],
    },
  ];

  const projetos = [
    "Cubo Mágico Jogo da Velha",
    "Locker Inteligente",
    "Email Reader",
    "Emulador Web",
    "Plataforma Organizacional com IA",
  ];
  const hobbies = [
    "Desenhar",
    "Jogar online/offline",
    "Assistir animes/series/filmes",
    "Gosto de Java",
  ];
  const formacao = [
    "SESI/SENAI",
    "Técnico em Mecânica - SENAI Roberto Mange",
    "Engenharia da Computação UNISAL (Cursando)",
  ];
  const curiosidades = [
    "Já fiz karate",
    "Tenho uma foto com um pato",
    "Quero algum dia desenvolver um Jogo",
  ];
  return (
    <PersonalProfile
      image="https://media.licdn.com/dms/image/D4D03AQHcIS2mrEy9jQ/profile-displayphoto-shrink_200_200/0/1690809305075?e=1696464000&v=beta&t=o9f_Jgx0aeo7IiY4d0hOraiLzENkgyhhEBk-zLUOwTo"
      description="Oi, sou o Gustavinho, tenho 19 anos e moro em Campinas"
      introduction="Gustavo Miguel Roncada Meira"
      labels={badges}
    >
      <Card title="Projetos" list={projetos} />
      <Card title="Hobbies" list={hobbies} />
      <Card title="Formação" list={formacao} />
      <Card title="Curiosidades" list={curiosidades} />
    </PersonalProfile>
  );
};

export default Gustavo;
