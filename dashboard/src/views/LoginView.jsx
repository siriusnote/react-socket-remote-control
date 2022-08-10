import {useCallback} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import storage from "../utils/storage";

const LoginView = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const handleSubmission = useCallback(() => {
        storage.setToken("test")
        const path = location.state ? location.state.from : '/'
        console.log({path})
        navigate(path)
        return false
    },[location, navigate])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmission}>
                        <input type="text" name="username"/>
                        <input type="password" name="password"/>
                        <input type="submit" name="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginView