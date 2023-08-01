import { NextPage } from 'next'
import PersonalProfile from '@/components/PersonalProfile';
import Card from '@/components/Card'

interface Props {}

const Tejero: NextPage<Props> = ({}) => {
  const labels: Label[] = [
    {
      title: "Redes Sociais",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/128/1377/1377213.png",
          href: "https://br.linkedin.com/in/gabriel-tejero-198a73245",
        },
      ],
    },

    {
      title: "Linguagens",
      icons: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          href: "",
        },

        {
          icon: "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
          href: "",
        },

        {
          icon: "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg",
          href: ""
        },
        
        {
          icon: "https://cdn-icons-png.flaticon.com/512/5939/5939259.png",
          href: "",
        }
      ],
    },

    {
      title: "Tecnologias",
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
          icon: "https://cdn.iconscout.com/icon/free/png-256/free-azure-1868965-1583129.png?f=avif&w=128",
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

      ]
    }
  ];

  const lista_projetos = ['Auto BI | CaP/TEF7', 'Bio Cycle | Hackathon', 'New Forms | CaP/TEF7', 'ETS Journey | TCC']
  const lista_hobbies = ['Jogar no computador', 'Ir pra academia', 'Ouvir Música']
  const lista_curiosidades = ['Tenho um cachorro caramelo', 'Consigo digitar muito rápido', 'Já fiz muay thai e natação']
  const lista_formacao = ['Ensino Médio | E.E Doutor. Honorino Fabbri', 'Desenvolvimento de Jogos 2D/3D | Happy Code', 'Técnico em Desenvolvimento de Sistemas | SENAI Roberto Mange', 'Bacharelado em Ciência da Computação | Unimetrocamp Wyden']
  const lista_competicoes = ['Hackathon Happy Code Campinas | 1º Lugar', 'Gran Prix Inovação SENAI | Participação', 'Hackathon ETS - 4ª Edição | 3º Lugar']

  return (
    <PersonalProfile
      image="https://avatars.githubusercontent.com/u/112812234?s=400&u=d61af8e596d72d1bbea171fc7bad5a52f1c34644&v=4.png"
      description="Olá! Meu nome é Gabriel Tejero, tenho 18 anos e moro em Hortolândia."
      introduction="Gabriel Tejero Carazzatto"
      labels={labels}>
      
      <Card title='Projetos' list={lista_projetos}/>
      <Card title='Hobbies' list={lista_hobbies}/>
      <Card title='Curiosidades' list={lista_curiosidades}/>
      <Card title='Competições' list={lista_competicoes}/>
      <Card title='Formação' list={lista_formacao}/>
    </PersonalProfile>

  )
}

export default Tejero