import "./Assets/Styles/App.css";
// import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react/cjs/react.development";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Feedback from "./Components/Feedback";


function App() {
  return (
    <Fragment>
        <Header></Header>
        <Footer></Footer>
        <Feedback></Feedback>
    </Fragment>
  );
}

export default App;
