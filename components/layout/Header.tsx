import Image from "next/image";
import { useMemo } from "react";

interface IHeaderProps {
  isSticky: boolean;
}
const Header = ({ isSticky }: IHeaderProps) => {
  return (
    <nav
      className="bg-white border-b-[1px] border-[#DEDEDE] px-[16px] py-[15px] sticky top-0 right-0 left-0 z-10 duration-300 transition-all"
    >
      <div className="flex items-center justify-between mx-6 bg-white sm:m-auto sm:container">
        <div className="w-[124px]">
          Logo
        </div>
        <div className="flex justify-center items-center gap-3.5">
          Right Menu
        </div>
      </div>
    </nav>
  );
};
export default Header;
