import React, { useEffect } from "react";
import Footer from "./FooterPage";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomePage = () => {
    
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <>
      <div className="container-fluid mt-top px-0">
        <div  data-aos="zoom-in" className="border border-light text-center py-3 mx-auto  rounded get-position col-md-4 col-12 ">
          <p className="text-light fs-3 fw-bold">
            Give Your Important Vote Made The Pure Country
          </p>
          <button className="btn py-2 px-5"><Link className="text-decoration-none text-white" to="/register"> VOTE NOW!</Link></button>
          <p className="text-light mt-2">MAY 27 - MAY 30</p>
        </div>
        <div className="col-12 img-h"></div>
        <section className="position-top">
          <div className="px-md-5 px-4 d-md-flex justify-content-around mb-4 mx-auto ">
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card12 col-md-3 rounded">
              <div className="card12-img">
                <img
                  src="https://img.freepik.com/free-photo/top-view-paper-style-voting-arrangement_23-2149095481.jpg?t=st=1716647107~exp=1716650707~hmac=5668b17270f7678e0215bb15ce3fbd95a559f48a39c0759a7f42525000819e98&w=740"
                  alt="nature-pic-CSSnippets"
                />
              </div>
              <div className="card12-details">
                <span className="card12-title ">Our Campaign</span>
                <p className="card12-description">
                  At BallotWave, we drive positive change. We focus on community
                  engagement and advocacy. Join us to make a real impact.
                  Support our initiatives for a better future. Together, we can
                  achieve meaningful progress.
                </p>
              </div>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="card12  col-md-3 mt-4 mt-md-0 rounded">
              <div className="card12-img">
                <img
                  src="https://img.freepik.com/premium-vector/vote-word-green-checkmark-symbol-election-design-vector-illustration_685751-552.jpg?w=740"
                  alt="nature-pic-CSSnippets"
                />
              </div>
              <div className="card12-details ">
                <span className="card12-title">Our Party Growing</span>
                <p className="card12-description">
                  Our mission extends beyond our initial goals as
                  we continue to grow and evolve. Our party is committed to
                  fostering a community of engaged and informed citizens who are
                  passionate about making a difference.
                </p>
              </div>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" className="card12  col-md-3 mt-4 mt-md-0 rounded">
              <div className="card12-img">
                <img
                  src="https://img.freepik.com/free-photo/multiethnic-group-hands-raised_53876-14326.jpg?t=st=1716647265~exp=1716650865~hmac=8a1a63ce160e73260971749c22a533d6dcb002792c877f414d845d4b3a8d574d&w=740"
                  alt="nature-pic-CSSnippets"
                />
              </div>
              <div className="card12-details">
                <span className="card12-title">Become A Volunteer</span>
                <p className="card12-description">
                  Volunteers are essential to BallotWave's mission. Your time
                  and skills create real change. Sign up on our website and
                  attend orientation. Join a network of dedicated individuals
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div data-aos="zoom-out-down" className="d-md-flex gap-md-3 mt-5 px-md-5 px-3">
            <div className="col-md-6 py-4">
              <img
                className="col-12 mt-5 img-height rounded "
                src="https://img.freepik.com/premium-photo/african-nigerian-politician-making-speech-conference-hall-nigeria-generative-ai_151355-20151.jpg?w=740"
                alt=""
              />
            </div>
            <div  data-aos="zoom-out-down" style={{color:"gray"}} className="col-md-6 get-blur col-12 px-md-4">
              <div className="d-flex gap-2 mt-3 ">
                <p className="fw-bold text-dark fs-5">Why Choose Us </p>
                <div className="col-md-2 col-4 rounded ms-md-2 bg-success get-w"></div>
              </div>
              <p className="fw-bold text-dark col-md-9 mt-2">
                Leadership is the trusted & powerful
                <span className="text-success"> political team.</span>
              </p>
              
              Leadership represents the culmination of experience, integrity,
              and vision. It is the ability to navigate through the complexities
              of governance with wisdom and responsibility, earning the trust
              and respect of both allies and constituents alike. A powerful
              political team under this leadership is characterized by cohesion,
              strategic acumen, and a shared commitment to progress. Together,
              they forget a path forward, guided by principles of fairness,
              inclusivity, and the common good, making decisions that shape the
              present and future of their society.
              <div>
                <button className="btn btn-success rounded-full py-2 mt-4 col-md-3 col-7">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
