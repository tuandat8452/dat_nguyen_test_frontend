"use client";

import Banner from "@/features/banner";
import Block1 from "@/features/block1";
import Block2 from "@/features/block2";
import Block3 from "@/features/block3";
import Block4 from "@/features/block4";
import Block5 from "@/features/block5";
import Block6 from "@/features/block6";
import Footer from "@/features/footer";
import { LANGUAGES } from "@/utils/interfaces";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lang = localStorage.getItem("lang") as LANGUAGES;
    if (!lang) localStorage.setItem("lang", "en");
  }, []);
  return (
    <div className="w-screen">
      <div className="mx-auto overflow-hidden">
        <Banner />
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Footer />
      </div>
    </div>
  );
}
