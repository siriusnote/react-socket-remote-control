import {SocketContext} from "context/socket";
import {useContext} from "react";

const ChangeModeView = () => {
    const socket = useContext(SocketContext);

    const onButtonClick = (mode) => {
        socket.emit("CHANGE_MODE_CALL", mode);
    }

    return (
        <div className={"test view"}>
            <button onClick={() => onButtonClick("mode1")}>Mode 1</button>
            <button onClick={() => onButtonClick("mode2")}>Mode 2</button>
            <button onClick={() => onButtonClick("mode3")}>Mode 3</button>
        </div>
    )
}

export default ChangeModeView