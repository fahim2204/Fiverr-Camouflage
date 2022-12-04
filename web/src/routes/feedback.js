//Import React Library
// Import CSS
// Import JS

// Import Components
import Header from "../components/header";
import Footer from "../components/footer";
import { TbMoodCry,TbMoodConfuzed,TbMoodEmpty,TbMoodHappy,TbMoodCrazyHappy } from "react-icons/tb";

export default function Feedback() {
  return (
    <>
      <Header />
      <div className="col-7 mx-auto">
        <div className="text-center my-3">
          <span className="fs-4">YOUR FEEDBACK</span>
        </div>
        <hr />
        <p className="fs-5 text-center">We would like your feedback to improve our website.</p>
        <p className="fs-6 text-center mb-1">What is your opinion of this page?</p>
        <div className="d-flex justify-content-center align-items-center">
          <input type="radio" name="opinion" id="opinion-1" value="cry" class="op-radio" />
          <label htmlFor="opinion-1" className="op-emo emo-1" title="Very Bad"><TbMoodCry/></label>
          <input type="radio" name="opinion" id="opinion-2" value="confuse" class="op-radio" />
          <label htmlFor="opinion-2" className="op-emo emo-2" title="Bad"><TbMoodConfuzed/></label>
          <input type="radio" name="opinion" id="opinion-3" value="neutral" class="op-radio" />
          <label htmlFor="opinion-3" className="op-emo emo-3" title="Neutral"><TbMoodEmpty/></label>
          <input type="radio" name="opinion" id="opinion-4" value="happy" class="op-radio" />
          <label htmlFor="opinion-4" className="op-emo emo-4" title="Good"><TbMoodHappy/></label>
          <input type="radio" name="opinion" id="opinion-5" value="crazy" class="op-radio" />
          <label htmlFor="opinion-5" className="op-emo emo-5" title="Excellent"><TbMoodCrazyHappy/></label>
        </div>
        <hr />
        <p className="fs-6 mb-2">Please select your feedback category below:</p>
        <div className="d-flex justify-content-center align-items-center">
          <input type="radio" name="feed-cat" id="feed-cat-1" value="cry" class="cat-radio" />
          <label htmlFor="feed-cat-1" className="feed-emo feed-emo-1" title="Very Bad">Suggestion</label>
          <input type="radio" name="feed-cat" id="feed-cat-2" value="confuse" class="cat-radio" />
          <label htmlFor="feed-cat-2" className="feed-emo feed-emo-2" title="Bad">Something Wrong</label>
          <input type="radio" name="feed-cat" id="feed-cat-3" value="neutral" class="cat-radio" />
          <label htmlFor="feed-cat-3" className="feed-emo feed-emo-3" title="Neutral">Complement</label>
        </div>
        <hr />
        <div class="mb-3 w-75">
          <label for="feedtext" class="form-label">
            Please leave your feedback below:
          </label>
          <textarea
            class="form-control"
            id="feedtext"
            rows="3"
            placeholder="Leave your feedback here..."
          ></textarea>
        </div>
        <div className="text-center pt-3">
          <button className="btn-cam-primary mb-5 px-5">Send</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
