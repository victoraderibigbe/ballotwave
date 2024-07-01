import React from 'react'
import { Link } from 'react-router-dom'

const DashNav = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary px-0 shadow fixed-top">
        <div class="container-fluid">
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
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <p className="navbar-brand fw-bold fs-5">BallotWave</p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div style={{ marginTop: "-40px" }} class=" offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">
                    Home
                    <hr />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="#">
                    Vote Now
                    <hr />
                  </Link>
                </li>

                <li class="nav-item" to="">
                  <Link class="nav-link" to="/profilepage">
                    Profile
                    <hr />
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/candidate">
                    Candidates
                    <hr />
                  </Link>
                </li>
                <li class="nav-item fixed-bottom text-end px-3 ">
                  <Link class="text-danger nav-link" href="#">
                    Log-Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default DashNav