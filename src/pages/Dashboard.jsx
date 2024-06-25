import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [user, setUser] = useState(null);
  const [votes, setVotes] = useState([
    {
      id: 1,
      partyImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bola_Tinubu_portrait.jpg/819px-Bola_Tinubu_portrait.jpg",
      partyName: "APC",
      candidateName: "Bola Tinubu",
      voteCount: 0,
    },
    {
      id: 2,
      partyImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnauMosQth2FKwBWmz4HANbx2ji3SE8KdsfQ&s",
      partyName: "PDP",
      candidateName: "Peter Obi",
      voteCount: 0,
    },
    {
      id: 3,
      partyImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bola_Tinubu_portrait.jpg/819px-Bola_Tinubu_portrait.jpg",
      partyName: "LP",
      candidateName: "Bola Tinubu",
      voteCount: 0,
    },
  ]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleVote = (id) => {
    setVotes((prevVotes) =>
      prevVotes.map((candidate) =>
        candidate.id === id
          ? { ...candidate, voteCount: candidate.voteCount }
          : candidate
      )
    );
    toast.success("Candidate choosing Successfully");
    setTimeout(() => {
      navigate("/candidate");
    }, 4000);
    setSelectedCandidate(id);
    const selectedCandidate = votes.find((candidate) => candidate.id === id);
    console.log(selectedCandidate);
    const allData = {
      partyName: selectedCandidate.partyName,
      candidate: selectedCandidate.candidateName,
      votersCode: user.passKey,
      votersName: user.name,
    };
    console.log(allData);
    axios
    .post("", { voteDetails: allData })
    .then((res) => {
      console.log("success", res);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
      <div>
        <div className=" container-fluid px-0 mt-1">
          <img
            className="col-12 position-relative"
            src="https://img.freepik.com/free-photo/closeup-shot-waving-flag-nigeria-with-interesting-textures_181624-15997.jpg?t=st=1719243259~exp=1719246859~hmac=afb8d0dda208370feab0df6b877a80dbe74ac4180900957946b788bf81cf0a96&w=740"
            alt=""
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
            className="mt-5 px-3 py-4 col-md-9 shadow rounded-3 mx-auto pb-3"
          >
            <h5 className="text-center py-3 py-md-0 mt-2 mt-md-0 text-success">
              CHOOSE YOUR VOTE
            </h5>
            {votes.map((item, i) => (
              <div key={i} className="mt-3 rounded shadow px-2 py-2">
                <div className="d-md-flex justify-content-between">
                  <div className="">
                    <img
                      className="candidate-h shadow rounded"
                      src={item.partyImg}
                      alt=""
                    />
                  </div>
                  <div className="mt-2 mt-md-0">
                    <p>
                      Candidate id: <b className="fw-bold">{item.id}</b>
                    </p>
                    <p>
                      Candidate Name
                      <b className="fw-bold">{item.candidateName}</b>
                    </p>
                    <p>
                      Party: <b className="fw-bold">{item.partyName}</b>
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={() => handleVote(item.id)}
                    >
                      Vote for {item.partyName}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
