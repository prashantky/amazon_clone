import React from "react";
import Products from "../products/Products";
import "../home/Home.css";
import ListData from "../../data";
import { useContext } from "react";
import { StateContext } from "../../StateProvider";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const Home = ({ searchResponse }) => {
  //const data=useContext(StateContext)
  console.log("home searched filed", searchResponse);
  return (
    <div className="container">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="row ">
          {searchResponse?.map((item,key)=>{
           return (
            
            <div className="col-lg-4 " key={key.id}  style={{marginBottom:"10px"}}>
           <Products
            
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
            id={item.id}
  
            />
            
            </div>)
          })}
    
         </div>
        
    
    </div>
    
  );
};
export default Home;
