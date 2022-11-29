import React from "react";
import config from "../config";
const LandingPage = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div>
      <h1> React Demo App </h1>

      <a
        href={`https://${config.APP_NAME}.hub.loginradius.com/auth.aspx?action=register&return_url=${window.location.origin}/home`}
      >
        <button style={{padding:"10px",marginRight:"20px"}}>Register</button>
      </a>

      <a 
        href={`https://${config.APP_NAME}.hub.loginradius.com/auth.aspx?action=login&return_url=${window.location.origin}/home`}
      >
        <button style={{padding:"10px",marginLeft:"20px"}}>Login</button>
      </a>
    </div>
    </div>
  );
};
export default LandingPage;
