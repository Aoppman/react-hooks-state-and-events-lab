import React, { useState } from "react";

function Item({ name, category }) {

const [inCart, isInCart] = useState("")

function handleCart() {
  isInCart((inCart) => !inCart);
}
const itemClass = inCart ? "in-cart" : ""
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
