import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      votersId: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("https://ballotwave-api.vercel.app/user/login", values)
        .then((res) => {
          if (res.status !== 200) {
            toast.error(res.data.message);
          }

          toast.success(res.data.message);
          localStorage.setItem("token", res.data.token);
          setTimeout(() => {
            navigate("/vote");
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data);
        });
    },
    validationSchema: yup.object({
      votersId: yup.string().required("Voter's Id is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    }),
  });

  return (
    <div className="login-container">
      <div className="col-11 col-md-4 mx-auto p-3 p-md-5 bg-secondary bg-opacity-50 rounded-3 my-5">
        <h2 className="text-white fw-bold text-center">
          Sign in to cast your vote
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="votersId" className="form-label fw-semibold">
              Voter's Id
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.votersId && formik.errors.votersId
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter your voter's card id"
              name="votersId"
              value={formik.values.votersId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.votersId && formik.errors.votersId && (
              <small className="text-warning">{formik.errors.votersId}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${
                formik.touched.password && formik.errors.password
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <small className="text-warning">{formik.errors.password}</small>
            )}
          </div>

          <div>
            <button type="submit" className="btn btn-success mx-auto w-100">
              Login
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center fw-semibold mt-3">
          <span>Not registered?</span>
          <span className="ms-2">
            <Link to="/register" className="text-light">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
