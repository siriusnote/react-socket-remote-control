import React, {useEffect} from 'react'
import io from 'socket.io-client'
import { SOCKET_URL } from 'utils/config'
import {useAuth} from "../lib/auth";

export const socket = io(SOCKET_URL, {
    autoConnect: false  // Disable Auto connect to socket for authenticated user only
})
export const SocketContext = React.createContext();

export const SocketIOProvider = ({children}) => {
    const auth = useAuth()

    //Connect to socket if user is authenticated
    useEffect(() => {
        if(auth.user && !socket.connected){
            socket.connect()
        }
    },[auth, socket])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}