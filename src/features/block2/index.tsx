import { useTypedSelector } from "@/store";
import React from "react";
import File from "../../components/common/icons/File";
import Button from "../../components/common/button";
import Send2 from "../../components/common/icons/Send2";

export default function Block2() {
  const { content } = useTypedSelector((state) => state.global);
  return (
    <div className="px-4 lg:px-[calc(32px)] 2xl:px-[340px] py-10 md:py-20 w-full">
      <div className="relative border-[2px] border-[#BBBBBB]">
        <div className="absolute z-10 -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit whitespace-nowrap px-10 bg-white h-[60px]">
          <h2 className="text-primary text-[24px] md:text-[32px] lg:text-[40px] 3xl:text-[52px] font-semibold leading-[60px]">
            {content?.bloc_2_2.title}
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-10 md:p-6 md:py-10 2xl:px-8">
        <div className="bg-white rounded-lg p-6 border-secondary border">
          <div className="w-full flex justify-center">
            <div className="flex gap-4 mb-4">
              <button className="text-red-500 font-bold">&lt;</button>
              <h2 className="text-[20px] font-medium text-secondary">
                July 2025
              </h2>
              <button className="text-red-500 font-bold">&gt;</button>
            </div>
          </div>
          <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            <div className="bg-[#DFDFDF] text-sm p-2 md:p-3 size-[36px] md:w-full md:h-[72px] text-[#CCCCCC] md:text-[20px] font-semibold">
              27
            </div>
            <div className="bg-[#DFDFDF] text-sm p-2 md:p-3 size-[36px] md:w-full md:h-[72px] text-[#CCCCCC] md:text-[20px] font-semibold">
              28
            </div>
            <div className="bg-[#DFDFDF] text-sm p-2 md:p-3 size-[36px] md:w-full md:h-[72px] text-[#CCCCCC] md:text-[20px] font-semibold">
              29
            </div>
            <div className="bg-[#DFDFDF] text-sm p-2 md:p-3 size-[36px] md:w-full md:h-[72px] text-[#CCCCCC] md:text-[20px] font-semibold">
              30
            </div>
            {Array.from({ length: 31 }, (_, index) => (
              <div
                key={index}
                className={`text-sm size-[36px] p-2 md:p-3 md:w-full md:h-[72px] rounded border ${
                  [0, 1, 3, 10, 14, 15, 16, 19].includes(index)
                    ? "text-[#999999] border-[#D7D7D7]"
                    : "border-[#F2542D] text-secondary"
                }`}
              >
                <div className="font-semibold mb-2">{index + 1}</div>
                <span
                  className={`hidden md:block ${
                    [0, 1, 3, 10, 14, 15, 16, 19].includes(index)
                      ? "text-[#999999]"
                      : "text-[#F2542D]"
                  }`}
                >
                  {[0, 1, 3, 10, 14, 15, 16, 19].includes(index)
                    ? "Occupé"
                    : "Libre"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <form className="bg-white mt-8 pb-10 space-y-4">
          <div className="flex items-center gap-4">
            <label
              htmlFor="name"
              className="block min-w-20 md:min-w-[120px] text-gray-600 font-semibold"
            >
              {content?.bloc_2_2.btn_1[0]}:
            </label>
            <input
              type="text"
              id="name"
              placeholder={content?.bloc_2_2.btn_1[1]}
              className="w-full border border-secondary rounded-full px-4 py-3 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <label
              htmlFor="email"
              className="block min-w-20 md:min-w-[120px] text-gray-600 font-semibold"
            >
              {content?.bloc_2_2.btn_2[0]}:
            </label>
            <input
              type="email"
              id="email"
              placeholder={content?.bloc_2_2.btn_2[1]}
              className="w-full border border-secondary rounded-full px-4 py-3 focus:outline-none"
            />
          </div>
          <div className="flex items-start gap-4">
            <label
              htmlFor="mess"
              className="block min-w-20 md:min-w-[120px] text-gray-600 font-semibold"
            >
              {content?.bloc_2_2.btn_3}:
            </label>
            <textarea
              id="mess"
              className="w-full border border-secondary rounded-full px-4 py-3 focus:outline-none"
            />
          </div>
          <div className="flex md:items-center gap-4">
            <label
              htmlFor="email"
              className="block min-w-20 md:min-w-[120px] text-gray-600 font-semibold"
            >
              {content?.bloc_2_2.btn_4[0]}:
            </label>
            <div className="flex-col md:flex items-center">
              <div className="flex">
                <File />
                <span className="text-[#1E88F9] text-[20px] font-medium pl-1 pr-4">
                  {content?.bloc_2_2.btn_4[1]}
                </span>
              </div>
              <span className="text-[#999999] text-[18px]">
                (*{content?.bloc_2_2.btn_4[2]})
              </span>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end items-center gap-4">
            <Button
              color="secondary"
              variant="outlined"
              className="!w-full md:!w-[160px]"
            >
              {content?.bloc_2_2.btn_5}
            </Button>
            <Button className="!w-full md:!w-[160px]" endIcon={<Send2 />}>
              {content?.bloc_2_2.btn_6}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
