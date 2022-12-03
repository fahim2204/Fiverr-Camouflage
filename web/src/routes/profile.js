//Import React Library
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Import CSS
// Import JS

// Import Components
import { MainTitle } from "../utils/variables";
import { Images } from "../utils/images";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>{MainTitle} - Profile</title>
      </Helmet>
      <Header />
      <div className="row">
        <div className="col-12 col-sm-3">
          <div className="fs-5 mb-3 text-center fw-bold">My Profile</div>
          <div className="text-center">
            <img
              className="p-1 rounded-circle border shadow mt-3 mb-4"
              src={Images.Logo}
              alt="logo"
              height={120}
              width={120}
            />
          </div>
        </div>
        <div className="col-12 col-sm-9">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 mt-0 mt-sm-4 pt-4">
            <div className="mb-4 row">
              <label className="col-sm-3 col-form-label" htmlFor="fullname">
                Full Name:
              </label>
              <div className="col-sm-9">
                <input className="form-control py-2" type="text" name="fullname" id="fullname" />
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-3 col-form-label" htmlFor="occupation">
                Occupation:
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control py-2"
                  type="text"
                  name="occupation"
                  id="occupation"
                />
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-3 col-form-label" htmlFor="gender">
                Gender:
              </label>
              <div className="col-sm-9">
                <select class="form-select" id="gender">
                  <option selected>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-3 col-form-label" htmlFor="email">
                Email:
              </label>
              <div className="col-sm-9">
                <input className="form-control py-2" type="text" name="email" id="email" />
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-3 col-form-label" htmlFor="country">
                Country:
              </label>
              <div className="col-sm-9">
                <input className="form-control py-2" type="text" name="country" id="country" />
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-3 col-form-label" htmlFor="city">
                City:
              </label>
              <div className="col-sm-9">
                <input className="form-control py-2" type="text" name="city" id="city" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-9">
                <div className="text-center mb-3">
                  <button className="btn-cam-primary my-4">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
