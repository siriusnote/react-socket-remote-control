
import {Navigate, useNavigate, useRoutes} from 'react-router-dom';
import {protectedRoutes} from "./protected";
import {publicRoutes} from "./public";
import {useAuth} from "lib/auth";
import NotFoundView from "../views/PageNotFoundView";
import {useContext, useEffect} from "react";
import {SocketContext} from "context/socket";


export const AppRoutes = () => {
    const auth = useAuth()
    const socket = useContext(SocketContext)
    let navigate = useNavigate();

    const handleChangeRoute = (route) => {
        console.log({route})
        navigate(route, {replace: true})
    }

    useEffect(() => {
        socket.on("CHANGE_ROUTE", handleChangeRoute)
        return () => {
            socket.off("CHANGE_ROUTE", handleChangeRoute);
        };
    }, [socket]);

    const commonRoutes = [
        { path: '/', element: <Navigate to={"/mode1"} /> },
        { path: '*', element: <NotFoundView/> }
    ];

    const elements = useRoutes([...protectedRoutes, ...publicRoutes, ...commonRoutes]);

    return <>{elements}</>
}