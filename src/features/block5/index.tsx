import ArrowRightUp from "@/components/common/icons/ArrowRightUp";
import { useTypedSelector } from "@/store";
import Image from "next/image";
import React from "react";

export default function Block5() {
  const { content } = useTypedSelector((state) => state.global);

  const smallCards = [
    "/assets/image_10.png",
    "/assets/image_11.png",
    "/assets/image_12.png",
    "/assets/image_13.png",
  ];
  return (
    <div
      className="w-full py-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, #FFF 100%), #EAFCFF",
      }}
    >
      <div className="mb-8 space-y-2 px-4 lg:px-[calc(32px)] 2xl:px-[340px] grid grid-cols-2 gap-[40px]">
        <p className="text-[rgba(86,44,44,0.80)] ">{content?.bloc_5.text}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {content?.bloc_5.title}
        </h1>
      </div>
      <div className="relative mb-8 px-4 lg:px-[calc(32px)] 2xl:px-[340px]">
        <Image
          src={"/assets/image_14.png"}
          alt="Breakfast spread with fruits"
          width={1200}
          height={800}
          className="w-full object-cover"
        />
        <div className="bg-white rounded-3xl w-[calc(100%-32px)] lg:w-[calc(100%-32px)] md:w-[calc(100%-48px)] xl:w-[calc(100%-210px)]  max-w-[1030px] shadow-sm overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <Image
              src={"/assets/image_15.png"}
              alt="Breakfast spread with fruits"
              width={1200}
              height={800}
              className="w-full object-cover h-[463px]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">La famille</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <div className="text-right text-sm text-gray-500 mt-2">
                24 Sep 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 lg:px-[calc(32px)] 2xl:px-[340px]">
        {smallCards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 aspect-square relative group cursor-pointer`}
          >
            <Image src={card} alt="Breakfast spread with fruits" fill={true} />
            <div className="absolute bottom-0 left-0 px-5 flex items-center justify-between text-sm w-full bg-[rgba(86,44,44,0.60)] h-[54px]">
              <div className="flex items-center gap-2 text-white">
                <span className="w-5 h-5 rounded-full flex items-center justify-center">
                  @
                </span>
                <span>Anthony Durand</span>
              </div>
              <ArrowRightUp />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 text-sm text-gray-600">
        {content?.bloc_5.footer}
      </div>
    </div>
  );
}
