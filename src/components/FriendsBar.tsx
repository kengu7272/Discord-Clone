import { Friends } from "./OnlineFriends";
import wave from '../images/wave.png';
import logo from '../images/discord-mark-white.png';
import pink from '../images/pink.png';
import checkered from '../images/checkered.png';
import cloud from '../images/cloud.png';
import gray from '../images/gray.png';
import purple from'../images/purple.png';
import { Link } from 'react-router-dom';
import gear from '../images/gear.png';

function FriendsBar () {
    return (
        <div className='flex flex-col flex-grow bg-[#1e1e20]
        tablet:w-[300px]'>
            <div className='h-[50px] flex py-3 flex-row justify-center items-center mx-4
            tablet:h-[55px] tablet:mb-0'>
                <div className='bg-zinc-900 h-[25px] w-full'>
                    <input type="text" className='bg-inherit ml-2 outline-none text-zinc-400 w-[97%]' placeholder='Find or start a conversation'/>
                </div>
            </div>

            <div className='bg-zinc-900 w-full h-[2px] mb-4'/>

            <Link to="/Home" className='flex flex-row mx-4 w-auto'>
                <img className='h-[25px] w-[30px]' src={wave} alt="waving person" />Friends
            </Link>

            <p className='ml-4 mt-4 mb-2 text-sm'>DIRECT MESSAGES</p>

            <div className='flex-grow h-[100px] px-4 scrollbar-thumb-zinc-900 scrollbar-thin overflow-y-auto'>
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

            <div className="h-[55px] w-full bg-[#171719] flex flex-row items-center">
                <img className="mx-3 h-[35px] rounded-full object-contain" src={gray} />
                <h4>DreamtSpirit</h4>
                <Link className="ml-auto mr-3" to="/Home"><img className="object=contain h-[35px]" src={gear} /></Link>
            </div>
        </div>
);
}

export default FriendsBar;