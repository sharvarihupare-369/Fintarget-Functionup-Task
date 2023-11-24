import './App.css';
import {io} from 'socket.io-client'
import { useEffect, useState } from 'react';
import LastTradedPrice from './components/LastTradedPrice';
import CandlestickChart from './components/CandlestickChart';

function App() {

  const [ltpData,setLtpData] = useState({});
  const [candleStickData,setCandleStickData] = useState([])
  
  useEffect(()=>{
    const socket = new WebSocket('wss://functionup.fintarget.in/ws?id=fintarget-functionup');
  
    socket.addEventListener('open',()=>{
      console.log('Connected to WebSocket');
    })

    socket.addEventListener('message',(event)=>{
      // console.log(event.data);
      const ltp = JSON.parse(event.data)
      setLtpData(ltp)
      setCandleStickData((prev)=>[...prev,ltp])
    })
     return () => {
      // socket.disconnect();
      socket.close();
     }
  },[])




  return (
    <div className="App" >

      <LastTradedPrice ltp={ltpData} />
      <CandlestickChart data={candleStickData} width={800} ratio={1} interval={1}/>
      <CandlestickChart data={candleStickData} width={800} ratio={1} interval={3}/>
      <CandlestickChart data={candleStickData} width={800} ratio={1} interval={5}/>
      
    </div>
  );
}

export default App;
