import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349266_.jpg"
          alt="banner"
        />
        <div className="checkout__title">
          <h4>Hey,</h4>
          <p className="checkout__user">{!user ? "Guest" : user?.email}</p>

          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>
                You have no items in your basket.To buy one or more items, click
                "Add to Basket" next to the item.
              </p>
            </div>
          ) : (
            <>
              <div className="checkout__title">
                <h2>Your Shopping Basket</h2>
              </div>
              <FlipMove>
                {basket.map((item) => (
                  <div key={item?.index}>
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  </div>
                ))}
              </FlipMove>
            </>
          )}

          {/* Basket Item  */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
