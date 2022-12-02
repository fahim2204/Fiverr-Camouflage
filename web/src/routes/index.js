//Import React Library
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Grid, Lazy } from "swiper";

// Import CSS
// Import JS

// Import Components
import Header from "../components/header";
import Footer from "../components/footer";
import { MainTitle } from "../utils/variables";
import { BiCamera } from "react-icons/bi";
import {Images} from "../utils/images"

export default function Index() {
  const [selectedFile, setSelectedFile] = useState("");
  const imageInputRef = useRef(null)
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
    setImage(objectUrl);
    imgToBase64(selectedFile);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <>
      <Helmet>
        <title>{MainTitle} - Home</title>
      </Helmet>
      <Header />
      <div className="sliderrr">
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={20}
          loop={true}
          // grid={{
          //   rows: 2,
          //   fill: "row",
          // }}
          lazy={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter:false,
          }}
          // breakpoints={{
          //   "@0.00": {
          //     slidesPerView: 1,
          //     spaceBetween: 10,
          //   },
          //   "@0.75": {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   "@1.00": {
          //     slidesPerView: 3,
          //     spaceBetween: 40,
          //   },
          //   "@1.50": {
          //     slidesPerView: 4,
          //     spaceBetween: 50,
          //   },
          // }}
          modules={[Pagination,Autoplay,Grid, Lazy]}
          className="mySwiper"
        >
          <SwiperSlide>
              <img className="mx-1 img-fluid" src={Images.Up1} alt="gallery" />
          </SwiperSlide>
          <SwiperSlide>
              <img className="mx-1 img-fluid" src={Images.Res1} alt="gallery" />
          </SwiperSlide>
          <SwiperSlide>
              <img className="mx-1 img-fluid" src={Images.Up2} alt="gallery" />
          </SwiperSlide>
          <SwiperSlide>
              <img className="mx-1 img-fluid" src={Images.Res2} alt="gallery" />
          </SwiperSlide>
          <SwiperSlide>
              <img className="mx-1 img-fluid" src={Images.Up4} alt="gallery" />
          </SwiperSlide>
          <SwiperSlide>
              <img className="mx-1 img-fluid" src={Images.Res4} alt="gallery" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-5">
        <img src={image} alt="" height={80} />
        <div className="bg-light d-flex align-items-center mx-auto img-cont rounded" onClick={() => imageInputRef.current.click()}>
          <BiCamera className="fs-4 text-black mx-2" />
          <span className="text-black fw-bold">Detect Image</span>
          <input
            type="file"
            name="image"
            id="imageInput"
            ref={imageInputRef}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>



        {/* <span id="imageupload">
          <input
            type="file"
            name="image"
            id="imageInput"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <BiCamera className="camicon" />
        </span> */}
      </div>
      <Footer />
    </>
  );
}
