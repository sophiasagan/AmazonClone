import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <a href="#app">
          <div className="backToTop">Back to top</div>
        </a>
        <div className="footerMenu">
          <div className="footerMenu__column">
            <span className="footerMenu__title">Get to Know Us</span>
            <div className="footerMenu__items">
              <span className="footerMenu__item">Careers</span>
              <span className="footerMenu__item">Blog</span>
              <span className="footerMenu__item">About Amazon</span>
              <span className="footerMenu__item">Press Center</span>
              <span className="footerMenu__item">Investor Relations</span>
              <span className="footerMenu__item">Amazon Devices</span>
              <span className="footerMenu__item">Amazon Tours</span>
            </div>
          </div>
          <div className="footerMenu__column">
            <span className="footerMenu__title">Make Money with Us</span>
            <div className="footerMenu__items">
              <span className="footerMenu__item">Sell products on Amazon</span>
              <span className="footerMenu__item">Sell apps on Amazon</span>
              <span className="footerMenu__item">Become an Affiliate</span>
              <span className="footerMenu__item">Advertise Your Products</span>
              <span className="footerMenu__item">Self-Publish with Us</span>
              <span className="footerMenu__item">Host an Amazon Hub</span>
            </div>
          </div>
          <div className="footerMenu__column">
            <span className="footerMenu__title">Amazon Payment Products</span>
            <div className="footerMenu__items">
              <span className="footerMenu__item">
                Amazon Rewards Visa Signature Cards
              </span>
              <span className="footerMenu__item">Amazon.com Store Card</span>
              <span className="footerMenu__item">Amazon Business Card</span>
              <span className="footerMenu__item">
                Amazon Business Line of Credit
              </span>
              <span className="footerMenu__item">Shop with Points</span>
              <span className="footerMenu__item">Credit Card Marketplace</span>
              <span className="footerMenu__item">Reload Your Balance</span>
              <span className="footerMenu__item">
                Amazon Currency Converter
              </span>
            </div>
          </div>
          <div className="footerMenu__column">
            <span className="footerMenu__title">Let Us Help You</span>
            <div className="footerMenu__items">
              <span className="footerMenu__item">Your Account</span>
              <span className="footerMenu__item">Your Orders</span>
              <span className="footerMenu__item">
                Shipping Rates & Policies
              </span>
              <span className="footerMenu__item">Amazon Prime</span>
              <span className="footerMenu__item">Returns & Replacements</span>
              <span className="footerMenu__item">
                Manage Your Content and Devices
              </span>
              <span className="footerMenu__item">Amazon Assistant</span>
              <span className="footerMenu__item">Help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
