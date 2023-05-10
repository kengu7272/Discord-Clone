import wave from './wave.png';
import glass from './glass.png';
import logo from './discord-mark-white.png';
import { useState } from 'react';

interface TopButtonProps {
    word: string;
    onClick: () => void;
}

const TopButton: React.FC<TopButtonProps> = ({word, onClick}) => {
    return (
        <button className="whitespace-nowrap" onClick={onClick}>{word}</button>
    );
}

const SideButton: React.FC<TopButtonProps> = ({word, onClick}) => {
    return (
        <button className='h-[50px] w-[50px] p-2 rounded-xl' onClick={onClick}><img className='object-contain' src={word} /></button>
    );
}

function Home() {
    let online = 0;

    const [toggle, setToggle] = useState(true);
    function checkToggle() {
        setToggle(toggle ? false : true);
}

    return (
        <div className='h-full overflow-hidden text-zinc-400 w-full'>
            <div style={{display: !toggle ? 'flex' : 'none'}} className='flex-row h-full w-full'>
                <div className='bg-zinc-900 flex flex-col min-h-full items-center pt-4 px-2 overflow-y-auto w-[75px]'>
                    <button className='bg-indigo-600 h-[50px] w-[50px] p-2 rounded-xl'>
                        <img className='object-contain' src={logo} />
                    </button>
                    <div className='bg-zinc-700 w-5/6 h-[2px] mt-2 mb-4'/>

                </div>
                
                <div className='flex flex-col my-2 flex-grow'>
                    <div className='flex flex-row justify-center mx-4'>
                        <div className='bg-zinc-900 h-[25px] w-full'>
                            <input type="text" className='bg-inherit ml-2 outline-none text-zinc-400 w-[85%]' placeholder='Find or start a conversation'/>
                        </div>
                    </div>

                    <div className='bg-zinc-900 w-full h-[2px] mt-3 mb-4'/>

                    <div className='flex flex-row items-center min-w-fit mx-4'>
                        <img className='h-[25px] w-[30px]' src={wave} alt="waving person" />
                        <TopButton word="Friends" onClick={checkToggle}/>
                    </div>
                </div>
            </div>

            <div style={{display: toggle ? 'flex' : 'none'}} className="flex-col h-full w-full">
                <div className="border-b border-zinc-900 flex flex-row gap-8 items-center h-[7.5%] px-4 scrollbar-hide overflow-x-auto overflow-y-hidden py-3 max-w-fit">
                    <TopButton word="=" onClick={checkToggle}/>

                    <div className='flex flex-row justify-center items-center min-w-fit'>
                        <img className='h-[25px] w-[30px]' src={wave} alt="waving person" />
                        <TopButton word="Friends" onClick={checkToggle}/>
                    </div>
                    
                    <div className='h-3/4 min-w-[2px] bg-zinc-700'/>

                    <TopButton word="Online" onClick={checkToggle}/>
                    <TopButton word="All" onClick={checkToggle}/>
                    <TopButton word="Pending" onClick={checkToggle}/>
                    <TopButton word="Blocked" onClick={checkToggle}/>
                    <TopButton word="Add Friend" onClick={checkToggle}/>
                </div>

                <div className='m-4 '>
                    <div className='bg-zinc-900 flex flex-row h-[30px] items-center w-full'>
                        <input type="text" className='bg-inherit ml-2 outline-none text-zinc-400 w-[90%]' placeholder='Search' />
                        <img src={glass} className='h-[20px] w-[20px]'/>
                    </div>

                    <p className='text-sm mt-5 mb-3'>ONLINE — {online}</p>

                    <div className='border-t border-zinc-700'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;