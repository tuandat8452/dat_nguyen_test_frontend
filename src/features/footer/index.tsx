import Facebook from "@/components/common/icons/Facebook";
import Instagram from "@/components/common/icons/Instagram";
import Youtube from "@/components/common/icons/Youtube";
import { useTypedSelector } from "@/store";
import React, { use } from "react";

export default function Footer() {
  const { content } = useTypedSelector((state) => state.global);
  return (
    <div className="bg-[#562C2C] w-full lg:h-[301px]">
      <div className="px-4 lg:px-[calc(32px)] 2xl:px-[340px] py-[56px]">
        <div className="flex flex-col justify-center gap-3 text-center md:grid lg:grid-cols-4 md:grid-cols-3 pb-[56px]">
          <div className="text-white font-medium text-lg leading-6">
            <p>{content?.footer.address.name}</p>
            <p>{content?.footer.address.phone}</p>
            <p>{content?.footer.address.location}</p>
          </div>
          <div className="lg:col-span-3 md:col-span-2">
            <div className="flex flex-col gap-3 justify-center text-center md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-10">
              {content?.footer.links.map((link, index) => (
                <div
                  key={index}
                  className="text-white font-medium text-lg leading-6 opacity-60"
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-center items-center gap-4 pb-8">
          <Facebook />
          <Instagram />
          <Youtube />
        </div>
        <div className="border-t border-[rgba(255,255,255,0.30)]"></div>
        <div className="block md:flex w-full md:justify-between pt-[26px]">
          <h2 className="text-lg text-white text-center">© BASIC 2024</h2>
          <div className="md:flex hidden items-center gap-4">
            <Facebook />
            <Instagram />
            <Youtube />
          </div>
        </div>
      </div>
    </div>
  );
}
