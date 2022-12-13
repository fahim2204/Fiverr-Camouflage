//Import React Library
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Import CSS

// Import Components
import Header from "../components/header";
import Footer from "../components/footer";
import { BiCamera } from "react-icons/bi";
import { MainTitle } from "../utils/variables";

export default function Image() {
  const [selectedFile, setSelectedFile] = useState("");
  const imageInputRef = useRef(null);
  const [imgBase64, setImgBase64] = useState("");
  const [image, setImage] = useState("");

  const imgToBase64 = (image) => {
    let base64String = "";
    var reader = new FileReader();
    reader.onload = function () {
      base64String = reader.result;
      setImgBase64(base64String);
    };
    reader.readAsDataURL(image);
  };
  useEffect(() => {
    if (!selectedFile) {
      setImage(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    console.log("SelectedFile>>", selectedFile);
    setImage(objectUrl);
    imgToBase64(selectedFile);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <>
      <Helmet>
        <title>{MainTitle} - Image</title>
      </Helmet>
      <Header />
      <div className="my-auto">
        <div className="d-flex flex-column align-items-center">
          <div
            className="img-up-con rounded shadow-cam-primary cursor-pointer mb-3"
            onClick={() => imageInputRef.current.click()}
          >
            {!selectedFile && (
              <div className="d-flex flex-column align-items-center bg-cam-dark-light p-5 rounded">
                <BiCamera className="display-3" />
                <div className="fs-6">Upload a Image</div>
              </div>
            )}
            {selectedFile && (
              <>
                <img
                  className="rounded"
                  src={image}
                  alt="Uploaded"
                  height={300}
                />
                <span className="hov-img-ic">
                  <BiCamera className="display-3 cl-cam-primary" />
                </span>
              </>
            )}
            <input
              type="file"
              name="image"
              placeholder="url"
              ref={imageInputRef}
              accept="image/png, image/gif, image/jpeg, image/jpg"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>
          <div className="my-2">
            <select
              className="form-select"
              name="categoryName"
              // value={galleryData?.categoryName || ""}
              onChange={(e) => {
                // handleProfileData(e);
              }}
            >
              <option value="">Select a category</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="my-3">
            <div className="d-flex mb-3">
              {/* <button className="btn-cam-primary mx-3">Delete Image</button> */}
              <Link to={`/result`} className="btn-cam-primary mx-3">
                Show Results
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
