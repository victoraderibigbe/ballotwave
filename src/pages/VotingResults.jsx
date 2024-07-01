import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const VotingResults = () => {
  const [user, setUser] = useState(null);
  const [voteCounts, setVoteCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    // localStorage.setItem("user", JSON.stringify(userData));
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user && user.name && user.passKey) {
      let url = "https://ballotwave-api.vercel.app/voters/countVote";

      const votersDetails = {
        votersName: user.name,
        votersCode: user.passKey,
      };

      axios
        .post(url, votersDetails)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            const sortedVoteCounts = Object.entries(response.data)
              .filter(([key]) => key !== "votedFor")
              .sort(([, a], [, b]) => b - a);

            setVoteCounts({
              ...Object.fromEntries(sortedVoteCounts),
              votedFor: response.data.votedFor,
            });
          } else {
            alert("Bad network or no internet connection.");
          }
        })
        .catch((error) => {
          if (error && error.response && error.response.status === 400) {
            alert(`${error.response.data.message}`);
          } else {
            alert("Bad network or no internet connection.");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: Object.keys(voteCounts).filter((key) => key !== "votedFor"),
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: 0,
              to: Number.MAX_SAFE_INTEGER,
              color: "#28a745",
            },
          ],
        },
      },
    },
  };

  const series = [
    {
      name: "Votes",
      data: Object.values(voteCounts).filter(
        (value) => typeof value === "number"
      ),
    },
  ];

  return (
    <div className="mt-5 border">
      <div className="container mt-5">
        <h2 className="text-center text-success">Voting Results</h2>
        {user && voteCounts.votedFor ? (
          <p className="text-center mt-3">
            <b>Voted for:</b> {voteCounts.votedFor}
          </p>
        ) : (
          <p className="text-center text-danger">
            Error: User or candidate data is missing
          </p>
        )}
        <div className="d-flex justify-content-center mx-auto">
          {!isLoading && (
            <div className="mixed-chart">
              <Chart options={options} series={series} type="bar" width="500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VotingResults;