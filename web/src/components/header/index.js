//Import React Library
import { NavLink } from "react-router-dom";

// Import CSS
// Import JS

// Import Components
import {Images} from "../../utils/images"

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md mt-2 mb-4 p-0">
        <NavLink className="navbar-brand text-white p-0" to={`/`}>
        <img src={Images.Logo} alt="logo" height={55} />
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
              <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')} to={`/about`}>
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')} to={`/contact`}>
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')} to={`/guidelines`}>
                GUIDELINES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')} to={`/faq`}>
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')} to={`/register`}>
                REGISTER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')} to={`/login`}>
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
