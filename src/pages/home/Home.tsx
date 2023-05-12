import wave from './wave.png';
import glass from './glass.png';
import logo from './discord-mark-white.png';
import { TopButton, SideButton } from './Buttons';
import { useEffect, useState } from 'react';
import { OnlineFriends, Friends } from './OnlineFriends';
import pink from './pink.png';
import checkered from './checkered.png';
import cloud from './cloud.png';
import gray from './gray.png';
import purple from'./purple.png';

function Test() {
    console.log("Hello World!");
}

function Home() {
    let online = 17;

    const [toggle, setToggle] = window.innerWidth >= 640 ? useState(2) : useState(1);


    function checkToggle() {
        setToggle(toggle == 1 ? 0 : toggle == 0 ? 1 : 2);
    }

    useEffect(() => {
        const handleResize = () => {
            setToggle(window.innerWidth >= 640 ? 2 : 1);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }
    );

    return (
        <div className='flex flex-row h-full overflow-hidden text-zinc-400 w-full'>
            <div style={{display: toggle == 0 || toggle == 2 ? 'flex' : 'none'}} className='flex-row h-full w-full
            tablet:w-[385px]'>

                <div className='bg-zinc-900 flex flex-col min-h-full items-center pt-4 px-2 w-[85px]'>
                    <button className='bg-indigo-600 h-[50px] w-[50px] p-3 rounded-2xl' onClick={checkToggle}>
                        <img className='object-contain' src={logo} />
                    </button>

                    <div className='bg-zinc-700 w-5/6 h-[2px] mt-2 mb-4'/>

                    <SideButton img={checkered} name="Test Server 1" onClick={Test} />
                </div>

                <div className='flex flex-col flex-grow bg-[#1e1e20]
                tablet:w-[300px]'>
                    <div className='h-[50px] flex py-3 flex-row justify-center items-center mx-4
                    tablet:h-[55px] tablet:mb-0'>
                        <div className='bg-zinc-900 h-[25px] w-full'>
                            <input type="text" className='bg-inherit ml-2 outline-none text-zinc-400 w-[97%]' placeholder='Find or start a conversation'/>
                        </div>
                    </div>

                    <div className='bg-zinc-900 w-full h-[2px] mb-4'/>

                    <button onClick={Test} className='flex flex-row mx-4 w-auto'><img className='h-[25px] w-[30px]' src={wave} alt="waving person" />Friends</button>

                    <div className='flex-grow h-[100px] p-4 scrollbar-thumb-zinc-900 scrollbar-thin overflow-y-auto'>
                        <p className='mb-2 text-sm'>DIRECT MESSAGES</p>
                        <Friends name="DiscordBot" status="Working on a task" img={logo} />
                        <Friends name="Jen" status="Playing Rocket League" img={pink} />
                        <Friends name="Joseph" status="" img={checkered} />
                        <Friends name="MrCleaner" status="I did it!!!" img={cloud} />
                        <Friends name="DreamtSpirit" status="Certified Yes Man" img={gray} />
                        <Friends name="CalebRocks123" status="Oh yeah" img={purple} />
                        <Friends name="iAmMaria22" status="Guys I'm Maria" img={pink} />
                        <Friends name="Moti" status="Shoot for the sky sometimes" img={cloud} />
                        <Friends name="LLBeast" status="hmu for carry on fortnite" img={purple} />
                        <Friends name="Magnus" status="Chess beast" img={checkered} />
                        <Friends name="DreamtSpiritAlt" status="Certified Yes Man" img={gray} />
                        <Friends name="JJ" status="Hmu" img={purple} />
                        <Friends name="Kistol" status="" img={pink} />
                        <Friends name="The Going Merry" status="One Piece!!!!" img={cloud} />
                        <Friends name="TTV Rocks" status="They call me rocks on the street" img={purple} />
                        <Friends name="Milliam" status="I'm rich" img={checkered} />
                        <Friends name="Cura" status="Cura Cura" img={gray} />
                    </div>
                </div>

            </div>

            <div style={{display: toggle == 1 || toggle == 2 ? 'flex' : 'none'}} className="flex-col h-full w-full">

                <div className="flex flex-row gap-8 items-center h-[55px] mx-4 scrollbar-hide overflow-x-auto overflow-y-hidden py-3 max-w-fit">
                    <button className='tablet:hidden' onClick={checkToggle}>=</button>

                    <div className='flex flex-row justify-center items-center min-w-fit'>
                        <img className='h-[25px] w-[30px]' src={wave} alt="waving person" />
                        <TopButton word="Friends" onClick={Test}/>
                    </div>
                    
                    <div className='h-3/4 min-w-[2px] bg-zinc-700'/>

                    <TopButton word="Online" onClick={Test}/>
                    <TopButton word="All" onClick={Test}/>
                    <TopButton word="Pending" onClick={Test}/>
                    <TopButton word="Blocked" onClick={Test}/>
                    <div className='bg-green-600 rounded-xl px-2 py-1 text-white'><TopButton word="Add Friend" onClick={Test}/></div>
                </div>

                <div className='bg-zinc-900 h-[2px] w-full'></div>

                <div className='m-4 h-0 flex-grow flex flex-col relative'>
                    <div className='bg-zinc-900 flex flex-row h-[35px] items-center w-full'>
                        <input type="text" className='bg-inherit ml-2 outline-none text-zinc-400 w-full' placeholder='Search' />
                        <img src={glass} className='h-[20px] w-[20px] absolute right-1'/>
                    </div>

                    <p className='text-sm mt-5 mb-3'>ONLINE — {online}</p>

                    <div className='h-[100px] flex-grow overflow-y-auto pr-2 scrollbar-thumb-zinc-900 scrollbar-thin'>
                        <OnlineFriends name="DiscordBot" status="Working on a task" img={logo} />
                        <OnlineFriends name="Jen" status="Playing Rocket League" img={pink} />
                        <OnlineFriends name="Joseph" status="" img={checkered} />
                        <OnlineFriends name="MrCleaner" status="I did it!!!" img={cloud} />
                        <OnlineFriends name="DreamtSpirit" status="Certified Yes Man" img={gray} />
                        <OnlineFriends name="CalebRocks123" status="Oh yeah" img={purple} />
                        <OnlineFriends name="iAmMaria22" status="Guys I'm Maria" img={pink} />
                        <OnlineFriends name="Moti" status="Shoot for the sky sometimes" img={cloud} />
                        <OnlineFriends name="LLBeast" status="hmu for carry on fortnite" img={purple} />
                        <OnlineFriends name="Magnus" status="Chess beast" img={checkered} />
                        <OnlineFriends name="DreamtSpiritAlt" status="Certified Yes Man" img={gray} />
                        <OnlineFriends name="JJ" status="Hmu" img={purple} />
                        <OnlineFriends name="Kistol" status="" img={pink} />
                        <OnlineFriends name="The Going Merry" status="One Piece!!!!" img={cloud} />
                        <OnlineFriends name="TTV Rocks" status="They call me rocks on the street" img={purple} />
                        <OnlineFriends name="Milliam" status="I'm rich" img={checkered} />
                        <OnlineFriends name="Cura" status="Cura Cura" img={gray} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;