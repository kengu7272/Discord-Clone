import ServerChannelsBar from "../../components/ServerChannelsBar";
import ServerBar from "../../components/ServerBar";


interface ServerProps {
    name: string;
}

const Server: React.FC<ServerProps> = ({name}) => {
    return (
        <div className="w-full h-full flex flex-row">
            <ServerBar/>
            <ServerChannelsBar name={name} />
        </div>
    );
}

export default Server;