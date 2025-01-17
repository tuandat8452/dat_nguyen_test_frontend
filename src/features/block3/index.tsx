import { useTypedSelector } from "@/store";
import React from "react";
import Button from "../../components/common/button";
import ArrowRight from "../../components/common/icons/ArrowRight";
import Image from "next/image";

export default function Block3() {
  const { content } = useTypedSelector((state) => state.global);

  const getSrcByIndex = (i: number) => {
    switch (i) {
      case 0:
        return "/assets/image_4.png";
      case 1:
        return "/assets/image_5.png";
      case 2:
        return "/assets/image_6.png";
      default:
        return "/assets/image_7.png";
    }
  };

  return (
    <div className="pt-20 pb-8">
      <div className="md:flex md:justify-between md:items-end px-4 lg:px-[calc(32px)] 2xl:px-[340px] mb-[35px]">
        <h2 className="text-primary text-center md:text-left text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold ">
          {content?.bloc_3.title}
        </h2>
        <div className="text-[#666] hidden md:flex w-[166px] text-[20px] font-medium gap-1 items-center underline">
          {content?.bloc_3.more_info}
          <ArrowRight />
        </div>
      </div>
      <div className="pl-4 lg:pl-[calc(32px+40px)] 2xl:pl-[calc(340px+105px)] flex items-center gap-4 md:gap-8 xl:gap-[56px] w-screen overflow-hidden">
        {content?.bloc_3.cases.map((item, index: number) => (
          <div
            key={index}
            className="w-full min-w-[200px] md:min-w-[280px] lg:min-w-[340px]"
          >
            <Image
              className="w-full mb-6 size-[200px] md:size-[280px] lg:size-[340px] object-cover rounded-lg"
              src={getSrcByIndex(index)}
              alt={`bloc3-img-${index}`}
              width={340}
              height={340}
            />
            <h2 className="text-primary text-[20px] font-medium mb-1 max-h-[28px] overflow-hidden line-clamp-1">
              {item.category}
            </h2>
            <h3 className="text-[#222] text-[28px] font-medium mb-4 max-h-[32px] overflow-hidden line-clamp-1">
              {item.tagline}
            </h3>
            <p className="max-h-[72px] overflow-hidden line-clamp-3 text-[18px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 px-4 lg:px-[calc(32px)] 2xl:px-[340px]">
        <Button fullWidth endIcon={<ArrowRight color="#fff" />}>
          {content?.bloc_3.more_info}
        </Button>
      </div>
    </div>
  );
}
