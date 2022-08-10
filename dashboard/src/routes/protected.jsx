import {Suspense, useContext, useEffect} from "react";
import {Spinner} from "react-bootstrap";
import {Navigate, useParams, useLocation, Outlet} from "react-router-dom";
import {useAuth} from "../lib/auth";
import ModeView from "../views/ModeView";
import {SocketContext} from "context/socket";
import MainLayout from "../components/Layout/MainLayout";

const loading = (
    <div className="h-full w-full flex items-center justify-center">
        <Spinner size="xl" />
    </div>
)

const PrivateApp = () => {
    const auth = useAuth()
    const socket = useContext(SocketContext);
    let location = useLocation();

    useEffect(() => {
        if(!socket.connected)
            socket.connect()
    },[])

    // Redirect to login page if user is authenticated
    if(!auth.user){
        return <Navigate to={"/login"} state={{ from: location.pathname }} />
    }

    return (
        <MainLayout>
            <Suspense fallback={loading}>
                <Outlet/>
            </Suspense>
        </MainLayout>
    )
}

export const protectedRoutes = [
    {
        path: '/',
        element: <PrivateApp />,
        children: [
            { path: ':mode', element: <ModeView/>},
            { path: '', element: <Navigate to="mode1" /> },
            { path: '*', element: <Navigate to="." /> },
        ],
    }
]