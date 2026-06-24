import LeftBar from "./LeftBar";
import MainBody from "./MainBody";

function Home() {
    return (
        <div className="flex w-full">
            <LeftBar />
            <MainBody />
        </div>
    );
}

export default Home;
