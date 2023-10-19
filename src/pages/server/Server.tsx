import ServerChannelsBar from "../../components/ServerChannelsBar";
import ServerBar from "../../components/ServerBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { KeyboardEvent } from "react";
import gray from '../../images/gray.png'

function UploadMessage() {
    let input = document.getElementById('input') as HTMLInputElement;

    if(input.value === "")
        return;

    let messages = document.getElementById("messages");

    if(!messages) {
        return;
    }

    let time = new Date().toLocaleTimeString();
    let timeElement = document.createElement('p');
    timeElement.textContent = time;


    let wrapper = document.createElement('div');
    wrapper.classList.add('flex', 'flex-row', 'items-center', 'gap-4');

    let pfp = document.createElement('img');
    pfp.classList.add('rounded-full', 'max-h-10', 'w-auto');
    pfp.src = gray;

    let newMessage = document.createElement('div');
    newMessage.classList.add('flex', 'flex-col', 'justify-center')

    let nameAndDate = document.createElement('div');
    nameAndDate.classList.add('flex', 'flex-row', 'items-center', 'gap-2')

    let name = document.createElement('h5');
    name.textContent = "TestUser";
    name.classList.add('font-bold')

    nameAndDate.appendChild(name);
    nameAndDate.appendChild(timeElement);

    let message = document.createElement('p');
    message.classList.add('break-words');
    message.textContent = input.value;

    newMessage.appendChild(nameAndDate);
    newMessage.appendChild(message);

    wrapper.appendChild(pfp);
    wrapper.appendChild(newMessage)

    messages.appendChild(wrapper);

    input.value = "";
}

const Enter = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key == 'Enter') {
        UploadMessage();
    }
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
        <div className="w-full h-full flex flex-row max-h-[100vh]">
            <div  style={{display: toggle == 0 ? 'none' : 'flex'}}>
                <ServerBar func={ToHome}/>
                <ServerChannelsBar name={name} func={checkToggle} />
            </div>
            
            <div style={{display: toggle == 0 || toggle == 2 ? 'flex' : 'none'}} className="flex-col items-center hidden text-gray-400 w-full h-full">
                <div className="flex flex-row justify-center items-center">
                    <button onClick={checkToggle} className="left-2 absolute laptop:hidden">=</button>
                    <h2>general</h2>
                </div>

                <div className='bg-zinc-900 w-full h-[2px] mb-2'/>

                <div id="messages" className="w-full max-w-full h-full overflow-y-auto px-4 flex flex-col gap-2"></div>

                <div className="w-full h-100px py-4 px-2 bottom-0 flex flex-col items-center
                laptop:min-w-0 laptop:flex-grow">
                    <div className="flex flex-row items-center justify-center gap-4 w-full">
                        <input id="input" className="w-5/6 px-2 min-h-full bg-zinc-700" placeholder="Enter a message" onKeyDown={Enter}></input>
                        <button onClick={UploadMessage} className="text-3xl">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Server;