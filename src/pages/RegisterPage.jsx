import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^\d+$/, "Phone number must be only digits")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      const fullPhoneNumber = `+234${values.phoneNumber}`;
      console.log("Phone number submitted: ", fullPhoneNumber);
      toast.success("Phone number submitted successfully!");
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="container-fluid d-flex px-md-5 px-4 get-bg align-items-center justify-content-center vh-100">
        <div className="row py-5 border col-md-8 px-1 bg-white rounded">
          <div className="col-md-6 bg-white mt-2">
            <p className="fw-bold text-success">
              ENTER A VALID PHONE NUMBER , TO GET STARTED
            </p>
            <div className="col-md-10 px-3 py-3 mx-auto">
              <form onSubmit={formik.handleSubmit}>
                <div className=" d-flex">
                  <span className="input-group-text">+234</span>
                  <input
                    type="text"
                    className={`form-control border ${
                      formik.errors.phoneNumber
                        ? "border-danger"
                        : "border-success"
                    }`}
                    id="floatingInput"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                </div>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <span
                    style={{ fontSize: "11px", marginTop: "-5px" }}
                    className="text-danger text-center"
                  >
                    {formik.errors.phoneNumber}
                  </span>
                ) : null}
                <div className="text-center">
                  <button
                    type="submit"
                    style={{ fontSize: "12px" }}
                    className="btn btn-success w-75 mt-2 py-2"
                  >
                    Verify phone number
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
