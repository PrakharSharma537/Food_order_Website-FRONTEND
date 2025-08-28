
import React from "react";
import { menu_list } from "../../assets/assets";
import "./Menu.css";

const Menu = ({ category, setcategory }) => {
  const handleClick = (item) => {
    setcategory(item.menu_name);

    // Scroll dishes section
    const dishSection = document.getElementById("dishes");
    if (dishSection) {
      dishSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menu" id="explore-menu">
      <h2>Explore Our Menu</h2>
      <p>Choose your dish from our delicious menu.</p>

      <div className="menu_list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => handleClick(item)}
            key={index}
            className="explore_list"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
