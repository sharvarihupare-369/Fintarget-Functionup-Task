import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import LastTradedPrice from "./components/LastTradedPrice";
import CandlestickChart from "./components/CandlestickChart";

function App() {
  const [ltpData, setLtpData] = useState({});
  const [candleStickData, setCandleStickData] = useState([]);
  const [instrument, setInstrument] = useState("Nifty");
  const [candlestickinterval, setCandlestickinterval] = useState(1);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://functionup.fintarget.in/ws?id=fintarget-functionup"
    );

    socket.addEventListener("open", () => {
      console.log("Connected to WebSocket");
    });

    socket.addEventListener("message", (event) => {
      // console.log(event)
      const ltp = JSON.parse(event.data);
      setLtpData(ltp);
      setCandleStickData((prev) => [...prev, ltp]);
    });
    return () => {
      // socket.disconnect();
      socket.close();
    };
  }, []);

  return (
    <div className="App">
      <LastTradedPrice ltp={ltpData} />
      <h1 style={{color:"white"}}>CandlestickChart</h1>
      <label style={{color:"white"}}>
        Select Instrument : {" "}
        <select
         
          style={{ padding: "10px" ,marginBottom:"10px"}}
          value={instrument}
          onChange={(e) => setInstrument(e.target.value)}
        >
          <option value={"Nifty"}>Nifty</option>
          <option value={"Banknifty"}>BankNifty</option>
          <option value={"Finnifty"}>FinNifty</option>
        </select>
      </label>
      <CandlestickChart data={ltpData} instrument={instrument} />
    </div>
  );
}

export default App;
