import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Navbar from "../Components/Navbar";
import "../Pages/adminLogin.css";
import countlogo from "../multimedia/attendance-logo1.jpeg";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);

  let url = "https://eventtrackpro-backend.onrender.com/admin/adminsignin";
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
            localStorage.Admintoken = response.data.Admintoken;
            navigate("/adminpage");
          } else {
            alert("invalid email or password");
            setLoading(false);
            console.log(response.data.message);
          }
        })
        .catch((error) => {
          alert("Network Error");
          setLoading(false);
          console.error("There was an error!", error);
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
    <>
      <Navbar />
      <main className="min-vh-150 backg d-flex justify-content-center align-items-center">
        <div className="container mt-5">
          <div className="row">
            <div className="reg col-3 col-sm-5 mx-auto p-3 rounded-2 mt-5 mb-5 con-box">
              <div className="text-center mt-5">
                <img className="" height="50px" src={countlogo} alt="" />
              </div>
              <h4 className="text-center fw-bold text-success">Admin Login</h4>
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email" className="text-success fw-bold">
                  Email:
                </label>
                <input
                  type="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control my-2 text-success is-invalid"
                      : "bdl form-control my-2 text-success"
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
                      : "bdl form-control my-2 text-success"
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
                  </>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-success form-control mt-3 mb-2"
                  >
                    Submit
                  </button>
                )}
              </form>
              <div className="text-center text-success fw-bold">
                <a className="text-success" href="/adminregister">
                  <p>Sign up as Admin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLogin;
