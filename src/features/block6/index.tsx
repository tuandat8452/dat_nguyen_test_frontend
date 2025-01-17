import { useTypedSelector } from "@/store";
import React from "react";
import Button from "../../components/common/button";

export default function Block6() {
  const { content } = useTypedSelector((state) => state.global);
  return (
    <div className='w-screen min-h-[666px] bg-[url("/assets/image_9.png")] bg-cover bg-no-repeat flex items-center md:items-start justify-center'>
      <div className="pt-[70px] text-center">
        <h2 className="text-secondary text-[24px] md:text-[32px] lg:text-[40px] xl:text-[52px] font-semibold">
          {content?.bloc_6.title}
        </h2>
        <h2 className="text-[rgba(86,44,44,0.50)] text-[24px] md:text-[32px] lg:text-[40px] xl:text-[52px] font-semibold leading-6">
          {content?.bloc_6.subtitle}
        </h2>
        <p className="mb-10 mt-6 text-secondary text-sm md:text-[16px] lg:text-[20px] xl:text-[24px]">
          {content?.bloc_6.text}
        </p>
        <div className="flex justify-center">
          <Button width={124}>{content?.bloc_6.button}</Button>
        </div>
      </div>
    </div>
  );
}
