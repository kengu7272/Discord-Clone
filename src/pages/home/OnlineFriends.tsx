import chat from './chatbox.png';
import dot from './3dot.png';

interface FriendsProps {
    name: string;
    status: string;
    img: string;
}

const OnlineFriends: React.FC<FriendsProps> = ({name, status, img}) => {
    return (
        <div className="flex flex-row items-center h-[75px] border-t border-zinc-700 relative py-2">
            <img className="w-[50px] h-[50px] object-contain rounded-full ml-2" 
                src={img} alt="pfp" />

            <div className="flex flex-col justify-center h-full ml-4 flex-grow">
                <h4>{name}</h4>
                <p className="text-sm">{status}</p>
            </div>

            <div className='h-full flex flex-row gap-2 justify-center items-center absolute right-2'>
                <button className='w-[40px] h-[40px] bg-[#222326] rounded-full'>
                    <img className='object-contain h-full w-full' src={chat} />
                </button>
                <button className='h-[40px] w-[40px] p-[5px] bg-[#222326] rounded-full'>
                    <img className='object-contain w-full h-full' src={dot} />
                </button>
            </div>
        </div>
    );
}

const Friends: React.FC<FriendsProps> = ({name, status, img}) => {
    return (
        <button className="flex flex-row items-center h-[55px] my-1 w-full">
            <img className="w-[40px] h-[40px] object-contain rounded-full ml-2" 
                src={img} alt="pfp" />

            <div className="flex flex-col justify-center h-full ml-3 text-left flex-grow">
                <h4>{name}</h4>
                <p className="text-sm">{status}</p>
            </div>
        </button>
    );
}

export { OnlineFriends, Friends };