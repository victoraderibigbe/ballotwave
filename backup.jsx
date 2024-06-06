import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/image.png";
const Dashboard = () => {
    const [selectedCandidate, setSelectedCandidate] = useState(null);

  const allCandidate = [
    { id: 1, partyImg: Img, partyName: "PDP" },
    { id: 2, partyImg: Img, partyName: "APC" },
    { id: 3, partyImg: Img, partyName: "LP" },
    { id: 4, partyImg: Img, partyName: "APGA" },
    { id: 5, partyImg: Img, partyName: "NNPP" },
    { id: 6, partyImg: Img, partyName: "SDP" },
    { id: 7, partyImg: Img, partyName: "YPP" },
    { id: 8, partyImg: Img, partyName: "ADC" },
    { id: 9, partyImg: Img, partyName: "SQI" },
  ];
  const handleSelection = (id) => {
    const getId = document.getElementById(`${id}`)
    console.log(getId);
    // if (selectedCandidate === null) {
    //   setSelectedCandidate(id);
    // }
  };
  return (
    <>
      <div>
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <div>
              <img
                src="https://img.freepik.com/premium-vector/modern-unique-hexagon-letter-bw-logo-design-template-elegant-initial-bw-letter-logo-concept_1101554-432.jpg?w=740"
                className="logo-height"
                alt=""
              />
              <Link className="navbar-brand fw-bold fs-4" to="/">
                BallotWave
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <p className="navbar-brand fw-bold fs-5">BallotWave</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div style={{ marginTop: "-40px" }} className=" offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Home
                      <hr />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Vote Now
                      <hr />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Candidates
                      <hr />
                    </Link>
                  </li>
                  <li className="nav-item fixed-bottom text-end px-3 ">
                    <Link className="text-danger nav-link" href="#">
                      Log-Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className=" pt-5  container">
          <div className="mt-5 px-3 col-md-6 shadow rounded-5 mx-auto pb-3 ">
            <h5 className="text-center  py-3">CHOOSE YOUR VOTE</h5>

            <div className="rounded-4 py-3 px-3 bg-body-secondary shadow ">
              <div className="">
                <div className="row">
                  {allCandidate.map((item, i) => (
                    <>
                      <div className="mt-3 row">
                        <div className="col-3">{i + 1}</div>
                        <div className="col-3">
                          <img
                            className="col-5  rounded-5"
                            src={item.partyImg}
                            alt=""
                          />
                        </div>
                        <div className="col-3">{item.partyName}</div>
                        <div className="col-3">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`${item.id}`}
                              role="switch"
                              checked={selectedCandidate === item.id}
                              onChange={() => handleSelection(item.id)}
                            //   disabled={selectedCandidate !== null && selectedCandidate !== item.id}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
