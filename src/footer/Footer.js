import React from "react";
import logo from "../images/logo.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#414141" }}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-0">
              <img src={logo} alt="logo" style={{ height: "80px" }} />
              <p>
                Our Mission Is To Help Smaller Businesses Achieve Their
                Ambitions. Join Us. We Offer a Wide Range Of Vital Business
                Services Like Advice, Financial Expertise & More. Business
                Banking, Workplace Pension Advice, Lobbying, Cyber Protection.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">LINKS</h6>
              <p>
                <HashLink to="/#top" className="text-white">
                  Home
                </HashLink>
              </p>
              <p>
                <HashLink to="/#about" className="text-white">
                  About
                </HashLink>
              </p>
              <p>
                <HashLink to="/product/#top" className="text-white">
                  Product
                </HashLink>
              </p>
              <p>
                <HashLink to="/price/#top" className="text-white">
                  Price
                </HashLink>
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fa fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fa fa-envelope mr-3"></i> info@bankofanatolia.com
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mt-3">
              <h6 className="text-uppercase mb-2 mx-4 font-weight-bold">
                Follow us
              </h6>
              <ul>
                <li>
                  <a
                    className="btn btn-primary btn-floating"
                    style={{ backgroundColor: "#3b5998", width: 70 }}
                    role="button"
                    href="https://www.facebook.com"
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-primary btn-floating mt-1"
                    style={{ backgroundColor: "#55acee", width: 70 }}
                    role="button"
                    href="https://www.twitter.com"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-primary btn-floating mt-1"
                    style={{ backgroundColor: "#dd4b39", width: 70 }}
                    role="button"
                    href="https://www.google.com"
                  >
                    <i className="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-primary btn-floating mt-1"
                    style={{ backgroundColor: "#ac2bac", width: 70 }}
                    role="button"
                    href="https://www.instagram.com"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-white" href="https://www.bankOfAnatolia.com">
          BankofAnatolia.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
