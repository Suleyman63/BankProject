import React from "react";

const Package = () => {
  return (
    <>
      <div
        className="container mt-5 mb-3"
        style={{ background: "#ea8039", color: "#fff" }}
      >
        <div className="row">
          <div className="col-xl-7 offset-xl-0 col-lg-6 offset-xl-1 offset-lg-1">
            <div className="banner-inner-area">
              <h3 className="subtitle text-primary">
                Welcome to Online Banking
              </h3>
              <h1 className="title ">
                Best Banking Services System In The World
              </h1>
              <p className="brd-1">
                We are very fast to provide Banking services. Please check
                included multiple feature & Loans plan .
              </p>
              <h5>How much do you want?</h5>
              <p>We provide online instant cash loans with quick</p>
              <div className="row">
                <div className="col-md-4">
                  <select style={{ width: 100, padding: 5, borderRadius: 5 }}>
                    <option>Amount</option>
                    <option value="1">1000$</option>
                    <option value="2">2000$</option>
                    <option value="3">3000$</option>
                    <option value="4">5000$</option>
                    <option value="5">10000$</option>
                    <option value="6">50000$</option>
                    <option value="7">75000$</option>
                    <option value="8">100000$</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select style={{ width: 100, padding: 5, borderRadius: 5 }}>
                    <option>Month</option>
                    <option value="1">3 Month</option>
                    <option value="2">6 Month</option>
                    <option value="3">9 Month</option>
                    <option value="4">12 Month</option>
                    <option value="5">24 Month</option>
                    <option value="6">36 Month</option>
                    <option value="7">60 Month</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select style={{ width: 150, padding: 5, borderRadius: 5 }}>
                    <option>Type of Loans</option>
                    <option value="1">Finanz Credit</option>
                    <option value="2">Car Credit</option>
                    <option value="3">Imobillien Credit</option>
                  </select>
                </div>
              </div>
              <p className="mt-3">You have to pay: $0</p>
              <a
                className="btn btn-primary mb-5 btn-lg"
                href="/"
                style={{ color: "#fff" }}
              >
                Calculate
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
