import { NextPage } from 'next'
import PersonalProfile from '@/components/PersonalProfile';
import Card from '@/components/Card';

interface Props {}

const Alex: NextPage<Props> = ({}) => {
  const labels: Label[] = [
    {
      title: "Social Media",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
          href: "https://github.com/Alexjunior2005",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1377/1377213.png",
          href: "https://www.linkedin.com/in/jose-alex-da-silva-junior-b1875a1a1/",
        },
      ],
    },
    {
      title: "Linguagens",
      icons: [
       
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
          href: "https://github.com/Alexjunior2005",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          href: "https://github.com/Alexjunior2005",
        },
  
        {
          icon: "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg",
          href: "https://github.com/Alexjunior2005",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/5939/5939259.png",
          href: "https://github.com/Alexjunior2005",
        },
       
        
      ],
      
    },
    {
      title: "Tecnologias",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
          href: "https://github.com/Alexjunior2005",
        },
 

        {
          icon: "https://imgtr.ee/images/2023/07/31/2722926eb1fbb70db7b2c21a217f07a7.png",
          href: "https://github.com/Alexjunior2005",
        },
        {
          icon: "https://imgtr.ee/images/2023/07/31/7ceb4c8b45f894c79165ec3cd97b87b5.png",
          href: "https://github.com/Alexjunior2005",
        },
        {
          icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/raspberry-2752090-2284907.png?f=avif&w=256",
          href: "https://github.com/Alexjunior2005",
        },
        {
          icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/arduino_logo_icon_170518.png",
          href: "https://github.com/Alexjunior2005",
        },
        {
          icon: "https://imgtr.ee/images/2023/07/31/d364e8cf3496585eb9922b7298d05b22.png",
          href: "https://github.com/Alexjunior2005",
        },
        
      ],
      
    },
  ];

  const list = ["Hackathon - Fretosh", "TCC - ETS Journey",'GS/PUI5 - Bot-EMAIL'];
  const list2 = ["Estar com os amigos ", "Jogar no computador", "Praticar exercício fisico"];
  const list3 = ["Gosto de fazer lives","Ex Jogador de Handebol","Daltônico"]
  const list4 = ["Técnico em Eletrotécnica | ETEC Bento quirino","Inglês nivel intermediário | New Castle idiomas","Desenvolvimento de sistemas | SENAI"]
  return (
    <PersonalProfile
      image="https://github.com/Alexjunior2005.png"
      description="Tenho 18 anos e moro em Campinas"
      introduction="José Alex"
      labels={labels}
    >
      <Card title="Projetos" list={list} />
      <Card title="Curiosidades" list={list3} />
      <Card title="Hobbies" list={list2} />
      <Card title="Formação" list={list4} />


    </PersonalProfile>
  );
}

export default Alex