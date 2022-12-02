//Import React Library
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Import CSS
// Import JS

// Import Components
import { MainTitle } from "../utils/variables";
import { Images } from "../utils/images";

export default function Register() {
  return (
    <>
     <Helmet>
        <title>{MainTitle} - Register</title>
      </Helmet>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 bg-light shadow-cam-primary d-flex flex-column align-items-center border rounded-3">
          <Link to={`/`}>
            <img
              className="p-1 rounded-circle border shadow mt-3 mb-4"
              src={Images.Logo}
              alt="logo"
              height={80}
              width={80}
            />
          </Link>
          <p className="text-black mb-4">Welcome! Please Register</p>
          <div className="mb-3 w-100 px-4">
            <input className="form-control py-2" type="text" name="fullname" id="fullname" placeholder="Full Name" />
          </div>
          <div className="mb-3 w-100 px-4">
            <input className="form-control py-2" type="text" name="username" id="username" placeholder="Username" />
          </div>
          <div className="mb-3 w-100 px-4">
            <input className="form-control py-2" type="password" name="password" id="password" placeholder="Password" />
          </div>
          <div className="mb-3 w-100 px-4">
            <input className="form-control py-2" type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
          </div>
          <div className="text-center">
            <button className="btn-cam-primary mt-3">Register</button>
          </div>
          <p className="text-muted my-3">Already Registered? <Link className="hov-cl-cam-primary" to={`/login`}>Login</Link></p>
        </div>
      </div>
    </>
  );
}
