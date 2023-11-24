import React from "react";
import logo from "../Assets/logo.jpg";

const LastTradedPrice = ({ ltp }) => {
  return (
    <div
      style={{
        color: "white",
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* <div>Last Traded Price:</div> */}
      <div style={{ display: "flex", alignItems: "center", gap: "80px" }}>
        <div>
          <img
            src={logo}
            style={{
              width: "100px",
              borderTopLeftRadius: "10%",
              borderBottomRightRadius: "10%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          <p className="nifty">
            Nifty: <span style={{border:"1px solid #5C6BC0" , padding:"10px" , borderRadius:"10px"}}>{ltp.Nifty}</span>
          </p>
          <p className="nifty">
            BankNifty: <span style={{border:"1px solid #5C6BC0" , padding:"10px" , borderRadius:"10px"}}>{ltp.Banknifty}</span>
          </p>
          <p className="nifty">
            FinNifty: <span style={{border:"1px solid #5C6BC0" , padding:"10px" , borderRadius:"10px"}}>{ltp.Finnifty}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastTradedPrice;
