import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import { useEffect, useState } from 'react';

// const socket = io('wss://functionup.fintarget.in/ws?id=fintarget-functionup');

const socket = io('wss://functionup.fintarget.in/ws?id=fintarget-functionup');

function App() {
  const [ltpData,setLtpData] = useState({});

  useEffect(()=>{
     socket.on("connect",()=>{
      console.log('Connected to Socket');
     });
     socket.on('message',(data)=>{
      console.log(data)
      const ltp = JSON.parse(data);
      setLtpData(ltp);
     })
     return () => {
      socket.disconnect();
     }
  },[])

  console.log(ltpData)

  return (
    <div className="App">
      
      

    </div>
  );
}

export default App;
