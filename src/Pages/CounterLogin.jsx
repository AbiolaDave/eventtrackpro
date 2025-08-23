import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Style from "../Components/Admin/CreateEvent.module.css";
import countlogo from "../multimedia/attendance-logo1.jpeg";

const CounterLogin = () => {
  const [loading, setLoading] = useState(false);
  let url = "https://eventtrackpro-backend.onrender.com/counter/counterlogin";
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      userName: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      await axios
        .post(url, values)
        .then((response) => {
          if (response.data.status) {
            setLoading(false);
            localStorage.Countertoken = response.data.Countertoken;
            navigate("/counterpage");
          } else {
            alert("Invalid Credentials");
            setLoading(false);
            console.log(response.data);
          }
        })
        .catch((error) => {
          alert("Network Error");
          console.error("There was an error!", error);
          setLoading(false);
        });
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("This field is required")
        .email("Please enter a valid email"),
      password: yup.string().required("This field is required"),
    }),
  });

  return (
    <main
      className={`min-vh-150 ${Style.backg} d-flex justify-content-center align-items-center`}
    >
      <div className="container mt-5">
        <div className={Style.row}>
          <div
            className={`${Style.reg} col-3 col-sm-5 mx-auto p-3 rounded-2 mt-5 mb-5`}
          >
            <div className="text-center mt-5">
              <img className="" height="50px" src={countlogo} alt="" />
            </div>
            <h4 className="text-center fw-bold text-success">Counter Login</h4>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email" className="text-success fw-bold">
                Email:
              </label>
              <input
                type="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? "form-control my-2 text-success is-invalid"
                    : `${Style.bdl} form-control my-2 text-success`
                }
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              <div className="text-danger">
                {formik.touched.email && formik.errors.email}
              </div>
              <label htmlFor="password" className="text-success fw-bold">
                Password:
              </label>
              <input
                type="password"
                className={
                  formik.touched.password && formik.errors.password
                    ? "form-control my-2 text-success is-invalid"
                    : `${Style.bdl} form-control my-2 text-success`
                }
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              <div className="text-danger">
                {formik.touched.password && formik.errors.password}
              </div>
              {loading ? (
                <>
                  <button
                    type="submit"
                    className="btn btn-success form-control mt-3 mb-2 invalid"
                    invalid
                  >
                    Submit
                  </button>
                  <div className="mt-3 mb-3 text-center">
                    <div class="spinner-grow text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-secondary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-success" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-warning" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-info" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-light" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-dark" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                  <a target="" href=""></a>
                </>
              ) : (
                <button
                  type="submit"
                  className="btn btn-success form-control mt-3 mb-2"
                >
                  Submit
                </button>
              )}
              <div className="text-center text-success fw-bold">
                <a className="text-success" href="/counterregister">
                  <p>Register as Counter</p>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CounterLogin;
