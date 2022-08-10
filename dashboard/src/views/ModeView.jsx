
import {useParams} from "react-router-dom";

const ModeView = () => {

    const {mode} = useParams()

    return (
        <div>{mode}</div>
    )
}

export default ModeView