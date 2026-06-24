import AuditAreaLeft from "./AuditAreaLeft";
import AuditAreaRight from "./AuditAreaRight";

const AuditArea = () => {
    return (
        <div className="flex" >
            <AuditAreaLeft />
            <AuditAreaRight />
        </div>
    );
}

export default AuditArea;