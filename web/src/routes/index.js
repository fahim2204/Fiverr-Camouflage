//Import React Library
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Lazy } from "swiper";

// Import CSS
// Import JS

// Import Components
import Header from "../components/header";
import Footer from "../components/footer";
import { MainTitle } from "../utils/variables";
import { BiCamera } from "react-icons/bi";
import { Images } from "../utils/images"

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
      <div className="row g-2">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <Swiper
            slidesPerView={1}
            autoHeight={true}
            loop={true}
            lazy={true}
            effect={"fade"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[EffectFade, Autoplay, Lazy]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/am-up-1.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/am-rs-1.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/am-up-2.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/am-rs-2.png" alt="gallery" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <Swiper
            slidesPerView={1}
            autoHeight={true}
            loop={true}
            lazy={true}
            effect={"fade"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[EffectFade, Autoplay, Lazy]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/aq-up-1.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/aq-rs-1.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/aq-up-2.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/aq-rs-2.png" alt="gallery" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <Swiper
            slidesPerView={1}
            autoHeight={true}
            loop={true}
            lazy={true}
            effect={"fade"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[EffectFade, Autoplay, Lazy]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/fly-up-1.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/fly-rs-1.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/fly-up-2.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/fly-rs-2.png" alt="gallery" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <Swiper
            slidesPerView={1}
            autoHeight={true}
            loop={true}
            lazy={true}
            effect={"fade"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[EffectFade, Autoplay, Lazy]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/ter-up-1.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/ter-rs-1.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/ter-up-2.png" alt="gallery" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mx-1 img-fluid" src="/img/ter-rs-2.png" alt="gallery" />
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
      <div className="my-5">
        <div className="text-center">
          <Link to={`/image`} className="btn-cam-primary">
            <BiCamera className="fs-4 mx-2" />
            <span>Detect Image</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
