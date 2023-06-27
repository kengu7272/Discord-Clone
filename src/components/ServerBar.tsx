import logo from '../images/discord-mark-white.png'   
import { SideButton } from './Buttons';
import pink from '../images/pink.png'

interface ServerBarProps {
    func: () => void;
}

const ServerBar: React.FC<ServerBarProps> = ({func}) => {
    return (
        <div className='bg-zinc-900 flex flex-col min-h-full items-center pt-4 px-2 w-[85px]'>
            <button className='bg-indigo-600 h-[50px] w-[50px] p-3 rounded-2xl flex items-center justify-center' onClick={func}>
                <img className='object-contain' src={logo} />
            </button>

            <div className='bg-zinc-700 w-5/6 h-[2px] my-3'/>

            <SideButton img={pink} name="Test Server 1"/>
        </div>
    );
}

export default ServerBar;