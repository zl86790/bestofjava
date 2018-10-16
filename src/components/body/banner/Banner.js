import React from "react";
import "./css/bannerStyle.css";
const Banner = props => {
  return (
    <div>
      <div className="row no-gutter">
        <div className="bannerStyle">The best of Java open-source projects</div>
        <div className="subBannerStyle">
          A curated list of the most popular open-source projects related to
          Java.
        </div>
      </div>
      <div className="splitterStyle row no-gutter" />
    </div>
  );
};
export default Banner;
