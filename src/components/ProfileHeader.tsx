import React from "react";

export default function ProfileHeader({ image, introduction, description }: ProfileHeaderProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row space-x-4 items-center">
      <div className="rounded-full overflow-hidden h-48 w-48">
        <img src={image} alt="" className="w-full h-full"/>
      </div>
      <div className="flex-1 flex flex-col justify-center text-center sm:text-start">
        <h1 className="leading-8 text-3xl">{introduction}</h1>
        <h1 className="leading-8 text-gray-500 text-2xl">{description}</h1>
      </div>
    </div>
  );
}
