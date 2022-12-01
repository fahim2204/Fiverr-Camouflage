//Import React Library
import { NavLink } from "react-router-dom";

// Import CSS
// Import JS

// Import Components
import {Images} from "../../utils/images"

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md mb-2">
        <NavLink className="navbar-brand text-white" to={`/`}>
        <img src={Images.Logo} alt="logo" height={40} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-dark ms-auto mb-2 mb-md-0 d-flex align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={`/about`}>
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={`/contact`}>
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={`/guidelines`}>
                GUIDELINES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={`/faq`}>
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={`/register`}>
                REGISTER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={`/login`}>
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
