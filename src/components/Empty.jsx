import LeftBar from "./LeftBar";
import MainBody from "./MainBody";

const Empty = () => {
    return (
        <div className="flex w-full">
            <LeftBar />
            <MainBody />
        </div>
    );
}

export default Empty;