import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./header/Header";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from "./about/About";
import Loans from "./loans/Loans";
import Login from "./login/Login";
import Register from "./register/Register";
import User from "./user/User";
import Logout from "./logout/Logout";
import Deposit from "./deposit/Deposit";
import Withdraw from "./withdraw/Withdraw";
import AddRecipient from "./transfer/AddRecipient";
import Transfer from "./transfer/Transfer";
import Admin from "./admin/Admin";
import UserMgmt from "./admin/UserMgmt";
import Product from "./product/Product";
import Price from "./price/Price";
import Contact from "./contact/Contact";
import MyLocation from "./location/MyLocation";
import Advantage from "./advantage/Advantage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/loans" component={Loans} />
          <Route path="/product" component={Product} />
          <Route path="/price" component={Price} />
          <Route path="/advantage" component={Advantage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user" component={User} />
          <Route path="/admin" component={Admin} />
          <Route path="/userMgmt" component={UserMgmt} />
          <Route path="/logout" component={Logout} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/recipient" component={AddRecipient} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/contact" component={Contact} />
          <Route path="/mylocation" component={MyLocation} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
