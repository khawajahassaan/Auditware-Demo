import { FiChevronDown, FiMail } from "react-icons/fi";
import { BiHistory } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";


const Navigation = () => {
    const location = useLocation();
    return (
        <div className="border-b border-[#e2e2e2] h-[48px] flex justify-between items-center pr-[16px] text-[16px]">
            <div className="flex items-center gap-[8px] h-full">
                <Link to="/planning" className={`flex items-center h-full cursor-pointer ml-[20px] no-underline ${location.pathname === '/planning' ? 'text-[#0f6cbd] font-semibold border-b-[2px] border-[#0f6cbd]' : 'text-gray-400'}`}>Planning</Link>
                <Link to="/" className={`flex items-center h-full cursor-pointer ml-[10px] no-underline ${(location.pathname === '/' || location.pathname.startsWith('/audit/')) ? 'text-[#0f6cbd] font-semibold border-b-[2px] border-[#0f6cbd]' : 'text-gray-400'}`}>Execution</Link>
                <Link to="/reporting" className={`flex items-center h-full cursor-pointer ml-[10px] no-underline ${location.pathname === '/reporting' ? 'text-[#0f6cbd] font-semibold border-b-[2px] border-[#0f6cbd]' : 'text-gray-400'}`}>Reporting   </Link>
                <div className="h-[20px] w-[1px] bg-[#d1d1d1] mx-1"></div>
                <div className="flex items-center gap-1.5 text-gray-400 h-full cursor-pointer"><BiHistory className="text-[16px]" /> Summary</div>
                <div className="h-[20px] w-[1px] bg-[#d1d1d1] mx-1"></div>
                <div className="flex items-center gap-1.5 text-gray-400 h-full cursor-pointer"><BsLightningCharge className="text-[14px]" /> Quick Links<FiChevronDown className="text-[14px] ml-0.5" /></div>
            </div>

            <div className="flex items-center">
                <button className="h-full flex items-center gap-1.5 text-[#01274e] border border-[#d1d1d1] rounded-[4px] px-3 bg-white">
                    <FiMail className="text-[14px]" />
                    <span className="font-semibold">Notify</span>
                    <div className="bg-[#d1d1d1] w-[2px] h-[30px]"></div>
                    <FiChevronDown className="text-[14px] ml-1" />
                </button>
            </div>
        </div>
    );
}

export default Navigation;