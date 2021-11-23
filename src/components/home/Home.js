import React from "react";
import Products from "../products/Products";
import "../home/Home.css";
import  ListData from "../../data"

const Home = ({dataSearch}) => {
  console.log("data seacrched",dataSearch)
  return (
    <div className="container">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="row h-50">
          {dataSearch?.map((item,key)=>{
           return (
            
            <div className="col-md-4 ">
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
