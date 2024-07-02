// import React from 'react';
import image from '../assets/404error.gif';
import './ErrorPage.css'

const ErrorPage = () => {

  return (
    <div className="container-fluid error-page">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src={image} alt="404 Error" className="img-fluid" />
        </div>
        <div className="col-md-6 text-center">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <button className="btn btn-primary">Go to Homepage</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
