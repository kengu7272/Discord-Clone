interface TopButtonProps {
    word: string;
    onClick: () => void;
}

const TopButton: React.FC<TopButtonProps> = ({word, onClick}) => {
    return (
        <button className="whitespace-nowrap pr-auto" onClick={onClick}>{word}</button>
    );
}

const SideButton: React.FC<TopButtonProps> = ({word, onClick}) => {
    return (
        <button className='h-[50px] w-[50px] p-2 rounded-xl' onClick={onClick}><img className='object-contain' src={word} /></button>
    );
} 

export { TopButton, SideButton };