import React from 'react'
import "./Header.css"
import headerImg from "../../assets/header_img.png";  

const Header = () => {
  const handleViewMenu = () => {
    const menuSection = document.getElementById("explore-menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="header" 
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="heading">
        <h2>Order Your Food Here</h2>
        <p id="para">
          Choose the best food for you and order with great discounts and enjoy
        </p>
        <button className="Viewmenu" onClick={handleViewMenu}>
          View Menu
        </button>
      </div>
    </div>
  )
}

export default Header
