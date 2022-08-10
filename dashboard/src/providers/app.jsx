import React from 'react'
import {Spinner} from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom';
import {SocketContext, socket, SocketIOProvider} from "context/socket";

const Loading = (
    <div className="flex items-center justify-center w-screen h-screen">
        <Spinner size="xl" />
    </div>
)

export const AppProvider = ({children}) => {
    return (
        <React.Suspense fallback={Loading}>
            <SocketIOProvider>
                <Router>{children}</Router>
            </SocketIOProvider>
        </React.Suspense>
    )
}