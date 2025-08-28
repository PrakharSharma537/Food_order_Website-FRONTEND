import React, { useContext } from 'react'
import "./FoodItem.css"
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ _id, name, price, description, image }) => {
  const { cartItems, addtoCart, remove } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />

        {/* + Qty - controls */}
        <div className="vertical-controls">
          <button className="cart-btn" onClick={() => addtoCart(_id)}>+</button>
          {cartItems[_id] > 0 && (
            <>
              <p className="itemcount">{cartItems[_id]}</p>
              <button className="cart-btn remove" onClick={() => remove(_id)}>-</button>
            </>
          )}
        </div>
      </div>

      <div className="food-rating">
        <p>{name}</p>
      </div>
      <p className="food-item-descr">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default FoodItem;
