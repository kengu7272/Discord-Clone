import gray from '../images/gray.png';
import { Link } from "react-router-dom";

//status bar props here

function StatusBar() {
    return (
        <div className="h-[55px] w-full bg-[#171719] flex flex-row items-center text-zinc-400">
            <img className="mx-3 h-[35px] rounded-full object-contain" src={gray} />
            <h4>TestUser</h4>
            <Link className="ml-auto mr-3 bg-red-900 py-1 px-2 rounded-lg" to="/">Log Out</Link>
        </div>
    );
}

export default StatusBar;