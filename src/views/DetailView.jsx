import millify from "millify";
import React from "react";

//?Chart import
import { Chart as Chartjs } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

const DetailView = ({ model }) => {
  return (
    <div>
      <h3 className="text-center">
        <span className="me-3 fs-4 fw-bold text-warning">
          {model?.coin?.symbol}
        </span>
        <span className="fs-3 ">{model?.coin?.name}</span>
      </h3>
      <div className="row">
        {/* INFO */}
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-4">
          {model?.infoFields.map((data) => (
            <div className="text-bg-light rounded shadow-lg text-center py-4 px-2 d-flex flex-column gap-2">
              <span className="fs-2">{data.icon}</span>
              <h4>{data.label}</h4>
              <p>{millify(data.value)}</p>
            </div>
          ))}
        </section>

        {/* Istatistik */}

        <section className="col-md-9">
          {/* npm i --save chart.js react-chartjs-2 */}
          <Line data={model?.chartData} />
          <Bar data={model?.chartData} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;
