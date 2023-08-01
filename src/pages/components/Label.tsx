import Link from "next/link";
import React from "react";

export default function Label({ title, icons }: Label) {
  return (
    <div>
      <h1 className="text-[#293F8F] font-bold text-xl py-2">{title}</h1>
      <ul className="flex flex-shrink">
        {icons.map(({ icon, href }, index) => (
          <li className="mx-2 rounded-full h-16 w-16 overflow-hidden" key={href}>
            <Link href={href} target="_blank" className="flex w-full h-full">
              <img src={icon} key={index} className="w-full h-full"/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
