interface TopButtonProps {
    word: string;
    onClick: () => void;
}

const TopButton: React.FC<TopButtonProps> = ({word, onClick}) => {
    return (
        <button className="whitespace-nowrap" onClick={onClick}>{word}</button>
    );
}

interface SideButtonProps {
    img: string;
    onClick: () => void;
    name: string;
}

const SideButton: React.FC<SideButtonProps> = ({img, onClick, name}) => {

    return (
        <div className="h-[50px] w-[50px] flex flex-row items-center">
            <button className='h-full w-full' onClick={onClick}
            onMouseEnter={(e) => {
                const sibling = e.currentTarget.nextElementSibling;
                if(sibling) {
                    sibling.classList.remove('hidden');
                    sibling.classList.add('flex');
                }
            }}
          onMouseLeave={(e) => {
                const sibling = e.currentTarget.nextElementSibling;
                if(sibling) {
                    sibling && sibling.classList.add('hidden');
                    sibling.classList.remove('flex');
                }
            }}>
                <img className='object-contain rounded-full' src={img} />
            </button>
            
            <div className="hidden bg-zinc-900 h-[35px] px-2 rounded-xl flex-row items-center
            justify-center absolute whitespace-nowrap left-20">
                <h4>{name}</h4>
            </div>
        </div>
    );
} 

export { TopButton, SideButton };