
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerCircularFixed } from "spinners-react";


const Userinfo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false); 
  }, []);

  const navigateToVote = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  if (!user) {
    return <div>No user data found</div>;
  }

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
      <div
        className="container-fluid px-0"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          filter: isLoading ? "blur(2px)" : "none",
        }}
      >
        <img
          style={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
          }}
          src="https://img.freepik.com/free-photo/closeup-shot-waving-flag-nigeria-with-interesting-textures_181624-15997.jpg?t=st=1719243259~exp=1719246859~hmac=afb8d0dda208370feab0df6b877a80dbe74ac4180900957946b788bf81cf0a96&w=740"
          alt=""
        />
        <div className="col-md-8 col-11" style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
              maxWidth: "500px",
              width: "100%",
            }}
            className="shadow rounded-3 mx-auto"
          >
            <div>
              <h3 className="text-success fs-5 pb-2 py-2">USER INFORMATION</h3>
              <p>
                <strong>User Id:</strong> {user.passKey}
              </p>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
            </div>
            <div className="float-end">
              <button className="btn btn-success" onClick={navigateToVote}>
                Proceed to vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userinfo
