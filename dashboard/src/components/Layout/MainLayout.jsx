import storage from "../../utils/storage";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {SocketContext} from "../../context/socket";

const MainLayout = ({children}) => {
    const socket = useContext(SocketContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        socket.disconnect() // Disconnect socket
        storage.clearToken()
        navigate('/login')
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            {children}
        </div>
    )
}

export default MainLayout