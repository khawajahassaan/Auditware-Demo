import Navigation from "./Navigation";
import AuditProgram from "./AuditProgram";
import AuditArea from "./AuditArea";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Body = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('Audit Program');

    return (
        <div className=" w-[calc(100%-40px)] h-[90%] bg-white rounded-[10px] ml-[12px] mr-[12px]">
            <Navigation />
            {(location.pathname === '/' || location.pathname.startsWith('/audit/')) && (
                <>
                    <AuditProgram activeTab={activeTab} setActiveTab={setActiveTab} />
                    {activeTab === 'Audit Program' ? (
                        <AuditArea />
                    ) : (
                        <div className="flex-1 bg-[#fbf6f9] flex items-center justify-center h-[calc(100vh-195px)] rounded-bl-[12px]">
                            <div className="text-gray-400 text-[16px] font-medium">Observation Area</div>
                        </div>
                    )}
                </>
            )}

            {location.pathname === '/planning' && (
                <div className="flex items-center justify-center h-full text-gray-500">
                    <h2>Planning Area</h2>
                </div>
            )}

            {location.pathname === '/reporting' && (
                <div className="flex items-center justify-center h-full text-gray-500">
                    <h2>Reporting Area</h2>
                </div>
            )}
        </div>
    );
}

export default Body;
