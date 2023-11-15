import React, { useEffect, useState } from "react";
import HomeView from "../views/HomeView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const HomeController = () => {
  const [URLparam, setURLParam] = useSearchParams();
  const [coins, setCoins] = useState([]);

  const page = +URLparam.get("page") || 1;
  const params = {
    limit: 15,
    offset: (page - 1) * 15,
  };

  useEffect(() => {
    axios
      .get("/assets", { params })
      // .then((res) => setCoins([...coins, ...res.data.data]))
      .then((res) => setCoins(coins.concat(res.data.data)))
      .catch((err) => console.log(err));
  }, [URLparam]);

  return (
    <div>
      <HomeView coins={coins} />
    </div>
  );
};

export default HomeController;
