import React, { useState } from "react";
import backgroundimage from "../../assets/img/background.png";
import cartimg from "../../assets/img/cartimg.png";

const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      <section className="main">
        <img src={backgroundimage} style={{ width: "100%" }} />
        <h1 className="starttext">
          Cool T-Shirts for <br />
          Men & Women
        </h1>
      </section>
      {checkUser && (
        <div class="cartpic">
          <a href="/cart">
            {" "}
            <img class="cartt " src={cartimg} alt="this is a cart" />{" "}
          </a>
        </div>
      )}
    </>
  );
};

export default MainImage;
