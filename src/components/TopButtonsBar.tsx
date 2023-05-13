import { TopButton } from './Buttons';
import wave from '../images/wave.png';

function Test() {
    console.log("Working");
}

interface TopButtonsBarProps {
    func: () => void;
}

const TopButtonsBar: React.FC<TopButtonsBarProps> = ({func}) => {
    return (
        <div className="flex flex-row gap-8 items-center h-[55px] mx-4 scrollbar-hide overflow-x-auto overflow-y-hidden py-3 max-w-fit">
            <button className='tablet:hidden' onClick={func}>=</button>

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
    );
}

export default TopButtonsBar;
