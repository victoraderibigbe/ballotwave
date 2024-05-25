import React from 'react'

const FooterPage = () => {
  return (
    <>
    <footer className="bg-dark text-light py-4 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>About BallotWave</h5>
                <p>
                  BallotWave is dedicated to empowering communities and driving
                  positive change through engagement and advocacy.
                </p>
              </div>
              <div className="col-md-4">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                  <li>Email: info@ballotwave.org</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Address: 123 Democracy St., City, State</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Follow Us</h5>
                <ul className="list-unstyled d-flex">
                  <li><a href="#" className="text-light me-3">Facebook</a></li>
                  <li><a href="#" className="text-light me-3">Twitter</a></li>
                  <li><a href="#" className="text-light">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default FooterPage