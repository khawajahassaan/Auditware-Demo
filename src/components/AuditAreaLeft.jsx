import { Checkbox } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { RiArrowDownSLine } from "react-icons/ri";
import { BsDashCircleFill, BsCheckCircleFill } from "react-icons/bs";
import auditData from "../data/auditData.json";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';


const AuditAreaLeft = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = auditData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-[#fbf6f9] w-[360px] h-[calc(100vh-195px)] flex flex-col rounded-bl-[12px]">
            <div className="border-r border-b border-[#e2e2e2] w-[360px]">
                <div className="ml-[12px] flex items-center h-[50px] gap-[6px] items-center">
                    <Checkbox />
                    <RiArrowDownSLine className="text-[20px] cursor-pointer mr-[6px]" />
                    <div className="relative flex items-center">
                        <FiSearch className="absolute left-[10px] text-[#a0a5b1] text-[16px]" />
                        <input type="text" placeholder="Search Entity, Process, Audit..." className="pl-[34px] pr-[12px] py-[6px] w-[280px] bg-white rounded-[8px] text-[13px] text-gray-700 border-[1px] border-[#e2e2e2] focus:outline-none placeholder-[#a0a5b1]" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className="border-r border-[#e2e2e2] w-[360px] bg-[#fbf6f9] flex-1">
                <div className="bg-[#fbf6f9] border-b border-[#e2e2e2] overflow-hidden">
                    <div className="pt-[16px] pb-[8px] text-[12px] text-[#616161] font-semibold px-[16px]">Audit Area</div>

                    {filteredData.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => navigate(`/audit/${item.id}`)}
                            className={`flex items-center justify-between py-[12px] pr-[16px] cursor-pointer ${index !== filteredData.length - 1 ? 'border-b border-[#e2e2e2]' : ''} ${id === item.id || (!id && item.selected) ? 'bg-[#edf5fd] border-l-[4px] border-l-[#0f6cbd] pl-[12px]' : 'bg-white pl-[16px]'}`}
                        >
                            <div className="flex items-center gap-[12px]">
                                <Checkbox className="scale-110" />
                                <span className="bg-[#f0f0f0] text-[#616161] px-[8px] py-[2px] rounded-[12px] text-[11px] font-semibold border border-[#d1d1d1]">{item.id}</span>
                                <div className="flex flex-col" style={{ lineHeight: '0.5' }}>
                                    <span className="text-[14px] text-[#333333] font-medium leading-tight">{item.title}</span>
                                    <span className="text-[12px] text-[#a0a0a0] mt-[2px]">{item.date}</span>
                                </div>
                            </div>
                            {item.status === 'completed' ? (
                                <BsCheckCircleFill className="text-[#f5a623] text-[18px]" />
                            ) : (
                                <BsDashCircleFill className="text-[#0f6cbd] text-[18px]" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AuditAreaLeft;