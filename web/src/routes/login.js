//Import React Library
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";

// Import CSS
// Import JS

// Import Components
import { MainTitle } from "../utils/variables";
import { Images } from "../utils/images";
import { apiUrl } from "../utils/config";

export default function Login() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({});

  const handleLoginData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const doLoginRequest = () => {
    if(!loginData["username"] || !loginData["password"]){
      notify("Fill Username & Password")
    }else{
      axios
        .post(`${apiUrl}/login`, loginData)
        .then((x) => {
          notify("login Succesfull!!");
          localStorage.setItem("token",x.data);
          navigate("/")
        })
        .catch((e) => {
          e.response.data.message ? notify(e.response.data.message) : console.log("Error>> ", e);
        });
    }
  };

  const notify = (msg) => toast(msg);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Helmet>
        <title>{MainTitle} - Login</title>
      </Helmet>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 bg-light shadow-cam-primary d-flex flex-column align-items-center rounded-3">
          <Link to={`/`}>
            <img
              className="p-1 rounded-circle border shadow mt-3 mb-4"
              src={Images.Logo}
              alt="logo"
              height={120}
              width={120}
            />
          </Link>
          <p className="text-black mb-4">Welcome Back! Please Login</p>
          <div className="mb-3 w-100 px-4">
            <input
              className="form-control py-2"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => {
                handleLoginData(e);
              }}
            />
          </div>
          <div className="mb-3 w-100 px-4">
            <input
              className="form-control py-2"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                handleLoginData(e);
              }}
            />
          </div>
          <div className="text-center">
            <button className="btn-cam-primary mt-3" onClick={doLoginRequest}>
              Login
            </button>
          </div>
          <p className="text-muted my-3">
            Not Registered Yet?{" "}
            <Link className="hov-cl-cam-primary" to={`/register`}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
