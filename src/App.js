import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
// import Login from "./components/Login";
import Logout from "./components/Logout";
import Result from "./components/Result";
import Home from "./components/Home";
import Profile from "./components/Profile";

// import { reducer, initialState } from "./reducers/userReducer";
// import NavBar from "./components/Navbar";

export const UserContext = createContext();

const Routing = () => {

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/logout">
        
          <Logout />
        
      </Route>
     
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/result">
        <Result />
      </Route>
    </Switch>
  );
};

function App() {
  
  return (
    
    <Router>
      <Routing />
    </Router>
    
  );
}

export default App;
