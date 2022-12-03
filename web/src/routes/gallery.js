//Import React Library
// Import CSS
// Import JS

// Import Components
import Header from "../components/header";
import Footer from "../components/footer";

export default function Gallery() {
  return (
    <>
      <Header />
      <div className="row g-1 gx-2 mt-2">
        <div className="col-12 col-md-6 md-2">
          <div className="bg-cam-dark-light2 p-1 rounded shadow-sm mb-2">
            <img className="img-fluid w-50" src="/img/am-up-1.png" alt="gallery" />
            <img className="img-fluid w-50" src="/img/am-rs-1.png" alt="gallery" />
          </div>
          <div className="bg-cam-dark-light2 p-1 rounded shadow-sm mb-2">
            <img className="img-fluid w-50" src="/img/fly-up-1.png" alt="gallery" />
            <img className="img-fluid w-50" src="/img/fly-rs-1.png" alt="gallery" />
          </div>
        </div>
        <div className="col-12 col-md-6 md-2">
          <div className="bg-cam-dark-light2 p-1 rounded shadow-sm mb-2">
            <img className="img-fluid w-50" src="/img/aq-up-1.png" alt="gallery" />
            <img className="img-fluid w-50" src="/img/aq-rs-1.png" alt="gallery" />
          </div>
          <div className="bg-cam-dark-light2 p-1 rounded shadow-sm mb-2">
            <img className="img-fluid w-50" src="/img/ter-up-1.png" alt="gallery" />
            <img className="img-fluid w-50" src="/img/ter-rs-1.png" alt="gallery" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
