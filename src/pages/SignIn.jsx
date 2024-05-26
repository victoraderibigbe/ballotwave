import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div>
      <div class="login-box">
        <form>
          <div class="user-box">
            <input
              type="text"
              name=""
              required=""
              placeholder="Enter your voters' card id"
            />
            <label>Voters's Card Id</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>

          <center>
            <a href="#">
              Sign In
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
