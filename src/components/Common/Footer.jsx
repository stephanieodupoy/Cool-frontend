import React, { useEffect, useState } from "react";
import footerlogo from "../../assets/img/Footer-logo.png";
export default function Footer({ price }) {
  let pageUrl = window.location.toString();
  const [showCheckoutButton, setShowCheckoutButton] = useState(true);
  const key = localStorage.getItem("LOGIN_USER_KEY");

  useEffect(() => {
    if (pageUrl.includes("cart")) {
      setShowCheckoutButton(false);
    }
  }, []);

  return (
    <>
      <div class="footer">
        <img class="footerimg" src={footerlogo} />
      </div>
      <div class="randommessage">
        <h5>
          Premium Quality shirts, T-shirts & casual wears at the best and most
          affordable price.
          <br />
          we have a new offer every day for 365 days
        </h5>
        <h4>Contacts</h4>
        <h6>
          <br />
          Sanket@coolTees.com | Hotline: +1 131 138 138
        </h6>
      </div>
    </>
  );
}
