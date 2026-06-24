import { FiHome, FiGlobe, FiAlertTriangle, FiCheckSquare, FiCalendar, FiRefreshCcw, FiClock, FiCheckCircle, FiFileText, FiUser, FiBarChart2, FiMenu } from "react-icons/fi";
import { MdGridView } from "react-icons/md";

const LeftBar = () => {
    return (
        <div className="bg-[#f5f1f6] w-[40px] h-[calc(100vh-35px)] flex flex-col justify-between items-center  text-[#bfc3cd] text-[20px] py-[12px]">
            <div className="flex flex-col gap-[12px] items-center cursor-pointer">
                <FiHome />
                <FiGlobe />
                <FiAlertTriangle />
                <FiCheckSquare />
                <FiCalendar />
                <div className="bg-white rounded-[10px] w-[32px] h-[32px] flex items-center justify-center shadow-sm">
                    <MdGridView className="text-[#1d4ed8]" />
                </div>
                <FiRefreshCcw />
                <FiClock />
                <FiCheckCircle />
                <FiFileText />
                <FiUser />
                <FiBarChart2 />
            </div>

            <div className="flex flex-col gap-[12px] items-center">
                <div className="w-[20px] h-[20px] border-[1.5px] border-[#bfc3cd] rounded-[6px] flex items-center justify-center text-[12px] font-medium cursor-pointer">
                    ?
                </div>

                <img src="https://i.pravatar.cc/150?img=3" className="w-[24px] h-[24px] rounded-full cursor-pointer" />
                <div className="w-[100%] border-t border-[#d2b8c7]"></div>
                <FiMenu className="text-[#333] text-[16px] cursor-pointer" />
            </div>
        </div>
    );
}

export default LeftBar;