import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
// import 'bootstrap/dist/css/bootstrap.min.css';
export const Header = () => {
    const [btnName,setBtnName]=useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <button className="login" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
