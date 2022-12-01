//Import React Library
import { useState, useEffect } from "react";  
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import CSS
// Import JS

// Import Components
import Header from "../components/header";
import Footer from "../components/footer";
import { MainTitle } from "../utils/variables";

export default function Index() {
  const [selectedFile, setSelectedFile] = useState("");
  
  return (
    <>
      <Helmet>
        <title>{MainTitle} - Home</title>
      </Helmet>
      <Header />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="d-flex">
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=30" alt="gallery" />
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=30" alt="gallery" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex">
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=31" alt="gallery" />
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=31" alt="gallery" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex">
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=32" alt="gallery" />
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=32" alt="gallery" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex">
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=33" alt="gallery" />
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=33" alt="gallery" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex">
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=34" alt="gallery" />
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=34" alt="gallery" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex">
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=35" alt="gallery" />
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=35" alt="gallery" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex">
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=36" alt="gallery" />
            <img className="mx-1 img-fluid" src="https://source.unsplash.com/random/200x200?sig=36" alt="gallery" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="field">
                    <label>Image Upload</label>
                    <input
                      type="file"
                      name="image"
                      placeholder="url"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                  </div>
      <Footer />
    </>
  );
}
