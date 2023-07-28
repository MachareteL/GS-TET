import Link from "next/link";
import React from "react";

export default function Label({ title, icons }: Label) {
  return (
    <div>
      <h1 className="text-[#293F8F] font-bold text-xl py-2">{title}</h1>
      <ul className="flex">
        {icons.map(({ icon, href }, index) => (
          <li className="mx-2 rounded-full h-16 w-16 overflow-hidden">
            <Link href={href} >
              <img src={icon} key={index} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
