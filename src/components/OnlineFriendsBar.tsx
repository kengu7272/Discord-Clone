import { OnlineFriends } from "./OnlineFriends";
import logo from '../images/discord-mark-white.png';
import pink from '../images/pink.png';
import checkered from '../images/checkered.png';
import cloud from '../images/cloud.png';
import gray from '../images/gray.png';
import purple from'../images/purple.png';
import glass from '../images/glass.png'

interface OnlineFriendsBarProps {
    online: number;
}

const OnlineFriendsBar: React.FC<OnlineFriendsBarProps> = ({online}) => {
    return (
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
    );
}

export default OnlineFriendsBar;