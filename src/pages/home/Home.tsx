import { useEffect, useState } from 'react';
import ServerBar from '../../components/ServerBar';
import FriendsBar from '../../components/FriendsBar';
import OnlineFriendsBar from '../../components/OnlineFriendsBar';
import TopButtonsBar from '../../components/TopButtonsBar';

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
                <ServerBar/>
                <FriendsBar />
            </div>

            <div style={{display: toggle == 1 || toggle == 2 ? 'flex' : 'none'}} className="flex-col h-full w-full">
                <TopButtonsBar func={checkToggle} />
                <div className='bg-zinc-900 h-[2px] w-full'></div>
                <OnlineFriendsBar online={online} />
            </div>
        </div>
    );
}

export default Home;