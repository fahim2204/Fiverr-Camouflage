//Import React Library
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// Import CSS
// Import JS

// Import Components
import { FaAngleRight, FaAngleLeft, FaUserCircle } from "react-icons/fa";

export default function SideMenu() {
  const navigate = useNavigate();
  const [isSideOpen, SetIsSideOpen] = useState(false);
  const ToggleSideBar = () => {
    SetIsSideOpen(!isSideOpen);
  };
  return (
    <>
      {localStorage.getItem("token") && (
        <>
          <div id="sidebar" className={isSideOpen ? "visible" : ""}>
            <div className="d-flex flex-column h-100">
              <div className="text-center display-3">
                <FaUserCircle className="border rounded-circle" />
              </div>
              <ul className="mt-4">
                <li>
                  <Link to={`/profile`}>
                    <div>Profile</div>
                  </Link>
                </li>
                <li>
                  <Link to={`/gallery`}>
                    <div>My Gallery</div>
                  </Link>
                </li>
                <li>
                  <Link to={`/archive`}>
                    <div>Archive</div>
                  </Link>
                </li>
              </ul>

              <div
                className="mt-auto py-2 mb-1 me-2 ps-3 lgt cursor-pointer"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Logout
              </div>
            </div>

            <div id="sidebar-btn" onClick={() => ToggleSideBar()}>
              {isSideOpen ? <FaAngleLeft /> : <FaAngleRight />}
            </div>
          </div>
        </>
      )}
    </>
  );
}
