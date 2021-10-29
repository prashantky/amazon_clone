import React from "react";
import "react-bootstrap";
import "./Footer.css";



 const Footer = (props) => {
   


  return (
    <>
      <hr className="mt-1 newFooter-hr-style" />
      <div className="container col-9 justify-content-center text-left  newFooter-content-top-margin">
        <div>
          <div className="text-right"><small className="text-muted">{props.socialText}</small></div>
          <div className="mt-2">
          <ul id="newFooter-list-items" className="text-right">
            <li><a href="#"><img  src="https://a.staticaa.com/images/logo/aa-logo.png" /></a></li>
            <li><a href="#"><img  src="https://a.staticaa.com/images/logo/aa-logo.png" /></a></li>
            <li><a href="#"><img  src="https://a.staticaa.com/images/logo/aa-logo.png" /></a></li>
            <li><a href="#"><img  src="https://a.staticaa.com/images/logo/aa-logo.png" /></a></li>
            <li><a href="#"><img  src="https://a.staticaa.com/images/logo/aa-logo.png" /></a></li>
          </ul>
        </div>
        </div>
        <div className="mt-3">
          <ul id="newFooter-list-items" className="newFooter-list-items-design">
            <li><small className="text-muted"><a href='#'>link 1</a></small></li>
            <li><small className="text-muted"><a href='#'>link 1</a></small></li>
            <li><small className="text-muted"><a href='#'>link 1</a></small></li>
            <li><small className="text-muted"><a href='#'>link 1</a></small></li>
            <li className="float-right text-muted"><small><a href="#">Term and condition</a></small></li>
          </ul>
        </div>
      </div>
    </>
  );
};


export default Footer;