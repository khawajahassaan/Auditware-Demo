import { FiChevronLeft, FiSearch, FiMessageSquare, FiClock, FiCheckCircle, FiLayout, FiSidebar, FiSettings, FiSend } from "react-icons/fi";
import Body from "./Body";

const MainBody = () => {
    return (
        <div className=" h-[100vh-35px] w-full flex flex-col overflow-hidden bg-[#fbecef]">
            <div className="flex justify-between items-center px-[20px] h-[55px]">

                <div className="flex items-center gap-[8px]">
                    <FiChevronLeft className="text-[#6b6a6b] text-[20px] cursor-pointer" /><span className="bg-[#e9e3e7] text-[#6b6a6b] px-[12px] py-[4px] rounded-full text-[12px] font-semibold border border-[#d2b8c7]">JLI/IAR/2025/82</span>
                    <h1 className="text-[#4a4a4a] font-bold text-[18px]">Anti-Fraud</h1>
                    <span className="bg-[#e6f0fa] text-[#0154aa] px-[10px] py-[4px] rounded-[6px] text-[12px] font-semibold">Execution in Progress</span>
                </div>

                <div className="flex items-center gap-[12px]">

                    <div className="relative flex items-center">
                        <FiSearch className="absolute left-[10px] text-[#a0a5b1] text-[16px]" />
                        <input type="text" placeholder="Search Entity, Process, Audit..." className="pl-[34px] pr-[12px] py-[6px] w-[280px] bg-white rounded-[8px] text-[13px] text-gray-700 focus:outline-none placeholder-[#a0a5b1]" />
                    </div>

                    <div className="flex items-center gap-[8px] cursor-pointer">
                        <div className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center"><FiMessageSquare className="text-[#4a4a4a] text-[16px]" /></div>
                        <div className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center"><FiClock className="text-[#4a4a4a] text-[16px]" /></div>
                        <div className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center"><FiCheckCircle className="text-[#4a4a4a] text-[16px]" /></div>
                        <div className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center"><FiLayout className="text-[#4a4a4a] text-[16px]" /></div>
                        <div className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center"><FiSidebar className="text-[#4a4a4a] text-[16px]" /></div>
                        <div className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center"><FiSettings className="text-[#4a4a4a] text-[16px]" /></div>
                    </div>

                    <button className="bg-[#01274e] text-white flex items-center gap-[8px] px-[16px] py-[6px] rounded-[8px] text-[13px] font-semibold ml-[4px] cursor-pointer"><FiSend className="text-[14px]" />Submit Execution For Approval</button>

                </div>
            </div>

            <Body />
        </div>
    );
}

export default MainBody;