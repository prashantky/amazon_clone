import React, { useState ,useEffect} from "react";
//import { Link } from "react-router-dom";
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
import { Link } from "react-router-dom";
import { Counter } from "./counter/Counter";
import Pagination from "./pagination/Pagination"
const Header = () => {
  const [{ user, basket }] = useStateValue();
  const [{dataPagination,selectedProducts},dispatch]=useStateValue();
  const [searchResponse,setSearchResponse]=useState([])
//console.log("header page selectedProducts",selectedProducts)
  const [search, setSearch] = useState("");

  const handleUser = () => {
    if (user) {
      auth.signOut();
    }
  };
  const handleSearch = (text) => {
    const searchArray=selectedProducts.filter((item)=>
      item.title.toLowerCase().includes(text)
    )
    console.log("search Array >>>.....................",searchArray)
    setSearchResponse(searchArray)
    
    
  };
  useEffect(() => {
    console.log("search data from searcharray",searchResponse)
  

   }, [searchResponse])
   useEffect(() => {
    
  setSearchResponse(selectedProducts)

   }, [selectedProducts])

     useEffect(() => {
      console.log("header page selectedProducts",selectedProducts)

     }, [selectedProducts])
  const dataSearch = ListData.filter((item) => {
    return item?.title.toLowerCase().indexOf(search.toLowerCase())>-1;
  });
console.log("header-search",dataSearch)
  return (
    <>
      <div className="WelcomeHeader-component">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >
              <Link  to="/">
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
                onChange={(e)=>handleSearch(e.target.value)}
                
              />

              <SearchIcon className="header-searchIcon" />
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <Nav>
                <Link to={!user && "/login"} onClick={handleUser}>
                  <div className="header-option">
                    <span className="header-optionLineOneEmail">
                      Hello : {user?.email}
                    </span>
                    <span className="header-optionLineTwo">
                      {user ? "Sign out" : "Sign In"}
                    </span>
                  </div>
                </Link>
                <Link to="/returns">
                  {" "}
                  <div className="header-option">
                    <span className="header-optionLineOne">Returns</span>
                    <span className="header-optionLineTwo">& Orders</span>
                  </div>
                </Link>
                <Link to="/youtube/video">
                  <div className="header-option">
                    <span className="header-optionLineOne">Your Prime</span>
                    <span className="header-optionLineTwo">Video</span>
                  </div>
                </Link>
                <Link to="/checkout">
                  <div className="header-option">
                    <span>{basket?.length}</span>
                  </div>
                  <ShoppingBasketIcon />
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Home searchResponse={searchResponse} />
        <Pagination dataSearch={ListData}/>
      </div>
    </>
  );
};
export default Header;
