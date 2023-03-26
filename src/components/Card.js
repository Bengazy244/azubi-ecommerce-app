import React from "react";
import product_card from "../components/data";

const Card = () => {
  console.log(product_card);

  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt={item.thumb} />
      </div>
      <div className="card_hearder">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <div className="btn">Place order</div>
        <p className="currency">
          <span>{item.currency}</span>
          {item.price}
        </p>
      </div>
    </div>
  ));
  return <div className="card">{listItems}</div>;
};

export default Card;
