import React from "react";
import FoodItem from "../FoodItem/FoodItem";
import { food_list } from "../../assets/assets";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  return (
    <div id="dishes" className="food-display">
      {food_list
        .filter(item => category === "All" || item.category === category) // ✅ filter by category
        .map(food => (
          <FoodItem
            key={food._id}
            _id={food._id}
            name={food.name}
            price={food.price}
            description={food.description}
            image={food.image}
          />
        ))}
    </div>
  );
};

export default FoodDisplay;
