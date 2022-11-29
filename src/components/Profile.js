import React from "react";
import { useState } from "react";

import Navbar from "./Navbar";
const Profile = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`The name you entered was:`);
    const url =
      "https://api.loginradius.com/identity/v2/manage/account/6c08f81ada664b1d8cd7c3a055a2a3bf?apikey=942c8cb8-c72a-4cdc-be4c-1d3ff24fd99e&apisecret=1a0a39e2-300a-43ae-84a9-eaa471b82b9a&nullsupport=";

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        FirstName,
        LastName,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const oldInfo = JSON.parse(localStorage.getItem("user"));
        localStorage.setItem(
          "user",
          JSON.stringify([...oldInfo, FirstName, LastName])
        );
      });
  };

  const userId = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user")).Uid
    : null;

  return (
    <div>
      {userId !== null ? <Navbar /> : null}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"100px"
        }}
      >
        <form onSubmit={handleSubmit}>
          <label>
            Enter your First name:
            <input
              type="text"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Enter your Last name:
            <input
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
