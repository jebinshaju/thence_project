import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import "./Website.css";

const Website = () => {
  return (
    <div className="website">
      <img className="path70-icon" alt="" src="/path70.svg" />
      <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      <img className="image-32315-icon" alt="" src="/image-32315@2x.png" />
      <img className="image-32510-icon" alt="" src="/image-32510@2x.png" />
      <img className="website-child" alt="" src="/group-1171281438@2x.png" />
      <img
        className="website-item"
        loading="lazy"
        alt=""
        src="/group-1171281397.svg"
      />
      <img className="image-4-icon1" alt="" src="/image-4@2x.png" />
      <img className="image-32315-icon1" alt="" src="/image-32315@2x.png" />
      <img className="image-32510-icon1" alt="" src="/image-32510@2x.png" />
      <img className="website-inner" alt="" src="/group-1171281438@2x.png" />
      <FrameComponent5 />
      <section className="frame-section">
        <div className="frame-parent">
          <div className="success-stories-wrapper">
            <h1 className="success-stories">Success stories</h1>
          </div>
          <h1 className="every-success-journey">
            Every success journey we’ve encountered.
          </h1>
        </div>
      </section>
      <section className="website-inner1">
        <div className="frame-group">
          <FrameComponent4 />
          <FrameComponent3 />
        </div>
      </section>
      <section className="union-container">
        <div className="frame-container">
          <FrameComponent2 />
          <div className="frame-child" />
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Website;
