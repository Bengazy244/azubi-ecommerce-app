import React from "react";
import product_card from "./product_card";
import "../App.css";

function HomePage() {
  return (
    <div className="home-page">
      <input
        type="text"
        name="search"
        className="search"
        placeholder="Search products"
      />
      <div className="product-list">
        {product_card.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={process.env.PUBLIC_URL + product.thumb}
              alt={product.product_name}
            />
            <h2>{product.product_name}</h2>
            <p>{product.description}</p>
            <div className="product-price">
              <span className="currency">{product.currency}</span>
              <span className="price">{product.price}</span>
            </div>
            <button className="add-to-cart">Place order</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
