import { TbMessage2Filled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";

import logo from "../assets/logo.svg";

const TopBar = () => {
    return (
        <div className="flex justify-between items-center h-[35px] bg-[#f5f1f6]">
            <div className="flex items-center gap-[8px] pl-[10px]">
                <img src={logo} className="h-[25px] w-[25px]" />
                <span className="text-gray-500 font-bold text-[16px]">Audit Engagements</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-[12px] ">
                    <img src="https://media.licdn.com/dms/image/v2/C5622AQGrLZrAxc2NJA/feedshare-shrink_800/feedshare-shrink_800/0/1612341243005?e=2147483647&v=beta&t=R37XFJu0AGCV61JL59OEV3C54bVTae_Kv9shcw_GIb8" className="w-[25px] h-[25px] rounded-[8px] bg-white shadow-sm" />
                    <span className="text-gray-600 font-semibold text-[16px]">Standard Chartered</span>
                </div>

                <span className="text-[#d2b8c7] font-light text-[16px]"> | </span>

                <div className="flex items-center gap-[20px]">
                    <TbMessage2Filled className="text-[20px]" style={{ color: "#4a4a4a" }} />
                    <FaBell className="text-[20px]" style={{ color: "#4a4a4a" }} />
                </div>

                <img src="https://i.pravatar.cc/150?img=3" className="w-[25px] h-[25px] rounded-full shadow-sm mx-[6px] cursor-pointer " />
            </div>
        </div>
    );
}

export default TopBar;