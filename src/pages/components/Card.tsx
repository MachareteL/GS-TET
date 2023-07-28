import React from "react";

export default function Card({ title, list }: Card) {
  return (
    <div className="shadow-xl p-8 rounded-md m-2 min-w-[350px] border-gray-700 border border-opacity-10">
      <h1 className="text-[#293F8F] font-bold text-3xl py-2">{title}</h1>
      <ul>
        {list.map((item, index) => (
          <li className="text-xl" key={index}>
            {" "}
            º {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
