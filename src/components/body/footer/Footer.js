import React from "react";
import "./css/footerStyle.css";
const Footer = props => {
  return (
    <div className="row no-gutter">
      <div className="splitterStyle col-md-12" />
      <div className="footerStyle col-md-12">Power by Lizhe</div>
      <div className="subFooterStyle col-md-12">A website from lizhe.name</div>
      <div style={{ height: 30 }}>&nbsp;</div>
    </div>
  );
};
export default Footer;
