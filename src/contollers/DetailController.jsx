import React, { useEffect, useState } from "react";
import DetailView from "../views/DetailView";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailModel } from "../models/DetailModel";

const DetailController = () => {
  //Düz yol parametresi yakalamak için UseParams || ? varsa useSearchParams
  const { id } = useParams();
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    axios
      .get(`/assets/${id}`)
      .then((res) => setSelectedCoin(res.data.data))
      .catch((err) => console.log(err));
    axios
      .get(`/assets/${id}/history?interval=d1`)
      .then((res) => setHistory(res.data.data));
  }, []);
  //Modelden Örnek(instance) Oluşturma
  const model = new DetailModel(selectedCoin, history);

  return (
    <div>
      <DetailView model={model} />
    </div>
  );
};

export default DetailController;
