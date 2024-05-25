import React from 'react'
import './SignIn.css'

const SignIn = () => {
  return (
    <div>
            <div class="login-box">

                <form>
                   
                    <div class="user-box">
                        <input type="number" name="" required="" placeholder="pls use the last six digit of your tel📞 " />
                        <label>Voter id</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>

                    
                    
                    <center>
                        <a href="#">
                            Sign In
                            <span></span>
                        </a></center>
                </form>
            </div>

        </div>
  )
}

export default SignIn
