import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <nav className="header">
      {/* logo img */}
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg"
          className="header__logo"
          alt="logo"
        />
      </Link>

      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* link 1 */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello person</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* link 2 */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* link 3 */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      {/* basket icon with counter */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* icon */}
          <ShoppingBasketIcon />

          {/* counter */}
          <span className="header__optionLineTwo header__basketCounts">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
