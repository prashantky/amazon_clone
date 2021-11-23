import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
//import { Carousel } from "bootstrap";
import CarouselHeader from "./carousel.js/Carousel";
import Footer from "./footer/Footer";
import Products from "./products/Products";
import Home from "./home/Home";
import { useStateValue } from "../StateProvider";
import { auth } from "../Firebase";
import ListData from "../data";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";


const Header = () => {
  const [ {user, basket} ] = useStateValue();
  const [search, setSearch] = useState("");
  
  const handleUser = () => {
    if (user) {
      auth.signOut();
    }
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
    
  };

  const dataSearch = ListData.filter((item) => {
    
   return item.title
     .toString()
      .toLowerCase()
      .includes(search.toString().toLowerCase());
 });
  


  return (
    <>
      <div className="WelcomeHeader-component">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <Link href="/">
                <img
                  className="header-logo"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="logo"
                />
              </Link>
            </Navbar.Brand>
            <div className="header-search">
              <input
                type="text"
                className="header-searchInput"
                onChange={handleSearch}
                value={search}
              />

              <SearchIcon className="header-searchIcon"  />
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <Nav>
                <Nav.Link href={!user && "/login"} onClick={handleUser}>
                  <div className="header-option">
                  <span className="header-optionLineOne">
                    Hello : {user?.email}
                  </span>
                  <span className="header-optionLineTwo">
                    {user ? "Sign out" : "Sign In"}
                  </span>
                  </div>
                </Nav.Link>
                <Nav.Link href="/returns">
                  {" "}
                  <div className="header-option">

                  <span className="header-optionLineOne">Returns</span>
                  <span className="header-optionLineTwo">& Orders</span>
                  </div>
                </Nav.Link>
                <Nav.Link href="/prime">
                <div className="header-option">

                  <span className="header-optionLineOne">Your Prime</span>
                  <span className="header-optionLineTwo">Prime</span></div>

                </Nav.Link>
                <Nav.Link href="/checkout">
                <div className="header-option">

                  
                  <span>{basket?.length}</span>
                  
                  </div>
                  <ShoppingBasketIcon />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Home dataSearch={ListData} />

      </div>
         </>
  );
};
export default Header;
