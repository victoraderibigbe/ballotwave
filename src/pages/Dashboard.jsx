import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip } from "bootstrap";
import { SpinnerCircularFixed } from "spinners-react";
import Swal from "sweetalert2";

// or via CommonJS
const Dashboard = () => {
  const navigate = useNavigate();
  // const Swal = require("sweetalert2");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  // const url = "https://ballotwave-api.vercel.app/voters/countVote";
  const url = "https://ballotwave-api.vercel.app/voters/voteNow";
  const [votes, setVotes] = useState([
    {
      id: 1,
      rank: "Chief",
      code: "GCFR",
      partyImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bola_Tinubu_portrait.jpg/819px-Bola_Tinubu_portrait.jpg",
      partyName: "APC",
      candidateName: "Bola Tinubu",
      gov: "16th President of Nigeria",
      office: "Assumed office 29 May 2023",
      date: " 29 May 2023",
      born: "Bola Ahmed Adekunle Tinubu 29 March 1952 (age 72) Lagos, British Nigeria",
      country: " Lagos, British Nigeria",
      party: [
        { partyname: "Social Democratic Party", years: "before 1993" },
        { partyname: "Alliance for Democracy", years: "1998–2006" },
        { partyname: "Action Congress of Nigeria", years: "2006–2013" },
        { partyname: "All Progressives Congress", years: "2013–present" },
      ],
      edu: "Richard J. Daley College Chicago State University (BS)",
      tooltip:
        "The incumbent is the current holder of an office or position. In an election, the incumbent is the person holding or acting in the position that is up for election, regardless of whether they are seeking re-election.",
      voteCount: 0,
    },
    {
      id: 2,
      code: "CON",
      partyImg:
        "https://cdn.vanguardngr.com/wp-content/uploads/2019/05/2019-PRESIDENTIAL-ELECTIONS-PETITIONS-PANEL-OPENS-SITTING-IN-ABUJA-14.jpg",
      partyName: "LP",
      candidateName: "Peter Obi",
      gov: "Governor of Anambra State",
      office: "In office",
      date: " 14 June 2007 – 17 March 2014",
      born: "Peter Gregory Onwubuasi Obi 19 July 1961 (age 62) Onitsha, Eastern Region, Nigeria",
      country: "(now in Anambra State)",
      party: [{ partyname: "Labour Party ", years: "since 2022" }],
      edu: "Christ the King College, Onitsha University of Nigeria, Nsukka",
      tooltip:
        "This is a list of administrators and governors of Anambra State. Anambra State, Nigeria, was formed on 3 February 1976 when East-Central State was divided into Anambra and Imo (Owerri) states.",
      voteCount: 0,
    },
    {
      id: 3,
      rank: "His Excellency",
      code: "GCFR GCON",
      partyImg:
        "https://www.bellanaija.com/wp-content/uploads/2013/08/President-Goodlucj-Ebele-Jonathan-August-2013-BellaNaija.jpg",
      partyName: "PDP",
      candidateName: "Goodluck Jonathan",
      gov: "14th President of Nigeria",
      office: "In office",
      date: "6 May 2010 – 29 May 2015",
      born: "Goodluck Ebele Azikiwe Jonathan 20 November 1957 (age 66)",
      country:
        "Ogbia, Eastern Region, British Nigeria (now Ogbia, Bayelsa State, Nigeria)",
      party: [{ partyname: "People's Democratic Party", years: "2007–2015" }],
      edu: "Doctor of Philosophy degree in Zoology",
      tooltip:
        "The president of Nigeria, officially the president of the Federal Republic of Nigeria is the head of state and head of government of the Federal Republic of Nigeria. The president directs the executive branch of the federal government and is the commander-in-chief of the Nigerian Armed Forces",
      voteCount: 0,
    },
  ]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
    setIsLoading(false);
  }, []);

  const handleVote = async (id) => {
    const selectedCandidate = votes.find((candidate) => candidate.id === id);

    Swal.fire({
      title: `Do you want to vote for ${selectedCandidate.candidateName}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        try {
          const allData = {
            partyName: selectedCandidate.partyName,
            candidateName: selectedCandidate.candidateName,
            votersCode: user.passKey,
            votersName: user.name,
          };

          const response = await axios.post(url, allData);
          console.log(response);

          setVotes((prevVotes) =>
            prevVotes.map((candidate) =>
              candidate.id === id
                ? { ...candidate, voteCount: candidate.voteCount + 1 }
                : candidate
            )
          );

          setTimeout(() => {
            toast.success("Candidate chosen successfully");
            navigate("/voting/results", {
              state: { selectedCandidate, user, votes },
            });
          }, 3000);
        } catch (error) {
          if (error.response) {
            if (error.response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Unauthorized",
                text: "Your vote has been counted and cannot vote again",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: error.response.data.message || "An error occurred",
              });
            }
          } else if (error.request) {
            Swal.fire({
              icon: "error",
              title: "Network Error",
              text: "No response from server. Please check your internet connection.",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "An error occurred. Please try again.",
            });
          }
        } finally {
          setIsLoading(false);
        }
      }
    });
  };

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backdropFilter: "blur(5px)",
          }}
        >
          <SpinnerCircularFixed
            size={50}
            thickness={180}
            speed={100}
            color="rgba(255, 255, 255, 1)"
            secondaryColor="rgba(255, 255, 255, 0.55)"
          />
        </div>
      )}
      <div>
        <div className="container-fluid px-0 mt-4">
          <div className="bg-img">
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
              className="mt-5 px-3 py-4 shadow rounded-3 mx-auto pb-3"
            >
              <h5 className="text-center fw-bold py-3 py-md-0 mt-2 mt-md-0 text-success">
                CHOOSE THE CANDIDATE OF YOUR CHOICE
              </h5>
              <div className="d-md-flex justify-content-between">
                {votes.map((item, i) => (
                  <div
                    key={i}
                    className="mt-3 rounded bg-white col-md-3 shadow px-2 py-2"
                  >
                    <div className="">
                      <div className="mx-auto">
                        <p className="text-center">
                          <span className="text-primary">{item.rank} </span>
                          <br /> <b className="fs-5"> {item.candidateName}</b>
                          <br />{" "}
                          <span className="text-primary">{item.code}</span>
                        </p>
                        <img
                          className="candidate-h col-md-11 col-10 rounded-1 mx-auto d-flex justify-content-center item-center text-center shadow"
                          src={item.partyImg}
                          alt=""
                        />
                        <div className="border fw-bold rounded-1 get-height mt-2 text-center">
                          {item.gov}
                        </div>

                        <button
                          type="button"
                          className="border col-12 text-secondary fw-bold rounded-1 get-height mt-2 text-center"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-custom-class="custom-tooltip"
                          data-bs-title={item.tooltip}
                        >
                          incumbent
                        </button>
                        <p
                          style={{ fontSize: "14px" }}
                          className="text-center mt-1"
                        >
                          <b> {item.office}</b> <br />
                          {item.date}
                        </p>
                        <div className="text-center mt-md-0">
                          <button
                            style={{ fontSize: "14px" }}
                            className="btn w-50 rounded-1 btn-success"
                            onClick={() => handleVote(item.id)}
                          >
                            Vote for {item.partyName}
                          </button>
                        </div>
                        <div className="border fw-bold rounded-1 get-height text-dark mt-2 text-center">
                          Personal details
                        </div>
                        <div
                          style={{ fontSize: "14px" }}
                          className="d-flex mt-1"
                        >
                          <p className="text-center mt-1 col-2">
                            <b>Born</b>
                          </p>
                          <div className="mt-1">
                            {item.born}
                            <br />
                            <span className="text-primary">{item.country}</span>
                          </div>
                        </div>
                        <div
                          style={{ fontSize: "14px" }}
                          className="mt-2 d-flex px-0"
                        >
                          <p className="text-center mt-1 col-2">
                            <b>party</b>
                          </p>
                          <div className="mt-1">
                            {item.party?.map((party, index) => (
                              <div key={index}>
                                <span className="text-primary">
                                  {party.partyname}
                                </span>
                                ({party.years})<br />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div
                          style={{ fontSize: "14px" }}
                          className="mt-2 d-flex px-0"
                        >
                          <p className="text-center mt-1 col-3">
                            <b> Education</b>
                          </p>
                          <div className="mt-1">
                            <span className="text-primary">{item.edu}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
