import Card from "./components/Card";
import PersonalProfile from "./components/PersonalProfile";

export default function Home() {
  const list = [
    "Apprentice management",
    "Corporate Wiki",
    "Bancada Movel para Eventos Hibridos",
  ];
  const labels = [
    {
      title: "Contact",
      icons: [
        {
          icon: "https://via.placeholder.com/150",
          href: "https://google.com/",
        },
        {
          icon: "https://via.placeholder.com/150",
          href: "https://google.com/",
        },
      ],
    },
  ];
  return (
    <>
      <PersonalProfile
        introduction={"HI! I'm Emilly Santos"}
        description={"Im 18 years old and live in Campinas"}
        image={"https://via.placeholder.com/150"}
        labels={labels}
      >
        <Card title={"Projects"} list={list} />
        <Card title={"Projects"} list={list} />
        <Card title={"Projects"} list={list} />
        <Card title={"Projects"} list={list} />
        <Card title={"Projects"} list={list} />
        <Card title={"Projects"} list={list} />
        <Card title={"Projects"} list={list} />
      </PersonalProfile>
    </>
  );
}
