//Import React Library
import { Link } from "react-router-dom"

// Import CSS
// Import JS

// Import Components
import { BiUserCircle,BiPhotoAlbum } from "react-icons/bi";



export default function SideMenu() {
  return (
    <>
      <div className="sidemenu-cont">
        <ul>
          <li>
            <Link to="/profile">
              <div className="d-flex align-items-center l-cont">
                <div className="me-2 l-text">Profile</div>
                <BiUserCircle />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <div className="d-flex align-items-center l-cont">
                <div className="me-2 l-text">Gallery</div>
                <BiPhotoAlbum />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
