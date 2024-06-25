import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const url = "https://ballotwave-api.vercel.app/voters/validate";
  const formik = useFormik({
    initialValues: {
      userId: "",
    },
    validationSchema: Yup.object({
      userId: Yup.string()
        .matches(/^\d+$/, "userId must be only digits")
        .min(6, "userId must be at least 6 digits")
        .required("userId is required"),
    }),
    onSubmit: (values) => {
      const code = Number(values.userId);
      console.log(code);
      axios
        .post(url, { code })
        .then((response) => {
          console.log(response);
          const userData = response.data.findUserWithCode;
          if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
            toast.success("Verifying voter's id");
            setTimeout(() => {
              navigate("/user/info");
            }, 6000);
          } 
        })
        .catch((error) => {
          console.log(error);
          toast.error("Invalid voter's id");
        });
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="container-fluid d-flex px-md-5 px-4 get-bg align-items-center justify-content-center vh-100">
        <div className="row py-5 border col-md-8 px-1 bg-white rounded">
          <div className="col-md-6 bg-white mt-2">
            <p className="fw-bold text-success">
              ENTER A VALID PHONE NUMBER, TO GET STARTED
            </p>
            <div className="col-md-10 px-3 py-3 mx-auto">
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex">
                  <input
                    type="text"
                    className={`form-control border ${
                      formik.errors.userId ? "border-danger" : "border-success"
                    }`}
                    id="floatingInput"
                    placeholder="Enter your voter's id"
                    name="userId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userId}
                  />
                </div>
                {formik.touched.userId && formik.errors.userId ? (
                  <span
                    style={{ fontSize: "11px", marginTop: "-5px" }}
                    className="text-danger text-center"
                  >
                    {formik.errors.userId}
                  </span>
                ) : null}
                <div className="text-center">
                  <button
                    type="submit"
                    style={{ fontSize: "12px" }}
                    className="btn btn-success w-75 mt-2 py-2"
                  >
                    Verify voter's id
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 mt-2">
            <img
              className="col-12 rounded img-fluid"
              src="https://img.freepik.com/premium-photo/elections-usa-closeup-people-s-hands-putting-ballots-into-ballot-box-i-voted_166373-5967.jpg?w=740"
              alt="Voting"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
