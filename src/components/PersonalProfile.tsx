import React from "react";
import ProfileHeader from "./ProfileHeader";
import Label from "./Label";

export default function PersonalProfile({
  image,
  introduction,
  description,
  labels,
  children,
}: PersonalProfileProps) {
  return (
    <div className="px-4 sm:px-12">
      <ProfileHeader
        introduction={introduction}
        description={description}
        image={image}
      />
      <div className="w-1/3 h-1 my-6 bg-gradient-to-r from-[#004290] to-[#4D3E8F] rounded-full" />
      <div className="sm:grid sm:grid-cols-12">
        <div className="sm:col-span-4">
          <div className="block">
            <ul>
              {labels.map(({ title, icons }) => (
                <Label title={title} icons={icons} key={title}/>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-8 flex-wrap justify-center grid sm:grid-cols-2 ">
          {children}
        </div>
      </div>
    </div>
  );
}
