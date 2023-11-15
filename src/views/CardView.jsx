import millify from "millify";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardView = ({ coin }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/coin/${coin.id}`)}
      className="coin-card d-flex p-2 flex-column cursor-pointer justify-content-between border rounded"
    >
      <div>
        <h3>{coin.name}</h3>
        <h6>{coin.symbol}</h6>
        <p>${millify(coin.priceUsd)}</p>
      </div>
      <p className="d-flex flex-column ">
        <span>Daily Change</span>
        <span className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
          %{Number(coin.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default CardView;
