import React from "react";

const Footer = () => {
  return (
    <div className="width: 1601px height: 789px;">
      <div>
        <div className="flex bg-[#1d2567aa] justify-center items-center pt-44">
          <img className="w-18 h-24" src="https://i.ibb.co.com/DWpDx4g/logo-footer.png" alt="" />
        </div>
        <footer className="footer bg-[#1d2567aa] text-white p-10 border-b-2 ">
          <nav>
            <h6 className="footer-title">About Us</h6>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </nav>
          <form>
            <h6 className="footer-title">Subscribe</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="email....."
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
        <footer className="footer footer-center  bg-[#1d2567aa] text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - @2024 Your Company All Rights Reserved.
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
