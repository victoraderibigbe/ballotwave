import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

const DashNav = () => {
  const offcanvasRef = useRef(null);
   const navigate= useNavigate();
  useEffect(() => {
    if (offcanvasRef.current) {
      const offcanvasElement = offcanvasRef.current;
      new bootstrap.Offcanvas(offcanvasElement);
    }
  }, []);

  const handleLinkClick = () => {
    if (offcanvasRef.current) {
      const offcanvasElement = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
      offcanvasElement.hide();
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('passKey');
    handleLinkClick();
    navigate('/register');
  };

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
          <span type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            className="navbar-toggler-icon"></span>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            ref={offcanvasRef}
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
            <div style={{ marginTop: "-40px" }} className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/" onClick={handleLinkClick}>
                    Home
                    <hr />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard" onClick={handleLinkClick}>
                    Vote Now
                    <hr />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/voting/results" onClick={handleLinkClick}>
                    Voting Result
                    <hr />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profilepage" onClick={handleLinkClick}>
                    Profile
                    <hr />
                  </Link>
                </li>
                <li className="nav-item fixed-bottom  text-end px-3">
                  <div style={{cursor:"pointer"}} className="nav-link  text-danger py-2 px-4 rounded" onClick={handleLogout}>
                    Log-Out
                  </div>
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
