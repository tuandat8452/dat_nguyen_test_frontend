import Image from "next/image";
import React from "react";
import Header from "../header";
import BannerFooter from "./BannerFooter";
import Chat from "../../components/common/icons/Chat";
import Button from "../../components/common/button";

export default function Banner() {
  return (
    <div className="h-full w-full relative">
      <Header />
      <Image
        src="/assets/banner-img.png"
        className="object-cover h-[812px] lg:h-[834px] 3xl:h-[850px] 3xl:w-screen"
        alt="banner"
        width={1920}
        height={600}
      />
      <BannerFooter />
      <div className="absolute xl:right-[160px] bottom-5 right-4 lg:bottom-[40px] lg:right-[24px] xl:bottom-[92px] z-[11]">
        <Button
          variant="default"
          color="primary"
          roundedFull
          width={40}
          height={40}
        >
          <Chat />
        </Button>
      </div>
    </div>
  );
}
