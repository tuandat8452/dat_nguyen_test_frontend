import { useTypedSelector } from "@/store";
import Image from "next/image";
import React from "react";
import Button from "../../components/common/button";
import ArrowRightUp from "../../components/common/icons/ArrowRightUp";

export default function Block1() {
  const { content } = useTypedSelector((state) => state.global);

  const getSrcByIndex = (i: number) => {
    switch (i) {
      case 0:
        return "/assets/image_1.png";
      case 1:
        return "/assets/image_2.png";
      default:
        return "/assets/image_3.png";
    }
  };

  return (
    <div className="px-4 lg:px-[calc(32px)] 2xl:px-[340px] py-10 md:py-20 w-full">
      <div className="relative border-[2px] border-[#BBBBBB]">
        <div className="absolute z-10 -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit whitespace-nowrap px-10 bg-white h-[60px]">
          <h2 className="text-primary text-[24px] md:text-[32px] lg:text-[40px] 3xl:text-[52px] font-semibold leading-[60px]">
            {content?.bloc_1.title}
          </h2>
        </div>
      </div>
      <div className="text-center mb-5 lg:mb-10 mt-[30px] 3xl:mt-[37px] text-sm md:text-[18px] lg:text-[20px] 3xl:text-[24px] text-secondary">
        {content?.bloc_1.subtitle}
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {content?.bloc_1.cases.map((item, index: number) => (
          <div
            key={index}
            className={`w-full ${
              index !== 1 ? "md:pt-[45px]" : ""
            } flex flex-col gap-6`}
          >
            <Image
              className="w-full rounded h-[200px] md:h-[240px] lg:size-[355px] 2xl:size-[397px] object-cover"
              src={getSrcByIndex(index)}
              alt={`bloc1-img-${index}`}
              width={397}
              height={397}
            />
            <div>
              <h2 className="text-primary text-[20px] mb-1">{item.category}</h2>
              <h3 className="text-secondary text-[28px] font-medium">
                {item.tagline}
              </h3>
              <p className="mt-4 overflow-hidden max-h-[66px] text-lg line-clamp-2 text-secondary">
                {item.description}
              </p>
            </div>
            <Button variant="outlined" color="secondary" width={249}>
              <div className="flex gap-2 items-center">
                {item.cta}
                <ArrowRightUp color={"#0E9594"} />
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
