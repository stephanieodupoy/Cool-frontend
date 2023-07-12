import React from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Cart from "./containers/Cart";
import Home from "./containers/Home";
import Shipping from "./containers/Shipping";
import Signin from "./containers/Signin";
import SignUp from "./containers/SignUp";
import OrderConfirmation from "./containers/order-confirmation";

// const Router = () => {
//   return (
//     <>
//       <Switch>
//         <Route exact path={"/"} component={Home} />
//         <Route exact path={"/signup"} component={SignUp} />
//         <Route exact path={"/signin"} component={Signin} />
//         <Route exact path={"/cart"} component={Cart} />
//         <Route exact path={"/shipping"} component={Shipping} />
//         <Route
//           exact
//           path={"/order-confirmation"}
//           component={OrderConfirmation}
//         />
//       </Switch>
//     </>
//   );
// };
// export default Router;

function App() {
    return (
        <div className="App">
        <Router>   
          <Routes>
          <Route path = "/"  element = {<Home/>} />
          <Route path={"/signup"} element = {<SignUp />} />
          <Route path={"/signin"} element = {<Signin />} />
          <Route path={"/cart"} element = {<Cart></Cart>} />
          <Route path={"/shipping"} element = {<Shipping></Shipping>} />
          <Route
           path={"/order-confirmation"}
           element={<OrderConfirmation/>}
         />
          </Routes>
        </Router>
        </div>
    );
  }
  
  export default App;