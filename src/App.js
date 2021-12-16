import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Checkout2 from "./components/checkout/Checkout2";

import Login from "./components/login/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Payment from "./components/payment/Payment"
import { Youtube } from "./components/youtube/Youtube";
import ProductDetails from "./components/productDetails/ProductDetails";
import { useParams } from "react-router-dom";
const App = () => {
let {id}=useParams()
  const [{basket,user}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is .........>>>>>", authUser);
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Header} exact />
          <Route path="/checkout"  component={Checkout} exact />
          <Route path="/checkout2"  component={Checkout2} exact />

          <Route path="/login" component={Login} exact />
          <Route path="/payment" component={Payment} exact />
          <Route path="/youtube/video" component={Youtube} exact />
          <Route path={`/details/${id}`}component={ProductDetails} exact />


        </Switch>
      </Router>
    </div>
  );
};

export default App;
