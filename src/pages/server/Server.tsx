import ServerChannelsBar from "../../components/ServerChannelsBar";
import ServerBar from "../../components/ServerBar";
import { useNavigate } from "react-router-dom";

interface ServerProps {
    name: string;
}

const Server: React.FC<ServerProps> = ({name}) => {
    const navigate = useNavigate();

    function ToHome() {
        navigate('/Home');
    }

    return (
        <div className="w-full h-full flex flex-row">
            <ServerBar func={ToHome}/>
            <ServerChannelsBar name={name} />
        </div>
    );
}

export default Server;