import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      votersCardNumber: "",
      nin: "",
      age: "",
      nationality: "",
      stateOfOrigin: "",
      lgaOfOrigin: "",
      countryOfResidence: "",
      stateOfResidence: "",
      lgaOfResidence: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);

      delete values.confirmPassword;

      console.log(values);

      axios
        .post("http://localhost:3000/user/register", values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validationSchema: yup.object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup.string().email("Invalid Email").required("Email is required"),
      phoneNumber: yup
        .string()
        .required("Phone number is required")
        .min(11, "Phone number must not be less than 11 characters")
        .max(11, "Phone number must not be greater than 11 characters"),
      votersCardNumber: yup.string().required("Voters ID is required"),
      nin: yup
        .string()
        .required("NIN number is required")
        .min(11, "NIN must not be less than 11 characters")
        .max(11, "NIN must not be greater than 11 characters"),
      age: yup.string().required("Age is required"),
      nationality: yup.string().required("Nationality is required"),
      stateOfOrigin: yup.string().required("State of Origin is required"),
      lgaOfOrigin: yup.string().required("LGA of Origin is required"),
      countryOfResidence: yup
        .string()
        .required("Country of Residence is required"),
      stateOfResidence: yup.string().required("State of Residence is required"),
      lgaOfResidence: yup.string().required("LGA of Residence is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmPassword: yup
        .string()
        .required("Confirm password is required")
        .oneOf([yup.ref("password"), null], "Passwords do not match"),
    }),
  });

  return (
    <div className="col-11 col-md-7 mx-auto p-3 p-md-5 bg-secondary bg-opacity-50 rounded-3 my-5">
      <h2 className="text-white fw-bold text-center">Register</h2>
      <form onSubmit={formik.handleSubmit} className="row mt-3 mt-md-4">
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label fw-semibold">
              First Name
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.firstName && formik.errors.firstName
                  ? "is-invalid"
                  : ""
              }`}
              id="firstName"
              placeholder="Enter First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <small className="text-warning">{formik.errors.firstName}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label fw-semibold">
              Last Name
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.lastName && formik.errors.lastName
                  ? "is-invalid"
                  : ""
              }`}
              id="lastName"
              placeholder="Enter Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <small className="text-warning">{formik.errors.lastName}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${
                formik.touched.email && formik.errors.email ? "is-invalid" : ""
              }`}
              id="email"
              placeholder="Enter Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <small className="text-warning">{formik.errors.email}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "is-invalid"
                  : ""
              }`}
              id="phoneNumber"
              placeholder="Enter Phone Number"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <small className="text-warning">
                {formik.errors.phoneNumber}
              </small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="votersCardNumber" className="form-label fw-semibold">
              Voters' Card Number
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.votersCardNumber && formik.errors.votersCardNumber
                  ? "is-invalid"
                  : ""
              }`}
              id="votersCardNumber"
              placeholder="Enter Voters' Card Number"
              name="votersCardNumber"
              value={formik.values.votersCardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.votersCardNumber && formik.errors.votersCardNumber && (
              <small className="text-warning">{formik.errors.votersCardNumber}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="nin" className="form-label fw-semibold">
              NIN Number
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.nin && formik.errors.nin ? "is-invalid" : ""
              }`}
              id="nin"
              placeholder="Enter NIN Number"
              name="nin"
              value={formik.values.nin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nin && formik.errors.nin && (
              <small className="text-warning">{formik.errors.nin}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label fw-semibold">
              Age
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.age && formik.errors.age ? "is-invalid" : ""
              }`}
              id="age"
              placeholder="Enter Age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age && (
              <small className="text-warning">{formik.errors.age}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="nationality" className="form-label fw-semibold">
              Nationality
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.nationality && formik.errors.nationality
                  ? "is-invalid"
                  : ""
              }`}
              id="nationality"
              placeholder="Enter Nationality"
              name="nationality"
              value={formik.values.nationality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.nationality && formik.errors.nationality && (
            <small className="text-warning">{formik.errors.nationality}</small>
          )}
        </div>

        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="stateOfOrigin" className="form-label fw-semibold">
              State of Origin
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.stateOfOrigin && formik.errors.stateOfOrigin
                  ? "is-invalid"
                  : ""
              }`}
              id="stateOfOrigin"
              placeholder="Enter state of origin"
              name="stateOfOrigin"
              value={formik.values.stateOfOrigin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.stateOfOrigin && formik.errors.stateOfOrigin && (
              <small className="text-warning">
                {formik.errors.stateOfOrigin}
              </small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="lgaOfOrigin" className="form-label fw-semibold">
              LGA of Origin
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.lgaOfOrigin && formik.errors.lgaOfOrigin
                  ? "is-invalid"
                  : ""
              }`}
              id="lgaOfOrigin"
              placeholder="Enter LGA of Origin"
              name="lgaOfOrigin"
              value={formik.values.lgaOfOrigin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lgaOfOrigin && formik.errors.lgaOfOrigin && (
              <small className="text-warning">
                {formik.errors.lgaOfOrigin}
              </small>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="countryOfResidence"
              className="form-label fw-semibold"
            >
              Country of Residence
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.countryOfResidence &&
                formik.errors.countryOfResidence
                  ? "is-invalid"
                  : ""
              }`}
              id="countryOfResidence"
              placeholder="Enter Country of Residence"
              name="countryOfResidence"
              value={formik.values.countryOfResidence}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.countryOfResidence &&
              formik.errors.countryOfResidence && (
                <small className="text-warning">
                  {formik.errors.countryOfResidence}
                </small>
              )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="stateOfResidence"
              className="form-label fw-semibold"
            >
              State of Residence
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.stateOfResidence &&
                formik.errors.stateOfResidence
                  ? "is-invalid"
                  : ""
              }`}
              id="stateOfResidence"
              placeholder="Enter State of Residence"
              name="stateOfResidence"
              value={formik.values.stateOfResidence}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.stateOfResidence &&
              formik.errors.stateOfResidence && (
                <small className="text-warning">
                  {formik.errors.stateOfResidence}
                </small>
              )}
          </div>

          <div className="mb-3">
            <label htmlFor="lgaOfResidence" className="form-label fw-semibold">
              LGA of Residence
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.lgaOfResidence && formik.errors.lgaOfResidence
                  ? "is-invalid"
                  : ""
              }`}
              id="lgaOfResidence"
              placeholder="Enter LGA of Residence"
              name="lgaOfResidence"
              value={formik.values.lgaOfResidence}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lgaOfResidence && formik.errors.lgaOfResidence && (
              <small className="text-warning">
                {formik.errors.lgaOfResidence}
              </small>
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
              id="password"
              placeholder="Enter Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <small className="text-warning">{formik.errors.password}</small>
            )}
          </div>

          <div className="mb-3 mb-md-5">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className={`form-control ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "is-invalid"
                  : ""
              }`}
              id="confirmPassword"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <small className="text-warning">
                  {formik.errors.confirmPassword}
                </small>
              )}
          </div>

          <div>
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center fw-semibold mt-3">
        <span>Already registered?</span>
        <span className="ms-2">
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
