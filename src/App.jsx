import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import About from "./Components/About";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ResetPassword from "./Components/ResetPassword";
import PaymentGateway from "./Components/PaymentGetWay";
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <>
        <Router>
        <div className="custom-container">
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route exact path="/about" element={<About />} /> */}
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/reset" element={<ResetPassword />} />
              <Route exact path="/payment" element={<PaymentGateway/>} />
            </Routes>
          </div>
          <Footer />
          </div>
        </Router>
      </>
    </Provider>
  );
}

export default App;
