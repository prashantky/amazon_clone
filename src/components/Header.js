import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
//import { Carousel } from "bootstrap";
import CarouselHeader from "./carousel.js/Carousel";
import Footer from "./footer/Footer";
import { Products } from "./products/Products";
import Home from "./home/Home"
import { useStateValue } from "../StateProvider";
import { auth } from "../Firebase";


 const Header = () => {
   const [{basket,user},dispatch]=useStateValue()
   const handleUser=()=>{
     if(user){
       auth.signOut();
     }
   }
  return (<>
    <nav className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"} className="header-link">
          <div className="header-option" onClick={handleUser}>
            <span className="header-optionLineOne">Hello: {user?.email}</span>
            <span className="header-optionLineTwo">{user?"Sign In":"Sign out"}</span>
          </div>
        </Link>
        <Link to="/returns" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/prime" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Your Prime</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      <Link to="/checkout" className="header-link">
        <div className="header-optionBasket">
          <ShoppingBasketIcon />
          <span>{basket?.length}</span>
        </div>
      </Link>
      
    </nav>
    <Home/>
    
    
    
    
  
    </>
  );
};
export default Header;