import NavBar from "../components/NavBar";
import Reminder from "../components/Reminder";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PrivateRoute from "../components/PrivateRoute";

const HomePage = () => {
  return (
    <div >
      <NavBar />
      <Router>
        <Switch>
          <PrivateRoute exact path = "/" component = {Reminder} />
          <Route path = "/signup" component = {SignUp} />
          <Route path = "/login" component = {Login} />  
        </Switch>
      </Router>
    </div>
  );
}

export default HomePage;
