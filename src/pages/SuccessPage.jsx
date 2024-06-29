import React, { useState } from "react";

const SuccessPage = () => {
 // const totalVotes = votes.reduce((acc, candidate) => acc + candidate.voteCount, 0);
  // console.log(totalVotes);

  return (
    <>
      <div className="mt-5 py-2 px-2">
        <div className="shadow col-md-6 mx-auto px-3 py-1 rounded mt-5">
          <h4 className="text-success pb-2">VOTING RESULTS</h4>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              aria-label="Example with label"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
          <div class="progress mt-5">
            <div
              class="progress-bar  bg-success"
              role="progressbar"
              aria-label="Example with label"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
          <div class="progress mt-5">
            <div
              class="progress-bar  bg-success"
              role="progressbar"
              aria-label="Example with label"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-5 px-3 col-md-9 shadow rounded-5 mx-auto pb-3">
      <h5 className="text-center py-3">VOTING RESULTS</h5>
      {votes.map((item, i) => (
        <div key={i} className="mt-3 rounded shadow px-2 py-2">
          <p>{item.partyName}</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${(item.voteCount / totalVotes) * 100}%` }}
              aria-valuenow={item.voteCount}
              aria-valuemin="0"
              aria-valuemax={totalVotes}
            >
              {item.voteCount} votes
            </div>
          </div>
        </div>
      ))}
    </div> */}
    </>
  );
};

export default SuccessPage;
