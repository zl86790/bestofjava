import React from "react";
import "./css/bannerStyle.css";
const Banner = props => {
  return (
    <div>
      <div className="row no-gutter">
        <div className="bannerStyle col-md-12">The best of Github projects</div>
        <div className="subBannerStyle col-md-12">
          A curated list of the most popular projects in Github
        </div>
      </div>
      <div className="splitterStyle row no-gutter" />
    </div>
  );
};
export default Banner;
