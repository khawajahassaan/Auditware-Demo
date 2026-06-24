import { FiChevronDown, FiChevronRight, FiUser, FiCalendar, FiDownload, FiPaperclip, FiMessageSquare, FiPlus, FiMoreHorizontal, FiMaximize2, FiSave, FiSearch } from "react-icons/fi";
import { BsCheckCircleFill, BsLightningCharge } from "react-icons/bs";
import { useParams } from "react-router-dom";
import auditData from "../data/auditData.json";

const AuditAreaRight = () => {
    const { id } = useParams();
    const currentAudit = auditData.find(item => item.id === id) || auditData.find(item => item.selected);

    if (!currentAudit) {
        return (
            <div className="flex-1 bg-[#fbf6f9] flex items-center justify-center h-[calc(100vh-195px)]">
                <div className="text-gray-400 text-[16px] font-medium flex flex-col items-center gap-2">
                    <FiSearch className="text-[32px] text-gray-300" />
                    <span>Please select an audit from the left to view details</span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 bg-[#fbf6f9] overflow-y-auto h-[calc(100vh-195px)]">

            <div className="flex items-center justify-between px-[20px] py-[8px] border-b border-[#e2e2e2] bg-[#fbf6f9]">
                <div className="flex items-center gap-[12px]">
                    <span className="px-[10px] py-[2px] bg-[#f0f0f0] text-[#616161] text-[12px] rounded-[12px] font-semibold border border-[#d1d1d1]">{currentAudit?.id}</span>
                    <div className="text-[14px] text-[#4a4a4a]">
                        <span className="font-semibold text-[#616161]">Audit Area</span> <span className="text-[#d1d1d1] mx-1">|</span> <span className="font-semibold text-[#333333]">{currentAudit?.title || 'Compliance to the institutional Policies and Procedures'}</span>
                    </div>
                </div>
                <div className="flex items-center gap-[16px]">
                    <div className="flex items-center gap-[6px] text-[13px] text-[#4a4a4a] font-semibold cursor-pointer">
                        <BsCheckCircleFill className="text-[#f5a623] text-[14px]" /> Work in Progress
                    </div>
                    <button className="flex items-center gap-[6px] text-[13px] text-[#4a4a4a] border border-[#d1d1d1] rounded-[6px] px-[12px] py-[6px] font-medium bg-white hover:bg-gray-50 shadow-sm">
                        <FiDownload className="text-[14px] text-[#616161]" /> Working Paper
                    </button>
                    <button className="flex items-center gap-[6px] text-[13px] text-[#4a4a4a] border border-[#d1d1d1] rounded-[6px] px-[12px] py-[6px] font-medium bg-white hover:bg-gray-50 shadow-sm">
                        <BsCheckCircleFill className="text-[#4caf50] text-[14px]" /> Submit for Review
                    </button>
                    <button className="flex items-center gap-[6px] text-[13px] text-white bg-[#01274e] rounded-[6px] px-[16px] py-[6px] font-semibold hover:bg-[#011f3d] shadow-sm">
                        <FiSave className="text-[14px]" /> Save
                    </button>
                </div>
            </div>

            <div className="bg-[#fbf6f9]">
                <div className="px-[20px] py-[16px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[12px]">
                            <FiChevronDown className="text-[#616161] text-[16px] cursor-pointer" />
                            <span className="px-[10px] py-[2px] bg-[#f0f0f0] text-[#616161] text-[12px] rounded-[12px] font-semibold border border-[#d1d1d1]">SA-401</span>
                            <div className="text-[14px] text-[#4a4a4a]">
                                <span className="font-semibold text-[#616161]">Sub - Area</span> <span className="text-[#d1d1d1] mx-1">|</span> <span className="font-medium">Approved Polices & Procedures and its effective impleme...</span>
                            </div>
                            <div className="flex items-center gap-[6px] ml-[8px]">
                                <span className="text-[13px] font-semibold text-[#0f6cbd]">Objective</span>
                                <span className="bg-[#e6edf5] text-[#0f6cbd] text-[12px] font-bold px-[8px] py-[2px] rounded-[12px]">2</span>
                            </div>
                            <FiMaximize2 className="text-[#a0a0a0] text-[14px] cursor-pointer ml-[4px]" />
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <div className="flex items-center gap-[6px] border border-[#d1d1d1] rounded-[6px] px-[10px] py-[4px] text-[13px] text-[#4a4a4a] bg-white">
                                <FiUser className="text-[#a0a0a0]" /> 1 <span className="text-[#a0a0a0] ml-[4px]">+</span>
                            </div>
                            <div className="flex items-center gap-[6px] border border-[#d1d1d1] rounded-[6px] px-[8px] py-[4px] text-[13px] text-[#4a4a4a] cursor-pointer bg-white">
                                {id === 'A-424' && (
                                    <>
                                        <FiCalendar className="text-[#a0a0a0]" /> 1 Jan '27 - 5 Feb '27 <FiChevronDown className="text-[#a0a0a0] ml-[4px]" />
                                    </>
                                )}
                                {id === 'A-425' && (
                                    <>
                                        <FiCalendar className="text-[#a0a0a0]" /> 1 Jan '25 - 8 Feb '26 <FiChevronDown className="text-[#a0a0a0] ml-[4px]" />
                                    </>
                                )}
                                {id === 'A-426' && (
                                    <>
                                        <FiCalendar className="text-[#a0a0a0]" /> 10 May '26 - 8 Feb '26 <FiChevronDown className="text-[#a0a0a0] ml-[4px]" />
                                    </>
                                )}
                                {id === 'A-427' && (
                                    <>
                                        <FiCalendar className="text-[#a0a0a0]" /> 10 May '26 - 23 Feb '27 <FiChevronDown className="text-[#a0a0a0] ml-[4px]" />
                                    </>
                                )}
                                {id === 'A-428' && (
                                    <>
                                        <FiCalendar className="text-[#a0a0a0]" /> 10 May '25 - 23 Feb '24 <FiChevronDown className="text-[#a0a0a0] ml-[4px]" />
                                    </>
                                )}
                            </div>
                            <div className="flex items-center gap-[6px] border border-[#d1d1d1] rounded-[6px] px-[10px] py-[4px] text-[13px] text-[#0f6cbd] cursor-pointer font-medium bg-[#fcfcfc]">
                                <FiDownload className="text-[#0f6cbd]" /> 3 Samples <FiChevronDown className="text-[#0f6cbd] ml-[4px]" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-[20px] ml-[6px] border-l-[2px] border-[#e2e2e2] pl-[20px]">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-[12px]">
                                <FiChevronDown className="text-[#616161] text-[16px] mt-[4px] cursor-pointer" />
                                <span className="px-[10px] py-[2px] bg-[#f0f0f0] text-[#616161] text-[12px] rounded-[12px] font-semibold whitespace-nowrap mt-[2px] border border-[#d1d1d1]">O...-02-01</span>
                                <div className="text-[13px] text-[#4a4a4a] leading-[22px]">
                                    <span className="font-semibold text-[#616161]">Objective</span> <span className="text-[#d1d1d1] mx-1">|</span> Does institutional P&P/SOP/Guideline been developed, shared and stakeholders are being oriented for standardized<br /> implementation and administering the Procurement of Goods & The related processes in the regions / fields?
                                </div>
                            </div>
                            <div className="flex items-center gap-[8px] whitespace-nowrap ml-[20px] mt-[2px]">
                                <span className="text-[13px] font-semibold text-[#0f6cbd]">Test Step</span>
                                <span className="bg-[#e6edf5] text-[#0f6cbd] text-[12px] font-bold px-[8px] py-[2px] rounded-[12px]">2</span>
                            </div>
                        </div>

                        <div className="mt-[20px] bg-white border border-[#e2e2e2] rounded-[8px] p-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-[16px]">
                                <div className="flex items-center gap-[12px]">
                                    <FiChevronDown className="text-[#616161] text-[16px] cursor-pointer" />
                                    <span className="px-[10px] py-[2px] bg-[#f0f0f0] text-[#616161] text-[12px] rounded-[12px] font-semibold border border-[#d1d1d1]">AP-006</span>
                                    {id === 'A-424' && (
                                        <div className="text-[14px] text-[#4a4a4a] font-semibold">
                                            Test Step / Audit Procedure 01
                                        </div>
                                    )}
                                    {id === 'A-425' && (
                                        <div className="text-[14px] text-[#4a4a4a] font-semibold">
                                            Test Step / Audit Procedure 02
                                        </div>
                                    )}
                                    {id === 'A-426' && (
                                        <div className="text-[14px] text-[#4a4a4a] font-semibold">
                                            Test Step / Audit Procedure 03
                                        </div>
                                    )}
                                    {id === 'A-427' && (
                                        <div className="text-[14px] text-[#4a4a4a] font-semibold">
                                            Test Step / Audit Procedure 04
                                        </div>
                                    )}
                                    {id === 'A-428' && (
                                        <div className="text-[14px] text-[#4a4a4a] font-semibold">
                                            Test Step / Audit Procedure 05
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-[20px]">
                                    <div className="flex items-center gap-[8px]">
                                        <span className="text-[13px] text-[#616161] font-medium">Test Result <span className="text-red-500">*</span></span>
                                        <div className="flex items-center justify-between w-[140px] bg-[#f8f9fc] border border-[#e2e2e2] rounded-[6px] px-[12px] py-[6px] cursor-pointer">
                                            <span className="text-[13px] text-[#a0a0a0]">Select</span>
                                            <FiChevronDown className="text-[#a0a0a0]" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[14px] text-[#616161]">
                                        <FiPaperclip className="text-[16px] cursor-pointer" />
                                        <div className="flex items-center cursor-pointer">
                                            <span className="bg-[#f0f0f0] text-[12px] font-bold px-[8px] py-[2px] rounded-full border border-[#d1d1d1]">2</span>
                                            <FiChevronDown className="text-[14px] -ml-[4px] bg-white rounded-full" />
                                        </div>
                                        <div className="relative">
                                            <FiMessageSquare className="text-[16px] cursor-pointer ml-[2px]" />
                                            <div className="absolute -top-[2px] -right-[2px] w-[6px] h-[6px] bg-red-500 rounded-full border border-white"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[16px] text-[13px] text-[#4a4a4a] leading-[24px]">
                                <ol className="list-decimal pl-[18px] space-y-[4px]">
                                    <li>Review the organization's annual compliance training plan and ensure it covers all regulatory requirements.</li>
                                    <li>Verify that compliance training sessions are scheduled and conducted as per approved timelines.</li>
                                    <li>Check training attendance records to confirm participation of all mandatory employees.</li>
                                    <li>Review training materials to ensure they are up-to-date and aligned with current regulations.</li>
                                </ol>
                            </div>


                            <div className="mt-[20px] bg-[#f4f8fc] border border-[#9fc3e6] rounded-[6px] p-[16px] flex items-start gap-[16px] relative shadow-sm">
                                <div className="bg-[#8bb4df] bg-opacity-30 text-[#0f6cbd] text-[12px] font-bold px-[8px] py-[4px] rounded-[4px] whitespace-nowrap">Workdone</div>
                                <div className="text-[13px] text-[#4a4a4a] leading-[22px] pr-[20px]">
                                    The procedures have been successfully completed ahead of the due date, ensuring timely delivery. All tasks were carried out in accordance with established quality standards and best practices. The outcomes reflect a strong commitment to efficiency, accuracy, and high-quality execution.
                                </div>
                                <div className="absolute right-[12px] bottom-[12px] text-[#a0a0a0] cursor-pointer border border-[#d1d1d1] rounded-[4px] p-[2px] bg-white">
                                    <BsLightningCharge className="text-[12px]" />
                                </div>
                            </div>

                            <div className="mt-[24px] border border-[#e2e2e2] rounded-[8px] overflow-hidden shadow-sm">
                                <div className="flex items-center justify-between px-[16px] py-[12px] bg-white border-b border-[#e2e2e2]">
                                    <div className="text-[14px] font-semibold text-[#4a4a4a]">Observation</div>
                                    <div className="flex items-center gap-[12px]">
                                        <button className="flex items-center gap-[6px] text-[#0f6cbd] text-[13px] font-semibold cursor-pointer mr-[4px]">
                                            <FiPlus className="text-[16px]" /> Observation
                                        </button>
                                        <div className="bg-[#e6edf5] text-[#0f6cbd] text-[12px] font-semibold px-[8px] py-[4px] rounded-[4px]">Shift + O</div>
                                        <span className="bg-[#e6edf5] text-[#0f6cbd] text-[12px] font-bold px-[10px] py-[4px] rounded-[16px]">2</span>
                                    </div>
                                </div>

                                <div className="w-full overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[700px]">
                                        <thead>
                                            <tr className="border-b border-[#e2e2e2] text-[#0f6cbd] text-[13px] font-semibold bg-[#fcfcfc]">
                                                <th className="py-[12px] px-[16px] w-[40px]"><div className="w-[16px] h-[16px] border-[1.5px] border-[#d1d1d1] rounded-[4px]"></div></th>
                                                <th className="py-[12px] px-[12px] w-[90px]">ID</th>
                                                <th className="py-[12px] px-[12px]">Observation Title</th>
                                                <th className="py-[12px] px-[12px] w-[110px]">Risk Rating</th>
                                                <th className="py-[12px] px-[12px] w-[110px]">Significant</th>
                                                <th className="py-[12px] px-[12px] w-[110px]">Reportable</th>
                                                <th className="py-[12px] px-[12px] w-[140px]">Workflow Status</th>
                                                <th className="py-[12px] px-[16px] w-[70px] text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[13px] text-[#4a4a4a] bg-white">
                                            <tr className="border-b border-[#e2e2e2]">
                                                <td className="py-[12px] px-[16px]"><div className="w-[16px] h-[16px] border-[1.5px] border-[#d1d1d1] rounded-[4px]"></div></td>
                                                <td className="py-[12px] px-[12px] text-[#0f6cbd] font-semibold underline cursor-pointer">1.0.2.3</td>
                                                <td className="py-[12px] px-[12px]">
                                                    <div className="bg-[#e6edf5] border border-[#9fc3e6] rounded-[4px] h-[32px] w-full max-w-[320px] flex items-center px-[10px]">
                                                        <span className="w-[1px] h-[18px] bg-[#0f6cbd] animate-pulse"></span>
                                                    </div>
                                                </td>
                                                <td className="py-[12px] px-[12px] text-[#a0a0a0] font-medium">-</td>
                                                <td className="py-[12px] px-[12px] text-[#a0a0a0] font-medium">-</td>
                                                <td className="py-[12px] px-[12px] text-[#a0a0a0] font-medium">-</td>
                                                <td className="py-[12px] px-[12px]"></td>
                                                <td className="py-[12px] px-[16px] text-center"><FiMoreHorizontal className="text-[#a0a0a0] text-[16px] mx-auto cursor-pointer" /></td>
                                            </tr>
                                            <tr>
                                                <td className="py-[12px] px-[16px]"><div className="w-[16px] h-[16px] border-[1.5px] border-[#d1d1d1] rounded-[4px]"></div></td>
                                                <td className="py-[12px] px-[12px] text-[#0f6cbd] font-semibold underline cursor-pointer">1.0.2.4</td>
                                                <td className="py-[12px] px-[12px] font-medium text-[#2d2d2d]">Recruitment & Selection</td>
                                                <td className="py-[12px] px-[12px] font-medium text-[#2d2d2d]">Low</td>
                                                <td className="py-[12px] px-[12px] font-medium text-[#2d2d2d]">Yes</td>
                                                <td className="py-[12px] px-[12px] font-medium text-[#2d2d2d]">Yes</td>
                                                <td className="py-[12px] px-[12px]">
                                                    <span className="bg-[#e6edf5] text-[#0f6cbd] text-[12px] font-bold px-[10px] py-[4px] rounded-[12px]">Draft</span>
                                                </td>
                                                <td className="py-[12px] px-[16px] text-center"><FiMoreHorizontal className="text-[#a0a0a0] text-[16px] mx-auto cursor-pointer" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[16px] bg-white border border-[#e2e2e2] rounded-[8px] p-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-[16px]">
                                <div className="flex items-center gap-[12px]">
                                    <FiChevronDown className="text-[#616161] text-[16px] cursor-pointer" />
                                    <span className="px-[10px] py-[2px] bg-[#f0f0f0] text-[#616161] text-[12px] rounded-[12px] font-semibold border border-[#d1d1d1]">AP-007</span>
                                    <div className="text-[14px] text-[#4a4a4a] font-semibold">
                                        Test Step / Audit Procedure 02
                                    </div>
                                </div>
                                <div className="flex items-center gap-[20px]">
                                    <div className="flex items-center gap-[8px]">
                                        <span className="text-[13px] text-[#616161] font-medium">Test Result <span className="text-red-500">*</span></span>
                                        <div className="flex items-center justify-between w-[140px] bg-[#f0f0f0] border border-[#e2e2e2] rounded-[6px] px-[12px] py-[6px] cursor-pointer">
                                            <span className="text-[13px] text-[#4a4a4a] font-semibold">Effective</span>
                                            <FiChevronDown className="text-[#a0a0a0]" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[14px] text-[#616161]">
                                        <FiPaperclip className="text-[16px] cursor-pointer" />
                                        <div className="relative">
                                            <FiMessageSquare className="text-[16px] cursor-pointer" />
                                            <div className="absolute -top-[2px] -right-[2px] w-[6px] h-[6px] bg-red-500 rounded-full border border-white"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[16px] text-[13px] text-[#4a4a4a] leading-[24px]">
                                <ol className="list-decimal pl-[18px]">
                                    <li>Review the organization's annual compliance training plan and ensure it covers all regulatory requirements.</li>
                                </ol>
                                <div className="text-[#0f6cbd] font-semibold mt-[12px] cursor-pointer flex items-center gap-[4px] hover:underline"><FiPlus className="text-[14px]" /> Add Workdone</div>
                            </div>

                            <div className="mt-[24px] border border-[#e2e2e2] rounded-[8px] overflow-hidden shadow-sm">
                                <div className="flex items-center justify-between px-[16px] py-[12px] bg-white">
                                    <div className="text-[14px] font-semibold text-[#4a4a4a]">Observation</div>
                                    <div className="flex items-center gap-[12px]">
                                        <button className="flex items-center gap-[6px] text-[#0f6cbd] text-[13px] font-semibold cursor-pointer mr-[4px]">
                                            <FiPlus className="text-[16px]" /> Observation
                                        </button>
                                        <div className="bg-[#e6edf5] text-[#0f6cbd] text-[12px] font-semibold px-[8px] py-[4px] rounded-[4px]">Shift + O</div>
                                        <span className="bg-[#f0f0f0] text-[#a0a0a0] text-[12px] font-bold px-[10px] py-[4px] rounded-[16px]">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[20px] flex items-center justify-between border-t border-[#e2e2e2] pt-[20px]">
                            <div className="flex items-start gap-[12px]">
                                <FiChevronRight className="text-[#a0a0a0] text-[16px] mt-[4px] cursor-pointer" />
                                <span className="px-[10px] py-[2px] bg-[#f0f0f0] text-[#a0a0a0] text-[12px] rounded-[12px] font-semibold whitespace-nowrap mt-[2px] border border-[#e2e2e2]">O...-02-02</span>
                                <div className="text-[13px] text-[#616161] leading-[22px]">
                                    <span className="font-semibold">Objective</span> <span className="text-[#d1d1d1] mx-1">|</span> Does compliance made to all relevant clauses of policies and procedures effecting the process of procurement<br /> of Goods and Services?
                                </div>
                            </div>
                            <div className="flex items-center gap-[8px] whitespace-nowrap ml-[20px] mt-[2px]">
                                <span className="text-[13px] font-semibold text-[#616161]">Test Step</span>
                                <span className="bg-[#f0f0f0] text-[#616161] text-[12px] font-bold px-[8px] py-[2px] rounded-[12px]">0</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-[20px] py-[16px] border-t border-[#e2e2e2] flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                        <FiChevronRight className="text-[#616161] text-[16px] cursor-pointer" />
                        <span className="px-[10px] py-[2px] bg-[#f0f0f0] text-[#616161] text-[12px] rounded-[12px] font-semibold border border-[#d1d1d1]">SA-402</span>
                        <div className="text-[14px] text-[#4a4a4a]">
                            <span className="font-semibold text-[#616161]">Sub - Area</span> <span className="text-[#d1d1d1] mx-1">|</span> <span className="font-medium text-[#616161]">Procurement Planning</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <div className="flex items-center gap-[6px] border border-[#d1d1d1] rounded-[6px] px-[10px] py-[4px] text-[13px] text-[#4a4a4a] bg-white">
                            <FiUser className="text-[#a0a0a0]" /> 1 <span className="text-[#a0a0a0] ml-[4px]">+</span>
                        </div>
                        <div className="flex items-center gap-[6px] border border-[#d1d1d1] rounded-[6px] px-[10px] py-[4px] text-[13px] text-[#4a4a4a] cursor-pointer bg-white">
                            <FiCalendar className="text-[#a0a0a0]" /> 1 Jan '27 - 5 Feb '27 <FiChevronDown className="text-[#a0a0a0] ml-[4px]" />
                        </div>
                        <div className="flex items-center gap-[6px] border border-[#d1d1d1] rounded-[6px] px-[10px] py-[4px] text-[13px] text-[#0f6cbd] cursor-pointer font-medium bg-[#fcfcfc]">
                            <FiDownload className="text-[#0f6cbd]" /> 3 Samples <FiChevronDown className="text-[#0f6cbd] ml-[4px]" />
                        </div>
                    </div>
                </div>

                <div className="px-[20px] py-[16px] border-t border-[#e2e2e2] flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                        <FiChevronRight className="text-[#616161] text-[16px] cursor-pointer" />
                        <span className="px-[10px] py-[2px] bg-[#f0f0f0] text-[#616161] text-[12px] rounded-[12px] font-semibold border border-[#d1d1d1]">SA-403</span>
                        <div className="text-[14px] text-[#4a4a4a]">
                            <span className="font-semibold text-[#616161]">Sub - Area</span> <span className="text-[#d1d1d1] mx-1">|</span> <span className="font-medium text-[#616161]">Need Analysis</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <FiMaximize2 className="text-[#a0a0a0] text-[14px] cursor-pointer ml-[4px]" />
                        <div className="flex items-center gap-[6px] border border-[#d1d1d1] rounded-[6px] px-[10px] py-[4px] text-[13px] text-[#4a4a4a] bg-white">

                            <FiUser className="text-[#a0a0a0]" /> 1 <span className="text-[#a0a0a0] ml-[4px]">+</span>
                        </div>
                        <div className="flex items-center gap-[6px] border border-[#d1d1d1] rounded-[6px] px-[10px] py-[4px] text-[13px] text-[#4a4a4a] cursor-pointer bg-white">
                            <FiCalendar className="text-[#a0a0a0]" /> 1 Jan '27 - 5 Feb '27 <FiChevronDown className="text-[#a0a0a0] ml-[4px]" />
                        </div>
                        <div className="flex items-center gap-[6px] border border-[#d1d1d1] rounded-[6px] px-[10px] py-[4px] text-[13px] text-[#0f6cbd] cursor-pointer font-medium bg-[#fcfcfc]">
                            <FiDownload className="text-[#0f6cbd]" /> 3 Samples <FiChevronDown className="text-[#0f6cbd] ml-[4px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default AuditAreaRight;
