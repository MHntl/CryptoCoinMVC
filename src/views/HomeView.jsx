import React from "react";
import { FaBitcoin } from "react-icons/fa";
import millify from "millify";
import CardView from "./CardView";
import LoadMoreController from "../contollers/LoadMoreController";
import { useNavigate } from "react-router-dom";

const HomeView = ({ coins }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-4">
        <h4 className="d-flex align-items-center gap-3">
          <FaBitcoin />
          <span>Welcome, Here is list of Coins!</span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam
          nesciunt expedita, veritatis modi quasi debitis consequuntur eaque
          ratione eius consequatur.
        </p>
      </div>
      <div className="d-flex justify-content-around my-4">
        {coins?.slice(0, 3).map((coin) => (
          <CardView coin={coin} />
        ))}
      </div>
      <table className="table mt-5 table-dark table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Value</th>
            <th>Volume</th>
            <th>Change/24h</th>
            <th>% Change/24h</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, i) => (
            <tr
              key={i}
              onClick={() => navigate(`/coin/${coin.id}`)}
              className="cursor-pointer"
            >
              <td>{coin.rank}</td>
              <td className="display-flex">
                <span style={{ color: "gold", fontWeight: "bold" }}>
                  {coin.symbol}
                </span>{" "}
                <span className="text-nowrap text-truncate">{coin.name}</span>
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>${millify(coin.marketCapUsd)}</td>
              <td>${millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                {millify(coin.changePercent24Hr)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <LoadMoreController />
    </div>
  );
};

export default HomeView;
