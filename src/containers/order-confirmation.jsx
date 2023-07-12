import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
// import { getUser } from "../reducks/users/selectors";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  // const selector = useSelector((state) => state);
  const user = JSON.parse(localStorage.getItem("LOGIN_USER_KEY"));
  const hombutton = () => {
    dispatch(push("/"));
  };
  useEffect(() => {
    console.log();
  }, []);
  return (
    <>
      <div class="thanks">
        <h1>Thank you for Ordering</h1>
      </div>
      <h6 class="thankyoumessage">
        Thank you for ordering <span class="color">{user.user_name}</span>. We
        received your request. <br />
        Our staff will be contacting with you to tell next steps.
      </h6>
      <div class="backtohome">
        <button class="thankyoubtn" onClick={hombutton} type="submit">
          Back To Home
        </button>
      </div>
    </>
  );
};

export default OrderConfirmation;
