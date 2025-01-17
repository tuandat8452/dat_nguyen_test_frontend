"use client";

import { useContent } from "@/utils/hook";
import Button from "../../components/common/button";
import ArrowRightUp from "../../components/common/icons/ArrowRightUp";
import Crosshair from "../../components/common/icons/Crosshair";
import Fish from "../../components/common/icons/Fish";
import Mountain from "../../components/common/icons/Mountain";
import { useEffect, useState } from "react";
import { LANGUAGES } from "@/utils/interfaces";
import Menu from "../../components/common/icons/Menu";
import { useAppDispatch } from "@/store";
import { setContent } from "@/globalSlice";

export default function Header() {
  const { content, refetch } = useContent();
  const dispatch = useAppDispatch();
  const [lang, setLang] = useState("en");
  const handleChange = (val: string) => {
    localStorage.setItem("lang", val);
    setLang(val);
    refetch && refetch();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const lang = localStorage.getItem("lang") as LANGUAGES;
    setLang(lang);
  }, [lang]);

  useEffect(() => {
    if (!!content) {
      dispatch(setContent(content));
    }
  }, [content]);

  return (
    <div className="px-4 lg:px-[calc(32px)] 2xl:px-[340px] flex absolute top-0 left-0 z-10 w-full items-center justify-between h-[72px] bg-gradient-to-r from-[rgba(86,44,44,0.7)] to-[rgba(86,44,44,0.7)]">
      <div className="flex gap-[80px]">
        <h2 className="font-bold text-[15px] text-white">LOGO SAMPLE</h2>
        <div className="hidden gap-6 lg:flex">
          {content?.head_menu.slice(0, 4).map((item, index: number) => (
            <h2 key={index} className="font-bold text-[15px] text-white">
              {item}
            </h2>
          ))}
        </div>
      </div>
      <div className="lg:flex items-center gap-5 hidden">
        <div className="flex items-center gap-4">
          <Mountain />
          <Fish />
          <Crosshair />
        </div>
        <Button fullWidth>
          <span className="flex gap-2 items-center">
            <span className="2xl:hidden block">Contactez-nous</span>
            <ArrowRightUp />
          </span>
        </Button>
        <select
          value={lang}
          onChange={(e) => handleChange(e.target.value)}
          className="mt-1 block w-[80px] rounded-lg border border-[rgba(255, 255, 255, 0.3)] bg-white py-2 px-4 text-[#562C2C] shadow-sm focus:border-white focus:bg-white focus:outline-none sm:text-sm"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </div>
      <div className="block lg:hidden">
        <Menu />
      </div>
    </div>
  );
}
