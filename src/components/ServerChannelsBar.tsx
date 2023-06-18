import StatusBar from "./StatusBar";

interface ServerChannelsBarProps {
    name: string
    func: () => void;
}

const ServerChannelsBar: React.FC<ServerChannelsBarProps> = ({name, func}) => {
    return (
        <div className='flex flex-col w-[255px] bg-[#1e1e20]'>
            <div className='h-[50px] flex py-3 flex-row justify-center items-center mx-4
            tablet:h-[55px] tablet:mb-0'>
                <h3 className="text-gray-300">{name}</h3>
            </div>

            <div className='bg-zinc-900 w-full h-[2px] mb-4'/>

            <div className='flex-grow h-[100px] px-2 scrollbar-thumb-zinc-900 scrollbar-thin
            overflow-y-auto text-gray-400 text-base'>
                <p className="text-sm my-4">TEXT CHANNELS</p>
                <button onClick={func} className="px-4 flex flex-row items-center hover:bg-zinc-700">
                    <p>general</p>
                </button>
            </div>

            <StatusBar />
        </div>
    );
}

export default ServerChannelsBar;