//Import React Library
// Import CSS
// Import JS

// Import Components
import Header from "../components/header";
import Footer from "../components/footer";
import { MdEmail } from "react-icons/md";

export default function Helpline() {
  return (
    <>
      <Header />
      <div className="bg-cam-dark-light py-3 px-4 rounded my-3">
        <span className="fs-4">Hi, How can we help?</span>
      </div>
      <div className="fs-4 my-3">Top Questions</div>
      <div className="px-0 mb-4">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                {/* Question One */}
                How do I upload the Image?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* Answer One */}
                <strong>This is the first item's accordion body.</strong> It is shown byo worth
                noting that just about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                {/* Question */}
                Where I find the saved Images?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* Answer */}
                <strong>This is the second item's accordion body.</strong> It is hiddenhough the
                transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                {/* Question */}
                How do I update My Profile?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* Answer */}
                <strong>This is the third item's accordion body.</strong> It is hiddeny of this with
                custom CSS or overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-5">
        <div className="fs-3 fw-bold mb-3">Still Need Help?</div>
        <div className="fs-5 mb-2">You Can Contact Us On:</div>
        <div className="d-flex flex-column mt-2 mb-5">
          <div className="d-flex align-items-center mb-2"><MdEmail className="me-2"/><a href="mailto:ridafatima475@gmail.com">ridafatima475@gmail.com</a></div>
          <div className="d-flex align-items-center mb-2"><MdEmail className="me-2"/><a href="mailto:eshalch53@gmail.com">eshalch53@gmail.com</a></div>
          <div className="d-flex align-items-center mb-2"><MdEmail className="me-2"/><a href="mailto:toobaraza811@gmail.com">toobaraza811@gmail.com</a></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
