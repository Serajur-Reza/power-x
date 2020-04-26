import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Programs from './Component/Programs/Programs';
import Pricing from './Component/Pricing/Pricing';
import Class_Description from './Component/Class_Description/Class_Description';
import Membership1 from './Component/Membership/Membership1';
import Payment from './Component/Payment/Payment';

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>

          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>

          <Route path="/class">
            <Programs></Programs>
          </Route>

          <Route path="/class-description/:program">
            <Class_Description></Class_Description>
          </Route>

          <Route path="/membership/form/:plan">
            <Membership1></Membership1>
          </Route>

          {/* <Route path="/membership/payment">
            <Payment></Payment>
          </Route> */}

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </Router>

      
      <Footer></Footer>
    </div>
  );
}

export default App;
