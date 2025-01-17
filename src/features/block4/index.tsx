import { useTypedSelector } from "@/store";
import Image from "next/image";
import React from "react";
import Logo from "../../components/common/icons/Logo";
import Authen from "../../components/common/icons/Authen";
import Respect from "../../components/common/icons/Respect";
import Earth from "../../components/common/icons/Earth";
import PersonalCircle from "../../components/common/icons/PersonalCircle";
import Smile from "../../components/common/icons/Smile";

export default function Block4() {
  const { content } = useTypedSelector((state) => state.global);

  const getIconByIndex = (i: number) => {
    switch (i) {
      case 0:
        return <Authen />;
      case 1:
        return <Respect />;
      case 2:
        return <Earth />;
      case 3:
        return <PersonalCircle />;
      default:
        return <Smile />;
    }
  };

  return (
    <>
      <div className="px-4 lg:px-[calc(32px)] 2xl:px-[340px] py-[60px] md:flex md:items-start md:gap-6 relative md:static">
        <div className="rounded-2xl md:rounded-none md:backdrop-filter-none z-[10] bg-[rgba(255,255,255,0.6)] backdrop-filter-[7.5px] absolute w-[calc(100%-32px-32px)] px-3 py-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:static md:w-full md:bg-white md:inset-0 md:translate-x-0 md:translate-y-0">
          <Logo />
          <span className="pt-[5px] text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold">
            <h2 className="text-primary">{content?.bloc_4.title}</h2>
            <h2 className="text-[rgba(242,84,45,0.60)]">
              {content?.bloc_4.text_title}
            </h2>
          </span>
          <div className="flex items-center gap-2 md:gap-8 lg:gap-[48px] mb-3 pt-6 lg:pt-[40px] xl:pt-[60px]">
            <div className="border border-[#BBBBBB] rotate-90 w-[24px] md:rotate-0 md:w-[81px] lg:w-[81px]"></div>
            <h3 className="text-secondary text-base md:text-[20px] lg:text-[24px] xl:text-[28px] font-semibold">
              {content?.bloc_4.subtitle}
            </h3>
          </div>
          <p className="py-2 md:pl-[129px] w-full whitespace-pre-wrap text-ellipsis line-clamp-4 overflow-hidden md:overflow-visible md:h-full md:line-clamp-none max-h-[173px] md:max-h-none md:text-wrap">
            {content?.bloc_4.text}
          </p>
        </div>
        <div className="w-full md:max-w-[503px] md:h-[574px]">
          <Image
            src={"/assets/image_8.png"}
            className="w-full  object-cover md:h-[574px]"
            alt="image"
            width={503}
            height={574}
          />
        </div>
      </div>
      <div className="px-4 lg:px-[calc(32px)] 2xl:px-[340px] flex flex-wrap justify-center gap-8 py-5 bg-white">
        {content?.bloc_4.pictos.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-40"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-teal-500 text-white rounded-full">
              {getIconByIndex(index)}
            </div>
            <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
