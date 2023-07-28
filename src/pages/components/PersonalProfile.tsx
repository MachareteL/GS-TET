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
    <div className="px-12">
      <ProfileHeader
        introduction={introduction}
        description={description}
        image={image}
      />
      <div className="w-1/3 h-1 my-6 bg-gradient-to-r from-[#004290] to-[#4D3E8F] rounded-full" />
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <div className="block">
            <ul>
              {labels.map(({ title, icons }) => (
                <Label title={title} icons={icons} />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-8 flex flex-wrap justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}