import React from "react";

const LoadMoreView = ({ handleClick }) => {
  return (
    <div className="d-flex more-btn justify-content-center my-5">
      <button onClick={() => handleClick()} className="btn btn-warning">
        More
      </button>
    </div>
  );
};

export default LoadMoreView;
