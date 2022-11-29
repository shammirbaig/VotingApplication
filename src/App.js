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
  // const history = useHistory();
  // const { state, dispatch } = useContext(UserContext);
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     dispatch({ type: "USER", payload: user });
  //   }
  //   else {
  //     history.push("/login");
  //   }
  // }, []);
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/logout">
        <div>
          <Logout />
        </div>
      </Route>
      {/* <Route path="/login">
       <Login />
  </Route>*/}

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
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // <UserContext.Provider value={{ state, dispatch }}>
    <Router>
      <Routing />
    </Router>
    // </UserContext.Provider>
  );
}

export default App;
