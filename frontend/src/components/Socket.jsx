import React, { useEffect } from 'react'
import io from 'socket.io-client';

const Socket = () => {
    const socket = io('wss://functionup.fintarget.in/ws?id=fintarget-functionup')
    
    useEffect(()=>{
        socket.on('connect', ()=>{
            console.log('Connected to Websocket')
        })
        return () => {
            socket.disconnect()
        }
    },[])

    // socket.on('ltp', (data) => {
    //     console.log('Received LTP:', data)
    // })
  return (
    <div>Socket</div>
  )
}

export default Socket