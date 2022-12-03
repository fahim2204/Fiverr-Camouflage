//Import React Library
import { useState, useEffect, useRef } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { Helmet } from "react-helmet-async";

// Import CSS
// Import JS

// Import Components
import Header from "../components/header";
import Footer from "../components/footer";
import { BiCamera } from "react-icons/bi";
import { MainTitle } from "../utils/variables";

export default function Image() {
  const [selectedFile, setSelectedFile] = useState("");
  const imageInputRef = useRef(null);

  return (
    <>
     <Helmet>
        <title>{MainTitle} - Register</title>
      </Helmet>
      <Header />
      <div className="my-auto">
        <div className="d-flex flex-column align-items-center">
          <div className="img-up-con rounded shadow-cam-primary d-flex align-items-center  cursor-pointer mb-3">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src="/img/fly-up-2.png" alt="Image one" height={20}/>}
              itemTwo={<ReactCompareSliderImage src="/img/fly-rs-2.png" alt="Image two" height={20}/>}
            />
          </div>
          <div className="my-4">
            <div className="d-flex justify-content-center mb-3">
              <button className="btn-cam-primary">Download Image</button>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn-cam-primary mx-3">Save to My Gallery</button>
              <button className="btn-cam-primary mx-3">Save to Public Gallery</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
