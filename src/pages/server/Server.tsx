import ServerChannelsBar from "../../components/ServerChannelsBar";
import ServerBar from "../../components/ServerBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UploadMessage() {
    return (
        <h4>Message</h4>
    );
}

interface ServerProps {
    name: string;
}

const Server: React.FC<ServerProps> = ({name}) => {
    const navigate = useNavigate();

    function ToHome() {
        navigate('/Home');
    }

    const [toggle, setToggle] = window.innerWidth >= 640 ? useState(2) : useState(1);

    function checkToggle() {
        setToggle(toggle == 1 ? 0 : toggle == 0 ? 1 : 2);
    }

    return (
        <div className="w-full h-full flex flex-row">
            <div  style={{display: toggle == 0 ? 'none' : 'flex'}}>
                <ServerBar func={ToHome}/>
                <ServerChannelsBar name={name} func={checkToggle} />
            </div>
            
            <div style={{display: toggle == 0 || toggle == 2 ? 'flex' : 'none'}} className="flex-col items-center hidden text-gray-400 w-full h-full">
                <div className="flex flex-row justify-center items-center">
                    <button onClick={checkToggle} className="left-2 absolute laptop:hidden">=</button>
                    <h2>general</h2>
                </div>

                <div className='bg-zinc-900 w-full h-[2px] mb-4'/>

                <div className="w-full h-full p-4 relative flex flex-col items-center
                laptop:min-w-0 laptop:flex-grow">
                    <form className="h-[4.5vh] flex flex-row items-center justify-center gap-4 bottom-4 absolute w-full">
                        <input className="w-5/6 px-2 h-full bg-zinc-700" placeholder="Enter a message"></input>
                        <button onClick={UploadMessage} className="text-3xl">+</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Server;