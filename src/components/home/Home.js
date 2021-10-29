import React from "react";
import Products from "../products/Products";
import "../home/Home.css";
const Home = () => {
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
        <div className="col-md-4 ">
          <Products 
          title="The react book"
          price={30.33}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          rating={5}
          id="123"

          />
        </div>
        <div className="col-md-4 ">
          <Products
          title="The react book"
          price={30.33}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          rating={5}
          id="1234"
 />
        </div>
        <div className="col-md-4 ">
          <Products title="The react book"
          price={30.33}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          rating={5}
          id="12345"
 />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 ">
          <Products title="The react book"
          price={30.33}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          rating={5}
          id="123456"
 />
        </div>
        <div className="col-md-4 ">
          <Products title="The react book"
          price={30.33}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          rating={5}
          id="1234567"
 />
        </div>
        <div className="col-md-4 ">
          <Products title="The react book"
          price={30.33}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          rating={5}
          id="12345678"
 />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 ">
          <Products title="The react book"
          price={30.33}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          rating={5}
          id="123456789"
 />
        </div>
        <div className="col-md-4">
          <Products title="The react book"
          price={30.33}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          rating={5}
          id="1234567899"
 />
        </div>
        <div className="col-md-4 ">
          <Products 
          title="The react book"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          rating={5}
          id="1234567898"
/>
        </div>
      </div>
    </div>
  );
};
export default Home;
