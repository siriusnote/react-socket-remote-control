import LoginView from "../views/LoginView";

export const publicRoutes = [
    {
        path: '/test/*',
        element: <div>{"TEST"}</div>
    },
    {
        path: '/login',
        element: <LoginView/>
    },
    // {
    //     path: '*',
    //     element: <Navigate to={"/login"}/>
    // }
]