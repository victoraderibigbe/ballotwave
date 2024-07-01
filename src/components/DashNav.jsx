import React from "react";
import { Link } from "react-router-dom";

const DashNav = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary px-0 shadow fixed-top">
        <div className="container-fluid">
          <div>
            <img
              src="https://img.freepik.com/premium-vector/modern-unique-hexagon-letter-bw-logo-design-template-elegant-initial-bw-letter-logo-concept_1101554-432.jpg?w=740"
              className="logo-height"
              alt=""
            />
            <Link className="navbar-brand fw-bold fs-4" to="/">
              Ballot|<span className="text-black-50">Wave</span>
            </Link>
          </div>
          <span
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            className="navbar-toggler-icon"
          ></span>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
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
                  <Link className="nav-link" to="/dashboard">
                    Vote Now
                    <hr />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/voting/results">
                    Voting Result
                    <hr />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/candidate">
                    Candidates
                    <hr />
                  </Link>
                </li>
<li className="nav-item">
                  <Link className="nav-link" to="/profilepage">
                    Profile
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
    </>
  );
};

export default DashNav;
