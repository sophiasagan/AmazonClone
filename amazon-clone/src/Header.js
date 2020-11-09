import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="headerContainer">
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"} className="header__link">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello,{" "}
                {user
                  ? user.email.substring(0, user.email.indexOf("@"))
                  : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="headerTwo">
        <div className="headerTwo__deliver">
          <LocationOnOutlinedIcon
            className="headerTwo__deliverIcon"
            fontSize="medium"
          />
          <div className="headerTwo__option">
            <span className="headerTwo__optionLineOne">Deliver to</span>
            <span className="headerTwo__optionLineTwo">Detroit, MI</span>
          </div>
        </div>
        <div className="headerTwo__items">
          <span className="headerTwo__item">Best Sellers</span>
          <span className="headerTwo__item">Prime Video</span>
          <span className="headerTwo__item">Customer Service</span>
          <span className="headerTwo__item">New Releases</span>
          <span className="headerTwo__item">Today's Deals</span>
          <span className="headerTwo__item">Gift Cards</span>
          <span className="headerTwo__item">Find a Gift</span>
          <span className="headerTwo__item">Registry</span>
          <span className="headerTwo__item">Sell</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
