import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
      </div>
      <div className="home__row">
        <Product
          id="11111"
          title="The subtle art of not giving a F*ck"
          price={19.99}
          rating={5}
          image="https://www.okdam.com/public/images/upload/product/the-subtle-art-of-not-giving-a-fuck-01.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="22222"
          title="AmazonBasics Steel, Security Safe Lock Box, Black - 0.5 Cubic Feet"
          price={123.5}
          rating={4}
          image="https://m.media-amazon.com/images/I/718l03qCcJL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="33333"
          title="LBell Night Light Projector 3 in 1 Galaxy Projector Star Projector w/LED Nebula Cloud "
          price={38.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81IjzxIcTXL._AC_SL1500_.jpg"
        />
        <Product
          id="44444"
          title="The Palmer’s Cocoa Butter Formula range"
          price={16.99}
          rating={3}
          image="https://tbsnews.net/sites/default/files/styles/big_2/public/images/2019/12/02/palmer_cream.jpg?itok=FYzI3Zf4&timestamp=1575271030"
        />
        <Product
          id="55555"
          title="Palmer's Coconut Oil Body Lotion 500ml "
          price={14.99}
          rating={4}
          image="https://cdn.shopify.com/s/files/1/1488/4756/products/Palmer_s_Coconut_Oil_Body_Lotion_500ml_front_2048x.jpg?v=1563568686"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="66666"
          title="Recess Sparkling Water Infused with Hemp"
          price={129.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/21y6nq4e49L.jpg"
        />
        <Product
          id="77777"
          title="Samsung Galaxy S20"
          price={1256.99}
          rating={5}
          image="https://cdn.cnn.com/cnnnext/dam/assets/200303140851-1-underscored-samsung-galaxy-s20-ultra-review-live-video.jpg"
        />
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
