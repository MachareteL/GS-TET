import React from "react";

export default function ProfileHeader({ image, introduction, description }: ProfileHeaderProps) {
  return (
    <div className="w-full flex space-x-2">
      <div className="rounded-full overflow-hidden">
        <img src={image} alt="" />
      </div>
      <div className="flex-1 flex flex-col justify-center ">
        <h1 className="leading-8 text-3xl">{introduction}</h1>
        <h1 className="leading-8 text-gray-500 text-2xl">{description}</h1>
      </div>
    </div>
  );
}
