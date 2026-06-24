import { useLocation } from "react-router-dom";

const AuditProgram = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex items-center h-[45px] gap-[6px] border-b border-[#e2e2e2]">
            <button
                onClick={() => setActiveTab('Audit Program')}
                className={`ml-[10px] flex items-center gap-[8px] px-[16px] py-[6px] rounded-[8px] text-[13px] font-semibold cursor-pointer ${activeTab === 'Audit Program' ? 'bg-[#0f6cbd] text-white' : 'bg-[#e6edf5] text-gray-500 hover:bg-[#d6e4f3]'}`}
            >
                Audit Program
            </button>
            <button
                onClick={() => setActiveTab('Observation')}
                className={`flex items-center gap-[8px] px-[16px] py-[6px] rounded-[8px] text-[13px] font-medium cursor-pointer ${activeTab === 'Observation' ? 'bg-[#0f6cbd] text-white' : 'bg-[#e6edf5] text-gray-500 hover:bg-[#d6e4f3]'}`}
            >
                Observation
            </button>
        </div>
    );
}

export default AuditProgram;