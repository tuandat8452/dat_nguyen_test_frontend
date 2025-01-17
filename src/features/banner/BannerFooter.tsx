import { useTypedSelector } from "@/store";
import CrosshairOutline from "../../components/common/icons/CrosshairOutline";
import FishOutline from "../../components/common/icons/FishOutline";
import MountainOutline from "../../components/common/icons/MountainOutline";

export default function BannerFooter() {
  const { content } = useTypedSelector((state) => state.global);
  return (
    <div className="px-4 lg:px-[calc(32px)] gap-6 xl:gap-0 3xl:px-[calc(340px+80px)] absolute left-0 bottom-[40px] h-[96px] lg:h-[118px] 3xl:h-[116px] z-10 w-full ">
      <div className=" grid grid-cols-3 border-t border-[rgba(255, 255, 255, 0.3)]">
        <div className="w-full h-[100px] flex flex-col items-center justify-center py-5">
          <div className="size-8">
            <MountainOutline />
          </div>
          <div className="block 3xl:hidden mt-[18px] leading-6 h-6 text-[18px]">
            {content?.head_menu[0] && (
              <h2 className="font-bold text-[15px] text-white">
                {content?.head_menu[0]}
              </h2>
            )}
          </div>
        </div>
        <div className="w-full h-[100px] flex flex-col items-center justify-center py-5">
          <div className="size-8">
            <FishOutline />
          </div>
          <div className="block 3xl:hidden mt-[18px] leading-6 h-6 text-[18px]">
            {content?.head_menu[2] && (
              <h2 className="font-bold text-[15px] text-white">
                {content?.head_menu[2]}
              </h2>
            )}
          </div>
        </div>
        <div className="w-full h-[100px] flex flex-col items-center justify-center py-5">
          <div className="size-8">
            <CrosshairOutline />
          </div>
          <div className="block 3xl:hidden mt-[18px] leading-6 h-6 text-[18px]">
            {content?.head_menu[2] && (
              <h2 className="font-bold text-[15px] text-white">
                {content?.head_menu[2]}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
