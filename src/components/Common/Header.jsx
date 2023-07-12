import React, { useEffect, useState } from "react";
import logout from "../../assets/img/logout.png";
import { signOut } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import logo from "../../assets/img/logo.png";
import cartimg from "../../assets/img/cartimg.png";
import signinimg from "../../assets/img/signinimg.png";
import search from "../../assets/img/searchbar.png";
import { useNavigate } from "react-router";
export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);
  const navigate = useNavigate()

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/signin"));
  };
  const cartbutton = () => {
    dispatch(push("/cart"));
  };
  const signin = () => {
    navigate('signin')
  };
  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <div class="navgation">
      <div class="logo">
        <img src={logo} alt="" />
      </div>
      <div class="navelements">
        {checkUser && <img class="cart" onClick={cartbutton} src={cartimg} />}
        {checkUser ? (
          <img class="logoutimg" onClick={signOutButton} src={logout}></img>
        ) : (
          <img class="cart" onClick={signin} src={signinimg} />
        )}
      </div>
    </div>
  );
}
