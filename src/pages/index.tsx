import { motion, useIsPresent } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const isPresent = useIsPresent();

  const teamDAA: person[] = [
    {
      name: "Emilly Santos",
      profilesrc: "https://github.com/Emillyzinha.png",
      profilehref: "/DAA/emilly",
    },
    {
      name: "Gabriel Tejero",
      profilesrc: "https://via.placeholder.com/150",
      profilehref: "/DAA/tejero",
    },
    {
      name: "Lucas Capovila",
      profilesrc: "https://github.com/Capovilaa.png",
      profilehref: "/DAA/capovila",
    },
    {
      name: "José Alex",
      profilesrc: "https://via.placeholder.com/150",
      profilehref: "/DAA/alex",
    },
  ];

  const teamDEV: person[] = [
    {
      name: "Lucas Macharete",
      profilesrc: "https://github.com/macharetel.png",
      profilehref: "/DEV/macharete",
    },
    {
      name: "Livia Padovine",
      profilesrc: "https://github.com/liviapaliari.png",
      profilehref: "/DEV/livia",
    },
    {
      name: "Gustavo Meira",
      profilesrc:
        "https://media.licdn.com/dms/image/D4D03AQHcIS2mrEy9jQ/profile-displayphoto-shrink_200_200/0/1690809305075?e=1696464000&v=beta&t=o9f_Jgx0aeo7IiY4d0hOraiLzENkgyhhEBk-zLUOwTo",
      profilehref: "/DEV/gustavo",
    },
    {
      name: "Gabriel Batista",
      profilesrc: "https://github.com/GabrielBatista0.png",
      profilehref: "/DEV/batista",
    },
  ];

  return (
    <>
      <div className="container sm:grid sm:grid-cols-2 m-auto text-center space-y-8 sm:gap-8 grid-cols-1 p-4">
        <h1 className="col-span-2 text-5xl font-black bg-gradient-to-r from-[#004290] to-[#4D3E8F] bg-clip-text text-transparent">
          THE GROUP
        </h1>
        <div className="shadow-xl p-8 rounded-md border-gray-700 border border-opacity-10">
          <h1 className="text-3xl font-black bg-gradient-to-r from-[#004290] to-[#4D3E8F] bg-clip-text text-transparent mb-2">
            Data Analytics
          </h1>
          <ul className="space-y-4">
            {teamDAA.map((person) => (
              <li className="shadow-md p-2 rounded-md border-gray-500 border border-opacity-20 text-xl hover:shadow-xl" key={person.name}>
                <Link
                  href={person.profilehref}
                  className="w-full flex items-center space-x-4"
                >
                  <div className="rounded-full overflow-hidden w-14">
                    <img
                      src={person.profilesrc}
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                  <h1>{person.name}</h1>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="shadow-xl p-8 rounded-md border-gray-700 border border-opacity-10">
          <h1 className="text-3xl font-black bg-gradient-to-r from-[#004290] to-[#4D3E8F] bg-clip-text text-transparent mb-2">
            SW DEV
          </h1>
          <ul className="space-y-4">
            {teamDEV.map((person) => (
              <li className="shadow-md p-2 rounded-md border-gray-500 border border-opacity-20 text-xl hover:shadow-xl" key={person.name}>
                <Link
                  href={person.profilehref}
                  className="w-full flex items-center space-x-4"
                >
                  <div className="rounded-full overflow-hidden w-14">
                    <img
                      src={person.profilesrc}
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                  <h1>{person.name}</h1>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circIn" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circInOut" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#004290] to-[#4D3E8F] z-30"
      />
    </>
  );
}
