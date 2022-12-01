//Import React Library
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Import CSS
// Import JS

// Import Components
import { MainTitle } from "../utils/variables";
import { Images } from "../utils/images";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>{MainTitle} - Login</title>
      </Helmet>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 bg-light shadow d-flex flex-column align-items-center border rounded-3">
          <Link to={`/`}>
            <img
              className="p-2 rounded-circle border shadow mt-3 mb-4"
              src={Images.Logo}
              alt="logo"
              height={80}
              width={80}
            />
          </Link>
          <p className="text-black mb-4">Welcome Back! Please Login</p>
          <div className="mb-3 w-100 px-4">
            <input className="form-control py-2" type="text" name="username" id="username" placeholder="Username" />
          </div>
          <div className="mb-3 w-100 px-4">
            <input className="form-control py-2" type="password" name="password" id="password" placeholder="Password" />
          </div>
          <div className="text-center">
            <button className="btn btn-primary mt-3">Login</button>
          </div>
          <p className="text-muted my-3">Not Registered Yet? <Link to={`/register`}>Register</Link></p>
        </div>
      </div>
    </>
  );
}
