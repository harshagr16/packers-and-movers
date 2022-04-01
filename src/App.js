import "./Assets/Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.development";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


import AOS from 'aos';  // You can also use <link> for styles when net off
import 'aos/dist/aos.css'; // You can also use <link> for styles when net off
AOS.init();   // You can also use <link> for styles when net off

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Fragment>
  );
}

export default App;
